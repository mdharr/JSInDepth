/*
    1. Create an array called "practice" with the numbers 10-20 (inclusive)

    2. Create another array using filter that keeps the even numbers in "practice"
    
    3. Print out both "practice" and the new filtered array
*/

// const practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// const evenNums = practice.filter(item => item % 2 === 0)
// console.log(evenNums)

/*
    1. Create an array called 'countries' of the following strings:
        ["France", "South Africa", "Brazil", "United States", "Sweden"]

    2. Filter over 'countries' and keep only the countries that have
       a blank space in their name (South Africa and United States)

    3. Print out both arrays

    HINT: Google for "javascript string contains"
*/

// const countries = ["France", "South Africa", "Brazil", "United States", "Sweden"]
// const hasSpaces = countries.filter(country => country.includes(' '))
// console.log(hasSpaces)

/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a new array using filter called "lowPrices" that
       keeps all the prices where the price plus a 15% tax is
       less than 10.00

    3. Print out both arrays
*/

// const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2]
// const lowPrices = prices.filter(price => (price + (price*.15)) < 10.00)
// console.log(lowPrices)

/*
    1. Create the following array called "values":
        [[1,2,3], [0,0,1], [3,6,9], [0,1,2]]

    2. Create an new array called "hasTwos" that:
        - filters over "values" and keeps only the sub-arrays
          that have a 2 in them

    3. Print out both arrays

    "hasTwos" should equal to: [[1,2,3], [0,1,2]]

    HINT: Google for "javascript array includes"
*/

// const values = [[1,2,3], [0,0,1], [3,6,9], [0,1,2]]
// const hasTwos = values.filter(value => {
//     for(let i = 0; i < value.length; i++) {
//         if(value[i] === 2) return value
//     }
// })


// const hasTwos = values.filter(value => value.includes(2))

// console.log(hasTwos)


/*
    1. Create the following array called "nums":
        [10, 20, 30, 40, 50]

    2. Create an new array called "timesTwo" that:
        - maps over "nums" and returns each number
          multiplied by two

    3. Create an new array called "over50" that:
        - filters "timesTwo" to keep only values over 50

    4. Print out all 3 arrays

    "over50" should contain: [60, 80, 100]
*/

const nums = [10, 20, 30, 40, 50]
const timesTwo = nums.map(num => num*2)
const over50 = timesTwo.filter(num => num > 50)
console.log(nums)
console.log(timesTwo)
// method chaining on nums also viable
// const over50 = nums.map(num => num*2).filter(num => num > 50)
console.log(over50)


