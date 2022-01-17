module.exports = function(router) {

const version = 'V3-0'

// Add your routes here - above the module.exports line


// ' + version + ' routes // 

//Search ULN - set showBanner to no to stop banner showing continuously
router.post('/' + version + '/AO/assessments/search-learner-assessments', function (req, res) {

  req.session.data['showBannerAssessments'] = "no"
  res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')

});

// Assessment Entries - add core entry

router.post('/' + version + '/AO/assessments/add-core-entry', function (req, res) {

  let coreAssessmentEntry = req.session.data['add-core-entry']
  
  if (coreAssessmentEntry === 'yes') {
    req.session.data['core-assessment-entry-added'] = 'yes'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "core-added"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

// Assessment Entries - add specialism entry

router.post('/' + version + '/AO/assessments/add-specialism-entry', function (req, res) {

  let specialismAssessmentEntry = req.session.data['add-specialism-entry']

  if (specialismAssessmentEntry === 'yes') {
    req.session.data['specialism-assessment-entry-added'] = 'yes'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "specialism-added"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

// Assessment Entries - remove core entry

router.post('/' + version + '/AO/assessments/remove-core-entry', function (req, res) {

  let coreAssessmentEntry = req.session.data['remove-core-entry']

  if (coreAssessmentEntry === 'yes') {
    req.session.data['core-assessment-entry-added'] = 'removed'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "core-removed"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    req.session.data['showBannerAssessments'] = "no"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

// Assessment Entries - remove specialism entry

router.post('/' + version + '/AO/assessments/remove-specialism-entry', function (req, res) {

  let specialismAssessmentEntry = req.session.data['remove-specialism-entry']

  if (specialismAssessmentEntry === 'yes') {
    req.session.data['specialism-assessment-entry-added'] = 'removed'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "specialism-removed"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    req.session.data['showBannerAssessments'] = "no"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

// Assessment entries RESITS 
// Add core entry resit 
router.post('/' + version + '/AO/assessments/add-core-entry-resits', function (req, res) {

  let coreAssessmentEntry = req.session.data['add-core-entry']
  
  if (coreAssessmentEntry === 'yes') {
    req.session.data['core-assessment-entry-added-resits'] = 'yes'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "core-added-resits"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    req.session.data['showBannerAssessments'] = "no"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

// Assessment Entries - add one of the multiple specialism entry for resit 

router.post('/' + version + '/AO/assessments/add-specialism-entry-resits', function (req, res) {

  let specialismAssessmentEntry = req.session.data['add-specialism-entry']

  if (specialismAssessmentEntry === 'yes') {
    req.session.data['specialism-assessment-entry-added-resits'] = 'yes'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "specialism-added-resits"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    req.session.data['showBannerAssessments'] = "no"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

// Assessment Entries - add second of the multiple specialism entry for resit 

router.post('/' + version + '/AO/assessments/add-specialism2-entry-resits', function (req, res) {

  let specialismAssessmentEntry = req.session.data['add-specialism-entry']

  if (specialismAssessmentEntry === 'yes') {
    req.session.data['specialism2-assessment-entry-added-resits'] = 'yes'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "specialism2-added-resits"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    req.session.data['showBannerAssessments'] = "no"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

// Assessment Entries - remove core entry resits

router.post('/' + version + '/AO/assessments/remove-core-entry-resits', function (req, res) {

  let coreAssessmentEntry = req.session.data['remove-core-entry']

  if (coreAssessmentEntry === 'yes') {
    req.session.data['core-assessment-entry-added-resits'] = 'removed'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "core-removed-resits"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    req.session.data['showBannerAssessments'] = "no"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

// Assessment Entries - remove one of the multiple specialism entry resits

router.post('/' + version + '/AO/assessments/remove-specialism-entry-resits', function (req, res) {

  let specialismAssessmentEntry = req.session.data['remove-specialism-entry']

  if (specialismAssessmentEntry === 'yes') {
    req.session.data['specialism-assessment-entry-added-resits'] = 'removed'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "specialism-removed-resits"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    req.session.data['showBannerAssessments'] = "no"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

// Assessment Entries - remove one of the multiple specialism entry resits

router.post('/' + version + '/AO/assessments/remove-specialism2-entry-resits', function (req, res) {

  let specialismAssessmentEntry = req.session.data['remove-specialism-entry']

  if (specialismAssessmentEntry === 'yes') {
    req.session.data['specialism2-assessment-entry-added-resits'] = 'removed'
    req.session.data['showBannerAssessments'] = "yes"
    req.session.data['assessmentsBanner'] = "specialism2-removed-resits"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  } else{
    req.session.data['showBannerAssessments'] = "no"
    res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
  }

})

//V2 Appeals

//Search ULN - set showBanner to no to stop banner showing continuously
router.post('/' + version + '/AO/appeals/search-learner-appeals', function (req, res) {

  req.session.data['showBanner'] = "no"

  
  res.redirect('/' + version + '/AO/appeals/record-entries-routes')

});



//Add appeal to core component
router.post('/' + version + '/AO/appeals/core-put-on-appeal-2021', function (req, res) {

  let coreOnHold = req.session.data['core-place-on-appeal-2021']
//yes is being appealed
  if (coreOnHold === 'yes') {
    req.session.data['newcoreOnHold2021'] = 'appealed'
    req.session.data['appealWithdrawn'] = 'no'
    req.session.data['dateChanged2021'] = 'yes'
    req.session.data['showBanner'] = "yes"

    res.redirect('/' + version + '/AO/appeals/record-entries-routes')
  
// no not being appealed - leave with no tag  
  } else {
    res.redirect('/' + version + '/AO/appeals/record-entries-routes')
  }
})

//Add appeal outcome to core component
router.post('/' + version + '/AO/appeals/core-take-off-appeal-2021', function (req, res) {

  let coreOnHold = req.session.data['core-take-off-appeal-2021']
//I need to update grade
  if (coreOnHold === 'update') {
    res.redirect('/' + version + '/AO/appeals/change-core-result-appeal-2021')

// I need to withdraw the appeal 
} else if (coreOnHold === 'withdraw') {  
  req.session.data['newcoreOnHold2021'] = 'no'
  req.session.data['appealWithdrawn'] = 'yes'
  req.session.data['showBanner'] = "yes"


  res.redirect('/' + version + '/AO/appeals/record-entries-routes')

//Result the same - check and submit confirm   
  } else {
    res.redirect('/' + version + '/AO/appeals/check-result-change-appeal-2021')
  }
})

//2021 core grade changed - after clicking result the same 
router.post('/' + version + '/AO/appeals/check-result-change-appeal-2021', function(req, res) {
  
  req.session.data['core-result-changed-2021'] = 'yes'
 
  res.redirect('/' + version + '/AO/appeals/check-result-change-appeal-2021')

})

//2021 core grade changed appeal
router.post('/' + version + '/AO/appeals/confirm-result-change-appeal-2021', function (req, res) {
  
  let newResult = req.session.data['result-answer-2021']
  let newResultchanged = req.session.data['core-result-changed-2021']
  req.session.data['resultChanged2021'] = 'appeal'
  req.session.data['appealcoreGrade2021'] = newResult
  req.session.data['newcoreOnHold2021'] = 'final'
  req.session.data['core-result-changed-2021'] = newResultchanged
  req.session.data['coreReviewed2021'] = 'appealedgrade'
  req.session.data['dateChanged2021'] = 'yes'
  req.session.data['showBanner'] = "yes"
  req.session.data['appealWithdrawn'] = 'no'
 
  res.redirect('/' + version + '/AO/appeals/record-entries-routes')

})

//Appeals - request a grade change

router.post('/' + version + '/AO/appeals/exceptions/request-grade-change-routes', function (req, res) {

  let gradeChangeconfirmation = req.session.data['request-grade-change']
  let uln = req.session.data['uln']

  if (gradeChangeconfirmation === 'learner-page') {
    req.session.data['uln'] = uln
    req.session.data['newcoreOnHold2021'] = 'locked'
    res.redirect('/' + version + '/AO/appeals/record-entries-routes')

  } else if (gradeChangeconfirmation === 'search'){

    res.redirect('/' + version + '/AO/appeals/search-learner')
  
  } else {
    res.redirect('/' + version + '/AO/tlevels-dashboard')
  }
})

//Appeals - EXCEPTIONS

router.post('/' + version + '/AO/appeals/exceptions/exceptions-process-put-on-appeal', function (req, res) {

  let appealGrade = req.session.data['exceptions-appeal']
  let uln = req.session.data['uln']

  if (appealGrade === 'appeal-record') {
    
    res.redirect('/' + version + '/AO/appeals/exceptions/exceptions-process-confirmation')

  } else{
    req.session.data['uln'] = uln
    res.redirect('/' + version + '/AO/appeals/record-entries-routes')
  }
})

//V2 Results

//Results

//Core Results

// Add core result - Results
router.post('/' + version + '/AO/results/current/add-core-result', function (req, res) {
  let addResult = req.session.data['add-core-result']

  req.session.data['addedResult'] = "yes"
  req.session.data['showBannerResults'] = "yes"
  req.session.data['newResult'] = addResult
  req.session.data['addCoreResultConfirmation'] = "yes"
  req.session.data['updateCoreResultConfirmation'] = null
  req.session.data['addSpecialismResultConfirmation'] = null
  req.session.data['updateSpecialismResultConfirmation'] = null

  res.redirect('/' + version + '/AO/results/current/learner-results')

});

//Change core result - Results
router.post('/' + version + '/AO/results/current/change-core-result', function (req, res) {
  let changeResult = req.session.data['change-core-result']

  req.session.data['changedResult'] = "yes"
  req.session.data['updateResult'] = changeResult
  req.session.data['showBannerResults'] = "yes"
  req.session.data['addedResult'] = null
  req.session.data['updateCoreResultConfirmation'] = "yes"
  req.session.data['addCoreResultConfirmation'] = null
  req.session.data['addSpecialismResultConfirmation'] = null
  req.session.data['updateSpecialismResultConfirmation'] = null

  res.redirect('/' + version + '/AO/results/current/learner-results')

});

//Specialism Results

// Add specialism result - Results
router.post('/' + version + '/AO/results/current/add-specialism-result', function (req, res) {
  let addResult = req.session.data['add-specialism-result']

  req.session.data['addedResultSpecialism'] = "yes"
  req.session.data['newResultSpecialism'] = addResult
  req.session.data['showBannerResults'] = "yes"
  req.session.data['addSpecialismResultConfirmation'] = "yes"
  req.session.data['updateSpecialismResultConfirmation'] = null
  req.session.data['addCoreResultConfirmation'] = null
  req.session.data['updateCoreResultConfirmation'] = null

  res.redirect('/' + version + '/AO/results/current/learner-results')

});

//Change specialism result - Results
router.post('/' + version + '/AO/results/current/change-specialism-result', function (req, res) {
  let changeResult = req.session.data['change-specialism-result']

  req.session.data['changedResultSpecialism'] = "yes"
  req.session.data['updateResultSpecialism'] = changeResult
  req.session.data['showBannerResults'] = "yes"
  req.session.data['addedResultSpecialism'] = null
  req.session.data['updateSpecialismResultConfirmation'] = "yes"
  req.session.data['addSpecialismResultConfirmation'] = null
  req.session.data['addCoreResultConfirmation'] = null
  req.session.data['updateCoreResultConfirmation'] = null

  res.redirect('/' + version + '/AO/results/current/learner-results')

});

//Change core result - Results
// router.post('/V2-1/AO/results/change-core-result-successful', function (req, res) {
//   let changeResult = req.session.data['result-answer-specialism']

//   req.session.data['changedResult'] = "yes"
//   req.session.data['updateResult'] = changeResult
  
//   res.redirect('/V2-1/AO/results/current/learner-results')

// });

//Search Learner - Results
router.post('/search-learner', function (req, res) {
  let uln = req.session.data['uln']
  if (uln === '1231231231' && '8642135790')
  {
    req.session.data['uln'] = uln  
    res.redirect
    ('/' + version + '/AO/results/current/learner-results')
  } 
  if (uln === '8642135790')
  {
    req.session.data['uln'] = uln
    res.redirect
    ('/' + version + '/AO/results/current/learner-results')
  } 

  else {
    req.session.data['showBannerResults'] = "no"
    res.redirect('/' + version + '/AO/results/current/learner-results')
    
  }

})


//Data Export

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/processing-data-file-registrations')  
  } 
  if (whatData == "Assessments data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/processing-data-file-assessments')  
  } 
  if (whatData == "Results data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/processing-data-file-results')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/' + version + '/AO/download-data/select-data-type-error')
  // }

})


// Run this code when a form is submitted to 'data-type-answer'
router.post('/default-filter-data', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "cohort-data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/registrations-filters')  
  } 
  if (whatData == "learner-status-data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/registrations-filters')  
  } 

})

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer-double', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/processing-data-file-registrations-double')  
  } 
  if (whatData == "Assessments data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/processing-data-file-assessments-double')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/' + version + '/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer-filters', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/select-cohorts-and-learner')  
  } 
  if (whatData == "Assessments data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/select-assessment-periods')  
  } 
  if (whatData == "Results data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/select-assessment-periods-results')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/' + version + '/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer-list', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/registrations')  
  } 
  if (whatData == "Assessments data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/assessments')  
  } 
  if (whatData == "Results data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/results')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/' + version + '/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer-list', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/processing-data-file-registrations')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/' + version + '/AO/download-data/select-data-type-error')
  // }

})


// Run this code when a form is submitted to 'cohorts-answer'
router.post('/cohorts-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['cohort']

  // Check whether the variable matches a condition
  if (whatData == "cohort"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/current/select-learner-status')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/' + version + '/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'cohorts-answer'
router.post('/learner-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['learner']

  // Check whether the variable matches a condition
  if (whatData == "learner"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/select-optional-coloumns')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/' + version + '/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'cohorts-answer'
router.post('/periods-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['periods4']

  // Check whether the variable matches a condition
  if (whatData == "periods4"){
    // Send user to next page
    res.redirect('/' + version + '/AO/download-data/select-optional-columns-assessments-results')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/' + version + '/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'cohorts-answer'
router.post('/assessment-periods-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['aseessments-periods']

  // Check whether the variable matches a condition
  if (whatData == "aseessments-periods"){
    // Send user to next page
    res.redirect('/' + version + '/AO/assessments/assessments-download-data/assessments-optional-columns')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/' + version + '/AO/download-data/select-data-type-error')
  // }

})

// PROVIDERS ROUTES 

//Add T Level Records

//LRS - straight to industry placement
router.post('/' + version + '/providers/add-learner-q2-em', function (req, res) {
  let uln = req.session.data['uln']

if(uln == '4561237890'){
  res.redirect('/' + version + '/providers/add-learner-q4-ip')

} else{
  res.redirect('/' + version + '/providers/add-learner-q2-em')
}

});

//Change Industry placement 
router.post('/' + version + '/providers/add-learner-change-q4-ip', function (req, res) {
    let newResult = req.session.data['result-ip-change']
  
    req.session.data['changeplacementResult'] = "yes"
    req.session.data['addChangeindustryPlacement'] = newResult
    
    res.redirect('/' + version + '/providers/add-learner-q5-check')
  
  });

//Change English and Maths status
router.post('/' + version + '/providers/add-learner-change-q2-em', function (req, res) {
    let newStatus = req.session.data['result-em-change']
  
    req.session.data['changeemStatus'] = "yes"
    req.session.data['addChangeemStatus'] = newStatus
    
    res.redirect('/' + version + '/providers/add-learner-q5-check')
  
  });

//Cancel T Level records

router.post('/' + version + '/providers/cancel-t-level-record', function (req, res) {

    let cancelTlevelrecord = req.session.data['cancel-answer']
  
    if (cancelTlevelrecord === 'No') {
      res.redirect('/' + version + '/providers/add-learner-q5-check')
    } else {
      res.redirect('/' + version + '/providers/tlevels-dashboard')
    }
  })

//Update T Level Records

//Update Industry placement 
router.post('/' + version + '/providers/change-ip-result', function (req, res) {
    let newResult = req.session.data['result-ip-answer']
  
    if (newResult == "Placement completed with special consideration") {
      res.redirect('/' + version + '/providers/total-placement-hours')
    
    } else {
    req.session.data['newplacementResult'] = "yes"
    req.session.data['newindustryPlacement'] = newResult
    
    res.redirect('/' + version + '/providers/change-ip-result-successful')
    }
  
  });


//Update English and Maths status
router.post('/' + version + '/providers/change-em-status', function (req, res) {
    let newStatus = req.session.data['result-answer']
  
    req.session.data['updatedemStatus'] = "yes"
    req.session.data['newemStatus'] = newStatus
    
    res.redirect('/' + version + '/providers/change-em-status-successful')
  
  });

//Cancel Request Statement of Achievement 
router.post('/' + version + '/providers/request-statement-of-achievement-cancel', function (req, res) {

    let cancelRequest = req.session.data['cancel-request-answer']
  
    if (cancelRequest === 'no') {
      res.redirect('/' + version + '/providers/request-statement-of-achievement-check-and-submit')
    } else {
      res.redirect('/' + version + '/providers/tlevels-dashboard')
    }
  })

//Manage Postal Address

//Update Organisations address
router.post('/' + version + '/providers/add-address-confirm-address', function (req, res) {

  req.session.data['newAddress'] = "yes"
  
  res.redirect('/' + version + '/providers/add-address-confirm-address')

});

//Update Organisations address manually
router.post('/' + version + '/providers/add-address-manually', function (req, res) {

  req.session.data['newManualAddress'] = "yes"
  
  res.redirect('/' + version + '/providers/add-address-confirm-address')

});

//Cancel adding Organisations address
router.post('/' + version + '/providers/cancel-address', function (req, res) {

  let cancelAddress = req.session.data['cancel-address-answer']

  if (cancelAddress === 'no') {
    res.redirect('/' + version + '/providers/add-address-confirm-address')
  } else {
    res.redirect('/' + version + '/providers/tlevels-dashboard')
  }
})






// This must close line 1 after all other routes
}