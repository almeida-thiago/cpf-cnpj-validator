/**
  * Mask document input.
  * @copyright Thiago Almeida - 2019.
  * @param {string} inputSelector - Selector name.
  * @param {string} documenyType - Document type.
  * @example new originDocument('#cpf-input', 'cpf');
  */

function maskDocumentInput(inputSelector, documenyType) {
  documenyType = documenyType.toUpperCase() // Ajust type string
  inputSelector = document.querySelector(inputSelector) // Change input from string to dom object

  /** Check key */
  inputSelector.addEventListener('keyup', function (event) {
    if (isNaN(parseInt(event.key))) {
      var placeholder = document.documentElement.lang.toLowerCase() == 'pt-br' ? 'Apenas números' : 'Only numbers' // Palceholder text by page lang
      inputSelector.setAttribute('placeholder', placeholder) // Set placeholders
      inputSelector.value = ''
    }
  })

  /** Mask input value */
  inputSelector.addEventListener('keypress', function (event) {
    var value = inputSelector.value
    if (documenyType == 'CPF') {
      switch (value.length) {
        case 3:
          value = value + '.'
          break
        case 7:
          value = value + '.'
          break
        case 11:
          value = value + '-'
          break
      }
      inputSelector.value = value.length < 14 ? value : value.slice(0, -(value.length - 13))
    } else if (documenyType == 'CNPJ') {
      switch (value.length) {
        case 2:
          value = value + '.'
          break
        case 6:
          value = value + '.'
          break
        case 10:
          value = value + '/'
          break
        case 15:
          value = value + '-'
          break
      }
      inputSelector.value = value.length < 18 ? value : value.slice(0, -(value.length - 17))
    }
  })
}