/*
    1. Given the class definitions below, predict
       what will be logged out with the code:

       class Animal {
        static knownMammals = [];
        mammal = false;
        eyes = 2;

        static isMammal() {}
        describe() {}
       }

       class Monkey extends Animal {
        static knownMonkeys = [];
        height;
        weight;

        static isCute() {}
        eatBanana() {}
       }

    2. What will this code print out:
       const animal = new Animal();
       console.log(Object.getOwnPropertyNames(animal))
       console.log(Object.getOwnPropertyNames(animal.__proto__))
       console.log(Object.getOwnPropertyNames(Animal))
       console.log(Object.getOwnPropertyNames(Animal.__proto__))

       const monkey = new Monkey();
       console.log(Object.getOwnPropertyNames(monkey))
       console.log(Object.getOwnPropertyNames(monkey.__proto__))
       console.log(Object.getOwnPropertyNames(Monkey))
       console.log(Object.getOwnPropertyNames(Monkey.__proto__))
*/

class Animal {
    static knownMammals = []
    mammal = false
    eyes = 2
    // constructor(mammal, eyes) {
    //     this.mammal = mammal
    //     this.eyes = eyes
    // }

    static isMammal() {}
    describe() {}
}

class Monkey extends Animal {
    static knownMonkeys = []
    height
    weight

    static isCute() {}
    eatBanana() {}
}

   const animal = new Animal(false, 2)
   console.log(Object.getOwnPropertyNames(animal)) // non static fields in or outside of the constructor
   console.log(Object.getOwnPropertyNames(animal.__proto__)) // constructor and other non static methods
   console.log(Object.getOwnPropertyNames(Animal)) // static methods/properties and prototype
   console.log(Object.getOwnPropertyNames(Animal.__proto__)) // prototype properties/methods? (in this case the prototype is Function)

   const monkey = new Monkey()
   console.log(Object.getOwnPropertyNames(monkey)) // inherited non static fields and own fields in or outside of constructor
   console.log(Object.getOwnPropertyNames(monkey.__proto__)) // constructor and non static methods
   console.log(Object.getOwnPropertyNames(Monkey)) // static methods/properties and prototype
   console.log(Object.getOwnPropertyNames(Monkey.__proto__)) // prototype properties/methods? (in this case the prototype is Animal)