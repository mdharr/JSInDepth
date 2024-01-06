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

const countTo10 = function* () {
    let i = 0
    while(i <= 10) {
        yield i
        i++
    }
}

const generatorObject = countTo10()

for(const value of generatorObject) {
    console.log(value)
}



/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/





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





/*
    1. Create a generator function called "getRandomNumber"
       that generates a random number between 1-10 (inclusive)
       exactly 5 times

    2. Create another generator function called "groceryList"

       Inside of "groceryList", create an variable called
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