// FUZNIONE PER GENERARE LA CELLA;
function generaCell(cellDim) {
    const cell = document.createElement('div');
    cell.classList.add('squareten');
    cell.innerHTML = cellDim;
    cell.addEventListener('click', function () {
        cell.classList.toggle('attiva');
    });

    return cell;
}


function generaGridTen(size) {

    for (let i = 1; i < size + 1; i++) {
        const cell = generaCell(i);
        containerJumbo.append(cell);
    }
}

