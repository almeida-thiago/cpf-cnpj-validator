/**
  * Validate if document is valid.
  * @copyright Thiago Almeida - 2019.
  * @param {string|number} documentValue - Document number.
  * @returns {boolean} Retrun true or false.
  * @example new validateDocument('000.000.000-00');
  */

function validateDocument(documentValue) {
  documentValue = documentValue.replace(/[^0-9]/g, '') // replace all non-digits with blank
  var allSame = RegExp('^\D*(\d)(?:\D*|\1)*$', 'g') // Regex all digits are the same
  if(allSame.test(documentValue)) return false


  /** Verify document type by number of digits */
  var documentType
  if (documentValue.length === 11) documentType = 'cpf'
  if (documentValue.length === 14) documentType = 'cnpj'

  /** Verify document */
  if (documentType === 'cpf') { // If CPF
    var multiplyValuesDigitOne = [10, 9, 8, 7, 6, 5, 4, 3, 2] // Value multiply digit one
    var multiplyValuesDigitTwo = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2] // Value multiply digit two
    if (documentValue[9] == digitCalc(documentValue, multiplyValuesDigitOne) && documentValue[10] == digitCalc(documentValue, multiplyValuesDigitTwo)) return true // Compare digits
    return false
  } else if (documentType === 'cnpj') { // If CNPJ
    var multiplyValuesDigitOne = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] // Value multiply digit one
    var multiplyValuesDigitTwo = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] // Value multiply digit two
    if (documentValue[12] == digitCalc(documentValue, multiplyValuesDigitOne) && documentValue[13] == digitCalc(documentValue, multiplyValuesDigitTwo)) return true // Compare digits
    return false
  } else { // If none
    return false
  }

  /** Calculate digit */
  function digitCalc(documentValue, multiplyValues) {
    var digit = 0 // Set digit
    multiplyValues.forEach((multiply, index) => {
      digit = digit + (documentValue[index] * multiply)
    });
    digit = digit % 11 // Get rest of division
    digit = digit > 2 ? (11 - digit) : 0 // Set to 0 if less than 2
    return digit
  }
}