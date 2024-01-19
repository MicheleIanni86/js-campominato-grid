// FUZNIONE PER GENERARE LA CELLA;
function generaCell(numCell, classe) {
    const cell = document.createElement('div');
    cell.classList.add(classe);
    cell.innerHTML = numCell;
    // click colore
    cell.addEventListener('click', function () {
        if (!isGameOver) {


            const number = parseInt(numCell);
            console.log(number);
            cell.classList.toggle('attiva');
            if (bombs.includes(numCell)) {
                cell.classList.add('bomb');
                isGameOver = 'Mi dispiace, hai cliccato una Bomba!';
                alert(isGameOver);
            }
        }
    });

    return cell;
}



// FUNZIONE PER GENERARE UNA GRIGLIA
function generaGrid(size, classe) {
    containerJumbo.innerHTML += '';
    for (let i = 1; i < size + 1; i++) {
        const cell = generaCell(i, classe);
        containerJumbo.append(cell);
    }
}

// FUNZIONE PER GENERARE NUMERO RANDOM

function generaRandom(min, max) {
    let generateBomb = Math.floor(Math.random() * ((max + 1) - min) + min);
    return generateBomb;
}

// FUNZIONE PER GENERARE LISTA BOMBA
function generateBombList(bombs, classe) {


    const bombList = [];
    while (bombList.length < bombs) {
        const randomNumber = generaRandom(1, classe);
        if (!bombList.includes(randomNumber)) {
            bombList.push(randomNumber);
        }

    }
    return bombList;
};