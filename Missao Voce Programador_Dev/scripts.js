//VARIÁVEIS - é um espaço da memória do computador que guardamos algo (números, letras, texto ou imagem)
//FUNÇÕES - é um trecho de código que só é executado quando chamado.

let chave = "914f73819ed95507b45c2d5329492b97"

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".description").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())

    colocarNaTela(dados)
    
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

//a sequencia do servidor: 
//Escolher a cidade dar buscar | function cliquei no botão | buscarCidade | async function | e irá puxar as info 
// que ficará na linha 9 (dados) | depois chamamos a função colocar na tela