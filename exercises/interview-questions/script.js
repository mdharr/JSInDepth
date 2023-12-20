// const users = [
//     {
//         id: 1,
//         name: "Jack",
//         isActive: true,
//         age: 20,
//     },
//     {
//         id: 2,
//         name: "John",
//         isActive: true,
//         age: 18,
//     },
//     {
//         id: 3,
//         name: "Mike",
//         isActive: false,
//         age: 30,
//     },
// ]

// const names = users
//     .sort((a,b) => a.age - b.age)
//     .filter(user => user.isActive)
//     .map(user => user.name)

// console.log(names)
const numbers = [0, 1, 2]
function addElementToArray(arr, element) {
    return [...arr, element]
}

console.log(addElementToArray([0, 1, 2], 3))
console.log(numbers)