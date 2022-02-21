let selectOption = null
let txtRes = document.getElementById('txt_res')
let imgRes = document.getElementById('img_res')
let linkRes = document.getElementById('link_res')
let divRes = document.getElementById('res')
let btnAnte = document.getElementById('anterior')
let btnProx = document.getElementById('')

let txtImg = [
    'O exercício "Dia e Noite" nos mostra um desplay em que a cor de fundo, o título, e a imagem são dinamicamente programadas para nos mostrar o período do dia em que seu computador se encontra',
    'O exercício "Verificador de Idade" recebe como entrada o ano de nascimento e o sexo do usuário , e a partir disso mostra uma foto relacionada a pessoa',
    'O exercício "Vamos Contar" recebe um valor inicial, um falor final e um intervalo de contagem, após isso ele faz uma contagem exata usando as informações',
    'O exercício "Tabuada" recebe um valor de entrada e cria a tabuada de um desse valor, sendo possível copiar o resultado para uso',
    'O exercício "Verificação de Números" recebe varios valores que serão adicionados a uma lista, ao clicar em finalizar, é feito uma análise sobre esses números mostrando informações relevantes sobre a lista'
]


function card1() {
    selectOption = 1
}

function card2() {
    selectOption = 2
}

function card3() {
    selectOption = 3
}

function card4() {
    selectOption = 4
}

function card5() {
    selectOption = 5
}

function res() {

  
    imgRes.src = `assets/images/img_0${selectOption}.png`
    divRes.style.display = "inline"
    linkRes.href = `exercicios/exercicio_${selectOption}`
    txtRes.innerHTML = `<p>${txtImg[selectOption-1]}</p>`

}

function sair() {
    divRes.style.display = "none"
}

