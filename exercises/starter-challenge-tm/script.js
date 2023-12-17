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


// function findIntersectingValues(arr1, arr2) {
//     const result = []
//     for(let i = 0; i < arr1.length; i++) {
//         if(arr2.includes(arr1[i])) result.push(arr1[i])
//     }
//     return result
// }

// console.log(findIntersectingValues([1,2,3,4,5],[1,3,5,7,9]))

// const names = []
// const names = ['Peter']
// const names = ['Peter', 'Jacob']
// const names = ['Peter', 'Jacob', 'Alex']
// const names = ['Peter', 'Jacob', 'Alex', 'Max', 'John', 'Mark', 'Jill']

// function displayLikes(names) {
//     if(names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     if(names.length === 2) return `${names[0]} and ${names[1]} like this`
//     if(names.length === 1) return `${names[0]} likes this`
//     if(names.length === 0) return `no one likes this`
// }

// console.log(displayLikes(names))

// const nums = [1,2,3,4,6,7,8,9,10]
// const nums = [10,8,6,7,5,4,3,1,2]

// function findMissingNumber(numArray) {
//     const sorted = numArray.sort((a, b) => a - b)
//     let expected = sorted[0];
//     for(let i = 0; i < sorted.length; i++) {
//         if(sorted[i] !== expected) {
//             return expected
//         }
//         expected++
//     }
//     return 'no missing number'
// }

// function findMissingNumber(arr) {
//     if(arr.length === 0) return 1

//     const n = arr.length+1
//     const expectedSum = (n*(n+1))/2 // 55
//     const actualSum = arr.reduce((sum, num) => {
//         return sum+=num
//     }, 0)
//     if(expectedSum === actualSum) {
//         return 'no missing number'
//     }
//     return expectedSum - actualSum
// }

// console.log(findMissingNumber(nums))


// const letters = ['b','c','a','e','g','f','h','d','f','g','i','j','l','m','n','o']

// function findMissingLetter(charArray) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     const sortedChars = [...new Set(charArray.sort((a, b) => a.localeCompare(b)))]

//     let alphaIndex = alphabet.indexOf(sortedChars[0])

//     for(let i = 0; i < sortedChars.length; i++) {
//         if(sortedChars[i] !== alphabet[alphaIndex + i]) return alphabet[alphaIndex + i]
//     }
//     return 'no missing letters'
// }

// console.log(findMissingLetter(letters))

// function areAllCharactersUnique(str) {
//     const unique = [...new Set(str.split(''))].join('')
//     return str === unique ? true : false
// }

// console.log(areAllCharactersUnique('abcdefgA'))
// const test = 'aabccdeff'
// function findFirstNonRepeatingCharacter(string) {
//     let count = 0
//     for(let i = 0; i < string.length; i++) {
//         let current = string[i]
//         let next = string[i+1]
//         if(current === next) {
//             count = 0
//         }
//         if(current !== next) {
//             count++
//         }
//         if(count === 2) {
//             return current
//         }
//     }
// }

// console.log(findFirstNonRepeatingCharacter(test))

// function diceGameSimulation(n) {
//     const finalArray = []
//     let i = 0
//     let dice1, dice2, sum, result
//     while(i < n) {
//         dice1 = rollDice()
//         dice2 = rollDice()
//         sum = getSum(dice1, dice2)
//         buildResultObjects(finalArray, dice1, dice2, sum, determineResult(sum))
//         i++
//     }
//     return finalArray
// }

// function rollDice() {
//     return Math.floor(Math.random()*6)+1
// }

// function getSum(num1, num2) {
//     return num1 + num2
// }

// function determineResult(sum) {
//     if(sum === 7 || sum === 11) {
//         return result = 'win'
//     } else if(sum === 2 || sum === 3 || sum === 12) {
//         return result = 'lose'
//     } else {
//         return result = 'roll again'
//     }
// }

// function buildResultObjects(arr, num1, num2, sum, result) {
//     arr.push({
//         "dice1": num1,
//         "dice2": num2,
//         "sum": sum,
//         "result": result
//     })
// }

// console.log(diceGameSimulation(10))

// const numbers = [1,2,3,4,5,6,7,8,9,0]

// function formatPhoneNumber(n) {
//     return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
// }

// function formatPhoneNumber(numbers) {
//     return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
// }

// console.log(formatPhoneNumber(numbers))

// function validateEmail(str) {
//     return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str)
// }

// console.log(validateEmail('acatt.mh@gmail.com'))

// const numbers = [1, 2, 3, 4, 5]

// const doubled = numbers.map(num => num*2)
// console.log(doubled)

// const filtered = numbers.filter(num => num % 2 === 0)
// console.log(filtered)

// const sum = numbers.reduce((total, num) => {
//     return total + num
// }, 0)
// console.log(sum)

// numbers.forEach(num => console.log(num))

// const foundNumber = numbers.find(num => num > 2)
// console.log(foundNumber)

// const hasEvenNumber = numbers.some(num => num % 2 === 0)
// console.log(hasEvenNumber)

// const incrementsByOne = numbers.every((num, index, array) => {
//     return num == index+1
// })

// console.log(incrementsByOne)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// function sumOfEvenNumbers(numsArr) {
//     const sumSquareOfEvens = numsArr
//         .filter(num => num % 2 === 0)
//         .map(num => num**2)
//         .reduce((total, num) => {
//             return total + num
//         }, 0)
//     return sumSquareOfEvens
// }

// function sumOfEvenSquares(numsArr) {
//     let sum = 0
//     for(const num of numsArr) {
//         num % 2 === 0 ? sum += num**2 : sum
//     }
//     return sum
// }
// console.log(sumOfEvenSquares(numbers))