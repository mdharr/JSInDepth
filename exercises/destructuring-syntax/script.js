/*
    1. Create an variable called "jungle" that points at the array:
        ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"]

    2. Use array destructuring to destructure out "Lion", and 
       "Rabbit" while ignoring the other animals

    3. Print out your variables containing "Lion" and "Rabbit"
*/

// const jungle = ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"]
// const [,lion,,rabbit,] = jungle
// console.log(lion)
// console.log(rabbit)



/*
  1. Create a variable called "snacks" that points to the Object:
        {
            chips: {name: "Pringles", salty: true},
            candy: {name: "Twizzlers", salty: false},
            chocolate: {name: "Mars", salty: false},
        } 

  2. Destructure out "candy" from "snacks" using the Objects
     destructuring syntax. Also destructure out the key
     "fruit" which will be set to a default value of:
     {name: "Banana", salty: false} if it doesn't exist inside
     of "snacks".
     
  3. Print out the variables pointing at the "candy" and "fruit" Objects
*/





/*
    1. Create a variable called "store" that is a Map. Then add
       the following entries to the "store":
        - "Cups" with a value of 46
        - "Candles" with a value of 121
        - "Vases" with a value of 15

    2. Use a for...of loop to loop through "store" but inside
       the loop's (const ____ of ____) syntax, use destructuring
       to destructure out the key and value using Array style
       destructuring.
    
    3. Within the loop, print out the key and value on the
       same line seperated by a " => ". Eg: Cups => 46
       (The loop's body should only have one line of code)
*/





/*
    1. Create a function called "xyzCalc" that has a single
       parameter that is an Object. It expects to get that Object
       as an argument that looks like the following format:
       { x: 20, y: 2, z: 7 }

    2. The function will return the following calculation
       using x, y and z inside the Object:
          5 * x - 2 * y - z

    3. Call this function using the following Objects and
       make sure the results match:
       - xyzCalc({ x: 20, y: 2, z: 7 }) => 89
       - xyzCalc({ x: 2, y: 1, z: 20 }) => -12
       - xyzCalc({ x: 100, y: 100, z: 100 }) => 200

    4. Use destructuring inside the paramater list of the 
       "xyzCalc" to grab out the x, y and z values directly
       inside the function paramater list (as opposed to 
       inside the function body).

    5. Redo step 3 and make sure it still works

    *Which method do you prefer?
    ** Which method is more clear?
*/







// Example with string
// const str = "Hello everyone, my name is Michael."
// const [...letters] = str
// console.log(letters)

// Example with map
// const groceries = new Map()
// groceries.set("apple", 25)
// groceries.set("banana", 100)

// // const [ ...groceriesArr ] = groceries
// const groceriesArr = Array.from(groceries)

// console.log(groceriesArr)


// Example with object
// const movie = {
//     title: "Dune",
//     year: "2021",
//     length: 155,
//     book: true
// }

// const { title, year, length, book, rating = 0 } = movie

// console.log(title)
// console.log(year)
// console.log(length)
// console.log(book)
// console.log(rating)

