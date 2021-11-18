const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//V1-0 routes

//Add T Level Records

//LRS - straight to industry placement
router.post('/V1-0/providers/add-learner-q2-em', function (req, res) {
  let uln = req.session.data['uln']

if(uln == '4561237890'){
  res.redirect('/V1-0/providers/add-learner-q4-ip')

} else{
  res.redirect('/V1-0/providers/add-learner-q2-em')
}

});

//Change Industry placement 
router.post('/V1-0/providers/add-learner-change-q4-ip', function (req, res) {
    let newResult = req.session.data['result-ip-change']
  
    req.session.data['changeplacementResult'] = "yes"
    req.session.data['addChangeindustryPlacement'] = newResult
    
    res.redirect('/V1-0/providers/add-learner-q5-check')
  
  });

//Change English and Maths status
router.post('/V1-0/providers/add-learner-change-q2-em', function (req, res) {
    let newStatus = req.session.data['result-em-change']
  
    req.session.data['changeemStatus'] = "yes"
    req.session.data['addChangeemStatus'] = newStatus
    
    res.redirect('/V1-0/providers/add-learner-q5-check')
  
  });

//Cancel T Level records

router.post('/V1-0/providers/cancel-t-level-record', function (req, res) {

    let cancelTlevelrecord = req.session.data['cancel-answer']
  
    if (cancelTlevelrecord === 'No') {
      res.redirect('/V1-0/providers/add-learner-q5-check')
    } else {
      res.redirect('/V1-0/providers/tlevels-dashboard')
    }
  })

//Update T Level Records

//Update Industry placement 
router.post('/V1-0/providers/change-ip-result', function (req, res) {
    let newResult = req.session.data['result-ip-answer']
  
    req.session.data['newplacementResult'] = "yes"
    req.session.data['newindustryPlacement'] = newResult
    
    res.redirect('/V1-0/providers/change-ip-result-successful')
  
  });

//Update English and Maths status
router.post('/V1-0/providers/change-em-status', function (req, res) {
    let newStatus = req.session.data['result-answer']
  
    req.session.data['updatedemStatus'] = "yes"
    req.session.data['newemStatus'] = newStatus
    
    res.redirect('/V1-0/providers/change-em-status-successful')
  
  });

//Cancel Request Statement of Achievement 
router.post('/V1-0/providers/request-statement-of-achievement-cancel', function (req, res) {

    let cancelRequest = req.session.data['cancel-request-answer']
  
    if (cancelRequest === 'no') {
      res.redirect('/V1-0/providers/request-statement-of-achievement-check-and-submit')
    } else {
      res.redirect('/V1-0/providers/tlevels-dashboard')
    }
  })

//Manage Postal Address

//Update Organisations address
router.post('/V1-0/providers/add-address-confirm-address', function (req, res) {

  req.session.data['newAddress'] = "yes"
  
  res.redirect('/V1-0/providers/add-address-confirm-address')

});

//Update Organisations address manually
router.post('/V1-0/providers/add-address-manually', function (req, res) {

  req.session.data['newManualAddress'] = "yes"
  
  res.redirect('/V1-0/providers/add-address-confirm-address')

});

//Cancel adding Organisations address
router.post('/V1-0/providers/cancel-address', function (req, res) {

  let cancelAddress = req.session.data['cancel-address-answer']

  if (cancelAddress === 'no') {
    res.redirect('/V1-0/providers/add-address-confirm-address')
  } else {
    res.redirect('/V1-0/providers/tlevels-dashboard')
  }
})



//AO

//Results

// Add result - Results
router.post('/V1-0/AO/results/add-core-result', function (req, res) {
  let addResult = req.session.data['result-answer']

  req.session.data['addedResult'] = "yes"
  req.session.data['newResult'] = addResult
  
  res.redirect('/V1-0/AO/results/add-core-result-successful')

});

//Change result - Results
router.post('/V1-0/AO/results/change-core-result-successful', function (req, res) {
  let changeResult = req.session.data['result-answer']

  req.session.data['changedResult'] = "yes"
  req.session.data['updateResult'] = changeResult
  
  res.redirect('/V1-0/AO/results/change-core-result-successful')

});

//Search Learner - Results
router.post('/search-learner', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  let uln = req.session.data['uln']
  if (uln === '1231231231' && '8642135790')
  {
    req.session.data['uln'] = uln
    res.redirect
    ('/V2-0/AO/results/learner-results')
  } 
  if (uln === '8642135790')
  {
    req.session.data['uln'] = uln
    res.redirect
    ('/V2-0/AO/results/learner-results')
  } 
  
  else {
    res.redirect('/V2-0/AO/results/select-result-type')
  }

})


//Select result type - Results
router.post('/select-result-type', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Core"){
    // Send user to next page
    res.redirect('/V2-0/AO/results/core-results')  
  } 
  if (whatData == "Specialism"){
    // Send user to next page
    res.redirect('/V2-0/AO/results/specialism-results')  
  } 

})

//Assessment Entries

//Add assessment entry for core 
router.post('/V1-0/AO/assessments/add-first-core-entry', function (req, res) {
  let addEntry = req.session.data['entry-answer']
  if(addEntry === 'Summer 2021'){
    req.session.data['newEntry'] = "yes"
    req.session.data['addEntry'] = addEntry
    
    res.redirect('/V1-0/AO/assessments/add-entry-successful')

  } else {
    res.redirect('/V1-0/AO/assessments/learners-assessment-entries')
  }


});

//remove assessment entry for core 
router.post('/V1-0/AO/assessments/remove-entry', function (req, res) {
  let removeEntry = req.session.data['rem-answer']
  if(removeEntry === 'Not specified'){
    req.session.data['newEntry'] = ""
 
    res.redirect('/V1-0/AO/assessments/add-entry-successful')

  }else {
    res.redirect('/V1-0/AO/assessments/learners-assessment-entries')
  }


});

module.exports = router

//Appeals

//Add appeal to core component
router.post('/V1-0/AO/appeals/core-put-on-appeal-2021', function (req, res) {

  let coreOnHold = req.session.data['core-place-on-appeal-2021']
//yes is being appealed
  if (coreOnHold === 'yes') {
    req.session.data['newcoreOnHold2021'] = 'appealed'
    req.session.data['appealWithdrawn'] = 'no'
    req.session.data['dateChanged2021'] = 'yes'
    req.session.data['showBanner'] = "yes"

    res.redirect('/V1-0/AO/appeals/record-entries-routes')
  
// no not being appealed - leave with no tag  
  } else {
    res.redirect('/V1-0/AO/appeals/record-entries-routes')
  }
})

//Add appeal outcome to core component
router.post('/V1-0/AO/appeals/core-take-off-appeal-2021', function (req, res) {

  let coreOnHold = req.session.data['core-take-off-appeal-2021']
//I need to update grade
  if (coreOnHold === 'update') {
    res.redirect('/V1-0/AO/appeals/change-core-result-appeal-2021')

// I need to withdraw the appeal 
} else if (coreOnHold === 'withdraw') {  
  req.session.data['newcoreOnHold2021'] = 'no'
  req.session.data['appealWithdrawn'] = 'yes'
  req.session.data['showBanner'] = "yes"


  res.redirect('/V1-0/AO/appeals/record-entries-routes')

//Result the same - check and submit confirm   
  } else {
    res.redirect('/V1-0/AO/appeals/check-result-change-appeal-2021')
  }
})

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/processing-data-file-registrations')  
  } 
  if (whatData == "Assessments data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/processing-data-file-assessments')  
  } 
  if (whatData == "Results data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/processing-data-file-results')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/V2-0/AO/download-data/select-data-type-error')
  // }

})


// Run this code when a form is submitted to 'data-type-answer'
router.post('/default-filter-data', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "cohort-data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/registrations-filters')  
  } 
  if (whatData == "learner-status-data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/registrations-filters')  
  } 

})

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer-double', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/processing-data-file-registrations-double')  
  } 
  if (whatData == "Assessments data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/processing-data-file-assessments-double')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/V2-0/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer-filters', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/select-cohorts-and-learner')  
  } 
  if (whatData == "Assessments data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/select-assessment-periods')  
  } 
  if (whatData == "Results data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/select-assessment-periods-results')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/V2-0/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer-list', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/registrations')  
  } 
  if (whatData == "Assessments data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/assessments')  
  } 
  if (whatData == "Results data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/results')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/V2-0/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'data-type-answer'
router.post('/data-type-answer-list', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['type']

  // Check whether the variable matches a condition
  if (whatData == "Registrations data"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/processing-data-file-registrations')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/V2-0/AO/download-data/select-data-type-error')
  // }

})


// Run this code when a form is submitted to 'cohorts-answer'
router.post('/cohorts-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['cohort']

  // Check whether the variable matches a condition
  if (whatData == "cohort"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/current/select-learner-status')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/V2-0/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'cohorts-answer'
router.post('/learner-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['learner']

  // Check whether the variable matches a condition
  if (whatData == "learner"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/select-optional-coloumns')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/V2-0/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'cohorts-answer'
router.post('/periods-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['periods4']

  // Check whether the variable matches a condition
  if (whatData == "periods4"){
    // Send user to next page
    res.redirect('/V2-0/AO/download-data/select-optional-columns-assessments-results')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/V2-0/AO/download-data/select-data-type-error')
  // }

})

// Run this code when a form is submitted to 'cohorts-answer'
router.post('/assessment-periods-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whatData = req.session.data['aseessments-periods']

  // Check whether the variable matches a condition
  if (whatData == "aseessments-periods"){
    // Send user to next page
    res.redirect('/V2-0/AO/assessments/assessments-download-data/assessments-optional-columns')  
  } 
  // else {
  //   // Send user to ineligible page
  //   res.redirect('/V2-0/AO/download-data/select-data-type-error')
  // }

})

//2021 core grade changed - after clicking result the same 
router.post('/V1-0/AO/appeals/check-result-change-appeal-2021', function(req, res) {
  
  req.session.data['core-result-changed-2021'] = 'yes'
 
  res.redirect('/V1-0/AO/appeals/check-result-change-appeal-2021')

})

//2021 core grade changed appeal
router.post('/V1-0/AO/appeals/confirm-result-change-appeal-2021', function (req, res) {
  
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
 
  res.redirect('/V1-0/AO/appeals/record-entries-routes')

})

//Appeals - request a grade change

router.post('/V1-0/AO/appeals/exceptions/request-grade-change-routes', function (req, res) {

  let gradeChangeconfirmation = req.session.data['request-grade-change']
  let uln = req.session.data['uln']

  if (gradeChangeconfirmation === 'learner-page') {
    req.session.data['uln'] = uln
    req.session.data['newcoreOnHold2021'] = 'locked'
    res.redirect('/V1-0/AO/appeals/record-entries-routes')

  } else if (gradeChangeconfirmation === 'search'){

    res.redirect('/V1-0/AO/appeals/search-learner')
  
  } else {
    res.redirect('/V1-0/AO/tlevels-dashboard')
  }
})

//EXCEPTIONS

router.post('/V1-0/AO/appeals/exceptions/exceptions-process-put-on-appeal', function (req, res) {

  let appealGrade = req.session.data['exceptions-appeal']
  let uln = req.session.data['uln']

  if (appealGrade === 'appeal-record') {
    
    res.redirect('/V1-0/AO/appeals/exceptions/exceptions-process-confirmation')

  } else{
    req.session.data['uln'] = uln
    res.redirect('/V1-0/AO/appeals/record-entries-routes')
  }
})

//Review t level details

router.post('/V1-0/AO/t-levels/verify-tlevel-details-routes', function (req, res) {

  let correctDetails = req.session.data['verify-details']


  if (correctDetails === 'yes') {
    
    res.redirect('/V1-0/AO/t-levels/review-t-levels-confirmation')

  } else{
    
    res.redirect('/V1-0/AO/t-levels/query-t-level')
  }
})

//Registrations

//Manage registrations
//Status change 
router.post('/V1-0/AO/registrations/manage/registrations-status-change', function (req, res) {

  let statusChange = req.session.data['status']


  if (statusChange === 'withdraw') {
    
    res.redirect('/V1-0/AO/registrations/manage/withdraw-registration')

  } else{
    
    res.redirect('/V1-0/AO/registrations/manage/delete-registration')
  }
})

//Withdraw learner registration
router.post('/V1-0/AO/registrations/manage/confirm-withdraw-answer', function (req, res) {

  let statusChange = req.session.data['withdraw-answer']


  if (statusChange === 'Yes') {
    req.session.data['withdrawn'] = 'yes'
    res.redirect('/V1-0/AO/registrations/manage/confirmation-reg-withdraw')

  } else{
    
    res.redirect('/V1-0/AO/registrations/manage/change-status')
  }
})

//Rejoin learner registration
router.post('/V1-0/AO/registrations/manage/confirm-rejoin-answer', function (req, res) {

  let statusChange = req.session.data['rejoin-answer']


  if (statusChange === 'Yes') {
    req.session.data['withdrawn'] = ''
    res.redirect('/V1-0/AO/registrations/manage/confirmation-reg-rejoin')

  } else{
    
    res.redirect('/V1-0/AO/registrations/manage/change-status')
  }
})

//Delete learner registration 
router.post('/V1-0/AO/registrations/manage/confirm-delete-answer', function (req, res) {

  let statusChange = req.session.data['delete-answer']


  if (statusChange === 'Yes') {
    req.session.data['deleted'] = 'yes'
    res.redirect('/V1-0/AO/registrations/manage/confirmation-reg-deleted')

  } else{
    
    res.redirect('/V1-0/AO/registrations/manage/registration-details')
  }
})



//Change registered name - manage registrations

router.post('/V1-0/AO/registrations/manage/registration-change-name', function (req, res) {

    req.session.data['name-change'] = 'yes'
    res.redirect('/V1-0/AO/registrations/manage/change-successful')

})

//Change registered dob - manage registrations

router.post('/V1-0/AO/registrations/manage/registration-change-dob', function (req, res) {

  req.session.data['dob-change'] = 'yes'
  res.redirect('/V1-0/AO/registrations/manage/change-successful')

})

//Change registered provider - manage registrations

router.post('/V1-0/AO/registrations/manage/registration-change-provider', function (req, res) {

  req.session.data['provider-change'] = 'yes'
  res.redirect('/V1-0/AO/registrations/manage/change-successful')

})

//Update/remove registered specialism - manage registrations

router.post('/V1-0/AO/registrations/manage/update-specialism-answer', function (req, res) {

  let specialismsChange = req.session.data['update-specialism-answer']


  if (specialismsChange === 'update') {
    req.session.data['specialism'] = 'updated'
    res.redirect('/V1-0/AO/registrations/manage/change-specialism')

  } else{
    req.session.data['specialism'] = 'removed'
    res.redirect('/V1-0/AO/registrations/manage/registration-details')
  }

})

//Change specialism - manage registrations

router.post('/V1-0/AO/registrations/manage/update-specialism-choice', function (req, res) {

    req.session.data['specialism'] = 'updated'
    res.redirect('/V1-0/AO/registrations/manage/change-successful')

})

//Add new registration

//Add registrations - uln routes
router.post('/V1-0/AO/registrations/add/add-registration-uln-routes', function (req, res) {

  let uln = req.session.data['uln']
  if (uln === '1234567890') {

    req.session.data['uln'] = uln
    res.redirect('/V1-0/AO/registrations/add/change-uln-already-registered')

  } else{
    res.redirect('/V1-0/AO/registrations/add/add-registration-q2-name')
  }

})



//Add registration - specialism routes
router.post('/V1-0/AO/registrations/add/add-registration-specialism-routes', function (req, res) {

  let addSpecialism = req.session.data['specialism']
  if (addSpecialism === 'yes') {

    res.redirect('/V1-0/AO/registrations/add/add-registration-q6b-specialism')

  } else{
    res.redirect('/V1-0/AO/registrations/add/add-registration-q7-year')
  }

})

//Add registration - change uln

router.post('/V1-0/AO/registrations/add/add-change-uln', function (req, res) {

  let uln = req.session.data['change-uln']
  if (uln === '1234567890') {
    req.session.data['uln'] = uln
    res.redirect('/V1-0/AO/registrations/add/change-uln-already-registered')

  } else{
    req.session.data['uln-changed'] = 'yes'
    res.redirect('/V1-0/AO/registrations/add/add-registration-check-submit')
  }

})

//Add registration - change name
router.post('/V1-0/AO/registrations/add/add-change-name', function (req, res) {

  req.session.data['name-changed'] = 'yes'
  res.redirect('/V1-0/AO/registrations/add/add-registration-check-submit')

})

//Add registration - change dob
router.post('/V1-0/AO/registrations/add/add-change-dob', function (req, res) {
  let dobMonth = req.session.data['dob-month-change']
  if (dobMonth === "1"){
    req.session.data['dob-month-changed'] = 'January'
  
  }else if (dobMonth === "2"){
    req.session.data['dob-month-changed'] = 'Februrary'

  }else if (dobMonth === "3"){
  req.session.data['dob-month-changed'] = 'March'

  }else if (dobMonth === "4"){
  req.session.data['dob-month-changed'] = 'April'

  }else if (dobMonth === "5"){
    req.session.data['dob-month-changed'] = 'May'

  }else if (dobMonth === "6"){
    req.session.data['dob-month-changed'] = 'June'

  }else if (dobMonth === "7"){
    req.session.data['dob-month-changed'] = 'July'

  }else if (dobMonth === "8"){
    req.session.data['dob-month-changed'] = 'August'

  }else if (dobMonth === "9"){
    req.session.data['dob-month-changed'] = 'September'

  }else if (dobMonth === "10"){
    req.session.data['dob-month-changed'] = 'October'

  }else if (dobMonth === "11"){
    req.session.data['dob-month-changed'] = 'November'
  
 } else {
  req.session.data['dob-month-changed'] = 'December'

 }

  req.session.data['dob-changed'] = 'yes'
  res.redirect('/V1-0/AO/registrations/add/add-registration-check-submit')

})

//Add registration - change provider
router.post('/V1-0/AO/registrations/add/add-change-provider', function (req, res) {

  req.session.data['provider-changed'] = 'yes'
  res.redirect('/V1-0/AO/registrations/add/add-registration-check-submit')

})

//Add registration - change core

router.post('/V1-0/AO/registrations/add/add-change-core', function (req, res) {

  req.session.data['core-changed'] = 'yes'
  res.redirect('/V1-0/AO/registrations/add/add-registration-check-submit')

})

//Add registration - change specialism

router.post('/V1-0/AO/registrations/add/add-change-registration-specialism-routes', function (req, res) {

  let specialismAdd = req.session.data['specialism']

  if(specialismAdd === "yes"){
    res.redirect('/V1-0/AO/registrations/add/change-registration-q6b-specialism')
  }else{
    req.session.data['specialism'] = "no"
  res.redirect('/V1-0/AO/registrations/add/add-registration-check-submit')
  }
})

//Add registration - change specialism choice

router.post('/V1-0/AO/registrations/add/add-change-specialism-choice', function (req, res) {
  req.session.data['specialism'] = "yes"
  req.session.data['add-specialism-changed'] = 'yes'
  res.redirect('/V1-0/AO/registrations/add/add-registration-check-submit')

})

//Add registration - change specialism

router.post('/V1-0/AO/registrations/add/add-change-registration-specialism-routes', function (req, res) {

  let specialismAdd = req.session.data['specialism']

  if(specialismAdd === "yes"){
    res.redirect('/V1-0/AO/registrations/add/change-registration-q6b-specialism')
  }else{
  res.redirect('/V1-0/AO/registrations/add/add-registration-check-submit')
  }
})


// Manage Providers 

//Find provider routes

router.post('/V1-0/AO/providers/select-providers-routes', function (req, res) {

  let providerChoice = req.session.data['provider']
  if (providerChoice === 'tl5') {
    res.redirect('/V1-0/AO/providers/centre-details-existing')

  } else{
    res.redirect('/V1-0/AO/providers/select-providers-tlevels')
  }

})

// Add additional T level to provider list 

router.post('/V1-0/AO/providers/confirmation-tlevels-added-additional', function (req, res) {

  req.session.data['tlevel-added'] = 'yes'
  res.redirect('/V1-0/AO/providers/centre-details-existing')

})

// TEST to combine routes to save on creating 3 individual routes
// until method of sending values through anchor tags/href is figured out

//Remove T Level from provider

router.post('/V1-0/AO/providers/confirmation-tlevel-removed', function (req, res) {

  let tlevel1 = req.session.data['tLevel-answer']

  if (tlevel1 === 'Yes') {
    res.redirect('/V1-0/AO/providers/confirmation-tlevel-removed')
  } else{
    res.redirect('/V1-0/AO/providers/centre-details-existing')
  }

})