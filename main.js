// // ----- POM
// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play()
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

// // ----- CLAP

// function tocaSomClap() {
//     document.querySelector('#som_tecla_clap').play()
// }

// document.querySelector('.tecla_clap').onclick = tocaSomClap;

// // ----- TIM

// function tocaSomTim() {
//     document.querySelector('#som_tecla_tim').play()
// }

// document.querySelector('.tecla_tim').onclick = tocaSomTim;

// // ----- PUFF

// function tocaSomPuff() {
//     document.querySelector('#som_tecla_puff').play()
// }

// document.querySelector('.tecla_puff').onclick = tocaSomPuff;

// // ----- SPLASH

// function tocaSomSplash() {
//     document.querySelector('#som_tecla_splash').play()
// }

// document.querySelector('.tecla_splash').onclick = tocaSomSplash;

// // ----- TOIM

// function tocaSomToim() {
//     document.querySelector('#som_tecla_toim').play()
// }

// document.querySelector('.tecla_toim').onclick = tocaSomToim;

// // ----- PUSH

// function tocaSomPush() {
//     document.querySelector('#som_tecla_psh').play()
// }
// document.querySelector('.tecla_psh').onclick = tocaSomPush;

// // ----- TIC

// function tocaSomTic() {
//     document.querySelector('#som_tecla_tic').play()
// }

// document.querySelector('.tecla_tic').onclick = tocaSomTic;

// // ----- TOM

// function tocaSomTom() {
//     document.querySelector('#som_tecla_tom').play()
// }

// document.querySelector('.tecla_tom').onclick = tocaSomTom;




// listaDeTeclas[0].onclick = tocaSomPom;
// listaDeTeclas[1].onclick = tocaSomClap;
// listaDeTeclas[2].onclick = tocaSomTim;
// listaDeTeclas[3].onclick = tocaSomPuff;
// listaDeTeclas[4].onclick = tocaSomSplash;
// listaDeTeclas[5].onclick = tocaSomToim;
// listaDeTeclas[6].onclick = tocaSomPush;
// listaDeTeclas[7].onclick = tocaSomTic;
// listaDeTeclas[8].onclick = tocaSomTom;

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
