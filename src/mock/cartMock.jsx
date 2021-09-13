const sumCartItem = props => {

    let sum = 0
    let item = null
    for (let i = 1; i <= 11; i++) {
        item = localStorage.getItem(i)
        if (item !== null)
            sum++
    }

    return sum
}

export { sumCartItem }