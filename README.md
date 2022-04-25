# Autodeployment has been enabled
# Loading session data from data files

Some prototypes require complex data to demonstrate their proposed features. To make this easier to handle, data can
be loaded from either **.csv** or **.json** files into the session `data` object, which can be accessed in nunjucks templates
using the `{{ data }}` command.

To load data from files, simply place them into the directory `app/data/data-files`, and make sure that the
`useDataFilesToSessionData` flag of `app/config.js` is set to `'true'`. Data loaded from file will be stored in the
`data` object under the filename (minus extension). For example, data from a file called **myFile.json** would be loaded
under `data['myFile']`.

See below for expected file structure for data files. There are also three example files included in
`app/data/data-files`. To see how these files are loaded, start the app with `npm start` and then navigate to
`/view-session-data`. This admin page shows all data currently found in the session `data` object.

## How file structure is loaded into the data object

### JSON

The structure of data loaded from **.json** files will match that found in the file.
e.g the file **myFile.json**, with the following structure:
```
{
  "object1": { "stringProperty": "object1", "integerProperty": 1, "floatProperty": 1.5 },
  "object2": { "stringProperty": "object2", "integerProperty": 2, "floatProperty": 2.6 },
  "object3": { "stringProperty": "object3", "integerProperty": 3, "floatProperty": 3.7 }
}
```
Would be loaded as follows:
```
data: {
  myFile: {
    object1: { stringProperty: "object1", integerProperty: 1, floatProperty: 1.5 },
    object2: { stringProperty: "object2", integerProperty: 2, floatProperty: 2.6 },
    object3: { stringProperty: "object3", integerProperty: 3, floatProperty: 3.7 }
  }
}
```
To access the `stringProperty` value of `object1` loaded from **myFile** would you use
`{{ data['myFile']['object1']['stringProperty] }}`.

### CSV (default)

The structure of data loaded from **.csv** files will by default be an array of objects, with each object representing
a row in the csv file
e.g the file **myFile.csv**, with the following structure:
```
stringProperty,integerProperty,floatProperty
"object1",1,1.5
"object2",2,2.6
"object3",3,3.7
```
Would be loaded as follows:
```
data: {
  myFile: [
    { stringProperty: "object1", integerProperty: 1, floatProperty: 1.5 },
    { stringProperty: "object2", integerProperty: 2, floatProperty: 2.6 },
    { stringProperty: "object3", integerProperty: 3, floatProperty: 3.7 }
  ]
}
```
To access the `stringProperty` value of the first object in the array loaded from **myFile** would you use a numerical
index:`{{ data['myFile'][0]['stringProperty] }}`. NB numerical indices start at 0!

### CSV ('keyed')

Having to use numerical indices to retrieve session data for a specific entity is not always useful - for instance if
you have a UID for the entity in each row, it would be easier to look them up with `{{ data['myUID'] }}` than have to
know or find the entry in the array in which **UID == myUID**. To get around this issue, you can designate one column
of your **.csv** file to be used as key, by prefixing the column name with `KEY_`. This will result in the data being
stored as an indexable object, rather than an array.
e.g the file **myFile.csv**, with the following structure:
```
KEY_stringProperty,integerProperty,floatProperty
"object1",1,1.5
"object2",2,2.6
"object3",3,3.7
```
Would be loaded as follows:
```
data: {
  myFile: {
    object1: { integerProperty: 1, floatProperty: 1.5},
    object2: { integerProperty: 2, floatProperty: 2.6},
    object3: { integerProperty: 3, floatProperty: 3.7}
  }
}
```
To access the `integerProperty` value of the first object in the array loaded from **myFile** would you use
`{{ data['myFile']['object1']['integerProperty] }}`.

**NB: You can only have one KEY_ column per .csv file! More than one (e.g below) will throw an error and crash the app.**
```
KEY_stringProperty,KEY_integerProperty,floatProperty
"object1",1,1.5
"object2",2,2.6
"object3",3,3.7
```
**NB: Values for the KEY_ column must be unique! Repeated values (e.g below) will throw an error and crash the app.**
```
KEY_stringProperty,KEY_integerProperty,floatProperty
"object1",1,1.5
"object1",2,2.6
"object3",3,3.7
```

## Configuration options

Loading of session data from files is controlled by two flags in `app/config.js`, `useDataFilesToSessionData`
and `dataFilesToSessionDataLiveReload`:
```
 // Load data from csv or json files in app/data/data-files to session data
  useDataFilesToSessionData: 'true',

  // enable live reload (on page load) of data from data files (only matters if useDataFilesToSessionData = 'true')
  // NB - this will overwrite any changes made by user (via forms etc) to session data loaded from files
  dataFilesToSessionDataLiveReload: 'true',
```

Data will be loaded from files in `app/data/data-files/` only if `useDataFilesToSessionData` is set `'true'`. Any other
value will disable the feature.

If `dataFilesToSessionDataLiveReload` is set to `'true'` (and the data loading feature itself is enabled with
`useDataFilesToSessionData = 'true'`), then data will be reloaded from file with every page load. This is useful if you
wish to debug or otherwise fiddle with the session data for development.

However, it will also overwrite any changes that the user has made (via forms etc) to the data originally loaded from
file - e.g. if there is a form that modifies the value `data['myFile']['myProperty']`, this change will be lost on page
load, as the value found in **myFile** will be written over it. This means this option may be less useful when
demonstrating prototypes to clients.

## Where is the code that does this?

The code for this feature is found in `lib/utils.js` in the section starting with the comment,
`// Middleware - load data from data-files to session, and pass it to all views`. The main function is
`dataFilesToSessionData`, which is exported as
[express middleware](https://expressjs.com/en/guide/writing-middleware.html) via the factory function
`dataFilesToSessionDataFactory`.

Tests for this code are written user the JavaScript [jest](https://jestjs.io/) testing framework, and are found in the
`describe` block for `utils.dataFilesToSessionData` in `lib/utils.test.js`. To run these tests directly (assuming
standard project structure), run `./node_modules/.bin/jest lib/utils.test.js` from the project root.

## Why isn't my data showing up on the page?! Gotchas and common issues.

- Have you spelled the name of the file and the properties you're accessing correctly when calling `{{ data }}`? Double
check the property names in `/view-session-data` to make sure you haven't made a typo, in nunjucks or in the file
itself.

- Have you changed a file while the server is running, but not set `dataFilesToSessionDataLiveReload` to `'true'` in
`app/config.js`?

*(Please add more issues and solutions as they are found!)*

