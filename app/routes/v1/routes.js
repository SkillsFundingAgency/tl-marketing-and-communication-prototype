module.exports = function(router) {

const version = 'V1-0'

//' + version + ' routes

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
    
      req.session.data['newplacementResult'] = "yes"
      req.session.data['newindustryPlacement'] = newResult
      
      res.redirect('/' + version + '/providers/change-ip-result-successful')
    
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
  
  
  
  //AO
  
  // Add result - Results
  router.post('/' + version + '/AO/results/add-core-result', function (req, res) {
    let addResult = req.session.data['result-answer']
  
    req.session.data['gradeShown'] = "added"
    req.session.data['newResult'] = addResult
    
    res.redirect('/' + version + '/AO/results/add-core-result-successful')
  
  });
  
  //Change result - Results
  router.post('/' + version + '/AO/results/change-core-result-successful', function (req, res) {
    let changeResult = req.session.data['result-answer']
  
    req.session.data['gradeShown'] = "changed"
    req.session.data['updateResult'] = changeResult
    
    res.redirect('/' + version + '/AO/results/change-core-result-successful')
  
  });
  
  //Assessment Entries
  
  //Add assessment entry for core 
  router.post('/' + version + '/AO/assessments/add-first-core-entry', function (req, res) {
    let addEntry = req.session.data['entry-answer']
    if(addEntry === 'Summer 2021'){
      req.session.data['newEntry'] = "yes"
      req.session.data['addEntry'] = addEntry
      
      res.redirect('/' + version + '/AO/assessments/add-entry-successful')
  
    } else {
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  
  
  });
  
  //remove assessment entry for core 
  router.post('/' + version + '/AO/assessments/remove-entry', function (req, res) {
    let removeEntry = req.session.data['rem-answer']
    if(removeEntry === 'Not specified'){
      req.session.data['newEntry'] = ""
   
      res.redirect('/' + version + '/AO/assessments/add-entry-successful')
  
    }else {
      res.redirect('/' + version + '/AO/assessments/learners-assessment-entries')
    }
  
  
  });
  
  //Appeals
  
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
  
  //EXCEPTIONS
  
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
  
  //Review T Level details
  
  router.post('/' + version + '/AO/t-levels/verify-tlevel-details-routes', function (req, res) {
  
    let correctDetails = req.session.data['verify-details']
  
  
    if (correctDetails === 'yes') {
      
      res.redirect('/' + version + '/AO/t-levels/review-t-levels-confirmation')
  
    } else{
      
      res.redirect('/' + version + '/AO/t-levels/query-t-level')
    }
  })
  
  //Registrations
  
  //Manage registrations
  //Status change 
  router.post('/' + version + '/AO/registrations/manage/registrations-status-change', function (req, res) {
  
    let statusChange = req.session.data['status']
  
  
    if (statusChange === 'withdraw') {
      
      res.redirect('/' + version + '/AO/registrations/manage/withdraw-registration')
  
    } else{
      
      res.redirect('/' + version + '/AO/registrations/manage/delete-registration')
    }
  })
  
  //Withdraw learner registration
  router.post('/' + version + '/AO/registrations/manage/confirm-withdraw-answer', function (req, res) {
  
    let statusChange = req.session.data['withdraw-answer']
  
  
    if (statusChange === 'Yes') {
      req.session.data['withdrawn'] = 'yes'
      res.redirect('/' + version + '/AO/registrations/manage/confirmation-reg-withdraw')
  
    } else{
      
      res.redirect('/' + version + '/AO/registrations/manage/change-status')
    }
  })
  
  //Withdrawn learner option - rejoin or register new
  router.post('/' + version + '/AO/registrations/manage/withdrawn-option-answer', function (req, res) {
  
    let withdrawnOption = req.session.data['withdrawn-answer']
  
  
    if (withdrawnOption === 'reactivate') {
      res.redirect('/' + version + '/AO/registrations/manage/rejoin-registration')
  
    } else{
      
      res.redirect('/' + version + '/AO/registrations/manage/new-course/provider-new-course')
    }
    
  })
  
  //Rejoin learner registration
  router.post('/' + version + '/AO/registrations/manage/confirm-rejoin-answer', function (req, res) {
  
    let statusChange = req.session.data['rejoin-answer']
  
  
    if (statusChange === 'Yes') {
      req.session.data['withdrawn'] = ''
      res.redirect('/' + version + '/AO/registrations/manage/confirmation-reg-rejoin')
  
    } else{
      
      res.redirect('/' + version + '/AO/registrations/manage/change-status')
    }
  })
  
  //Delete learner registration 
  router.post('/' + version + '/AO/registrations/manage/confirm-delete-answer', function (req, res) {
  
    let statusChange = req.session.data['delete-answer']
  
  
    if (statusChange === 'Yes') {
      req.session.data['deleted'] = 'yes'
      res.redirect('/' + version + '/AO/registrations/manage/confirmation-reg-deleted')
  
    } else{
      
      res.redirect('/' + version + '/AO/registrations/manage/registration-details')
    }
  })
  
  //Register new course - specialism routes
  
  router.post('/' + version + '/AO/registrations/manage/new-course/new-course-specialism-answer', function (req, res) {
  
    let addSpecialism = req.session.data['update-specialism-answer']
    if (addSpecialism === 'yes') {
  
      res.redirect('/' + version + '/AO/registrations/manage/new-course/specialism-new-course')
  
    } else{
      res.redirect('/' + version + '/AO/registrations/manage/new-course/academic-year-new-course')
    }
  
  })
  
  
  
  //Change registered name - manage registrations
  
  router.post('/' + version + '/AO/registrations/manage/registration-change-name', function (req, res) {
  
      req.session.data['name-change'] = 'yes'
      res.redirect('/' + version + '/AO/registrations/manage/change-successful')
  
  })
  
  //Change registered dob - manage registrations
  
  router.post('/' + version + '/AO/registrations/manage/registration-change-dob', function (req, res) {
  
    req.session.data['dob-change'] = 'yes'
    res.redirect('/' + version + '/AO/registrations/manage/change-successful')
  
  })
  
  //Change registered provider - manage registrations
  
  router.post('/' + version + '/AO/registrations/manage/registration-change-provider', function (req, res) {
  
    req.session.data['provider-change'] = 'yes'
    res.redirect('/' + version + '/AO/registrations/manage/change-successful')
  
  })
  
  //Update/remove registered specialism - manage registrations
  
  router.post('/' + version + '/AO/registrations/manage/update-specialism-answer', function (req, res) {
  
    let specialismsChange = req.session.data['update-specialism-answer']
  
  
    if (specialismsChange === 'update') {
      req.session.data['specialism'] = 'updated'
      res.redirect('/' + version + '/AO/registrations/manage/change-specialism')
  
    } else{
      req.session.data['specialism'] = 'removed'
      res.redirect('/' + version + '/AO/registrations/manage/registration-details')
    }
  
  })
  
  //Change specialism - manage registrations
  
  router.post('/' + version + '/AO/registrations/manage/update-specialism-choice', function (req, res) {
  
      req.session.data['specialism'] = 'updated'
      res.redirect('/' + version + '/AO/registrations/manage/change-successful')
  
  })
  
  //Add new registration
  
  //Add registrations - uln routes
  router.post('/' + version + '/AO/registrations/add/add-registration-uln-routes', function (req, res) {
  
    let uln = req.session.data['uln']
    if (uln === '1234567890') {
  
      req.session.data['uln'] = uln
      res.redirect('/' + version + '/AO/registrations/add/change-uln-already-registered')
  
    } else{
      res.redirect('/' + version + '/AO/registrations/add/add-registration-q2-name')
    }
  
  })
  
  
  
  //Add registration - specialism routes
  router.post('/' + version + '/AO/registrations/add/add-registration-specialism-routes', function (req, res) {
  
    let addSpecialism = req.session.data['specialism']
    if (addSpecialism === 'yes') {
  
      res.redirect('/' + version + '/AO/registrations/add/add-registration-q6b-specialism')
  
    } else{
      res.redirect('/' + version + '/AO/registrations/add/add-registration-q7-year')
    }
  
  })
  
  //Add registration - change uln
  
  router.post('/' + version + '/AO/registrations/add/add-change-uln', function (req, res) {
  
    let uln = req.session.data['change-uln']
    if (uln === '1234567890') {
      req.session.data['uln'] = uln
      res.redirect('/' + version + '/AO/registrations/add/change-uln-already-registered')
  
    } else{
      req.session.data['uln-changed'] = 'yes'
      res.redirect('/' + version + '/AO/registrations/add/add-registration-check-submit')
    }
  
  })
  
  //Add registration - change name
  router.post('/' + version + '/AO/registrations/add/add-change-name', function (req, res) {
  
    req.session.data['name-changed'] = 'yes'
    res.redirect('/' + version + '/AO/registrations/add/add-registration-check-submit')
  
  })
  
  //Add registration - change dob
  router.post('/' + version + '/AO/registrations/add/add-change-dob', function (req, res) {
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
    res.redirect('/' + version + '/AO/registrations/add/add-registration-check-submit')
  
  })
  
  //Add registration - change provider
  router.post('/' + version + '/AO/registrations/add/add-change-provider', function (req, res) {
  
    req.session.data['provider-changed'] = 'yes'
    res.redirect('/' + version + '/AO/registrations/add/add-registration-check-submit')
  
  })
  
  //Add registration - change core
  
  router.post('/' + version + '/AO/registrations/add/add-change-core', function (req, res) {
  
    req.session.data['core-changed'] = 'yes'
    res.redirect('/' + version + '/AO/registrations/add/add-registration-check-submit')
  
  })
  
  //Add registration - change specialism
  
  router.post('/' + version + '/AO/registrations/add/add-change-registration-specialism-routes', function (req, res) {
  
    let specialismAdd = req.session.data['specialism']
  
    if(specialismAdd === "yes"){
      res.redirect('/' + version + '/AO/registrations/add/change-registration-q6b-specialism')
    }else{
      req.session.data['specialism'] = "no"
    res.redirect('/' + version + '/AO/registrations/add/add-registration-check-submit')
    }
  })
  
  //Add registration - change specialism choice
  
  router.post('/' + version + '/AO/registrations/add/add-change-specialism-choice', function (req, res) {
    req.session.data['specialism'] = "yes"
    req.session.data['add-specialism-changed'] = 'yes'
    res.redirect('/' + version + '/AO/registrations/add/add-registration-check-submit')
  
  })
  
  //Add registration - change specialism
  
  router.post('/' + version + '/AO/registrations/add/add-change-registration-specialism-routes', function (req, res) {
  
    let specialismAdd = req.session.data['specialism']
  
    if(specialismAdd === "yes"){
      res.redirect('/' + version + '/AO/registrations/add/change-registration-q6b-specialism')
    }else{
    res.redirect('/' + version + '/AO/registrations/add/add-registration-check-submit')
    }
  })
  
  
  // Manage Providers 
  
  //Find provider routes
  
  router.post('/' + version + '/AO/providers/select-providers-routes', function (req, res) { 

    let providerChoice = req.session.data['provider-list']
  
    if (providerChoice === 'tl5') {
      res.redirect('/' + version + '/AO/providers/centre-details-existing')
    } else {
        res.redirect('/' + version + '/AO/providers/select-providers-tlevels'
        )}
  
    })
  

  // Add additional T level to provider list 
  
  router.post('/' + version + '/AO/providers/confirmation-tlevels-added-additional', function (req, res) {
  
    req.session.data['tlevel-added'] = 'yes'
    res.redirect('/' + version + '/AO/providers/centre-details-existing')
  
  })
  
  //Remove T Level from provider
  
  router.post('/' + version + '/AO/providers/confirmation-tlevel-removed', function (req, res) {
  
    let tlevel1 = req.session.data['tLevel-answer']
  
    if (tlevel1 === 'Yes') {
      res.redirect('/' + version + '/AO/providers/confirmation-tlevel-removed')
    } else{
      res.redirect('/' + version + '/AO/providers/centre-details-existing')
    }
  
  })
}