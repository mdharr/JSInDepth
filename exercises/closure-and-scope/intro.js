// const prices = [10, 15, 20, 25]

// const logPrices = () => {
//     console.log(prices)
// }

// logPrices()

// console.log(prices)

// const wrapperFunction = () => {
//     const prices = [10, 28, 99, 3]

//     const logPrices = () => {
//         console.log(prices)
//     }

//     logPrices()

//     console.log(prices)
// }

// wrapperFunction()
// console.log(prices)

const wrapperFunction = () => {
    const prices = [10, 28, 99, 3]

    const logPrices = () => {
        console.log(prices)
    }

    return logPrices
}

const logPrices = wrapperFunction()

console.log(typeof logPrices)

// logPrices()