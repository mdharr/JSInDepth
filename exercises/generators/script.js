// const counter = function* () {
//     yield 1
//     yield 2
//     yield 3
// }

// console.log(counter)

// const counterGenerator = counter()

// // for (const count of counterGenerator) {
// //     console.log(count)
// // }

// let counterObject = counterGenerator.next()

// while(!counterObject.done) {
//     console.log(counterObject.value)
//     counterObject = counterGenerator.next()
//     console.log(counterObject)
// }

// console.log("All done!")



// function count() {
//     let i = 0
//     while(true) {
//         console.log(i)
//         i++
//     }
// }

// count()

// const counter = function* () {
//     let i = 0
//     while(true) {
//         yield i
//         i++
//     }
// }

// const counterGenerator = counter()

// // for(const value of counterGenerator) {
// //     console.log(value)
// // }

// let count = 0

// while(count < 5) {
//     console.log(counterGenerator.next())
//     count++
// }







/*
    1. Create a generator function called "countTo10" that will
       yield the numbers 0-10 (inclusive) then stop.

    2. Create the generator object by calling the generator
       function and iterate through the generator using a
       for...of loop.
*/

// const countTo10 = function* () {
//     let i = 0
//     while(i <= 10) {
//         yield i
//         i++
//     }
// }

// const generatorObject = countTo10()

// for(const value of generatorObject) {
//     console.log(value)
// }



/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/

// const randomNumber = function* () {
//     while(true) {
//         yield Math.random()
//     }
// }

// const generatorObject = randomNumber()

// Standard for loop
// for(let i = 0; i < 10; i++) {
//     console.log(generatorObject.next().value)
// }

// While loop
// let i = 0
// while(i < 10) {
//     console.log(generatorObject.next().value)
//     i++
// }

// for...of loop
// let i = 0
// for(const value of generatorObject) {
//     console.log(value)
//     i++
//     if(i === 10) {
//         break
//     }
// }



/*
    1. Create a generator function called "randomAmountFromRange"
       which has 3 parameters: amount, min, and max

    2. ^ This function will generate the amount of random numbers
       provided as an argument, between the min and max (inclusive)
       Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19

    3. Create a for...of loop that will loop through the following
       generator objects to test it:
       - randomAmountFromRange(3, 10, 20)
       - randomAmountFromRange(5, 100, 200)
       - randomAmountFromRange(10, 1000, 2000)
*/

// const randomAmountFromRange = function* (amount, min, max) {
//     for(let i = 0; i < amount; i++) {
//         yield Math.floor(Math.random() * (max - min + 1)) + min
//     }
// }

// const generatorObject1 = randomAmountFromRange(3, 10, 20)
// const generatorObject2 = randomAmountFromRange(5, 100, 200)
// const generatorObject3 = randomAmountFromRange(10, 1000, 2000)
// // const generatorObjects = [generatorObject1,generatorObject2,generatorObject3]

// for(const value of generatorObject1) {
//     console.log(value)
// }

// for(const value of generatorObject2) {
//     console.log(value)
// }

// for(const value of generatorObject3) {
//     console.log(value)
// }


/*
    1. Create a generator function called "getRandomNumber"
       that generates a random number between 1-10 (inclusive)
       exactly 5 times

    2. Create another generator function called "groceryList"

       Inside of "groceryList", create a variable called
       "groceries" that points at:
       ["Avocado", "Cookie", "Milk", "Soup", "Soda"]

       The generator will yield a random grocery from "groceries"
       and also remove that grocery item from the list of "groceries"
       Eg: const groceries = groceryList();
           groceries.next() => "Cookie"
           groceries.next() => "Soup"

    3. Create 2 generator Objects by calling each of the 2
       generator functions above ^

    4. Create a regular for loop that will loop 5 times and calls
       .next() on each of the generator Objects ^ to print out a
       random number followed by a random grocery:
       Eg: 5 Avocado
           10 Soup
*/

// random number generator
const getRandomNumber = function* () {
    for(let i = 0; i < 5; i++) {
        yield Math.floor(Math.random() * (10 - 1 + 1) + 1)
    }
}

const randomNumGenerator = getRandomNumber()

// grocery list generator
const groceryList = function* () {
    const groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"]
    const groceryLength = groceries.length
    for(let i = 0; i < groceryLength; i++) {
        yield groceries.splice(Math.floor(Math.random() * groceries.length), 1)
    }
}

const randomGroceryGenerator = groceryList()

for(let i = 0; i < 5; i++) {
    const randomNumber = randomNumGenerator.next().value
    const randomGrocery = randomGroceryGenerator.next().value
    console.log(`${randomNumber} ${randomGrocery}`)
}
