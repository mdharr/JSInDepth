/*
    1. Create a variable called "baboon" that points to a Symbol
       with a description of "Monkey"

    2. Create a variable called "gorilla" that points to a Symbol
       with a description of "Monkey" as well

    3. Print out the types of each of the symbols as well as their
       description property

    4. Are the two symbols equivalent? (Equality check)
       Why or why not?
*/

const baboon = Symbol("Monkey")

const gorilla = Symbol("Monkey")

console.log(typeof baboon)
console.log(typeof gorilla)
console.log(baboon === gorilla)





/*
    1. Create a variable "movie" that points at this Object:
       { name: "Blade Runner", director: "Ridley Scott",
         year: 1982, rating: 89, genre: "Science Fiction" }

    2. Add the two more properties to the "movie" Object:
       [Symbol("budget")]: 30
       [Symbol("boxOffice")]: 41.6

    3. Use a for-of loop to loop through all the entries inside
       "movie" and print out their key-value pairs:
       Eg: name => Blade Runner, director => Ridley Scott

    4. How would you access and print out the symbols in "movie"?
*/








/*
    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
         rating: 4.6, genre: "Science Fiction", movie: true }

    2. Create a Symbol.iterator property on "book" that will
       allow you to loop over it using a for-of-loop that will
       give you back the key-value pairs each loop as a paired
       array (similar to a Map): ["name", "1984"] ["rating", 4.6]

    3. Test your loop with a for-of-loop to make sure it works

    HINT: A generator function is the easiest way to do this
*/








/*
    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
         rating: 4.6, genre: "Science Fiction", movie: true }

    2. Create a Symbol.asyncIterator property on "book" that
       will allow you to loop over it using a for-await-of-loop
       that will give you back the key-value pairs each loop but
       delayed by 1 second each as a paired array 
       (similar to a Map): ["name", "1984"] ["rating", 4.6]

    3. Test your loop with a for-await-of-loop to make sure it works

    HINT: An async generator function is the easiest way to do this
*/





















// notes


// const mySymbol = Symbol()
// const namedSymbol = Symbol("monkey")

// console.log(mySymbol)
// console.log(namedSymbol)


// const character = {
//     name: "Rick Axley",
//     class: "Axe Wielder",
//     quote: "I'll never let you down",
//     [Symbol("admin")]: false,
//     [Symbol.iterator]: function* () {
//         yield* [1, 2, 3]
//     },
// }

// for (const key of Object.keys(character)) {
//     console.log(key)
// }

// console.log(Object.getOwnPropertySymbols(character))

// for(const value of character) {
//     console.log(value)
// }