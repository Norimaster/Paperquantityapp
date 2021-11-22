// Imports
const {
  getSizeOfBook,
  getHeight,
  getQuantity,
  getWidthPerBookPerPc,
  getHeightPerBookPerPc,
} = require('./helpers')
const { MATERIAL } = require('./data')
const {
  languageResult,
  updatePageLanguage,
  populateLanguageSelector,
} = require('./translation')
populateLanguageSelector()

document.getElementById('needInMeter').style.visibility = 'hidden'
const languageSelector = document.getElementById('languageSelector')

languageSelector.addEventListener('change', (event) => {
  const { value: language } = event.target
  console.log('😸😸😸😸😸😸 Change language', { language })
  updatePageLanguage(language)
})

updatePageLanguage(languageSelector.value)

//How many pieces of sheets the customer needs to order
const getNeedInSheets = () => {
  let result = Math.round(
    1.1 *
      Math.ceil(
        +getQuantity() / (+getHeightPerBookPerPc() * +getWidthPerBookPerPc())
      )
  )
  return result
}
// How many meters the customer needs to order
const getNeedInMeter = () => {
  let needRunningmeter_plus10percent = Math.ceil(
    (1.1 * (+getQuantity() / +getWidthPerBookPerPc()) * (+getHeight() + 2)) /
      100
  )
  return needRunningmeter_plus10percent
}
const chooseSize = document.getElementById('sizeofbook')
chooseSize.addEventListener('change', getSizeOfBook)

// Final function to populate the result field
const calculate = () => {
  const material = document.getElementById('typeOfMaterial').value
  const language = languageSelector.value
  let result
  if (getNeedInMeter() === Infinity || getNeedInSheets() === Infinity) {
    document.getElementById('needInMeter').style.visibility = 'hidden'
    alert(`${languageResult[language].alert}`)
  } else {
    switch (material) {
      case MATERIAL.SHEET_LONGGRAIN:
      case MATERIAL.SHEET_SHORTGRAIN:
        {
          // It calculates the need for sheets if sheets are selected
          document.getElementById('needInMeter').style.visibility = 'visible'
          result = `${
            languageResult[language].resultText
          } ${getNeedInSheets()} ${languageResult[language].resultPieces}`
        }
        break
      default:
        {
          // It calculates the need for running meter if a specific material is selected
          document.getElementById('needInMeter').style.visibility = 'visible'
          result = `${
            languageResult[language].resultText
          } ${getNeedInMeter()} ${languageResult[language].resultMeter}`
        }
        break
    }
  }
  document.getElementById('needInMeter').value = result

  console.log(`The result is: ${result}`)
}
const calculateBtn = document.querySelector('#calculate')
calculateBtn.addEventListener('click', calculate)
