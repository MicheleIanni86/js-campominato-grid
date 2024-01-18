
// FUNZIONE PER GENERARE UNA GRIGLIA
function generaGrid(size, classe) {
    containerJumbo.innerHTML += '';
    for (let i = 1; i < size + 1; i++) {
        const cell = generaCell(i, classe);
        containerJumbo.append(cell);
    }
}

// FUZNIONE PER GENERARE LA CELLA;
function generaCell(cellDim, classe) {
    const cell = document.createElement('div');
    cell.classList.add(classe);
    cell.innerHTML = cellDim;
    // click colore
    cell.addEventListener('click', function () {
        cell.classList.toggle('attiva');
    });

    return cell;
}



