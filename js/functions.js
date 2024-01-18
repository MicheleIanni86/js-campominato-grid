function generaCell(numero) {
    const cell = document.createElement('div');
    cell.classList.add('squareten');
    cell.innerHTML = numero;
    return cell;
}


function generaGridTen(size) {

    for (let i = 1; i < size + 1; i++) {
        const cell = generaCell(i);
        containerJumbo.append(cell);
    }
}

