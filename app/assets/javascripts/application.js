/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

function goBack() {
  window.history.back();
}

window.onload = function () {
  // Get current URL
  let params = new URLSearchParams(document.location.search);
  // Get URL parameter
  let check = params.get("change-answer");
  // Get current page form ID
  let form = (document.getElementsByTagName('form').length) ? document.getElementsByTagName('form')[0].id : null;
  // console.log(check)
  // console.log(document.referrer)
  // console.log(form)
  // Compare URL parameter
  if ( check === 'yes') {
    // Set form action to document referrer
    document.getElementById(form).action = document.referrer
  }
}


