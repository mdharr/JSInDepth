/*
    1. Create a class called "Animal"

    2. Allow us to pass in 2 properties/fields to the
       Animal constructor which get set to the instance:
       - type (String)
       - name (String)

    3. Create two instances of the Animal class of your
       choice passing in different "type" and "name" for each

    4. Print out both animal instances

    5. Change the "name" of one of your animals and print it
       out again.

    *HINT: "this" will refer to the instance inside the class
*/

class Animal {
    constructor(type, name) {
        this.type = type
        this.name = name
    }
}

const banana = new Animal("monkey", "banana")
const talie = new Animal("dog", "talie")

console.log(banana)
console.log(talie)

banana.name = "alfred"
console.log(banana)