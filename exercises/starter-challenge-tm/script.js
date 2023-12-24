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

// const products = [
//     { name: 'Apple', price: 0.5, quantity: 10 },
//     { name: 'Banana', price: 0.3, quantity: 20 },
//     { name: 'Orange', price: 0.6, quantity: 15 }
// ]
// const products2 = [
//     { name: 'Chocolate', price: 2.5, quantity: 5 },
//     { name: 'Chips', price: 1.2, quantity: 10 },
//     { name: 'Soda', price: 1.0, quantity: 8 },
//     { name: 'Candy', price: 0.5, quantity: 15 }
// ]

// function calculateTotalSalesWithTax(arr, tax) {
//     let totalSalesAfterTax = arr
//         .map(item => item.price*item.quantity)
//         .reduce((total, item) => {
//             return total+=item
//         }, 0)
//     return parseFloat(totalSalesAfterTax += totalSalesAfterTax*(tax/100)).toFixed(2)
// }

// console.log(calculateTotalSalesWithTax(products, 8))

// const test = 'Finding the highest scoring word'
// const test = 'Hello, my name is Xavier.'

// function highestScoringWord(str) {
//     const scoringSystem = generateScoringSystem()
//     const words = formatString(str)
//     console.log(words)
//     let highestScore = 0;
//     let highestScoringWord = '';

//     for(const word of words) {
//         const letters = word.split('')
//         const score = letters.reduce((total, letter) => {
//             return total + scoringSystem.get(letter)
//         }, 0)
//         if (score > highestScore) {
//             highestScore = score;
//             highestScoringWord = word;
//         }
//     }
//     return `${highestScoringWord}: ${highestScore}`;
// }

// function generateScoringSystem() {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     const scoreMap = new Map()
//     let count = 0
//     for(const letter of alphabet) {
//         scoreMap.set(letter, ++count)
//     }
//     return scoreMap
// }

// function formatString(str) {
//     return str.toLowerCase().replace(/[^a-z\s]+/g, '').split(' ')
// }

// console.log(highestScoringWord(test))

// const original = "I am speed racer"
// const test = "ma deesp reacr I"

// // string comparison
// function validAnagrams(str1, str2) {
//     const firstString = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort((a,b) => a.localeCompare(b)).join('')
//     const secondString = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort((a, b) => a.localeCompare(b)).join('')
//     if(firstString === secondString) return true
//     return false
// }

// // object comparison
// function validAnagrams(str1, str2) {
//     const firstObj = str1.toLowerCase().replace(/[^a-z]/g, '').split('').reduce((obj, item) => {
//         if(!obj[item]) obj[item] = 0
//         obj[item]++ 
//         return obj
//     }, {})
//     const secondObj = str2.toLowerCase().replace(/[^a-z]/g, '').split('').reduce((obj, item) => {
//         if(!obj[item]) obj[item] = 0
//         obj[item]++
//         return obj
//     }, {})

//     if(Object.keys(firstObj).length !== Object.keys(secondObj).length) return false
//     for(const key of Object.keys(firstObj)) {
//         if(firstObj[key] !== secondObj[key]) {
//             return false
//         }
//     }
//     return true
// }

// // map comparison
// function validAnagrams(str1, str2) {
//     const firstMap = str1.toLowerCase().replace(/[^a-z]/g, '').split('').reduce((map, item) => {
//         const count = map.get(item) || 0
//         map.set(item, count++)
//         return map
//     }, new Map())
//     const secondMap = str2.toLowerCase().replace(/[^a-z]/, '').split('').reduce((map, item) => {
//         const count = map.get(item) || 0
//         map.set(item, count++)
//         return map
//     }, new Map())

//     if(firstMap.size !== secondMap.size) return false

//     for(const [key, value] of firstMap) {
//         if(value !== secondMap.get(key)) {
//             return false
//         }
//     }

//     return true
// }

// console.log(validAnagrams(original, test))

// const hashtag = 'JavaScript is cool'

// function generateHashtag(str) {
//     return str === '' || str.length > 140 ? false : `#${str.replace(/[^a-zA-Z0-9\s]+/g, '').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`
// }

// console.log(generateHashtag(hashtag))

// const IPv4 = "1.2.3.4"

// function validateIPv4(str) {
//     return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str);
// }

// function validateIPv4(str) {
//     const formatted = str.split('.')
//     if(formatted.length !== 4) return false
//     for(const num of formatted) {
//         if(num > 255 || num < 0) return false
//     }
//     return true
// }

// console.log(validateIPv4(IPv4))

// const cars = [
//     { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800.22 },
//     { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000.12 },
//     { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
//     { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
//     { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 }
// ];

// SEPARATION OF CONCERNS
// function analyzeCarMileage(cars) {
//     return {
//         averageMileage: calculateAverageMileage(cars),
//         highestMileage: calculateHighestMileage(cars),
//         lowestMileage: calculateLowestMileage(cars),
//         totalMileage: calculateTotalMileage(cars)
//     };
// }

// function calculateAverageMileage(cars) {
//     return cars.reduce((sum, car) => sum + car.mileage, 0) / cars.length;
// }

// function calculateHighestMileage(cars) {
//     return cars.reduce((highest, car) => car.mileage > highest.mileage ? car : highest, { mileage: -Infinity });
// }

// function calculateLowestMileage(cars) {
//     return cars.reduce((lowest, car) => car.mileage < lowest.mileage ? car : lowest, { mileage: Infinity });
// }

// function calculateTotalMileage(cars) {
//     return cars.reduce((sum, car) => sum + car.mileage, 0);
// }

// REDUCE
// function analyzeCarMileage(cars) {
//     if(cars.length === 0) return null
//     const result = cars.reduce((obj, current) => {
//         if(current.mileage > obj.highestMileageCar.mileage) obj.highestMileageCar = current
//         if(current.mileage < obj.lowestMileageCar.mileage) obj.lowestMileageCar = current
//         obj.totalMileage += current.mileage
//         obj.averageMileage = parseFloat(obj.totalMileage / cars.length.toFixed(2))
//         return obj
//     }, { highestMileageCar: cars[0], lowestMileageCar: cars[0], totalMileage: 0, averageMileage: 0 })
//     return result
// }

// console.log(analyzeCarMileage(cars));

// const test1 = "ABcd12345"
// const test2 = "password123"
// const test3 = "Pass"
// const test4 = "HelloWorld"

// function validatePassword(password) {
//     return password.length >= 8 &&
//     /[a-z].*[a-z]/.test(password) &&
//     /[A-Z].*[A-Z]/.test(password) &&
//     /\d.*\d/.test(password) ?
//     true :
//     false
// }

// function validatePassword(password) {
//     return /(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,}).{8,}/.test(password)
// }

// function validatePassword(password) {
//     const isLengthValid = password.length >= 8;

//     const hasTwoUppercase = password.split('').filter(char => char === char.toUpperCase() && isNaN(char)).length >= 2;
//     const hasTwoLowercase = password.split('').filter(char => char === char.toLowerCase() && isNaN(char)).length >= 2;
//     const hasTwoDigits = password.split('').filter(char => !isNaN(char) && char !== ' ').length >= 2;

//     return isLengthValid && hasTwoUppercase && hasTwoLowercase && hasTwoDigits;
// }

// console.log(validatePassword(test1))

// const test1 = ['a', 'b', 'c', 'd', 'f']
// const test2 = ['O', 'Q', 'R', 'S', 'T']
// const test3 = ['t', 'u', 'v', 'w', 'x', 'z']

// function findMissingLetter(arr) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     const start = alphabet.indexOf(arr[0]);
//     const end = start + arr.length + 1
//     const alphaKey = alphabet.split('').slice(start, end);

//     return alphaKey.filter(letter => !arr.includes(letter));
// }

// console.log(findMissingLetter(test3))

// function countDown(num) {
//     // Base Case
//     if(num <= 0) {
//         console.log('All done!')
//         return
//     }
//     // Recursive Case
//     console.log(num)
//     num--
//     countDown(num)
// }

// countDown(10)

// function sumUpTo(n) {
//     if(n == 1) {
//         return 1
//     }
//     return n + sumUpTo(n - 1)
// }

// function sumUpTo(n) {
//     if (n === 1) {
//         return 1
//     }
//     const result = n + sumUpTo(n - 1)
//     console.log(result)
//     return result
// }

// console.log(sumUpTo(1000))

// const text = 'racecar'

// function isPalindrome(str) {
//     return str === reverseString(str)
// }

// function reverseString(str) {
//     if(str.length === 1) {
//         return str
//     }
//     const lastChar = str.slice(-1)
//     const restOfString = str.slice(0, -1)
//     return lastChar + reverseString(restOfString)
// }

// console.log(isPalindrome(text))

// finding the value for a specific index in the fibonacci sequence
// function fibonacci(n) {
//     if(n < 2) {
//         return n
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }

// console.log(fibonacci(6))

// function factorial(n) {
//     if(n < 2) {
//         return 1
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(5))

// function power(num, exp) {
//     if(exp === 0) {
//         return 1
//     }
//     return num * power(num, exp-1)
// }
// console.log(power(3, 4))

// function arraySum(arr) {
//     if(arr.length === 0) {
//         return 0
//     }
//     return arr[0] + arraySum(arr.slice(1)) 
// }

// console.log(arraySum([1,2,3,4,5]))

// function numberRange(start, end) {
//     if(start === end) {
//         return [start]
//     }
//     const numbers = numberRange(start, end - 1)
//     numbers.push(end)
//     return numbers
// }

// console.log(numberRange(1, 5))

// function flattenArray(arr) {
//     let result = []

//     for (const element of arr) {
//         if(Array.isArray(element)) {
//             result = result.concat(flattenArray(element))
//         } else {
//             result.push(element)
//         }
//     }

//     return result
// }

// console.log(flattenArray([1, 2, 3, [4, 5, [6, 7, 8], 9], 10]))

// PERMUTATIONS -------------------------------------------------------------------------------------------
// function permutations(str) {
//     const result = []

//     if(str.length === 0) {
//         result.push('')
//         return result
//     }

//     for(let i = 0; i < str.length; i++) {
//         const firstChar = str[i]
//         const restOfString = str.slice(0, i) + str.slice(i + 1)
//         const subPermutations = permutations(restOfString)

//         for(let j = 0; j < subPermutations.length; j++) {
//             result.push(firstChar + subPermutations[j])
//         }
//     }

//     return result
// }

// console.log(permutations('abcd'))

// CONSTANT
// function accessElement(arr, index) {
//     return arr[index]
// }

// const largeArray = Array.from({ length: 1000000 }, (_, index) => index + 1)
// console.time('Access Element 1')
// console.log(accessElement(largeArray, 500))
// console.timeEnd('Access Element 1')


// LINEAR
// function sumArray(arr) {
//     let sum = 0

//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

// const smallArray = Array.from({ length: 100 }, (_, index) => index + 1)
// const largeArray = Array.from({ length: 10000000 }, (_, index) => index + 1)

// console.time('Small Array')
// console.log(sumArray(smallArray))
// console.timeEnd('Small Array')

// console.time('Large Array')
// console.log(sumArray(largeArray))
// console.timeEnd('Large Array')


// QUADRATIC
// function sumArray(arr) {
//     let sum = 0
//     let sum2 = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         for(let j = 0; j < arr.length; j++) {
//             sum2 += arr[j]
//         }
//     }

//     return sum + sum2
// }

// const smallArray = Array.from({ length: 100 }, (_, index) => index + 1)
// const largeArray = Array.from({ length: 100000 }, (_, index) => index + 1)

// console.time('Small Array')
// console.log(sumArray(smallArray))
// console.timeEnd('Small Array')

// console.time('Large Array')
// console.log(sumArray(largeArray))
// console.timeEnd('Large Array')

// function findPower(base, exponent) {
//     if(exponent === 0) {
//         return 1
//     }

//     if(exponent % 2 === 0) {
//         const halfPower = findPower(base, exponent / 2)
//         return halfPower * halfPower
//     } else {
//         const halfPower = findPower(base, (exponent - 1) / 2)
//         return base * halfPower * halfPower
//     }
// }

// console.time('Find Power 1')
// console.log(findPower(2, 5))
// console.timeEnd('Find Power 1')

// console.time('Find Power 2')
// console.log(findPower(2, 10))
// console.timeEnd('Find Power 2')

/*
    Space Complexity: O(1)
    Time Complexity: O(1)
*/

// function add(num1, num2) {
//     return num1 + num2
// }

/*
    Space Complexity: O(n)
    Time Complexity: O(n)
*/

// function createArray(num) {
//     const arr = []

//     for (let i = 0; i < num; i++) {
//         arr.push(i)
//     }
//     return arr
// }

/*
    Space Complexity: O(n^2)
    Time Complexity: O(n^2)
*/

// function createMatrix(num) {
//     const matrix = []

//     for (let i = 0; i < num; i++) {
//         matrix[i] = []

//         for (let j = 0; j < num; j++) {
//             matrix[i][j] = i + j
//         }
//     }
//     return matrix
// }

/*
    Space Complexity: O(log n)
    Time Complexity: O(log n)
*/

// function findPower(base, exponent) {
//     if (exponent === 0) {
//         return 1
//     }

//     if (exponent % 2 === 0) {
//         const halfPower = findPower(base, exponent / 2)
//         return halfPower * halfPower
//     } else {
//         const halfPower = findPower(base, (exponent - 1) / 2)
//         return base * halfPower * halfPower
//     }
// }

/*
    Space Complexity: O(1)
    Time Complexity: O(n)
*/

// function findSum(arr) {
//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

// const arr1 = [2, 5, 3, 1, 11, 7, 6, 4]
// const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4]

// function maxSubarraySum(arr, number) {
//     return [...arr]
//         .sort((a, b) => b - a)
//         .slice(0, number)
//         .reduce((acc, current) => acc + current, 0)
// }

// function maxSubarraySum(arr, k) {
//     let maxSum = -Infinity

//     for (let i = 0; i <= arr.length - k; i++) {
//         let currentSum = 0

//         for (let j = i; j < i + k; j++) {
//             currentSum += arr[j]
//         }
//         maxSum = Math.max(maxSum, currentSum)
//     }
//     return maxSum
// }


// console.log(maxSubarraySum(arr1, 3))
// console.log(maxSubarraySum(arr2, 4))

// const nums = [0, 5, 1, 3, 7, 3, 2, 4, 9, 8, 77, 90, 60, 40, 33, 2, 7, 4, 8]

// console.log(bubbleSort(nums))

// const products = [
//     { name: 'Apple', price: 0.5, quantity: 10 },
//     { name: 'Banana', price: 0.3, quantity: 20 },
//     { name: 'Orange', price: 0.6, quantity: 15 },
//     { name: 'Chocolate', price: 2.5, quantity: 5 },
//     { name: 'Chips', price: 1.2, quantity: 10 },
//     { name: 'Soda', price: 1.0, quantity: 8 },
//     { name: 'Candy', price: 0.5, quantity: 15 }
// ]

// function findHighest(arr) {
//     const result = arr.reduce((acc, current) => {
//         return current.price > acc.price ? current : acc
//     }, arr[0])
//     return result
// }
// function findLowest(arr) {
//     const result = arr.reduce((acc, current) => {
//         return current.price < acc.price ? current : acc
//     }, arr[0])
//     return result
// }

// console.log(`Highest: ${JSON.stringify(findHighest(products))}`)
// console.log(`Lowest: ${JSON.stringify(findLowest(products))}`)

// function generateRandomNumbers(n) {
//     const result = [];
//     for(let i = 0; i < n; i++) {
//         result[i] = Math.floor(Math.random() * n) + 1;
//     }
//     return result;
// }

// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length - 1 - i; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 const tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//     }
//     return arr;
// }

// function sortNumbers(arr) {
//     return arr.sort((a, b) => a - b);
// }

// const nums = generateRandomNumbers(100000);

// const bubbleSortPromise = new Promise((resolve, reject) => {
//     console.time('Bubble Sort Time');
//     const sorted = bubbleSort([...nums]);
//     console.timeEnd('Bubble Sort Time');
//     resolve(sorted);
// });

// const vanillaJavaScriptSortPromise = new Promise((resolve, reject) => {
//     console.time('JS Sort Time');
//     const sorted = sortNumbers([...nums]);
//     console.timeEnd('JS Sort Time');
//     resolve(sorted);
// });

// Promise.all([bubbleSortPromise, vanillaJavaScriptSortPromise]).then((values) => {
//     console.log('Both sorting operations complete');
// });

// CLOSURES
// first example
// result is 1 1 due to scope
// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// outer()
// outer()

// second example
// result is 1 2 due to the function `fn` 
// not only receiving the value, but also the scope of inner
// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()

// CURRYING
// function sum(a, b, c) {
//     return a + b + c
// }

// // console.log(sum(2, 3, 5))

// function curry(fn) {
//     return function(a) {
//         return function(b) {
//             return function(c) {
//                 return fn(a, b, c)
//             }
//         }
//     }
// }

// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))

// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }

// const person1 = new Person('Bruce', 'Lee')
// const person2 = new Person('Jackie', 'Chan')

// this function is only applied to person1 instance
// person1.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }

// if we want to give all Person objects the
// getFullName function, we would use prototype
// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }

// console.log(person1.getFullName())
// console.log(person2.getFullName())

// Array.prototype.getEveryOther = function() {
//     if(!this.length) return []
//     let result = []
//     for(let i = 0; i < this.length; i++) {
//         if(i % 2 === 0) {
//             result.push(this[i])
//         }
//     }
//     return result
// }

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 11, 15].getEveryOther())

// in javascript, inheritance is supported through the
// concept of `prototypes` and is referred to as
// `prototypal inheritance`
// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }

// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }

// function SuperHero(fName, lName) {
//     // the `this` keyword in the Person.call function
//     // makes it so that `this` in SuperHero is now
//     // `this` in Person so we have access to first
//     // and last name properties
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }
// SuperHero.prototype.fightCrime = function() {
//     console.log('Fighting crime')
// }
// // this gives SuperHero access to Person prototype's
// // getFullName method through prototypal inheritance
// SuperHero.prototype = Object.create(Person.prototype)

// const batman = new SuperHero('Bruce', 'Wayne')
// SuperHero.prototype.constructor = SuperHero
// console.log(batman.getFullName())


// rewriting prototypal inheritance using class keyword
// class Person {
//     constructor(fName, lName) {
//         this.firstName = fName
//         this.lastName = lName
//     }

//     sayMyName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// const classP1 = new Person('Bruce', 'Wayne')
// console.log(classP1.sayMyName())

// class SuperHero extends Person {
//     constructor(fName, lName) {
//         super(fName, lName)
//         this.isSuperHero = true
//     }
//     fightCrime() {
//         console.log('Fighting crime')
//     }
// }

// const batman = new SuperHero('Bruce', 'Wayne')
// console.log(batman.sayMyName())

// example of class hierarchy and inheritance using
// JavaScript
// class Vehicle {
//     constructor() {
//         this.type = 'Generic Vehicle';
//     }
//     start() {
//         console.log('Vehicle is starting');
//     }
// }

// class Aircraft extends Vehicle {
//     constructor() {
//         super(); // Calls the parent class constructor
//         this.type = 'Aircraft';
//         this.hasWings = true;
//     }
//     fly() {
//         console.log('Aircraft is flying');
//     }
// }

// class Jet extends Aircraft {
//     constructor() {
//         super(); // Calls the parent class constructor
//         this.type = 'Jet';
//         this.hasJetEngine = true;
//     }
//     accelerate() {
//         console.log('Jet is accelerating');
//     }
// }

// class Fighter extends Jet {
//     constructor() {
//         super(); // Calls the parent class constructor
//         this.type = 'Fighter';
//         this.isArmed = true;
//     }
//     engage() {
//         console.log('Fighter is engaging the enemy');
//     }
// }

// const fighterJet = new Fighter();
// console.log(fighterJet.type);         // Output: 'Fighter'
// console.log(fighterJet.hasWings);     // Output: true (inherited from Aircraft)
// console.log(fighterJet.hasJetEngine); // Output: true (inherited from Jet)
// console.log(fighterJet.isArmed);      // Output: true (specific to Fighter)
// fighterJet.start();       // Inherited from Vehicle
// fighterJet.fly();         // Inherited from Aircraft
// fighterJet.accelerate();  // Inherited from Jet
// fighterJet.engage();      // Specific to Fighter

// iterable and iterator
// const obj = {
//     [Symbol.iterator]: function() {
//         let step = 0
//         const iterator = {
//             next: function() {
//                 step++
//                 if(step === 1) {
//                     return { value: 'Hello', done: false }
//                 } else if (step === 2) {
//                     return { value: 'World', done: false }
//                 }
//                 return { value: undefined, done: true }
//             }
//         }
//         return iterator
//     }
// }

// for(const word of obj) {
//     console.log(word)
// }


// generator (rewriting iterable/iterator example
// above using generators)

// function normalFunction() {
//     console.log('Hello')
//     console.log('World')
// }

// function* generatorFunction() {
//     yield 'Hello'
//     yield 'World'
// }

// const generatorObject = generatorFunction()

// for(const word of generatorObject) {
//     console.log(word)
// }

// reverseString and isPalindrome using recursion example 1
// function reverseString(input) {
//     if(input === '') {
//         return ''
//     }
//     return reverseString(input.slice(1)) + input.charAt(0)
// }

// function isPalindrome(str) {
//     return str === reverseString(str)
// }

// console.log(isPalindrome('racecar'))

// reverseString and isPalindrome using recursion example 2

// function isPalindrome(input) {
//     if(input.length === 0 || input.length === 1) {
//         return true
//     }

//     if(input.charAt(0) === input.charAt(input.length - 1)) {
//         return isPalindrome(input.slice(1, input.length - 1))
//     }

//     return false
// }

// function prepareInput(str) {
//     return str.toLowerCase().replace(/[^a-z]/g, '')
// }
// console.log(prepareInput('Cigar? Toss it in a can. It is so tragic.'))
// console.log(isPalindrome(prepareInput('Cigar? Toss it in a can. It is so tragic.')))

// console.log((233 / 2) | 0) // implicit Math.floor using bitwise OR operator `|`
// rounds down to nearest whole number

// finding the binary code of a number using recursion
// function findBinary(decimal, result) {
//     if(decimal === 0) {
//         return result
//     }
//     result = decimal % 2 + result
//     return findBinary(Math.floor(decimal / 2), result)
// }
// console.log(findBinary(1000000000000000000000000000000000, ""))

// function sumUp(n) { 
//     if(n <= 1) {
//         return 1
//     } 
//     return n + sumUp(n - 1) }
// // console.log(sumUp(10))

// function crazyMath(n, operator) {
//     const num1 = Math.floor(Math.random() * 100) + 1
//     const num2 = Math.floor(Math.random() * 100) + 1
//     console.log(`Num1: ${num1}`)
//     console.log(`Num2: ${num2}`)
//     let result = 0
//     for(let i = 0; i < n; i++) {
//         if(operator === "+") {
//             result = result + (num1 + num2)
//         } else if (operator === "-") {
//             result = result + (num1 - num2)
//         } else if (operator === "*") {
//             result = result + (num1 * num2)
//         } else if (operator === "/") {
//             result = result + (num1 / num2)
//         }
//     }
//     return result
// }

// // console.log(crazyMath(10, "+"))

// // BINARY SEARCH IMPLEMENTATION
// function binarySearch(arr, left, right, x) {
//     if (left > right) return -1

//     let mid = Math.floor((left + right) / 2);

//     if(x === arr[mid]) return mid

//     if(x < arr[mid]) return binarySearch(arr, left, mid - 1, x)

//     return binarySearch(arr, mid + 1, right, x)
// }

// const arr = [-1, 0, 1, 2, 3, 4, 7, 9, 10, 20]

// // console.log(binarySearch(arr, arr[0], arr.length - 1, 10))

// function fibonacci(n) {
//     let fib = [0,1]
//     for(let i = 2; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }

// // console.log(fibonacci(20))

// function findFibonacci(n) {
//     if(n < 2) return n
//     return findFibonacci(n-1) + findFibonacci(n-2)
// }

// // console.log(findFibonacci(15))

// function reverseString(str) {
//     if(str === '') return ''
//     return reverseString(str.slice(1)) + str.charAt(0)
// }

// console.log(reverseString(prepareString('JJKL !! lomfdua')))

// function prepareString(str) {
//     return str.toLowerCase().replace(/[^a-z]/g, '')
// }

// // function isPalindrome(str) {
// //     return prepareString(str) === reverseString(prepareString(str))
// // }

// function isPalindrome(input) {
//     if(input.length === 0 || input.length === 1) return true
//     if(input.charAt(0) === input.charAt(input.length - 1)) {
//         return isPalindrome(input.slice(1, input.length - 1))
//     }
//     return false
// }

// // console.log(isPalindrome('Cigar? Toss it in a can. It is so tragic.')
// console.log(isPalindrome(prepareString('Cigar? Toss it in a can. It is so tragic.')))


// RECURSIVE ALGORITHM USING MERGE SORT

function mergeSort(arr, start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2); // Ensure 'mid' is an integer
        mergeSort(arr, start, mid);              // Sort the left half
        mergeSort(arr, mid + 1, end);            // Sort the right half
        merge(arr, start, mid, end);             // Merge the sorted halves
    }
}

function merge(arr, start, mid, end) {
    // build temp array to avoid modifying the original
    let temp = []

    let i = start
    let j = mid + 1
    let k = 0
    // while both subarrays have values, then try 
    // and merge them in sorted order
    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            // temp[k++] = arr[i++]
            temp[k] = arr[i]
            i++
            k++
        } else {
            // temp[k++] = arr[j++]
            temp[k] = arr[j]
            k++
            j++
        }
    }

    // add the rest of the values from the left subarray
    // to the result
    while (i <= mid) {
        temp[k] = arr[i]
        k++
        i++
    }

    // add the rest of the values from the right
    // subarray to the result
    while (j <= end) {
        temp[k] = arr[j]
        k++
        j++
    }

    for(i = start; i <= end; i++) {
        arr[i] = temp[i - start]
    }
}

let data = [-5, 20, 10, 3, 2, 0]
mergeSort(data, 0, data.length - 1)
console.log(data)


