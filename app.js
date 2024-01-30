let listaDeNumerosSorteados=[];
let numeroLimte = 10 ;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativa = 1

function verificarChute(){
    let chute = document.querySelector('input').value; 
    if(chute == numeroSecreto){

        let palavraTentativa =   tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcerto = (`você acertou em ${tentativa} ${palavraTentativa} !`);
        exibirTextoNaTela('p',mensagemAcerto);
        exibirTextoNaTela('h1','Acertou');

        document.getElementById('reiniciar').removeAttribute('disabled'); 

    }else{
            if(chute > numeroSecreto){
                exibirTextoNaTela('p','o número secreto é menor ...')
            }else{
                    exibirTextoNaTela('p','o número secreto é maior ...')
                }
        
                tentativa ++;
                limparCampo();
         }
}

function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2} );
}

function mensagemInial(){
    exibirTextoNaTela('h1', 'jogo número secreto !');
    exibirTextoNaTela( 'p' , 'escolha um número entre 1 e 10.' );
}

mensagemInial();

function gerarNumeroAleatorio() {
   let numeroEscolhido = (parseInt(Math.random()* numeroLimte + 1));
   let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;


   if(quantidadeDeElementosDaLista== numeroLimte){
        listaDeNumerosSorteados = [];
   }


   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);   
    return numeroEscolhido;
   }
}


function limparCampo(){
    let campo = document.querySelector('input')
    campo.value = "";

}


function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}