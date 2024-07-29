//inclui api para troca de moeda
const api = "https://api.exchangerate-api.com/v4/latest/USD";
  
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".btn-convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;
  
//Evento quando a moeda é alterada
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
  
//Evento quando a moeda é alterada
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
  
search.addEventListener('input', updateValue);
  
//função para atualizar valor
function updateValue(e) {
    searchValue = e.target.value;
}
  
//quando o usuário clica, ele chama a função getresults
convert.addEventListener("click", getResults);
  
//função getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  
//exibir resultados após a conversão
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}
  
//quando o usuário clica no botão de reset
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};