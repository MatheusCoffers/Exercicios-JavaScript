function gerarTabuada(){
    var txtNum = document.getElementById('txtnum')
    var res = document.getElementById('res')

    var num = Number(txtNum.value) 
    
    if (txtNum.value.length == 0){
        window.alert('[ERRO] Digite um valor no campo: Numero')
    } else {
        res.value = '' 
        for(i = 1; i <= 10; i++){
            res.value += `${num} x ${i} = ${num*i}\n`
        }
    }
}