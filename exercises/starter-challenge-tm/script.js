// function helloWorld() {
//     return "Hello World!"
// }

// console.log(helloWorld())

// function getSum(a, b) {
//     return a + b
// }

// console.log(getSum(5,6))

// function calculator(num1, num2, operator) {
//     let result;

//     switch(operator) {
//         case '+':
//             result = num1 + num2
//             break
//         case '-':
//             result = num1 - num2
//             break
//         case '*':
//             result = num1 * num2
//             break
//         case '/':
//             result = num1 / num2
//             break
//         default:
//             throw new Error('Invalid Operator')    
//     }
//     return result
// }

// console.log(calculator(5, 10, '/'))

// function countOccurrences(string, character) {
//     let count = 0
//     for(let i = 0; i < string.length; i++) {
//         if(string[i] === character) {
//             count++
//         }
//     }
//     return count
// }

// console.log(countOccurrences('hippopotamus', 'p'))

// function findMaxNumber(numArray) {
//     return Math.max(...numArray)
// }

// function findMaxNumber(numArray) {
//     const result = numArray.reduce((max, num) => {
//         if(num > max) max = num
//         return max
//     }, 0)
//     return result
// }
// console.log(findMaxNumber([1,2,3,4,5,9,8,7,6]))

// function titleCase(string) {
//     let strings = string.split(' ')
//     let result = []
//     for(const string of strings) {
//         let newString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
//         result.push(newString)
//     }
//     return result.join(' ')
// }

// function titleCase(string) {
//     return string.toLowerCase().split(' ').map(word => {
//         return (word.charAt(0).toUpperCase() + word.slice(1)).replace(/[^a-zA-Z]/g, '')
//     }).join(' ')
// }

// console.log(titleCase('sHoRt AnD sToUt!!!'))
// console.log(titleCase('the quick brown fox'))

// function reverseString(str) {
//     return str.split('').reverse().join('')
// }

// function reverseString(str) {
//     let result = ''
//     for(let i = str.length-1; i >= 0; i--) {
//         result+=str[i]
//     }
//     return result
// }

// console.log(reverseString('milky way'))

// function palindrome(str) {
//     const strippedString = str.toLowerCase().replace(/[^a-z0-9]/g, '')
//     return strippedString === strippedString.split('').reverse().join('') ? true : false
// }

// console.log(palindrome('Cigar? Toss it in a can. It is so tragic.'))

// function countVowels(str) {
//     return str.toLowerCase().replace(/[^aeiou]/g, '').length
// }

// console.log(countVowels("mississippi"))

// function removeDuplicates(arr) {
//     const uniqueArr = []
//     for(let i = 0; i < arr.length; i++) {
//         if(!uniqueArr.includes(arr[i])) uniqueArr.push(arr[i])
//     }
//     return uniqueArr
// }

// console.log(removeDuplicates([1,1,1,1,1,1,2,2,3,4,5,6,6,6,6]))


// function fizzBuzz(n) {
//     const result = []
//     for(let i = 1; i <= n; i++) {
//         let output = ''
//         if(i % 3 === 0) output += 'Fizz'
//         if(i % 5 === 0) output += 'Buzz'
//         result.push(output || i)
//     }
//     return result
// }

// fizzBuzz(100).forEach(item => console.log(item))


function findIntersectingValues(arr1, arr2) {
    const result = []
    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) result.push(arr1[i])
    }
    return result
}

console.log(findIntersectingValues([1,2,3,4,5],[1,3,5,7,9]))