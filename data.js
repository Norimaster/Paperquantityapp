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

const sizes = {
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
}

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
const AVAILABLE_LANGUAGES = { EN: 'en', HU: 'hu' }
const languageNames = {
  [AVAILABLE_LANGUAGES.HU]: 'Magyar',
  [AVAILABLE_LANGUAGES.EN]: 'English',
}

module.exports = {
  SIZEOFBOOKS,
  MATERIAL,
  sizes,
  languageNames,
  AVAILABLE_LANGUAGES,
}
