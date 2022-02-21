function contar(){
    var txtInicio = document.getElementById('txtinicio')
    var txtFim = document.getElementById('txtfim')
    var txtPasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    var inicio = Number(txtInicio.value)
    var fim = Number(txtFim.value)
    var passo = Number(txtPasso.value)

    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0) {
        res.innerHTML = '[ERRO] Não foi possivel completar a contagem, tente verificar os dados!'
    } else {
        if (inicio > fim) {
            window.alert('[ERRO] Não foi possivel realizar a operação, o valor final tem que ser maior que o inicial')
        } else {
            if (passo <= 0) {
                window.alert('[ERRO] Não foi possivel realizar a operação, o Passo foi configurado automaticamente para o valor "1"')
                passo = 1
            } 
            res.innerHTML = ''
            while(inicio <= fim){
            res.innerHTML += `${inicio} &#128073 `
            inicio += passo
            }
            res.innerHTML += '&#9989'
            
        }  
    }
}