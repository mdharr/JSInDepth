// const counter = (number) => {
//     while(number >= 0) {
//         console.log(number)
//         number--
//     }
// }

// counter(10)

const counter = (number) => {
    if(number === 0) return
    console.log(number)
    counter(number - 1)
}

counter(10)