/*
    1. Create an array called "practice" with the numbers 25-30 (inclusive)

    2. Create another array using map that squares each number in "practice"
    
    3. Print out both "practice" and the new mapped array
*/

// let practice = [25, 26, 27, 28, 29, 30]
// let squared = practice.map(number => number**2)
// console.log(squared)


/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]

    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place
        - if "false", return 0

    3. Print out both arrays

    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/

// const boolsArray = [true, true, false, true, false, false]
// const mappedArray = boolsArray.map(element => element === true ? Math.floor(Math.random()*100)+1 : 0)
// console.log(mappedArray)

/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a new array using map called "taxedPrices" that:
        - If the price is greater than 10, add 20% tax to it
        - Otherwise, do not add any tax

    3. Print out both arrays
*/

// const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2]
// const taxedPrices = prices.map(element => element > 10 ? element += (element*0.2) : element)
// console.log(prices)
// console.log(taxedPrices)

/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create an new array called "plurals" that:
        - maps over "items" and adds an 's' to each one

    3. Print out both arrays

    4. Change it so if we see "mouse", we instead return "mice"
*/

const items = ["light", "banana", "phone", "book", "mouse"]
const plurals = items.map(item => `${item}s`)
console.log(items)
console.log(plurals)


/*
    1. Create the following array called "row":
        [10, 20, 30, 40, 50]

    2. Create an new array called "matrix" that:
        - maps over "row" and return each item, but in an array
        (We should have a 2-dimensional array as a result)

    3. Print out both arrays

    "matrix" should look like this:
        [[10], [20], [30], [40], [50]]
*/