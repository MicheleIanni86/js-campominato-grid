// Prendo la class del jumbo
let containerJumbo = document.querySelector('.jumbo');


// Prendo ID del bottone
const buttonPlay = document.getElementById('play');
const mod = document.getElementById('select');

let bombs = [];

let isgameGamer = false;
// Eventro al bottone per generare la griglia e la stampo su HTML
buttonPlay.addEventListener('click', function () {

    // svuoto pagina
    containerJumbo.innerHTML = '';

    let size = 100;

    // creo griglie in base ai .value immessi
    if (mod.value == 'hard') {
        size = 49;
        generaGrid(49, 'squareseven');
    } else if (mod.value == 'medium') {
        size = 81;
        generaGrid(81, 'squarenine');
    } else if (mod.value == 'easy') {
        size = 100;
        generaGrid(100, 'squareten');
    }

    bombs = generateBombList(16, size);
    console.log(bombs);

});






// Il computer deve generare 16 numeri casuali nello stesso range
// della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba,
// perciò nell’array delle bombe non potranno esserci due numeri uguali.



// step 2
// Step 2) In seguito l'utente clicca su una cella: se il numero è
// presente nella lista dei numeri generati - abbiamo calpestato una bomba -
// la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata
// si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// (modificato)

// Step3) La partita termina quando il giocatore clicca su una
// bomba o quando raggiunge il numero massimo possibile di numeri
// consentiti (ovvero quando ha rivelato tutte le celle che non
// sono bombe). Al termine della partita il software deve comunicare
// il punteggio, cioè il numero di volte che l’utente ha cliccato su una
// cella che non era una bomba.





