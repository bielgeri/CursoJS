function atualizarTempo() {

var display = document.querySelector('.display')

const agora = new Date();

const horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' +  corrigirHorario(agora.getSeconds());


display.textContent = horario;
}

function corrigirHorario (numero) {
    if(numero < 10 ) {
        numero = '0' + numero;
    }
    return numero;
}

atualizarTempo();

//executar uma function a cada determinado tempo
setInterval(atualizarTempo, 1000)

