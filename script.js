const h1 = document.querySelector ('h1')
const form = document.querySelector ('#form')
const input1 = document.querySelector ('#calcular1')
const input2 = document.querySelector ('#calcular2')
const btn = document.querySelector ('#btnCalcular')
const pResult = document.querySelector('#result')

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event) {
    event.preventDefault();
   const sumarInputs = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = 'Resultado' + sumarInputs}

