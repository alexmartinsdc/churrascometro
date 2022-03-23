/*

Regras:

Carne = 400g por pessoa (+ de 6 horas = 650g)
Cerveja = 1200ml por pessoa (+ de 6 horas = 2000ml)
Refrigerante/água = 1000ml por pessoa (+ de 6 horas = 1500ml)

Crianças valem 0,5

*/

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let totalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas)
    let totalCerveja = cervejaPorPessoa(duracao) * adultos
    let totalBebida = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${totalCarne / 1000}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${totalBebida / 1000} litros de bebidas não alcoólicas</p>`

}

function carnePorPessoa(duracao) {
    if(duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPorPessoa(duracao) {
    if(duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidaPorPessoa(duracao) {
    if(duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}