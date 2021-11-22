const { sizes, MATERIAL, SIZEOFBOOKS, languageNames } = require('./data')

const materialNames = {
  en: {
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
  },
  hu: {
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
  },
}

const sizeOfBookNames = {
  en: {
    ...sizes,
    [SIZEOFBOOKS.CUSTOM]: 'Custom',
  },
  hu: {
    ...sizes,
    [SIZEOFBOOKS.CUSTOM]: 'Egyéb',
  },
}

const languageHtml = {
  hu: {
    calctitle: 'Papír szükséglet',
    langBooksize: 'Méret',
    langWidth: 'Szélesség (cm)',
    langHeight: 'Hosszúság (cm)',
    langSpine: 'Gerinc (cm)',
    langQuantity: 'Mennyiség (db)',
    langMaterial: 'Anyag',
    langButton: 'Számolj!',
  },
  en: {
    calctitle: 'Calculate your material need!',
    langBooksize: 'Book size',
    langWidth: 'Width (cm)',
    langHeight: 'Height (cm)',
    langSpine: 'Spine (cm)',
    langQuantity: 'Quantity',
    langMaterial: 'Material',
    langButton: 'Calculate!',
  },
}

const languageResult = {
  hu: {
    resultText: 'A rendelési mennyiség',
    resultPieces: 'darab.',
    alert: 'Hoppá! A könyv méret túl nagy a választott anyaghoz képest!',
    resultMeter: 'méter.',
  },
  en: {
    resultText: 'Your need is',
    resultPieces: 'piece(s).',
    alert: 'Oops! The book is too large for the selected material!',
    resultMeter: 'meter.',
  },
}

function updateFormFields(language) {
  console.log('😸😸😸😸😸😸 updateFormFields', { language })
  document.querySelector('#calculationtitle').textContent =
    languageHtml[language].calctitle
  document.querySelector('#languageBooksize').textContent =
    languageHtml[language].langBooksize
  document.querySelector('#languageWidth').textContent =
    languageHtml[language].langWidth
  document.querySelector('#languageHeight').textContent =
    languageHtml[language].langHeight
  document.querySelector('#languageSpine').textContent =
    languageHtml[language].langSpine
  document.querySelector('#languageQuantity').textContent =
    languageHtml[language].langQuantity
  document.querySelector('#languageMaterial').textContent =
    languageHtml[language].langMaterial
  document.querySelector('button#calculate').textContent =
    languageHtml[language].langButton
}

function populateSizeSelector(language) {
  const sizeSelector = document.querySelector('select#sizeofbook')
  while (sizeSelector.children.length > 1) {
    sizeSelector.removeChild(sizeSelector.lastChild)
  }
  for (const [sizeOfBookId, sizeOfBookName] of Object.entries(
    sizeOfBookNames[language]
  )) {
    const option = document.createElement('option')
    option.value = sizeOfBookId
    option.innerHTML = sizeOfBookName
    sizeSelector.appendChild(option)
  }
}

function populateMaterialSelector(language) {
  const materialSelector = document.querySelector('select#typeOfMaterial')
  while (materialSelector.children.length > 1) {
    materialSelector.removeChild(materialSelector.lastChild)
  }
  for (const [materialId, materialName] of Object.entries(
    materialNames[language]
  )) {
    // <option value="balacron_fauxleather">Balacron faux leather</option>
    const option = document.createElement('option')
    option.value = materialId
    option.innerHTML = materialName
    materialSelector.appendChild(option)
  }
}

function populateLanguageSelector() {
  const languageSelector = document.querySelector('select#languageSelector')
  for (const [languageId, languageName] of Object.entries(languageNames)) {
    const option = document.createElement('option')
    option.value = languageId
    option.innerHTML = languageName
    languageSelector.appendChild(option)
  }
}

function updatePageLanguage(language) {
  updateFormFields(language)
  populateMaterialSelector(language)
  populateSizeSelector(language)
}

module.exports = {
  languageResult,
  updatePageLanguage,
  sizeOfBookNames,
  materialNames,
  populateLanguageSelector,
}
