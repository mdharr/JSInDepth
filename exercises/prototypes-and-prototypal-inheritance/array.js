// const animal = {
//     type: 'monkey',
//     __proto__: Array.prototype,
// }

// console.log(animal)
// console.log(Object.getOwnPropertyNames(animal.__proto__))
// animal.push(["color", "blue"])
// console.log(animal)

// function Animal(type) {
//     this.type = type
// }

class Animal {
    constructor(type) {
        this.type = type
    }
}

const monkey = new Animal("monkey")

console.log(monkey)