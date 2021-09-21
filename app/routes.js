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

    
module.exports = router
