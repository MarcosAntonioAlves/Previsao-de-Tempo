const key = "911ad0a6ee9fe31b95b8948c1cb572fd";

function colocarNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description 
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    let dados = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&leng=pr_br&units=metric`) //&appind=${key}
    .then(responsta => responsta.json())
    colocarNaTela(dados)
}

function cliqueiNaFunçao(){
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}
