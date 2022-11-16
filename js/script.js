



//(INICIO) funções para mostrar os valores dos inputs na demonstração do cartão ao lado
let inputCVC=document.getElementById("inputCVC");

inputCVC.addEventListener("keypress",mostrarTexto)

function mostrarTexto(event){
    let cvc=document.getElementById("inputCVC").value
    numCVCcard.innerHTML=cvc;

    if(!checkCharNum(event)){
        event.preventDefault();
    }

}


let inputNumCartao=document.getElementById("numCartao");

inputNumCartao.addEventListener("keypress",mostrarNumDeCartao);

function mostrarNumDeCartao(event){
    let inputTamNumCartao=inputNumCartao.value.length
    let numCartao=document.getElementById("numCartao").value
    numInfoCard.innerHTML=numCartao
    if(inputTamNumCartao === 4 || inputTamNumCartao === 9 || inputTamNumCartao === 14){
        inputNumCartao.value+=" "
    }

    if(!checkCharNum(event)){
        event.preventDefault();
    }
}


let inputNome=document.getElementById("nomeCartao");

inputNome.addEventListener("keypress", function(e){
    let nomeCartao=document.getElementById("nomeCartao").value
    nomeInfoCard.innerHTML=nomeCartao;
    if(!checkChar(e)){
        e.preventDefault();
    }

})

function checkChar(event) {
    const char =String.fromCharCode(event.keyCode);
    console.log(event.keyCode);
    console.log(char);

    const pattern='[a-z A-z]';
    if(char.match(pattern)){
        console.log(char);
        return true
    }
}

function checkCharNum(event) {
    const char =String.fromCharCode(event.keyCode);
    console.log(event.keyCode);
    console.log(char);

    const pattern='[0-9]';
    if(char.match(pattern)){
        console.log(char);
        return true
    }
}


let inputMesValid=document.getElementById("dataMM");

inputMesValid.addEventListener("keypress",function (event){
    let mm = document.getElementById("dataMM").value
    mesInfoCard.innerHTML=mm

    if(!checkCharNum(event)){
        event.preventDefault();
    }

})


let inputAnoValid=document.getElementById("dataYY");

inputAnoValid.addEventListener("keypress",mostrarAnoDeValid)
function mostrarAnoDeValid(event){
    let yy =document.getElementById("dataYY").value
    anoInfoCard.innerHTML=yy
    if(!checkCharNum(event)){
        event.preventDefault();
    }
}

// (FIM) funções para mostrar os valores dos inputs na demonstração do cartão ao lado

const form = document.getElementById("formulario");
let campos = document.querySelectorAll(".required");
let spans = document.querySelectorAll(".mensagemErro");
let validaEmail = /\S+@\S+\.\S+/;



//CRIAÇAO DA MENSAGEM DE DE ERRO
function mensagemDeErro(index){
    campos[index].style.border='1px solid #DB5A5A'
    spans[index].style.display='block'
}

//CRIACAO DA REMOCAO DA MENSAGEM DE ERRO
function removerMensagemDeErro(index){
    campos[index].style.border='1px solid #4ECA64'
    spans[index].style.display='none'
}


// FUNCAO PARA APARECER E DESAPARECER A MENSAGEM DE ERRO DE ACORDO COM O REQUISITO
function validaNome(){
    if (campos[0].value.length<3){
        mensagemDeErro(0);
    }
    else{
        removerMensagemDeErro(0);
    }
}

function validaNumCartao(){
    
    if (campos[1].value.length<19){
        mensagemDeErro(1)
    }
    else{
        removerMensagemDeErro(1)
    }
}

function validaDataMes(){
    if (campos[2].value.length<2){
        mensagemDeErro(2)
    }
    else{
        removerMensagemDeErro(2)
    }
    
}
function validaTamanhoAno(){
    if (campos[3].value.length<2 ){
        mensagemDeErro(3);
    }
    else{
        removerMensagemDeErro(3)
    }
}

function validaTamanhoCVV(){
    if(campos[4].value.length<3 || campos[4].value.length>3){
        mensagemDeErro(4)
    }
    else{
        removerMensagemDeErro(4)
    }
    
}

//BOTAO DE CONFIRMA / DIV TELA DE CONFIRMACAO
const divTelaConfirm = document.getElementById("telaConfirm");
const formulario = document.getElementById("formulario");
const btn =document.getElementById("btnConfirmar");

function esconderElemento() {
    formulario.style.display = "none";
    divTelaConfirm.style.visibility = "visible";
}



//BOTAO DE CONTINUA / DIV TELA DE CONFIRMACAO

const btnContinue = document.getElementById("btnContinue");

btnContinue.addEventListener("click",function(){
    formulario.style.display = "flex";
    divTelaConfirm.style.visibility = "hidden";
})

// VALIDA CAMPOS
function checkInputs(inputs) {
    var filled = true;
    inputs.forEach(function(input) {  

      if(input.value === "") {
          filled = false;
      }
    });
    
    return filled;
    
  }
  var inputs = document.querySelectorAll(".required");
  var button = document.getElementById("btnConfirmar");

  inputs.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
      if(checkInputs(inputs)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });





