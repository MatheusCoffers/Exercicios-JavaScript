function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var titulo = document.getElementById('titulo')
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //bom dia
        titulo.innerText = "Manha"
        img.src = "images/manha.jpg"
        document.body.style.background = '#e4bc97'
    } else if (hora < 18) {
        //boa tarde
        titulo.innerText = 'Tarde'
        img.src = "images/tarde.jpg"
        document.body.style.background = '#862d15'
    } else {
        //boa noite
        titulo.innerText = 'Noite'
        img.src = "images/noite.jpg"
        document.body.style.background = '#21181d'
    }
}