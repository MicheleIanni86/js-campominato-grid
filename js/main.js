// Prendo la class del jumbo
let containerJumbo = document.querySelector('.jumbo');


// Prendo ID del bottone
const buttonPlay = document.getElementById('play');
const mod = document.getElementById('select');

// Eventro al bottone per generare la griglia e la stampo su HTML
buttonPlay.addEventListener('click', function () {

    // svuoto pagina
    containerJumbo.innerHTML = '';

    // creo griglie in base ai .value immessi
    if (mod.value == 'hard') {
        generaGrid(49, 'squareseven');
    } else if (mod.value == 'medium') {
        generaGrid(81, 'squarenine');
    } else if (mod.value == 'easy') {
        generaGrid(100, 'squareten');
    }
});