(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// BOOK SIZES
// Book IDs
const SIZEOFBOOKS = {
  A1_61X86: 'a1_61x86',
  A2_43X61: 'a2_43x61',
  A3_30X43: 'a3_30x43',
  A4_21X30: 'a4_21x30',
  A5_15X21: 'a5_15x21',
  B1_70X100: 'b1_70x100',
  B2_50X70: 'b2_50x70',
  B3_35X50: 'b3_35x50',
  B4_25X35: 'b4_25x35',
  B5_175X25: 'b5_175x25',
  F1_52X78: 'f1_52x78',
  F2_39X52: 'f2_39x52',
  F3_26X39: 'f3_26x39',
  F4_195X26: 'f4_195x26',
  F5_13X195: 'f5_13x195',
  CUSTOM: 'custom',
}
// Names of books HU
const sizeOfBookNamesHU = {
  [SIZEOFBOOKS.A1_61X86]: 'A1 61x86 cm',
  [SIZEOFBOOKS.A2_43X61]: 'A2 43x61 cm',
  [SIZEOFBOOKS.A3_30X43]: 'A3 30x43 cm',
  [SIZEOFBOOKS.A4_21X30]: 'A4 21x30 cm',
  [SIZEOFBOOKS.A5_15X21]: 'A5 15x21 cm',
  [SIZEOFBOOKS.B1_70X100]: 'B1 70x100 cm',
  [SIZEOFBOOKS.B2_50X70]: 'B2 50x70 cm',
  [SIZEOFBOOKS.B3_35X50]: 'B3 35x50 cm',
  [SIZEOFBOOKS.B4_25X35]: 'B4 25x35 cm',
  [SIZEOFBOOKS.B5_175X25]: 'B5 17,5x25 cm',
  [SIZEOFBOOKS.F1_52X78]: 'F1 52x78 cm',
  [SIZEOFBOOKS.F2_39X52]: 'F2 39x52 cm',
  [SIZEOFBOOKS.F3_26X39]: 'F3 26x39 cm',
  [SIZEOFBOOKS.F4_195X26]: 'F4 19,5x26 cm',
  [SIZEOFBOOKS.F5_13X195]: 'F5 13x19,5 cm',
  [SIZEOFBOOKS.CUSTOM]: 'Egyéb',
}
// Names of books EN
const sizeOfBookNamesEN = {
  [SIZEOFBOOKS.A1_61X86]: 'A1 61x86 cm',
  [SIZEOFBOOKS.A2_43X61]: 'A2 43x61 cm',
  [SIZEOFBOOKS.A3_30X43]: 'A3 30x43 cm',
  [SIZEOFBOOKS.A4_21X30]: 'A4 21x30 cm',
  [SIZEOFBOOKS.A5_15X21]: 'A5 15x21 cm',
  [SIZEOFBOOKS.B1_70X100]: 'B1 70x100 cm',
  [SIZEOFBOOKS.B2_50X70]: 'B2 50x70 cm',
  [SIZEOFBOOKS.B3_35X50]: 'B3 35x50 cm',
  [SIZEOFBOOKS.B4_25X35]: 'B4 25x35 cm',
  [SIZEOFBOOKS.B5_175X25]: 'B5 17,5x25 cm',
  [SIZEOFBOOKS.F1_52X78]: 'F1 52x78 cm',
  [SIZEOFBOOKS.F2_39X52]: 'F2 39x52 cm',
  [SIZEOFBOOKS.F3_26X39]: 'F3 26x39 cm',
  [SIZEOFBOOKS.F4_195X26]: 'F4 19,5x26 cm',
  [SIZEOFBOOKS.F5_13X195]: 'F5 13x19,5 cm',
  [SIZEOFBOOKS.CUSTOM]: 'Custom',
}
// MATERIALS
// Material IDs
const MATERIAL = {
  NONE: 'None',
  BALACRON_FAUXLEATHER: 'balacron_fauxleather',
  MIRADUR_FAUXLEATHER: 'miradur_fauxleather',
  VANOL_FAUXLEATHER: 'vanol_fauxleather',
  JAZZY_FAUXLEATHER: 'jazzy_fauxleather',
  IMPERIAL_CANVAS: 'imperial_canvas',
  NATURAL_CANVAS: 'natural_canvas',
  SAVANNA_CANVAS: 'savanna_canvas',
  OTTAWA_CANVAS: 'ottawa_canvas',
  LOUSIANA_CANVAS: 'lousiana_canvas',
  LUXINE_VELOURS: 'luxine_velours',
  DAINEL_VELOURS: 'dainel_velours',
  SUMERIA_THERMO: 'sumeria_thermo',
  SHEET_LONGGRAIN: 'sheet_longgrain',
  SHEET_SHORTGRAIN: 'sheet_shortgrain',
}
// Material names EN
const materialNamesEN = {
  [MATERIAL.BALACRON_FAUXLEATHER]: 'Balacron faux leather',
  [MATERIAL.MIRADUR_FAUXLEATHER]: 'Miradur faux leather',
  [MATERIAL.VANOL_FAUXLEATHER]: 'Vanol faux leather',
  [MATERIAL.JAZZY_FAUXLEATHER]: 'Jazzy faux leather',
  [MATERIAL.IMPERIAL_CANVAS]: 'Imperial canvas',
  [MATERIAL.NATURAL_CANVAS]: 'Natural canvas',
  [MATERIAL.SAVANNA_CANVAS]: 'Savanna canvas',
  [MATERIAL.OTTAWA_CANVAS]: 'Ottawa canvas',
  [MATERIAL.LOUSIANA_CANVAS]: 'Louisana canvas',
  [MATERIAL.LUXINE_VELOURS]: 'Luxine velours',
  [MATERIAL.DAINEL_VELOURS]: 'Dainel velours ',
  [MATERIAL.SUMERIA_THERMO]: 'Sumeria thermo',
  [MATERIAL.SHEET_LONGGRAIN]: 'Sheet - long grain',
  [MATERIAL.SHEET_SHORTGRAIN]: 'Sheet - short grain',
}
// Material names HU
const materialNamesHU = {
  [MATERIAL.BALACRON_FAUXLEATHER]: 'Balacron műbőr',
  [MATERIAL.MIRADUR_FAUXLEATHER]: 'Miradur műbőr',
  [MATERIAL.VANOL_FAUXLEATHER]: 'Vanol műbőr',
  [MATERIAL.JAZZY_FAUXLEATHER]: 'Jazzy műbőr',
  [MATERIAL.IMPERIAL_CANVAS]: 'Imperial vászon',
  [MATERIAL.NATURAL_CANVAS]: 'Natural vászon',
  [MATERIAL.SAVANNA_CANVAS]: 'Savanna vászon',
  [MATERIAL.OTTAWA_CANVAS]: 'Ottawa vászon',
  [MATERIAL.LOUSIANA_CANVAS]: 'Louisana vászon',
  [MATERIAL.LUXINE_VELOURS]: 'Luxine velúr',
  [MATERIAL.DAINEL_VELOURS]: 'Dainel velúr ',
  [MATERIAL.SUMERIA_THERMO]: 'Sumeria thermo',
  [MATERIAL.SHEET_LONGGRAIN]: 'Ív - hosszszál',
  [MATERIAL.SHEET_SHORTGRAIN]: 'Ív - keresztszál',
}

// Populating the dropdown fields
function populateSizeSelectorEN() {
  const sizeSelector = document.querySelector('select#sizeofbook')
  for (const [sizeOfBookId, sizeOfBookName] of Object.entries(
    sizeOfBookNamesEN
  )) {
    const option = document.createElement('option')
    option.value = sizeOfBookId
    option.innerHTML = sizeOfBookName
    sizeSelector.appendChild(option)
  }
}
function populateSizeSelectorHU() {
  const sizeSelector = document.querySelector('select#sizeofbook')
  for (const [sizeOfBookId, sizeOfBookName] of Object.entries(
    sizeOfBookNamesHU
  )) {
    const option = document.createElement('option')
    option.value = sizeOfBookId
    option.innerHTML = sizeOfBookName
    sizeSelector.appendChild(option)
  }
}
function populateMaterialSelectorEN() {
  const materialSelector = document.querySelector('select#typeOfMaterial')

  for (const [materialId, materialName] of Object.entries(materialNamesEN)) {
    // <option value="balacron_fauxleather">Balacron faux leather</option>
    const option = document.createElement('option')
    option.value = materialId
    option.innerHTML = materialName
    materialSelector.appendChild(option)
  }
}
function populateMaterialSelectorHU() {
  const materialSelector = document.querySelector('select#typeOfMaterial')

  for (const [materialId, materialName] of Object.entries(materialNamesHU)) {
    // <option value="balacron_fauxleather">Balacron faux leather</option>
    const option = document.createElement('option')
    option.value = materialId
    option.innerHTML = materialName
    materialSelector.appendChild(option)
  }
}

module.exports = {
  SIZEOFBOOKS,
  sizeOfBookNamesEN,
  sizeOfBookNamesHU,
  MATERIAL,
  materialNamesEN,
  materialNamesHU,
  populateMaterialSelectorHU,
  populateMaterialSelectorEN,
  populateSizeSelectorHU,
  populateSizeSelectorEN,
}

},{}],2:[function(require,module,exports){
// functions for dropdown fields
const getSizeOfBook = () => {
  var sizeOfBook = 0
  var theForm = document.forms['calculation-form']
  const typeOfBookSizes = {
    a1_61x86: 1,
    a2_43x61: 2,
    a3_30x43: 3,
    a4_21x30: 4,
    a5_15x21: 5,
    b1_70x100: 6,
    b2_50x70: 7,
    b3_35x50: 8,
    b4_25x35: 9,
    b5_175x25: 10,
    f1_52x78: 11,
    f2_39x52: 12,
    f3_26x39: 13,
    f4_195x26: 14,
    f5_13x195: 15,
    custom: 16,
  }
  var selectedBook = theForm.elements['sizeofbook']
  sizeOfBook = typeOfBookSizes[selectedBook.value]
  switch (sizeOfBook) {
    case 1:
      document.getElementById('booksizewidth').value = 61
      document.getElementById('booksizeheight').value = 86
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 2:
      document.getElementById('booksizewidth').value = 43
      document.getElementById('booksizeheight').value = 61
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 3:
      document.getElementById('booksizewidth').value = 30
      document.getElementById('booksizeheight').value = 43
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 4:
      document.getElementById('booksizewidth').value = 21
      document.getElementById('booksizeheight').value = 30
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 5:
      document.getElementById('booksizewidth').value = 15
      document.getElementById('booksizeheight').value = 21
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 6:
      document.getElementById('booksizewidth').value = 70
      document.getElementById('booksizeheight').value = 100
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 7:
      document.getElementById('booksizewidth').value = 50
      document.getElementById('booksizeheight').value = 70
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 8:
      document.getElementById('booksizewidth').value = 35
      document.getElementById('booksizeheight').value = 50
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 9:
      document.getElementById('booksizewidth').value = 25
      document.getElementById('booksizeheight').value = 35
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 10:
      document.getElementById('booksizewidth').value = 17.5
      document.getElementById('booksizeheight').value = 25
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 11:
      document.getElementById('booksizewidth').value = 52
      document.getElementById('booksizeheight').value = 78
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 12:
      document.getElementById('booksizewidth').value = 39
      document.getElementById('booksizeheight').value = 52
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 13:
      document.getElementById('booksizewidth').value = 26
      document.getElementById('booksizeheight').value = 39
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 14:
      document.getElementById('booksizewidth').value = 19.5
      document.getElementById('booksizeheight').value = 26
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 15:
      document.getElementById('booksizewidth').value = 13
      document.getElementById('booksizeheight').value = 19.5
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break

    case 16:
      document.getElementById('booksizewidth').value = ''
      document.getElementById('booksizeheight').value = ''
      document.getElementById('width').style.display = 'block'
      document.getElementById('height').style.display = 'block'
      break

    default:
      document.getElementById('booksizewidth').value = 0
      document.getElementById('booksizeheight').value = 0
      document.getElementById('width').style.display = 'none'
      document.getElementById('height').style.display = 'none'
      break
  }
}
const getMaterialSize = () => {
  var materialSize = 0
  var theForm = document.forms['calculation-form']
  const typeOfMaterialSizes = {
    None: 100,
    balacron_fauxleather: 106,
    miradur_fauxleather: 102,
    vanol_fauxleather: 109,
    jazzy_fauxleather: 109,
    imperial_canvas: 100,
    natural_canvas: 100,
    savanna_canvas: 132,
    ottawa_canvas: 132,
    lousiana_canvas: 132,
    luxine_velours: 100,
    dainel_velours: 104,
    sumeria_thermo: 140,
    sheet_longgrain: 70,
    sheet_shortgrain: 100,
  }
  var selectedMaterial = theForm.elements['typeOfMaterial']
  materialSize = typeOfMaterialSizes[selectedMaterial.value]
  return materialSize
}
// functions for variables
const getWidth = () => {
  var theForm = document.forms['calculation-form']
  var width = theForm.elements['booksizewidth'].value
  //   width = 30
  console.log('The width is: ' + width)
  return width
}
const getHeight = () => {
  var theForm = document.forms['calculation-form']
  var height = theForm.elements['booksizeheight'].value
  //   height = 43
  console.log('The height is : ' + height)
  return height
}
const getSpine = () => {
  var theForm = document.forms['calculation-form']
  var spine = theForm.elements['booksizespine'].value
  return spine
}
const getQuantity = () => {
  var theForm = document.forms['calculation-form']
  var quantity = theForm.elements['bookquantity'].value
  return quantity
}
// functions for calculating how many books can fit on the width/height of the material/sheet
const getWidthPerBookPerPc = () => {
  let result
  // Sheet is selected
  if (document.getElementById('typeOfMaterial').value == 'sheet_longgrain') {
    result = Math.floor(70 / (2 * +getWidth() + 2 + +getSpine()))
    return result
  } else if (
    document.getElementById('typeOfMaterial').value == 'sheet_shortgrain'
  ) {
    result = Math.floor(100 / (2 * +getWidth() + 3 + +getSpine()))
    return result
  } else {
    // Specific material is selected which is in a roll
    result = Math.floor(
      +getMaterialSize() / (2 * +getWidth() + (+getSpine() + 3))
    )
    return result
  }
}
const getHeightPerBookPerPc = () => {
  let result
  // Sheet is selected
  if (document.getElementById('typeOfMaterial').value == 'sheet_longgrain') {
    result = Math.floor(100 / (+getHeight() + 3))
    return result
  } else if (
    document.getElementById('typeOfMaterial').value == 'sheet_shortgrain'
  ) {
    result = Math.floor(70 / (+getHeight() + 3))
    return result
  } else {
    // Specific material is selected which is in a roll
    console.log(
      'No need for calculation as the selected material is in a roll.'
    )
  }
}

module.exports = {
  getSizeOfBook,
  getWidth,
  getHeight,
  getSpine,
  getQuantity,
  getMaterialSize,
  getWidthPerBookPerPc,
  getHeightPerBookPerPc,
}

},{}],3:[function(require,module,exports){
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

},{"./data":1,"./helpers":2}]},{},[3]);
