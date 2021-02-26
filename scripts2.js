// 1) Confirm
let isConfirmed = confirm("Deseja confirmar?")

console.log(isConfirmed)

// 2) Exemplo condicional
if (isConfirmed) {
    console.log("o usuário clicou em Ok")
}
else {
    console.log("o usuário clicou em Cancelar")
}

// 3) for
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// 4) for 
let x = 15

for (let i = 0; i <= 10; i++) {
    console.log('R: ' + x * i)
}


// 5) while
let isToContinue = true
while (isToContinue) {
    console.log('estamos presos em um loop infinito')

    isToContinue = false
}

console.log('Saímos')

// Objetos

let obj = {
    "Nome": 'Rogerio',
    "Profissao": "desenvolvedor de software"
}

console.log(obj)
console.log(obj.Nome)
console.log(obj.Profissao)