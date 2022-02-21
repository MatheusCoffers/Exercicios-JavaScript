let numeros = []
let resFinalizar = document.getElementById('res_finalizar')
let resAdicionar = document.getElementById('res_adicionar')

function adicionar() {
    resFinalizar.innerHTML = ''
    let txtNum = document.getElementById('txtnum')
    let num = Number(txtNum.value)
    let erro = ''
    
    if (num < 1 || num > 100 || txtNum.value.length == 0){
        window.alert('[ERRO] numero não digitado ou inválido')
    } else {
        for(let i in numeros) {
            if (num == numeros[i]){
                erro = 's'
            }
        }
        if (erro == 's'){
            window.alert('[ERRO] numero ja foi adicionado')
            erro = ''
        } else {
            numeros.push(num)
            resAdicionar.value += `Valor ${num} adicionado.\n`
        } 
    }   
    txtNum.value = null
}

function finalizar(){
    if (resAdicionar.value.length == 0){
        window.alert('[ERRO] nenhum valor adicionado')
    } else {
        numeros.sort()

        let soma = 0
        for (let i in numeros){
            soma += numeros[i]
        }

        let media = soma / numeros.length

        var resFinalizar = document.getElementById('res_finalizar')
        resFinalizar.innerHTML += `<p>Ao todo temos ${numeros.length} números cadastrados</p>`
        resFinalizar.innerHTML += `<p>O maior número informado foi ${numeros[(numeros.length - 1)]}</p>`
        resFinalizar.innerHTML += `<p>O menor númreo informado foi ${numeros[0]}</p>`
        resFinalizar.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        resFinalizar.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
    
}

