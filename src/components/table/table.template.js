const CODES = {
    A: 65,
    Z: 90
}

//function createCell(row, col) {
//    return `
//        <div class="cell" contenteditable data-col="${col}" 
//        data-row="${row}"></div>
//    `
//}

function createCell(row) {
    return function(_, col) {
        return `
        <div class="cell" 
        contenteditable 
        data-col="${col}"
        data-type="cell" 
        data-id="${row}:${col}"></div>
    `
    }
}

function createCol(el, index) {
    return `
        <div class="column" data-type="resizable" data-col = "${index}">
            ${el}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(index, content) {
    const row = `<div class="row-resize" data-resize="row"></div>`
    const resizer = index ? `${row}` : ''
    return `
        <div class="row" data-type="resizable">
            <div class="row-info">
            ${index ? index : ''}
            ${resizer}
            </div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(createCol)
        .join('')

    rows.push(createRow(null, cols))

    for (let row = 0; row < rowsCount; row++) {
        const cell = new Array(colsCount)
        .fill('')
        //.map((_, col) => createCell(row, col))
        .map(createCell(row))
        .join('')
        rows.push(createRow(row + 1, cell))
    }
    
    return rows.join('')
}