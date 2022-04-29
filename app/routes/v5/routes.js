module.exports = function (router) {
  const version = 'V5-0'

  // Add your routes here - above the module.exports line

  // ' + version + ' routes //

  // Search ULN - set showBanner to no to stop banner showing continuously
  router.post('/' + version + '/AO/assessments/search-learner-assessments', function (req, res) {
    req.session.data.showBannerAssessments = 'no'
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  })

  // Assessment Entries - add core entry

  router.post('/' + version + '/AO/assessments/add-core-entry', function (req, res) {
    const coreAssessmentEntry = req.session.data['add-core-entry']

    if (coreAssessmentEntry === 'yes') {
      req.session.data['core-assessment-entry-added'] = 'yes'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'core-added'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // Assessment Entries - add specialism entry

  router.post('/' + version + '/AO/assessments/add-specialism-entry', function (req, res) {
    const specialismAssessmentEntry = req.session.data['add-specialism-entry']

    if (specialismAssessmentEntry === 'yes') {
      req.session.data['specialism-assessment-entry-added'] = 'yes'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'specialism-added'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // Assessment Entries - remove core entry

  router.post('/' + version + '/AO/assessments/remove-core-entry', function (req, res) {
    const coreAssessmentEntry = req.session.data['remove-core-entry']

    if (coreAssessmentEntry === 'yes') {
      req.session.data['core-assessment-entry-added'] = 'removed'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'core-removed'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      req.session.data.showBannerAssessments = 'no'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // Assessment Entries - remove specialism entry

  router.post('/' + version + '/AO/assessments/remove-specialism-entry', function (req, res) {
    const specialismAssessmentEntry = req.session.data['remove-specialism-entry']

    if (specialismAssessmentEntry === 'yes') {
      req.session.data['specialism-assessment-entry-added'] = 'removed'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'specialism-removed'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      req.session.data.showBannerAssessments = 'no'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // Assessment entries RESITS
  // Add core entry resit
  router.post('/' + version + '/AO/assessments/add-core-entry-resits', function (req, res) {
    const coreAssessmentEntry = req.session.data['add-core-entry']

    if (coreAssessmentEntry === 'yes') {
      req.session.data['core-assessment-entry-added-resits'] = 'yes'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'core-added-resits'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      req.session.data.showBannerAssessments = 'no'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // Assessment Entries - add one of the multiple specialism entry for resit

  router.post('/' + version + '/AO/assessments/add-specialism-entry-resits', function (req, res) {
    const specialismAssessmentEntry = req.session.data['add-specialism-entry']

    if (specialismAssessmentEntry === 'yes') {
      req.session.data['specialism-assessment-entry-added-resits'] = 'yes'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'specialism-added-resits'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      req.session.data.showBannerAssessments = 'no'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // Assessment Entries - add second of the multiple specialism entry for resit

  router.post('/' + version + '/AO/assessments/add-specialism2-entry-resits', function (req, res) {
    const specialismAssessmentEntry = req.session.data['add-specialism-entry']

    if (specialismAssessmentEntry === 'yes') {
      req.session.data['specialism2-assessment-entry-added-resits'] = 'yes'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'specialism2-added-resits'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      req.session.data.showBannerAssessments = 'no'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // Assessment Entries - remove core entry resits

  router.post('/' + version + '/AO/assessments/remove-core-entry-resits', function (req, res) {
    const coreAssessmentEntry = req.session.data['remove-core-entry']

    if (coreAssessmentEntry === 'yes') {
      req.session.data['core-assessment-entry-added-resits'] = 'removed'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'core-removed-resits'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      req.session.data.showBannerAssessments = 'no'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // Assessment Entries - remove one of the multiple specialism entry resits

  router.post('/' + version + '/AO/assessments/remove-specialism-entry-resits', function (req, res) {
    const specialismAssessmentEntry = req.session.data['remove-specialism-entry']

    if (specialismAssessmentEntry === 'yes') {
      req.session.data['specialism-assessment-entry-added-resits'] = 'removed'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'specialism-removed-resits'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      req.session.data.showBannerAssessments = 'no'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // Assessment Entries - remove one of the multiple specialism entry resits

  router.post('/' + version + '/AO/assessments/remove-specialism2-entry-resits', function (req, res) {
    const specialismAssessmentEntry = req.session.data['remove-specialism-entry']

    if (specialismAssessmentEntry === 'yes') {
      req.session.data['specialism2-assessment-entry-added-resits'] = 'removed'
      req.session.data.showBannerAssessments = 'yes'
      req.session.data.assessmentsBanner = 'specialism2-removed-resits'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    } else {
      req.session.data.showBannerAssessments = 'no'
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  })

  // V2 Appeals

  // Search ULN - set showBanner to no to stop banner showing continuously
  router.post('/' + version + '/AO/appeals/search-learner-appeals', function (req, res) {
    req.session.data.showBannerAppeals = 'no'

    res.redirect('/' + version + '/AO/appeals/record-entries-routes')
  })

  // Add ROMM to core component
  router.post('/' + version + '/AO/appeals/raise-ROMM-for-core', function (req, res) {
    const raiseROMM = req.session.data.raiseROMM
    // yes raise ROMM
    if (raiseROMM === 'yes') {
      res.redirect('/' + version + '/AO/appeals/core-add-ROMM-outcome')

      // no ROMM raised
    } else {
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')
    }
  })

  // Add ROMM outcome to core component
  router.post('/' + version + '/AO/appeals/core-add-ROMM-outcome', function (req, res) {
    const ROMMoutcome = req.session.data['what-is-ROMM-outcome']
    // grade is changed
    if (ROMMoutcome === 'Grade has changed') {
      res.redirect('/' + version + '/AO/appeals/core-add-ROMM-select-grade')

      // still waiting on outcome
    } else if (ROMMoutcome === 'Waiting on outcome') {
      req.session.data.showBannerAppeals = 'raiseROMM-core'
      req.session.data.coreGradestatus = 'ROMM'
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // learner withdrew ROMM request
    } else if (ROMMoutcome === 'learner withdrew') {
      req.session.data.showBannerAppeals = 'ROMMwithdrew-core'
      req.session.data.coreGradestatus = 'learner withdrew ROMM'
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // grade the same
    } else {
      res.redirect('/' + version + '/AO/appeals/check-submit-ROMM')
    }
  })

  // ROMM outcome select grade - grade same or grade changed
  router.post('/' + version + '/AO/appeals/ROMM-select-grade', function (req, res) {
    req.session.data['core-selected-grade'] = 'yes'
    res.redirect('/' + version + '/AO/appeals/check-submit-ROMM')
  })

  // ROMM outcome check and submit
  router.post('/' + version + '/AO/appeals/submit-ROMM-outcome', function (req, res) {
    const ROMMgrade = req.session.data['ROMM-grade']
    req.session.data.ROMMgrade = ROMMgrade
    req.session.data.coreGradestatus = 'ROMM completed'
    req.session.data.showBannerAppeals = 'ROMMoutcome-core'
    res.redirect('/' + version + '/AO/appeals/record-entries-routes')
  })

  // Add appeal to core component
  router.post('/' + version + '/AO/appeals/raise-appeal-for-core', function (req, res) {
    const raiseAppeal = req.session.data.raiseAppeal
    // yes raise ROMM
    if (raiseAppeal === 'yes') {
      res.redirect('/' + version + '/AO/appeals/core-add-appeal-outcome')

      // no ROMM raised
    } else {
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')
    }
  })

  // Add appeal outcome to core component
  router.post('/' + version + '/AO/appeals/core-add-appeal-outcome', function (req, res) {
    const appealoutcome = req.session.data['what-is-appeal-outcome']
    // grade is changed
    if (appealoutcome === 'Grade has changed') {
      res.redirect('/' + version + '/AO/appeals/core-add-appeal-select-grade')

      // still waiting on outcome
    } else if (appealoutcome === 'Waiting on outcome') {
      req.session.data.coreGradestatus = 'appeal'
      req.session.data.showBannerAppeals = 'raiseAppeal-core'
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // learner withdrew ROMM request
    } else if (appealoutcome === 'learner withdrew appeal') {
      req.session.data.coreGradestatus = 'learner withdrew appeal'
      req.session.data.showBannerAppeals = 'appealwithdrew-core'
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // grade the same
    } else {
      res.redirect('/' + version + '/AO/appeals/check-submit-appeal')
    }
  })

  // appeal outcome select grade - grade same or grade changed
  router.post('/' + version + '/AO/appeals/appeal-select-grade', function (req, res) {
    req.session.data['core-selected-grade-appeal'] = 'yes-appeal'
    res.redirect('/' + version + '/AO/appeals/check-submit-appeal')
  })

  // Appeal outcome check and submit
  router.post('/' + version + '/AO/appeals/submit-appeal-outcome', function (req, res) {
    const appealgrade = req.session.data['appeal-grade']
    req.session.data.appealgrade = appealgrade
    req.session.data.coreGradestatus = 'appeal completed'
    req.session.data.showBannerAppeals = 'appealoutcome-core'
    res.redirect('/' + version + '/AO/appeals/record-entries-routes')
  })

  // SPECIALISM //

  // Specialism Add ROMM to core component
  router.post('/' + version + '/AO/appeals/raise-ROMM-for-specialism', function (req, res) {
    const raiseROMMspecialism = req.session.data['raiseROMM-specialism']
    // yes raise ROMM
    if (raiseROMMspecialism === 'yes') {
      res.redirect('/' + version + '/AO/appeals/specialism-add-ROMM-outcome')

      // no ROMM raised
    } else {
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')
    }
  })

  // Add ROMM outcome to specialism component
  router.post('/' + version + '/AO/appeals/specialism-add-ROMM-outcome', function (req, res) {
    const ROMMoutcomespecialism = req.session.data['what-is-ROMM-outcome-specialism']
    // grade is changed
    if (ROMMoutcomespecialism === 'Grade has changed') {
      res.redirect('/' + version + '/AO/appeals/specialism-add-ROMM-select-grade')

      // still waiting on outcome
    } else if (ROMMoutcomespecialism === 'Waiting on outcome') {
      req.session.data.showBannerAppeals = 'raiseROMM-specialism'
      req.session.data.specialismGradestatus = 'ROMM'
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // learner withdrew ROMM request
    } else if (ROMMoutcomespecialism === 'learner withdrew') {
      req.session.data.showBannerAppeals = 'ROMMwithdrew-specialism'
      req.session.data.specialismGradestatus = 'learner withdrew ROMM'
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // grade the same
    } else {
      res.redirect('/' + version + '/AO/appeals/specialism-check-submit-ROMM')
    }
  })

  // Specialism ROMM outcome select grade - grade same or grade changed
  router.post('/' + version + '/AO/appeals/ROMM-select-grade-specialism', function (req, res) {
    req.session.data['specialism-selected-grade'] = 'yes'
    res.redirect('/' + version + '/AO/appeals/specialism-check-submit-ROMM')
  })

  // Specialism ROMM outcome check and submit
  router.post('/' + version + '/AO/appeals/submit-ROMM-outcome-specialism', function (req, res) {
    const ROMMgradespecialism = req.session.data['ROMM-grade-specialism']
    req.session.data['ROMM-grade-specialism'] = ROMMgradespecialism
    req.session.data.specialismGradestatus = 'ROMM completed'
    req.session.data.showBannerAppeals = 'ROMMoutcome-specialism'
    res.redirect('/' + version + '/AO/appeals/record-entries-routes')
  })

  // Specialism Add appeal to core component
  router.post('/' + version + '/AO/appeals/raise-appeal-for-specialism', function (req, res) {
    const raiseAppealspecialism = req.session.data.raiseAppealspecialism
    // yes raise ROMM
    if (raiseAppealspecialism === 'yes') {
      res.redirect('/' + version + '/AO/appeals/specialism-add-appeal-outcome')

      // no ROMM raised
    } else {
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')
    }
  })

  // Add appeal outcome to specialism component
  router.post('/' + version + '/AO/appeals/specialism-add-appeal-outcome', function (req, res) {
    const appealoutcomespecialism = req.session.data['what-is-appeal-outcome-specialism']
    // grade is changed
    if (appealoutcomespecialism === 'Grade has changed') {
      res.redirect('/' + version + '/AO/appeals/specialism-add-appeal-select-grade')

      // still waiting on outcome
    } else if (appealoutcomespecialism === 'Waiting on outcome') {
      req.session.data.specialismGradestatus = 'appeal'
      req.session.data.showBannerAppeals = 'raiseAppeal-specialism'
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // learner withdrew ROMM request
    } else if (appealoutcomespecialism === 'learner withdrew appeal') {
      req.session.data.specialismGradestatus = 'learner withdrew appeal'
      req.session.data.showBannerAppeals = 'appealwithdrew-specialism'
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // grade the same
    } else {
      res.redirect('/' + version + '/AO/appeals/specialism-check-submit-appeal')
    }
  })

  // Specialism appeal outcome select grade - grade same or grade changed
  router.post('/' + version + '/AO/appeals/appeal-select-grade-specialism', function (req, res) {
    req.session.data['specialism-selected-grade-appeal'] = 'yes-appeal'
    res.redirect('/' + version + '/AO/appeals/specialism-check-submit-appeal')
  })

  // Specialism - Appeal outcome check and submit
  router.post('/' + version + '/AO/appeals/submit-appeal-outcome-specialism', function (req, res) {
    const appealgradespecialism = req.session.data['appeal-grade-specialism']
    req.session.data['appeal-grade-specialism'] = appealgradespecialism
    req.session.data.specialismGradestatus = 'appeal completed'
    req.session.data.showBannerAppeals = 'appealoutcome-specialism'
    res.redirect('/' + version + '/AO/appeals/record-entries-routes')
  })

  // Cancel
  // cancel ROMM core
  router.post('/' + version + '/AO/appeals/cancel/cancel-ROMM-core', function (req, res) {
    const cancelROMM = req.session.data['cancel-ROMM-update']
    // yes cancel ROMM
    if (cancelROMM === 'yes') {
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // no dont cancel
    } else {
      res.redirect('/' + version + '/AO/appeals/check-submit-ROMM')
    }
  })

  // cancel ROMM specialism
  router.post('/' + version + '/AO/appeals/cancel/cancel-ROMM-specialism', function (req, res) {
    const cancelROMMspecialism = req.session.data['cancel-ROMM-update-specialism']
    // yes cancel ROMM
    if (cancelROMMspecialism === 'yes') {
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // no dont cancel
    } else {
      res.redirect('/' + version + '/AO/appeals/specialism-check-submit-ROMM')
    }
  })

  // cancel Appeal core
  router.post('/' + version + '/AO/appeals/cancel/cancel-appeal-core', function (req, res) {
    const cancelAppeal = req.session.data['cancel-appeal-update']
    // yes cancel ROMM
    if (cancelAppeal === 'yes') {
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // no dont cancel
    } else {
      res.redirect('/' + version + '/AO/appeals/check-submit-appeal')
    }
  })

  // cancel Appeal specialism
  router.post('/' + version + '/AO/appeals/cancel/cancel-appeal-specialism', function (req, res) {
    const cancelAppealspecialism = req.session.data['cancel-appeal-update-specialism']
    // yes cancel ROMM
    if (cancelAppealspecialism === 'yes') {
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')

      // no dont cancel
    } else {
      res.redirect('/' + version + '/AO/appeals/specialism-check-submit-appeal')
    }
  })

  // Appeals - request exceptions

  router.post('/' + version + '/AO/appeals/exceptions/request-exceptions-routes', function (req, res) {
    const exceptionNextStep = req.session.data['exception-next-step']
    const uln = req.session.data.uln

    if (exceptionNextStep === 'learner-page') {
      req.session.data.uln = uln
      req.session.data.exceptions = 'yes'
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')
    } else if (exceptionNextStep === 'search') {
      req.session.data.exceptions = 'yes'
      res.redirect('/' + version + '/AO/appeals/search-learner')
    } else {
      req.session.data.exceptions = 'yes'
      res.redirect('/' + version + '/AO/tlevels-dashboard')
    }
  })

  // Appeals - Cancel exceptions request

  router.post('/' + version + '/AO/appeals/exceptions/cancel-exception-request', function (req, res) {
    const cancelException = req.session.data['cancel-exception-request']
    const uln = req.session.data.uln

    if (cancelException === 'yes') {
      req.session.data.uln = uln
      res.redirect('/' + version + '/AO/appeals/record-entries-routes')
    } else {
      res.redirect('/' + version + '/AO/appeals/exceptions/exception')
    }
  })

  // V2 Results

  // Results

  // Core Results

  // Add core result - Results
  router.post('/' + version + '/AO/results/add-core-result', function (req, res) {
    const addResult = req.session.data['add-core-result']

    req.session.data.addedResult = 'yes'
    req.session.data.showBannerResults = 'yes'
    req.session.data.newResult = addResult
    req.session.data.updateResult = null
    req.session.data.addCoreResultConfirmation = 'yes'
    req.session.data.updateCoreResultConfirmation = null
    req.session.data.addSpecialismResultConfirmation = null
    req.session.data.updateSpecialismResultConfirmation = null

    res.redirect('/' + version + '/AO/results/learner-results')
  })

  // Change core result - Results
  router.post('/' + version + '/AO/results/change-core-result', function (req, res) {
    const changeResult = req.session.data['change-core-result']

    req.session.data.changedResult = 'yes'
    req.session.data.updateResult = changeResult
    req.session.data.showBannerResults = 'yes'
    req.session.data.addedResult = null
    req.session.data.updateCoreResultConfirmation = 'yes'
    req.session.data.addCoreResultConfirmation = null
    req.session.data.addSpecialismResultConfirmation = null
    req.session.data.updateSpecialismResultConfirmation = null

    res.redirect('/' + version + '/AO/results/learner-results')
  })

  // Specialism Results

  // Add specialism result - Results
  router.post('/' + version + '/AO/results/add-specialism-result', function (req, res) {
    const addResult = req.session.data['add-specialism-result']

    req.session.data.addedResultSpecialism = 'yes'
    req.session.data.newResultSpecialism = addResult
    req.session.data.updateResultSpecialism = null
    req.session.data.showBannerResults = 'yes'
    req.session.data.addSpecialismResultConfirmation = 'yes'
    req.session.data.updateSpecialismResultConfirmation = null
    req.session.data.addCoreResultConfirmation = null
    req.session.data.updateCoreResultConfirmation = null

    res.redirect('/' + version + '/AO/results/learner-results')
  })

  // Change specialism result - Results
  router.post('/' + version + '/AO/results/change-specialism-result', function (req, res) {
    const changeResult = req.session.data['change-specialism-result']

    req.session.data.changedResultSpecialism = 'yes'
    req.session.data.updateResultSpecialism = changeResult
    req.session.data.showBannerResults = 'yes'
    req.session.data.addedResultSpecialism = null
    req.session.data.updateSpecialismResultConfirmation = 'yes'
    req.session.data.addSpecialismResultConfirmation = null
    req.session.data.addCoreResultConfirmation = null
    req.session.data.updateCoreResultConfirmation = null

    res.redirect('/' + version + '/AO/results/learner-results')
  })

  // Search Learner - Results
  router.post('/search-learner', function (req, res) {
    req.session.data.showBannerResults = 'no'
    res.redirect('/' + version + '/AO/results/current/learner-results')
  })

  // PROVIDERS ROUTES

  // Add T Level Records

  // LRS - straight to industry placement
  router.post('/' + version + '/providers/add-learner-q2-em', function (req, res) {
    const uln = req.session.data.uln

    if (uln === '4561237890') {
      res.redirect('/' + version + '/providers/add-learner-q4-ip')
    } else {
      res.redirect('/' + version + '/providers/add-learner-q2-em')
    }
  })

  // Change Industry placement
  router.post('/' + version + '/providers/add-learner-change-q4-ip', function (req, res) {
    const newResult = req.session.data['result-ip-change']

    req.session.data.changeplacementResult = 'yes'
    req.session.data.addChangeindustryPlacement = newResult

    res.redirect('/' + version + '/providers/add-learner-q5-check')
  })

  // Change English and Maths status
  router.post('/' + version + '/providers/add-learner-change-q2-em', function (req, res) {
    const newStatus = req.session.data['result-em-change']

    req.session.data.changeemStatus = 'yes'
    req.session.data.addChangeemStatus = newStatus

    res.redirect('/' + version + '/providers/add-learner-q5-check')
  })

  // Cancel T Level records

  router.post('/' + version + '/providers/cancel-t-level-record', function (req, res) {
    const cancelTlevelrecord = req.session.data['cancel-answer']

    if (cancelTlevelrecord === 'No') {
      res.redirect('/' + version + '/providers/add-learner-q5-check')
    } else {
      res.redirect('/' + version + '/providers/tlevels-dashboard')
    }
  })

  // Update T Level Records

  // Update Industry placement
  router.post('/' + version + '/providers/change-ip-result', function (req, res) {
    const newResult = req.session.data['result-ip-answer']

    if (newResult === 'Yes, completed with special consideration') {
      res.redirect('/' + version + '/providers/total-placement-hours')
    } else if (newResult === 'Yes, completed') {
      res.redirect('/' + version + '/providers/did-you-use-an-industry-placement')
    } else {
      req.session.data.newplacementResult = 'yes'
      req.session.data.showBanner = 'ip'
      req.session.data.newindustryPlacement = newResult

      res.redirect('/' + version + '/providers/update-t-level-record')
    }
  })

  // Update Maths status
  router.post('/' + version + '/providers/add-maths-status', function (req, res) {
    const newmathsStatus = req.session.data.mathsStatus

    req.session.data.updatedmathsStatus = 'yes'
    req.session.data.showBanner = 'maths'
    req.session.data.newmathsStatus = newmathsStatus

    res.redirect('/' + version + '/providers/update-t-level-record?showBanner=maths')
  })

  // Update English status
  router.post('/' + version + '/providers/add-english-status', function (req, res) {
    const newenglishStatus = req.session.data.englishStatus

    req.session.data.updatedenglishStatus = 'yes'
    req.session.data.showBanner = 'english'
    req.session.data.newenglishStatus = newenglishStatus

    res.redirect('/' + version + '/providers/update-t-level-record?showBanner=english')
  })

  // Cancel Request Statement of Achievement
  router.post('/' + version + '/providers/request-statement-of-achievement-cancel', function (req, res) {
    const cancelRequest = req.session.data['cancel-request-answer']

    if (cancelRequest === 'no') {
      res.redirect('/' + version + '/providers/request-statement-of-achievement-check-and-submit')
    } else {
      res.redirect('/' + version + '/providers/tlevels-dashboard')
    }
  })

  // Manage Postal Address

  // Update Organisations address
  router.post('/' + version + '/providers/add-address-confirm-address', function (req, res) {
    req.session.data.newAddress = 'yes'

    res.redirect('/' + version + '/providers/add-address-confirm-address')
  })

  // Update Organisations address manually
  router.post('/' + version + '/providers/add-address-manually', function (req, res) {
    req.session.data.newManualAddress = 'yes'

    res.redirect('/' + version + '/providers/add-address-confirm-address')
  })

  // Cancel adding Organisations address
  router.post('/' + version + '/providers/cancel-address', function (req, res) {
    const cancelAddress = req.session.data['cancel-address-answer']

    if (cancelAddress === 'no') {
      res.redirect('/' + version + '/providers/add-address-confirm-address')
    } else {
      res.redirect('/' + version + '/providers/tlevels-dashboard')
    }
  })

  // industry placement, industry placement model

  router.post('/' + version + '/providers/industry-placement', function (req, res) {
    const industryModel = req.session.data.industryModel

    if (industryModel === 'yes') {
      res.redirect('/' + version + '/providers/multiple-employer-model')
    } else {
      res.redirect('/' + version + '/providers/did-you-use-a-flexibility'
      )
    }
  })

  // industry placement, temporary flexibility

  router.post('/' + version + '/providers/flexibility', function (req, res) {
    const flexibility = req.session.data.flexibility

    if (flexibility === 'yes' && req.session.data.uln === '1234567890') {
      res.redirect('/' + version + '/providers/temporary-flexibilities')
    } else if (flexibility === 'yes' && req.session.data.uln === '1987654320') {
      res.redirect('/' + version + '/providers/special-consideration-check-answers')
    } else if (flexibility === 'yes') {
      res.redirect('/' + version + '/providers/blended-placements')
    } else {
      res.redirect('/' + version + '/providers/special-consideration-check-answers'
      )
    }
  })

  router.post('/' + version + '/providers/special-consideration-check-answers-status', function (req, res) {
    const newplacementStatus = req.session.data['result-ip-answer']
    req.session.data.newplacementResult = 'yes'
    req.session.data.newindustryPlacement = newplacementStatus

    // Success banner needs to be added
    req.session.data.showBanner = 'ip'
    res.redirect('/' + version + '/providers/update-t-level-record')
  })

// This must close line 1 after all other routes
}
