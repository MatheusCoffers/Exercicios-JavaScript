function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || Number(fAno.value) > anoAtual){
        window.alert('[ERRO] preencha os dados corretamente')
    } else {

        var idade = anoAtual - Number(fAno.value)
        var radSex = document.getElementsByName('radsex')
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')


        if(radSex[0].checked){
            sexo = 'Homem'

            if (idade < 12){
                //bebe
                img.setAttribute('src','images/bebeM.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','images/jovemM.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src','images/adultoM.jpg')
            } else {
                //idoso
                img.setAttribute('src','images/idosoM.jpg')
            }

        } else {
            sexo = 'Mulher'

            if (idade < 12){
                //bebe
                img.setAttribute('src','images/bebeF.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','images/jovemF.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src','images/adultoF.jpg')
            } else {
                //idoso
                img.setAttribute('src','images/idosoF.jpg')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(img)
    }
    
    
    
}