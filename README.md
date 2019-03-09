## CPF and CNPJ validator

To verify if a brazilian CPF or CNPJ document number is valid the digit (last two numbers) must be checked. With this function it can be verified if it is valid or not.
> *validade-document.js*

`validateDocument('000.000.000-00') - For CPF`

`validateDocument('00.000.000/0000-00') - For CNPJ`

To retrieve state of register:
> *origin-document.js*

`originDocument('000.000.000-00') - For CPF only`

Will return ***true*** if valid or ***false*** if invalid.

---

## CPF and CNPJ mask

Mask input with a brazilian CPF or CNPJ document type.
> *mask-document.js*

`maskDocumentInput('#input-id', 'CPF')`

---

#### CPF algorithm

The first digit number can be get with this:
1. Put fist 9 digits in sequence and multply by this values:

|Digit 1|Digit 2|Digit 3|Digit 4|Digit 5|Digit 6|Digit 7|Digit 8|Digit 9|
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|10     |9      |8      |7      |6      |5      |4      |3      |2      |

2. Sum all results.
3. Divide the value sum for 11.
4. If the value is less then 2 it must be chage to 0.

The last digit number can be get with this:
1. Put fist 9 digits in sequence and multply by this values:

|Digit 1|Digit 2|Digit 3|Digit 4|Digit 5|Digit 6|Digit 7|Digit 8|Digit 9|Digit 10|
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:------:|
|11     |10     |9      |8      |7      |6      |5      |4      |3      |2       |

2. Sum all results.
3. Divide the value sum for 11.
4. If the value is less then 2 it must be chage to 0.

The 9 digit of CPF corresponds to the register province:
0. Rio Grande do Sul.
1. Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins.
2. Pará, Amazonas, Acre, Amapá, Rondônia e Roraima.
3. Ceará, Maranhão e Piauí.
4. Pernambuco, Rio Grande do Norte, Paraíba e Alagoas.
5. Bahia e Sergipe.
6. Minas Gerais.
7. Rio de Janeiro e Espírito Santo.
8. São Paulo.
9. Paraná e Santa Catarina.

#### CNPJ algorithm

The first digit number can be get with this:
1. Put fist 9 digits in sequence and multply by this values:

|Digit 1|Digit 2|Digit 3|Digit 4|Digit 5|Digit 6|Digit 7|Digit 8|Digit 9|Digit 10|Digit 11|Digit 12|Digit 13|
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:------:|:------:|:------:|:------:|
|6      |5      |4      |3      |2      |9      |8      |7      |6      |5       |4       |3       |2       |

2. Sum all results.
3. Divide the value sum for 11.
4. If the value is less then 2 it must be chage to 0.

The last digit number can be get with this:
1. Put fist 9 digits in sequence and multply by this values:

|Digit 1|Digit 2|Digit 3|Digit 4|Digit 5|Digit 6|Digit 7|Digit 8|Digit 9|Digit 10|Digit 11|Digit 12|
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:------:|:------:|:------:|
|5      |4      |3      |2      |9      |8      |7      |6      |5      |4       |3       |2       |

2. Sum all results.
3. Divide the value sum for 11.
4. If the value is less then 2 it must be chage to 0.