// Imports
const {
  getSizeOfBook,
  getHeight,
  getQuantity,
  getWidthPerBookPerPc,
  getHeightPerBookPerPc,
} = require('./helpers')
const {
  sizeOfBookNamesEN,
  MATERIAL,
  materialNamesEN,
  materialNamesHU,
  populateMaterialSelectorHU,
  populateMaterialSelectorEN,
  populateSizeSelectorHU,
  populateSizeSelectorEN,
  sizeOfBookNamesHU,
} = require('./data')
document.getElementById('needInMeter').style.visibility = 'hidden'
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

//language field translations
var language = {
  hun: {
    calctitle: 'Papír szükséglet',
    langBooksize: 'Méret',
    langWidth: 'Szélesség (cm)',
    langHeight: 'Hosszúság (cm)',
    langSpine: 'Gerinc (cm)',
    langQuantity: 'Mennyiség (db)',
    langMaterial: 'Anyag',
    langSelector: 'Magyar',
  },
}
const resultTextEn = 'Your need is'
const resultTextHu = 'A rendelési mennyiség'
const resultPiecesEn = 'piece(s).'
const resultMeterEn = 'meter.'
const resultPiecesHu = 'darab.'
const resultMeterHu = 'méter.'

//define language via window hash

if (window.location.hash) {
  if (window.location.hash === '#hun') {
    populateMaterialSelectorHU()
    populateSizeSelectorHU()
    if (window.location.hash) {
      if (window.location.hash === '#hun') {
        ;(calculationtitle.textContent = language.hun.calctitle),
          (languageBooksize.textContent = language.hun.langBooksize),
          (languageWidth.textContent = language.hun.langWidth),
          (languageHeight.textContent = language.hun.langHeight),
          (languageSpine.textContent = language.hun.langSpine),
          (languageQuantity.textContent = language.hun.langQuantity),
          (languageMaterial.textContent = language.hun.langMaterial),
          (languageSelector.textContent = language.hun.langSelector)
      }
    }
  } else {
    populateMaterialSelectorEN()
    populateSizeSelectorEN()
  }
} else {
  populateMaterialSelectorEN()
  populateSizeSelectorEN()
}

// Final function to populate the result field
const calculate = () => {
  const material = document.getElementById('typeOfMaterial').value
  let result
  if (getNeedInMeter() === Infinity || getNeedInSheets() === Infinity) {
    document.getElementById('needInMeter').style.visibility = 'hidden'
    alert('The book is too large for the selected material!')
  } else {
    switch (material) {
      case MATERIAL.SHEET_LONGGRAIN:
      case MATERIAL.SHEET_SHORTGRAIN: {
        // It calculates the need for sheets if sheets are selected
        if (window.location.hash) {
          if (window.location.hash === '#hun') {
            result = `${resultTextHu} ${getNeedInSheets()} ${resultPiecesHu}`
          } else {
            result = `${resultTextEn} ${getNeedInSheets()} ${resultPiecesEn}`
          }
        } else {
          result = `${resultTextEn} ${getNeedInSheets()} ${resultPiecesEn}`
        }
        document.getElementById('needInMeter').style.visibility = 'visible'
        break
      }
      default: {
        // It calculates the need for running meter if a specific material is selected
        document.getElementById('needInMeter').style.visibility = 'visible'
        if (window.location.hash) {
          if (window.location.hash === '#hun') {
            result = `${resultTextHu} ${getNeedInMeter()} ${resultMeterHu}`
          } else {
            result = `${resultTextEn} ${getNeedInMeter()} ${resultMeterEn}`
          }
        } else {
          result = `${resultTextEn} ${getNeedInMeter()} ${resultMeterEn}`
        }
        break
      }
    }
  }
  document.getElementById('needInMeter').value = result

  console.log(`The result is: ${result}`)
}
const calculateBtn = document.querySelector('#calculate')
calculateBtn.addEventListener('click', calculate)
