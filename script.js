let ghad_input = document.querySelector('.ghad_input')
let vazn_input = document.querySelector('.vazn_input')
let ghad_txt = document.querySelector('.ghad_txt')
let vazn_txt = document.querySelector('.vazn_txt')
let reault_txt = document.querySelector('.reault_txt')
let btn = document.querySelector('button')

function bmi() {
   let reasultGhad = ghad_txt.innerHTML = ghad_input.value / 100
   let reasultVazn = vazn_txt.innerHTML = vazn_input.value

   let yourBmi = ((reasultVazn) / (reasultGhad * reasultGhad)).toFixed(2)
   reault_txt.innerHTML = yourBmi
}

ghad_input.addEventListener('change', bmi)
vazn_input.addEventListener('change', bmi)
