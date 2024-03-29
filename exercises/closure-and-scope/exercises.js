/*
    1. Create a function called "createCounter" that has
       no parameters
    2. Inside "createCounter" create:
       - a variable called "counter" that starts at 0
       - a function called "incrementCounter" that increments
         the "counter" variable and then logs it out.
    3. Return "incrementCounter" from the "createCounter" function

    4. Test createCounter using different numbers like so:
       const counter = createCounter();
       counter(); // 1
       counter(); // 2
       counter(); // 3
       counter(); // 4

    * Why is this considered "closure"?
*/

// const createCounter = () => {
//    let counter = 0

//    const incrementCounter = () => {
//       counter += 1
//       console.log(counter)
//    }
//    return incrementCounter
// }

// const counter = createCounter()

// counter()
// counter()
// counter()
// counter()


/*
    1. Create a function called "stringBuilder" that has no
       parameters
    2. Create a String inside "stringBuilder" named "result"
       that starts as an empty String
    3. Create a Function inside "stringBuilder" called "add"
       that has a single parameter called "characters"
       - This function will add/concatenate the "characters"
         to the "result" String and then return the "result"
    4. Return the "add" function from "stringBuilder"

    5. Test out stringBuilder a few times like so:
       const builder = stringBuilder();
       let text = builder("Hello ");
       text = builder("there ");
       text = builder("friend!");
       console.log(text); // "Hello there friend!"
*/

// function stringBuilder() {
//    let result = ''
//    function add(characters) {
//       result += characters
//       return result
//    }
//    return add
// }

// const builder = stringBuilder()

// let text = builder("Hello ")
// text = builder("there ")
// text = builder("friend!")
// console.log(text)





/*
    1. Create a function called "createVendingMachine" that has no
       parameters
    2. Create an Array inside "createVendingMachine" named "stock"
       that has the following values:
       ["Cola", "Chips", "Chocolate", "Juice", "Nuts"]
    3. Create a Number inside "createVendingMachine" called "coins"
       that starts at 0
    3. Create a Function inside "createVendingMachine" called "add25"
       that has no parameters. This function will:
       - Add 25 to "coins"
       - If "coins" is 100, pick a random item from "stock"
         and log out `You got some <item_name>` (do not remove
         the item from "stock") and then reset coins to 0.
       - If coins is less than 100, print out:
         "Insert ____ more coins" to show how many
         more coins are needed
    4. Return the "add25" function from "createVendingMachine"

    5. Test out createVendingMachine a few times like so:
       const vendingMachine = createVendingMachine();
       vendingMachine(); // "Insert 75 more coins"
       vendingMachine(); // "Insert 50 more coins"
       vendingMachine(); // "Insert 25 more coins"
       vendingMachine(); // "You got some Chips"
       vendingMachine(); // "Insert 75 more coins"
*/

// const createVendingMachine = () => {
//    const stock = ["Cola", "Chips", "Chocolate", "Juice", "Nuts"]
//    let coins = 0

//    const add25 = () => {
//       const random = Math.floor(Math.random() * stock.length)
//       console.log(`Random: ${random}`)
//       coins += 25
//       if(coins >= 100) {
//          console.log(`You got some ${stock[random]}`)
//          coins = 0
//       } else {
//          console.log(`Please insert ${100 - coins} more coins`)
//       }
//    }
//    return add25
// }

// const vendingMachine = createVendingMachine()
// vendingMachine()
// vendingMachine()
// vendingMachine()
// vendingMachine()
// vendingMachine()




/*
    1. Create a function called "createDatabase"
       which has no parameters
    2. Create an array called "storage" inside
       "createDatabase" with the following value:
       ["Apple", "Banana", "Carrot"]
    3. Create a function inside "createDatabase"
       called "addToDB" that takes a single argument.
       This function will push the argument on to
       the "storage" array then log out the array
    4. Create another function inside "createDatabase"
       called "clearDB" with no parameters. This function
       will clear all the elements out from the "storage"
       array (erase them all)
    5. Return an array from "createDatabase" with two values:
       [addToDB, clearDB]

    6. How would you use "createDatabase" to add values to
       then clear out the "database" (storage array inside)?
*/

// const createDatabase = () => {
//    let storage = ["Apple", "Banana", "Carrot"]

//    const addToDB = (item) => {
//       storage.push(item)
//       console.log(storage)
//    }

//    const clearDB = () => {
//       storage = []
//       console.log(storage);
//    }
//    return [addToDB, clearDB]
// }

// // my solution without destructuring
// // const manageStorage = createDatabase()
// // manageStorage[0]('Peach')
// // manageStorage[1]()
// // manageStorage[0]('Starfruit')

// // solution with destructuring
// const [add, clear] = createDatabase()

// add('Strawberry')
// clear()
// add('Starfruit')