const animal = {
    type: "monkey",
    numLegs: 2,
}
console.log(animal)
console.log(animal.__proto__)
console.log(animal.__proto__.__proto__)

console.log(Object.getPrototypeOf(animal))

console.log(Object.getOwnPropertyNames(animal))

Object.prototype.speak = () => {
    console.log("Hi!")
}

console.log(Object.getOwnPropertyNames(animal.__proto__))
animal.speak()