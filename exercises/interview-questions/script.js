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
// const numbers = [0, 1, 2]
// function addElementToArray(arr, element) {
//     return [...arr, element]
// }

// console.log(addElementToArray([0, 1, 2], 3))
// console.log(numbers)

// const arr1 = [0, 1, 2]
// const arr2 = [3, 4, 5]

// function concatArrays(arr1, arr2) {
//     // return arr1.concat(arr2)
//     return [...arr1, ...arr2]
// }

// const result = concatArrays(arr1, arr2)
// console.log(result)
// console.log(arr1)
// console.log(arr2)

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30,
    },
]

// low level solution
// function checkNameExists(name, users) {
//     let exists = false
//     for (let i = 0; i < users.length; i++) {
//         if(users[i].name === name) {
//             exists = true
//         }
//     }
//     return exists
// }

// console.log(checkNameExists('John', users))

// best solution
// function checkNameExists(name, arr) {
//     return arr.some(user => user.name === name)
// }

// console.log(checkNameExists('John', users))

// using find and wrapping element in Boolean()
// function checkNameExists(name, arr) {
//     const el = arr.find(el => el.name === name)
//     return Boolean(el)
// }

// one more solution using findIndex
// if the index doesn't exist, it will be < 0
// function checkNameExists(name, arr) {
//     const index = arr.findIndex(el => el.name === name)
//     return index > 0
// }

// console.log(checkNameExists('John', users))

// remove uniques with spread operator and Set
// const numbers = [1, 1, 2]
// function removeDuplicates(arr) {
//     return [...new Set(arr)]
// }

// console.log(removeDuplicates(numbers))

// make unique with forEach, includes, and push
// function removeDuplicates(arr) {
//     const result = []
//     arr.forEach(item => {
//         if(!result.includes(item)) {
//             result.push(item)
//         }
//     });
//     return result
// }

// solution using reduce, includes, with ternary and spread
// I really like this solution!!
// function removeDuplicates(arr) {
//     return arr.reduce((acc, el) => {
//         return acc.includes(el) ? acc : [...acc, el]
//     }, [])
// }

// console.log(removeDuplicates(numbers))
// const numbers = [3, 5, 1]
// function sortArray(arr) {
//     return [...numbers].sort((a,b) => a - b)
// }
// const result = sortArray(numbers)
// console.log(numbers)
// console.log(result)
