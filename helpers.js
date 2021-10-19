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
