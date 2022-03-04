function search() {
  // Locate the card elements
  let cards = document.querySelectorAll('.app-application-card')
  console.log(cards.length)
  cardshidden = 0
  // Locate the search input
  let search_query = document.getElementById("keywords").value;
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if(cards[i].innerText.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
        document.getElementById('no-results').classList.add('is-hidden')
        // ...remove the `.is-hidden` class.
        cards[i].classList.remove("is-hidden");
    }  else {
      // Otherwise, add the class.
      cards[i].classList.add("is-hidden");
      cardshidden++
      console.log(cards.length)
    }
  }
    if (cardshidden === 11 ) {
      console.log('no results')
      sessionStorage.setItem('noResults', 'yes')
      document.getElementById('sortAndExport').classList.add('govuk-visually-hidden')
      document.getElementById('pagination').classList.add('govuk-visually-hidden')
      document.getElementById('no-results').classList.remove('is-hidden')
  }
  //show clear search
  document.getElementById('clearSearch').classList.remove("govuk-visually-hidden")
}

function tlevelsearch() {
  console.log('tlevelsearch')
  // Locate the card elements
  let cards = document.querySelectorAll('input[name="t-level"]')
  console.log(cards)
  // Locate the search input
  let search_query = document.getElementById("tlevel-search").value;
  console.log (search_query)
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if(cards[i].innerText.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
        // ...remove the `.is-hidden` class.
        cards[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class.
      cards[i].classList.add("is-hidden");
    }
  }
}

function clearSearch() {
  let hidden = document.querySelectorAll(".app-application-card")
  console.log(hidden)
  hidden.forEach(function(clearHidden) {
    console.log(clearHidden)
    clearHidden.classList.remove('is-hidden')
  })
  document.getElementById('keywords').value = ''
  document.getElementById('clearSearch').classList.add("govuk-visually-hidden")
  document.getElementById('sortAndExport').classList.remove('govuk-visually-hidden')
  document.getElementById('pagination').classList.remove('govuk-visually-hidden')
  document.getElementById('no-results').classList.add('is-hidden')

  sessionStorage.setItem('noResults', 'no')
  
}

function applyFilters() {
  const filters = Array.from(document.querySelectorAll('input:checked'), ({ value }) => value);
  const selectedFilters = document.getElementById("selectedFilters")
  document.getElementById('selectedFiltersWrapper').classList.remove("govuk-visually-hidden")
  let arrayOutput = ''

  for (var i = 0; i < filters. length; i++) {
    console.log(filters[i])
    arrayOutput += '<p class="govuk-body govuk-!-margin-bottom-1" ><a class="app-filter__tag" href="#"><span class="govuk-visually-hidden">Remove this filter</span>' + filters[i] + ' </a></p>'
  };
  selectedFilters.innerHTML = arrayOutput
  document.getElementById('clearFilters').classList.remove('govuk-visually-hidden')
}

function clearFilters() {
  document.getElementById('selectedFiltersWrapper').classList.add("govuk-visually-hidden")
  let inputs = document.querySelectorAll('input[type=checkbox]')
  inputs.forEach(item => {
    item.checked = false
  })
  document.getElementById('clearFilters').classList.add('govuk-visually-hidden')

}
