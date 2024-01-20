class Person {
    constructor(name) {
        this.name = name
    }
}

const thor = new Person("Thor")

Person.prototype.greet = function() {
    console.log(`${this.name} says hello!`)
}

thor.greet()