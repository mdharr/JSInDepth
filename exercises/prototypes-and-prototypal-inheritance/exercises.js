/*
    1. Add a new function called "boop" to the prototype
       of String. This function should simply log out the
       String "Boop!".

    2. Create a new String with the value "meow" and
       assign it to a variable called "cat".

    3. Call the "boop" method on "cat" to make sure it
       works correctly.
*/

String.prototype.boop = () => {
    console.log("Boop!")
}

const cat = "meow"
// cat.boop()




/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)

    2. Log out all the properties within the Array
       prototype. (Only it's own properties)

    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?
*/

// console.log(Object.getOwnPropertyNames(Object.prototype))

// console.log(Object.getOwnPropertyNames(Array))
// console.log(Object.getOwnPropertyNames(Array.__proto__))

/*
    1. Create a new Object and assign it to a variable
       called "fakeArray". Give it the following value:
       { "0": "Zero", "1": "One", "2": "Two", length: 3}

    2. Set the prototype of "fakeArray" to be Array.prototype

    3. Use the map method on "fakeArray" to log out each item
       in the array.

    4. What is happening here and why does this work?
*/

const fakeArray = new Object({ "0": "Zero", "1": "One", "2": "Two", length: 3})

fakeArray.__proto__ = Array.prototype

// fakeArray.map(item => {
//     console.log(item)
// })




/*
    1. Create a new Object and assign it to a variable
       called "store". Give it the following value:
       { name: null, stock: [
        { name: 'candy', quantity: 100 },
        { name: 'fruit', quantity: 7 },
        { name: 'toys', quantity: 23 }] }

    2. Create another new Object called "myStore" and assign
       it to an empty Object. Then, set it's name to:
       "My Wonderful Store"
    3. Set the prototype of "myStore" to be "store"

    4. Create another new Object called "yourStore" and assign
       it to an empty  Object. Then, set it's name to:
       "Not My Wonderful Store"
    5. Set the prototype of "yourStore" to be "store"

    6. Modify the quantity of fruit in "myStore" to be 300
    7. Log out the name and stock from "myStore"
    8. Log out the name and stock from "yourStore"

    9. What is happening and Why?
*/

const store = { 
    name: null, 
    stock: [
        { name: 'candy', quantity: 100 },
        { name: 'fruit', quantity: 7 },
        { name: 'toys', quantity: 23 }
    ]
}

const myStore = {}
myStore['name'] = "My Wonderful Store"
myStore.__proto__ = store

const yourStore = {}
yourStore['name'] = "Not My Wonderful Store"
yourStore.__proto__ = store

myStore.stock[1].quantity = 300

// console.log(myStore.name)
// console.log(myStore.stock)
// console.log(yourStore.name)
// console.log(yourStore.stock)

// console.log(Object.getPrototypeOf(myStore))

// console.log(Object.getOwnPropertyNames(store.__proto__))
// console.log(Object.getOwnPropertyNames(myStore.__proto__))


/*
    1. Create the following  function:

       function Person(name) {
         this.name = name;
       }
    
    2. Create an instance of person in 2 ways:
       const cleo = Person("Cleo")
       const taylor = new Person("Taylor")

    3. Log out the own property names of each of these
       variables. What happens?

    4. Log out just taylor's own property names. Does this
       work? Why?

    5. Log out the prototype of cleo and taylor. What is
       happening? What about just taylor?
*/

function Person(name) {
    this.name = name;
}

const cleo = Person("Cleo")
const taylor = new Person("Taylor")

// console.log(Object.getOwnPropertyNames(cleo.__proto__))
console.log(taylor.__proto__.constructor.name)
console.log(Object.getOwnPropertyNames(taylor.__proto__.constructor))