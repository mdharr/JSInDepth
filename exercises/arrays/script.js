/*
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"

    2. Add the string "Jupiter" to the END of the array
    3. Add the string "Sun" to the START of the array
    4. Remove the last two strings from the array
    5. Remove the first two strings from the array

    *Print out the array after each of these steps ^
*/

// let planets = ["Mercury", "Venus", "Earth", "Mars"]
// console.log(planets)
// planets.push("Jupiter")
// console.log(planets)
// planets.unshift("Sun")
// console.log(planets)
// planets.pop()
// planets.splice(-2, 2)
// console.log(planets)
// planets.pop()
// console.log(planets)
// planets.shift()
// planets.splice(0,2)
// console.log(planets)
// planets.shift()
// console.log(planets)

/*
    1. Create a variable called "multiple" and initialize it to 5
    2. Create an array with the numbers 10-15 (inclusive)
    3. Loop through the array and on each iteration:
        - Multiply the number by the multiple and print out the result
        - As you're printing, use this format (example):
            10 x 5 = 50
            11 x 5 = 55
            ...
            15 x 5 = 75

    BONUS: Try to see if you can make it so that all you need to change
    is the "multiple" variable and the program still works correctly.
*/
// let multiple = 5
// let arr1 = [10, 11, 12, 13, 14, 15]
// arr1.forEach(item => {
//     console.log(`${item} x ${multiple} = ${item*multiple}`)
// })

/*
    Create a variable called "greeting" and initialize it to:
        "Hello, nice to meet you!"
    
    Use a loop to loop through this String (just like you would an array)
        - On each loop iteration, print out what is at that index

    WHY does this happen?
    WHAT is a String, really?
*/

let greeting = "Hello, nice to meet you!"
for(let i = 0; i < greeting.length; i++) {
    console.log(greeting[i])
}

/*
    Create a variable called "total" that starts at 0

    Create an array called "grades" with the following values:
        - 55
        - 63
        - 82
        - 98
        - 91
        - 43
        
    Figure out how to print out the AVERAGE grade
    (This is the sum of all grades divided by the number of grades)
*/




/*
    Create a variable called "bakery" that points to an array
    Fill the array with the following String:
        - "Cake"
        - "Cookie"
        - "Bread"
        - "Scone"

    Print out bakery to make sure it has these 4 Strings in it.

    Create another variable called "myBakery" and assign it
    to "bakery" that we declared previously

    Add the following items to "myBakery":
        - "Croissant"
        - "Granola"

    Print out myBakery and bakery and observe the contents.

    WHY is this?
*/

/*

Write a function that accepts a string as an argument

The function should capitalize ONLY every other letter in the string

The function should then return the converted string

*/

// function capitalizeEveryOtherLetter(string) {
//     let charArray = string.toLowerCase().split('')
//     for(let i = 0; i < charArray.length; i++) {
//         if(i % 2 === 0) {
//             charArray[i] = charArray[i].toUpperCase()
//         }
//     }
//     return charArray.join('')
// }

// console.log(capitalizeEveryOtherLetter('hello'))
// console.log(capitalizeEveryOtherLetter('yo MICHAEL'))
// console.log(capitalizeEveryOtherLetter('helloo?!?!?!'))


/*

    Write a function that accepts a String as an argument.

    The String is supposed to be HTML, but all the div
    elements are missing their closing tags (they have the < and >)

    The function's job is to find and close all the divs 
    in the provided HTML String

    The function should return the entire corrected string.

*/

let HTMLString = 
    `<div>Lorem ipsum dolor sit, eos est quas.<div>
    <div>Lorem ipsum dolor sit, eos est quas.<div>
    <div>Lorem ipsum dolor sit, eos est quas.<div>
    <div>Lorem ipsum dolor sit, eos est quas.<div>
    <div>Lorem ipsum dolor sit, eos est quas.<div>`

// function closeDivTags(str) {
//     let charArray = str.split('')
//     let counter = 0
//     for(let i = 0; i < charArray.length; i++) {
//         if(charArray[i] === '<' 
//         && charArray[i+1] === 'd' 
//         && charArray[i+2] === 'i' 
//         && charArray[i+3] === 'v' 
//         && charArray[i+4] === '>') {
//             counter++
//             if(counter % 2 === 0) {
//                 charArray.splice(i+1, 0, '/')
//             }
//         }
//     }
//     return charArray.join('')
// }

// function closeDivTags(str) {
//     let counter = 0
//     return str.replace(/<div>/g, () => {
//         counter++
//         return (counter % 2 === 0) ? '</div>' : '<div>'
//     })
// }

// console.log(closeDivTags(HTMLString))

// using String.prototype to create isPalindrome function that has no parameters
// String.prototype.isPalindrome = function () {
//     let reversedString = this.split('').reverse().join('')
//     if(String(this) === reversedString) {
//         console.log(this.toString(), reversedString)
//         return true
//     } else {
//         console.log(this.toString(), reversedString)
//         return false
//     }
// }

// let radar = 'radar'
// console.log(radar.isPalindrome())

// recreate Map function based on Array.prototype
// Array.prototype.myMap = function (cb) {
//     const newArray = []
//     for(let i = 0; i < this.length; i++) {
//         newArray[i] = cb(this[i])
//     }
//     return newArray
// }

// const arr1 = [1, 2, 3].myMap(console.log)
// const arr2 = ["a", "b", "c"].myMap(console.log)

// console.log(arr1)
// console.log(arr2)

// Array.prototype.flatten = function() {
//     let result = []
//     for (const value of this) {
//         if(Array.isArray(value)) {
//             // both spread and concat work here but have to change result from const to let
//             // const flattened = value.flatten()
//             // result.push(...flattened)
//             result = result.concat(value.flatten())
//         } else {
//             result.push(value)
//         }
//     }
//     return result
// }

// const arr1 = [1, 2, 3].flatten()
// const arr2 = [[1, 2], 2, 3].flatten()
// console.log(arr2)

// Document.prototype.myGetElementById = function (id) {
//     for (const element of this.children) {
//         if (element.id === id) return element
//         const found = Document.prototype.myGetElementById.call(element, id)
//         if (found) return found
//     }
//     return null
// }