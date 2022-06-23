const cards = document.querySelectorAll('.govuk-summary-list__row')

function hideCards () {
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.add('govuk-visually-hidden')
  }
}

function showCards () {
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove('govuk-visually-hidden')
  }
}

function search () {
  // Locate the card elements
  console.log(cards.length)
  let cardshidden = 0
  let cardsshown = 0
  // Locate the search input
  const search_query = document.getElementById('keywords').value
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if (cards[i].innerText.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
      document.getElementById('no-results').classList.add('govuk-visually-hidden')
      // ...remove the `.is-hidden` class.
      cards[i].classList.remove('govuk-visually-hidden')
      cardsshown++
    } else {
      // Otherwise, add the class.
      cards[i].classList.add('govuk-visually-hidden')
      cardshidden++
      console.log(cards.length)
    }
  }
  if (cardshidden === cards.length) {
    console.log('no results')
    sessionStorage.setItem('noResults', 'yes')
    document.getElementById('sortAndExport').classList.add('govuk-visually-hidden')
    document.getElementById('pagination').classList.add('govuk-visually-hidden')
    document.getElementById('no-results').classList.remove('govuk-visually-hidden')
  }
  // show clear search
  document.getElementById('clearSearch').classList.remove('govuk-visually-hidden')
  document.getElementById('paginationId').classList.add('govuk-visually-hidden')
}

function tlevelsearch () {
  console.log('tlevelsearch')
  // Locate the card elements
  const cards = document.querySelectorAll('input[name="t-level"]')
  console.log(cards)
  // Locate the search input
  const search_query = document.getElementById('tlevel-search').value
  console.log(search_query)
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if (cards[i].innerText.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
      // ...remove the `.is-hidden` class.
      cards[i].classList.remove('is-hidden')
    } else {
      // Otherwise, add the class.
      cards[i].classList.add('is-hidden')
    }
  }
}

function clearSearch () {
  const hidden = document.querySelectorAll('.govuk-summary-list__row')
  console.log(hidden)
  hidden.forEach(function (clearHidden) {
    console.log(clearHidden)
    clearHidden.classList.remove('govuk-visually-hidden')
  })
  document.getElementById('keywords').value = ''
  document.getElementById('clearSearch').classList.add('govuk-visually-hidden')
  document.getElementById('paginationId').classList.remove('govuk-visually-hidden')
  document.getElementById('sortAndExport').classList.remove('govuk-visually-hidden')
  document.getElementById('pagination').classList.remove('govuk-visually-hidden')
  document.getElementById('no-results').classList.add('govuk-visually-hidden')

  sessionStorage.setItem('noResults', 'no')
}

function applyFilters () {
  const selectedFiltersContainer = document.getElementById('selectedFilters')
  const checkedInputs = Array.from(document.querySelectorAll('input:checked'))
  // if there are filters selected then start hiding and showing elements
  if (checkedInputs.length) {
    // clear any pre-selected filters
    selectedFiltersContainer.innerHTML = ''
    // hide all cards
    hideCards()
    // iterate over selected filters and run the showCards function to show the cards mathcing the filters
    checkedInputs.forEach(showCards)
    // Show the 'Selected filters' label
    document.getElementById('selectedFiltersWrapper').classList.remove('govuk-visually-hidden')
    // Show the Clear filters button
    document.getElementById('clearFilters').classList.remove('govuk-visually-hidden')
  }

  function showCards (selectedInput) {
    const filterLabel = selectedInput.value
    const cardClasstoHide = selectedInput.getAttribute('data-filterval')
    const cardsToHide = document.querySelectorAll('.' + cardClasstoHide)
    // Add the Filter Tag to the top of the Filter list component
    selectedFiltersContainer.innerHTML += '<p class="govuk-body govuk-!-margin-bottom-1" ><span class="app-filter__tag">' + filterLabel + ' </span></p>'
    // iterate over the cardsToHide and hide them
    cardsToHide.forEach.call(cardsToHide, function (el) {
      el.classList.remove('govuk-visually-hidden')
    })
  }

}

function clearFilters () {
  document.getElementById('selectedFiltersWrapper').classList.add('govuk-visually-hidden')
  const inputs = document.querySelectorAll('input[type=checkbox]')
  inputs.forEach(item => {
    item.checked = false
  })
  document.getElementById('clearFilters').classList.add('govuk-visually-hidden')
  showCards()
  // let cards = document.querySelectorAll('.govuk-summary-list__row')

  // for (var a = 0; a < cards.length; a++) {
  //   cards[a].style.display = ''
  // }
}
