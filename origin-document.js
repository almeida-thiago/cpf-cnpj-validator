/**
  * Verify document origin by number
  * @copyright Thiago Almeida - 2019.
  * @param {string|number} documentValue - Document number.
  * @returns {[string]} Retrun origin states.
  * @example new originDocument('000.000.000-00');
  */

function originDocument(documentValue) {
  documentValue = documentValue.replace(/[^0-9]/g, '') // replace all non-digits with blank
  var allSame = RegExp('^\D*(\d)(?:\D*|\1)*$', 'g') // Regex all digits are the same
  if (allSame.test(documentValue)) return false

  /** Verify document by number of digits */
  if (documentValue.length === 11) {
    var digit = documentValue[8] // Get nineth digit 
    var states = [
      ['Rio Grande do Sul'],
      ['Distrito Federal', 'Goiás', 'Mato Grosso do Sul', 'Tocantins'],
      ['Pará', 'Amazonas', 'Acre', 'Amapá', 'Rondônia', 'Roraima'],
      ['Ceará', 'Maranhão', 'Piauí'],
      ['Pernambuco', 'Rio Grande do Norte', 'Paraíba', 'Alagoas'],
      ['Bahia', 'Sergipe'],
      ['Minas Gerais'],
      ['Rio de Janeiro', 'Espírito Santo'],
      ['São Paulo'],
      ['Paraná', 'Santa Catarina]']
    ]
    return states[digit] // Return origin states
  }
  return false
}