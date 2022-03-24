/* eslint-env jest */

const nunjucks = require('nunjucks')

const utils = require('./utils.js')

describe('checked', () => {
  var ctx, checked

  beforeAll(() => {
    var env = new nunjucks.Environment()
    utils.addCheckedFunction(env)
    ctx = { data: {} }
    checked = env.getGlobal('checked').bind({ ctx })
  })

  it('can be added as global function to a nunjucks env', () => {
    var env = new nunjucks.Environment()
    utils.addCheckedFunction(env)
    expect(env.getGlobal('checked')).toBeDefined()
  })

  it('returns a string', () => {
    expect(checked('foo', 'bar')).toBe('')
  })

  it('returns checked if data has specified value', () => {
    ctx.data.foo = 'bar'
    expect(checked('foo', 'bar')).toBe('checked')
  })

  it('returns empty string if data does not has specified value', () => {
    ctx.data.foo = 'baz'
    expect(checked('foo', 'bar')).toBe('')
  })

  it('allows deep access into objects', () => {
    ctx.data.foo = 'bar'
    expect(checked('foo', 'bar')).toBe('checked')
    ctx.data.foo = { bar: 'baz' }
    expect(checked("['foo']['bar']", 'baz')).toBe('checked')
  })

  it('allows deep access using dot notation (undocumented)', () => {
    ctx.data.foo = { bar: 'baz' }
    expect(checked('foo.bar', 'baz')).toBe('checked')
  })
})

describe('getRenderOptions', () => {
  it('uses front matter to generate title', () => {
    const md = '---\n' +
      'title: Share usage data\n' +
      '---\n' +
      '# This is a header'

    const received = utils.getRenderOptions(md)

    expect(received).toHaveProperty('title')
    expect(received.title).toEqual('Share usage data')
  })

  it('throws an error if front matter title is not present', () => {
    const md = '# This is a header'

    const expectedError = new Error('docs/documentation/this-is-a-header.md does not have a title in its frontmatter')

    expect(() => {
      utils.getRenderOptions(md, 'docs/documentation/this-is-a-header.md')
    }).toThrow(expectedError)
  })
})

const os = require('os')
const path = require('path')

// NPM dependencies
const csvStringify = require('csv-stringify/lib/sync')

// Local dependencies
const utils = require('./utils.js')

// helpers

function createDataFilesJson (dirPath, fileContents) {
  for (const fileJSONKey in fileContents) {
    const filePath = path.join(dirPath, `${fileJSONKey}.json`)
    const fileJSON = JSON.stringify(fileContents[fileJSONKey])
    fs.writeFileSync(filePath, fileJSON)
  }
}

function createDataFilesCSV (dirPath, fileContents) {
  for (const fileCSVKey in fileContents) {
    const filePath = path.join(dirPath, `${fileCSVKey}.csv`)
    const fileCSV = csvStringify(fileContents[fileCSVKey], { header: true })
    fs.writeFileSync(filePath, fileCSV)
  }
}

// test utils.dataFilesToSessionData

describe('utils.dataFilesToSessionData', () => {

  // FIXTURES
  beforeEach(() => {
    /*
    Setup mock request and response objects, a mock next function
    (required for express middlware API: https://expressjs.com/en/guide/writing-middleware.html)
    and a testDir
    */
    mockRequest = { session: {} }
    mockResponse = { locals: {} }
    mockNext = () => {}
    testDir = fs.mkdtempSync(path.join(os.tmpdir(), 'test-'))
  })

  afterEach(() => {
    // remove testDir
    fs.rmSync(testDir, { recursive: true, force: true })
  })

  // TESTS

  const dataFilesJSON = {
    JSONdf1: {
      this: 'that',
      the: 2,
      other: 50
    },
    JSONdf2: { the: 1 },
    JSONdf3: { other: 2 }
  }

  test('returns obj with JSON data file contents', () => {
    // GIVEN beforeEach has setup mocks and testDir
    // AND we have seeded JSON data files into testDir
    createDataFilesJson(testDir, dataFilesJSON)

    // WHEN we get the middleware function, configured to scan testDir, and call it with our mock objects
    const dataFilesToSessionData = utils.dataFilesToSessionDataFactory({ dirToScan: testDir })
    dataFilesToSessionData(mockRequest, mockResponse, mockNext)

    // THEN we expect the mockResponse object to contain the expected JSON data in its locals.data subobject
    expect(mockResponse.locals.data).toMatchObject(dataFilesJSON)
  })

  const dataFilesCSVNoKey = {
    CSVNoKeydf1: [
      { this: 1, that: 'hmmm' },
      { this: 'ahhh', that: 2 }
    ],
    CSVNoKeydf2: [
      { this: 1, that: 'oooohhh' },
      { this: 'huh?', that: 2 }
    ]
  }

  test('returns obj with un-keyed CSV data file contents as array', () => {
    // GIVEN beforeEach has setup mocks and testDir
    // AND we have seeded unkeyed CSV data files into testDir
    createDataFilesCSV(testDir, dataFilesCSVNoKey)

    // WHEN we get the middleware function, configured to scan testDir, and call it with our mock objects
    const dataFilesToSessionData = utils.dataFilesToSessionDataFactory({ dirToScan: testDir })
    dataFilesToSessionData(mockRequest, mockResponse, mockNext)

    // THEN we expect the mockResponse object to contain the expected unkeyed CSV data in its locals.data subobject
    expect(mockResponse.locals.data).toMatchObject(dataFilesCSVNoKey)
  })

  const dataFilesCSVKeyAsInputInFile = {
    CSVKeydf1: [
      { KEY_this: 'first_key', that: 'hmmm', the: 2, other: 'five' },
      { KEY_this: 'second_key', that: 2, the: 'whaaaaat', other: 5 }
    ],
    CSVKeydf2: [
      { KEY_this: 'first_key', that: 'hmmm?', the: 2, other: 'five' },
      { KEY_this: 'second_key', that: 2, the: 'oh ok', other: 5 }
    ]
  }
  const dataFilesCSVKeyAsExpectedInSession = {
    CSVKeydf1: {
      first_key: { that: 'hmmm', the: 2, other: 'five' },
      second_key: { that: 2, the: 'whaaaaat', other: 5 }
    },
    CSVKeydf2: {
      first_key: { that: 'hmmm?', the: 2, other: 'five' },
      second_key: { that: 2, the: 'oh ok', other: 5 }
    }
  }

  test('returns obj with keyed CSV data file as object with expected keys', () => {
    // GIVEN beforeEach has setup mocks and testDir
    // AND we have seeded keyed CSV data files into testDir
    createDataFilesCSV(testDir, dataFilesCSVKeyAsInputInFile)

    // WHEN we get the middleware function, configured to scan testDir, and call it with our mock objects
    const dataFilesToSessionData = utils.dataFilesToSessionDataFactory({ dirToScan: testDir })
    dataFilesToSessionData(mockRequest, mockResponse, mockNext)

    // THEN we expect the mockResponse object to contain the expected CSV data, transformed so that rows are objects
    // keyed with the column marked with KEY_, in its locals.data subobject
    expect(mockResponse.locals.data).toMatchObject(dataFilesCSVKeyAsExpectedInSession)
  })

  test('handles JSON, unkeyed and keyed CSV at the same time', () => {
    // GIVEN beforeEach has setup mocks and testDir
    // AND we have seeded JSON data files into testDir
    createDataFilesJson(testDir, dataFilesJSON)

    // AND we have seeded unkeyed CSV data files into testDir
    createDataFilesCSV(testDir, dataFilesCSVNoKey)

    // AND we have seeded keyed CSV data files into testDir
    createDataFilesCSV(testDir, dataFilesCSVKeyAsInputInFile)

    // WHEN we get the middleware function, configured to scan testDir, and call it with our mock objects
    const dataFilesToSessionData = utils.dataFilesToSessionDataFactory({ dirToScan: testDir })
    dataFilesToSessionData(mockRequest, mockResponse, mockNext)

    // THEN we expect the mockResponse object to contain all the expected JSON and CSV file data
    expect(mockResponse.locals.data).toMatchObject(dataFilesJSON)
    expect(mockResponse.locals.data).toMatchObject(dataFilesCSVNoKey)
    expect(mockResponse.locals.data).toMatchObject(dataFilesCSVKeyAsExpectedInSession)
  })

  test('throws error if keyed CSV data is submitted with multiple KEY_ columns', () => {
    // GIVEN beforeEach has setup mocks and testDir
    // AND we have seeded keyed CSV data files with multiple KEY_ columns (BAD) into testDir
    const dataFileCSVKeyMultipleKeysBad = {
      CSVKeydf1: [
        { KEY_this: 'first_key', KEY_that: 'hmmm', the: 2, other: 'five' },
        { KEY_this: 'second_key', KEY_that: 2, the: 'whaaaaat', other: 5 }
      ]
    }
    createDataFilesCSV(testDir, dataFileCSVKeyMultipleKeysBad)

    // WHEN we get the middleware function, configured to scan testDir, and call it with our mock objects
    const dataFilesToSessionData = utils.dataFilesToSessionDataFactory({ dirToScan: testDir })
    // THEN we expect it to throw an error
    expect(() => {
      dataFilesToSessionData(mockRequest, mockResponse, mockNext)
    }).toThrow()
  })

  test('throws error if keyed CSV data is has non-unique values for KEY_ column', () => {
    // GIVEN beforeEach has setup mocks and testDir
    // AND we have seeded keyed CSV data files with non-unique KEY_ column values (BAD) into testDir
    const dataFileCSVKeyNonUniqueKeysBad = {
      CSVKeydf1: [
        { KEY_this: 'first_key', that: 'hmmm', the: 2, other: 'five' },
        { KEY_this: 'first_key', that: 2, the: 'whaaaaat', other: 5 }
      ]
    }
    createDataFilesCSV(testDir, dataFileCSVKeyNonUniqueKeysBad)

    // WHEN we get the middleware function, configured to scan testDir, and call it with our mock objects
    const dataFilesToSessionData = utils.dataFilesToSessionDataFactory({ dirToScan: testDir })
    // THEN we expect it to throw an error
    expect(() => {
      dataFilesToSessionData(mockRequest, mockResponse, mockNext)
    }).toThrow()
  })

  test('overwrites session data with latest from file when configured for live reload', () => {
    // GIVEN beforeEach has setup mocks and testDir
    // AND we have seeded JSON data files into testDir
    const dataFileJSON1 = {
      JSONdf1: {
        this: 1,
        that: 2
      }
    }
    createDataFilesJson(testDir, dataFileJSON1)

    // WHEN we get the middleware function, configured to scan testDir and prioritise file data over session data,
    // and call it with our mock objects
    const dataFilesToSessionData = utils.dataFilesToSessionDataFactory({ dirToScan: testDir, prioritiseFileData: true })
    dataFilesToSessionData(mockRequest, mockResponse, mockNext)

    // THEN we expect the mockResponse object to contain dataFileJSON_1 in its locals.data subobject
    expect(mockResponse.locals.data).toMatchObject(dataFileJSON1)

    // AND WHEN we overwrite the original JSON file with one on the same filepath but with different data
    const dataFileJSON2 = {
      JSONdf1: {
        the: 3,
        other: 4
      }
    }
    createDataFilesJson(testDir, dataFileJSON2)

    // AND call the middleware function again, with our mock objects and the testDir path
    dataFilesToSessionData(mockRequest, mockResponse, mockNext)

    // THEN we expect the mockResponse object to NOT contain dataFileJSON_1 in its locals.data subobject
    expect(mockResponse.locals.data).not.toMatchObject(dataFileJSON1)

    // AND we expect the mockResponse object to contain the dataFileJSON_2 in its locals.data subobject
    expect(mockResponse.locals.data).toMatchObject(dataFileJSON2)
  })
})
