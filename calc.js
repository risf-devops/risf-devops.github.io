let A = 0
let B = 0

function AtualizaValorA(event) {
    A = event.target.value
}

function AtualizaValorB(event) {
    B = event.target.value
}

function Soma() {
    let valorSoma = parseFloat(A) + parseFloat(B)
    console.log(valorSoma)

    let txtResultado = document.getElementById('txtResultado')
    txtResultado.value = valorSoma
}

function Subtracao() {
    let valorSoma = parseFloat(A) - parseFloat(B)
    console.log(valorSoma)

    let txtResultado = document.getElementById('txtResultado')
    txtResultado.value = valorSoma
}

function Multiplicacao() {
    let valorSoma = parseFloat(A) * parseFloat(B)
    console.log(valorSoma)

    let txtResultado = document.getElementById('txtResultado')
    txtResultado.value = valorSoma
}

function Divisao() {
    if (B == 0){
            alert('Digite um valor válido para a divisão!')
        }
    else {
        let valorSoma = parseFloat(A) / parseFloat(B)
        console.log(valorSoma)
    
        let txtResultado = document.getElementById('txtResultado')
        txtResultado.value = valorSoma
    }
    
}

function Limpar() {
    let txtBoxes = document.getElementsByTagName('input')
    for (let i = 0; i < txtBoxes.length; i++) {
        console.log(txtBoxes[i])
        txtBoxes[i].value = ''
    }

    //alterarCorDasLinhas()
}

function alterarCorDasLinhas() {
    let rows = document.getElementsByClassName('row')
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.background = 'green'
    }
}