// Pure functions
export function capitalize(string) {
    if (typeof string !== 'string') {
        return ''
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}


export function range(start, end) {
    if (start > end) {
        [end, start] = [start, end] //меняем местами
    }
    return new Array(end - start + 1)
        .fill('')
        .map((_, index) => start + index)
}
  // input: 0, 3
  // output: [0, 1, 2, 3]


export function matrix($target, $current) {
    const target = $target.id(true)
    const current = $current.id(true)
    const cols = range(current.col, target.col)
    const rows = range(current.row, target.row)
    //console.log('Cols', cols)
    //console.log('Rows', rows)

    return cols.reduce((acc, col) => {
        rows.forEach(row => acc.push(`${row}:${col}`))
        return acc
    }, [])
    //console.log(ids)
}