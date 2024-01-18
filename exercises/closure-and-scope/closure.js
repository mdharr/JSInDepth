const wrapperFunction = () => {
    const prices = [10, 28, 99, 3]

    const logPrices = () => {
        console.log(prices)
    }
    return logPrices
}

const result = wrapperFunction()

console.log(result)
result()