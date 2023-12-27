// Big-O Time complexity --------------------------
// function summation(n) {
//     let sum = 0 // executed once
//     for (let i = 1; i <= n; i++) {
//         sum += i // executed n times
//     }
//     return sum // executed once
// }
// // O(n) - Linear time complexity


// function summation2(n) {
//     return (n * (n + 1)) / 2 // only executed once
// }
// // O(1) - Constant time complexity


// // nested loops generally mean O of n squared
// for (i = 1; i <= n; i++) { // outer loop
//     for(j = 1; j <= i; j++) { // inner loop
//         // some code
//     }
// }
// // O(n^2) - Quadratic time complexity


// // triple nested loops generally mean O of n cubed
// for (i = 1; i <= n; i++) { // outmost loop
//     for (j = 1; j <= i; j++) { // inner loop
//         for (k = 1; k <= j; k++) { // inmost loop
//             // some code
//         }
//     }
// }
// O(n^3) - Cubic time complexity


// if the input size reduces by half every iteration
// it is logarithmic
// O(logn) O of log n



// Space Complexity -------------------------------

// if the algorithm does not need extra memory
// or the memory needed does not depend on the input
// size, the space complexity is `constant`

// an example would be sorting algorithms which sort
// within the array without using additional arrays


// linear space complexity where the extra space 
// needed grows as the input size grows


// logarithmic space complexity is when the extra
// space needed grows, but not at the same rate 
// as the input size


// Objects - Big-O --------------------------------

// An object is a collection of key value pairs
// Insert property - O(1)
// Remove property - O(1)
// Access value with key - O(1)
// Search for a value - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entires() - O(n)


// Arrays - Big-O ---------------------------------

// An array is an ordered collection of values
// Insert / remove element at end of array - O(1)
// Insert / remove at beginning - O(n)
// Access an element index - O(1)
// Searching for an element - O(n)
// Push / pop - O(1)
// Shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)


// Math Algorithms ---------------------------------

// Fibonacci sequence ------------------
// Problem - Given a number `n`, find the first `n`
// elements of the Fibonacci sequence

// my solution
// function fibonacci(n) {
//     const fib = [0, 1]
//     for(let i = 2; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(10))
// Big-O = O(n) time complexity


// Factorial of a number sequence -------
// Problem - Given an integer `n`, find the factorial
// of that integer
// In mathematics, the factorial of a non-negative
// integer `n`, denoted n!, is the product of all
// positive integers less than or equal to `n`.

// Factorial of zero is 1.

// my solution using recursion
// function findFactorial(n) {
//     // base case
//     if(n === 0) {
//         return 1
//     }
//     return n * findFactorial(n - 1)
// }
// console.log(findFactorial(5))

// other solution
// function factorial(n) {
//     let result = 1
//     for (let i = 2; i <= n; i++) {
//         result *= i
//     }
//     return result
// }
// console.log(factorial(5))
// Big-O = O(n) time complexity



// Prime Number -----------------------------

// Problem - Given a natural number `n`, determine
// if the number is prime or not

// A prime number is a natural number greater than
// 1 that is not a product of two smaller natural
// numbers.

// example: isPrime(5) = true(1*5 or 5*1)
//          isPrime(4) = false (1*4 or 2*2 or 4*1)

// my solution
// function isPrime(n) {
//     if(n < 2) return false
//     return Math.floor(n / 2) * 2 !== n
// }

// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))
// my solution's Big-O = O(1) time complexity

// other solution
// function isPrime2(n) {
//     if(n < 2) {
//         return false
//     }
//     for(let i = 2; i < n; i++) {
//         if(n % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime2(1))
// console.log(isPrime2(5))
// console.log(isPrime2(4))
// this solution's Big-O = O(n) time complexity

// another solution
// function isPrime3(n) {
//     if(n < 2) {
//         return false
//     }
//     for(let i = 2; i <= Math.sqrt(n); i++) {
//         if(n % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime3(1))
// console.log(isPrime3(5))
// console.log(isPrime3(4))
// this solution's Big-O = O(sqrt(n)) time complexity


// Power of Two ------------------------------------
// Problem - Given a positive integer `n`, determine
// if the number is a power of 2 or not
// An integer is a power of two if there exists an
// integer `x` such that `n` === 2^x

// example isPowerOfTwo(1) = true (2^0)
// example isPowerOfTwo(2) = true (2^1)
// example isPowerOfTwo(5) = false

// my solution
// function isPowerOfTwo(n) {
//     if (n <= 0) return false;
//     if(n === 1) return true // base case
//     if(n >= 2) return isPowerOfTwo(n / 2)
//     return false
// }
// console.log(isPowerOfTwo(16))
// // this solution's Big-O = O(log n) time complexity
// // this solution's space complexity can be rather
// // high due to reliance on recursive calls, which
// // fill up the call stack

// // other solution
// // this solution is more efficient due to not
// // relying on recursion, which can lead to stack
// // overflow when handling very large numbers
// function isPowerOfTwoAlt(n) {
//     if(n < 1) {
//         return false
//     }
//     while(n > 1) {
//         if(n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }
// // this solution's Big-O = O(log n) time complexity

// // constant solution
// // this solution is most efficient
// function isPowerOfTwoBitWise(n) {
//     if(n < 1) {
//         return false
//     }
//     return (n & (n-1)) === 0
// }
// // this solution's Big-O = O(1) time complexity
// console.log(isPowerOfTwoAlt(1))
// console.log(isPowerOfTwoAlt(2))
// console.log(isPowerOfTwoAlt(5))
// console.log(isPowerOfTwoBitWise(1))
// console.log(isPowerOfTwoBitWise(2))
// console.log(isPowerOfTwoBitWise(5))

// Fibonacci using recursion
// function recursiveFibonacci(n) {
//     if(n < 2) {
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(0)) // 0
// console.log(recursiveFibonacci(1)) // 1
// console.log(recursiveFibonacci(6)) // 8

// Sum of Numbers ------------------------------

// my first solution
// function sumOfNumbers(arr) {
//     const sorted = [...arr].sort((a, b) => a - b)
//     const result = []
//     let first = sorted[0]
//     const last = sorted[1]
//     for(let i = 0; first <= last; i++, first++) {
//         result[i] = first
//     }
//     const sum = result.reduce((acc, current) => {
//         return acc + current
//     }, 0)
//     return sum
// }
// console.log(sumOfNumbers([4,1]))

// my second solution without sort and reduce
// function sumOfNumbers(arr) {
//     const sorted = [...arr].sort((a,b) => a - b)
//     const first = sorted[0] < sorted[sorted.length-1] ? sorted[0] : sorted[sorted.length-1]
//     const last = first === sorted[0] ? sorted[sorted.length-1] : sorted[0]
//     console.log(first)
//     console.log(last)
//     let sum = 0
//     for(let i = first; i <= last; i++) {
//         sum += i
//     }
//     return sum
// }

// console.log(sumOfNumbers([4,1,2,5,9,22,10]))

// Anagram -------------------------------------

// my solution
// function isAnagram(str1, str2) {
//     if(str1.length !== str2.length) {
//         return false
//     }
//     const result1 = [...str1].sort().join('')
//     const result2 = [...str2].sort().join('')
//     console.log(result1)
//     console.log(result2)
//     return result1 === result2
// }

// console.log(isAnagram('racecar', 'carrace'))
// console.log(isAnagram('racecar', 'carrac'))

// another solution using recursion
// function recursiveAnagram(str1, str2) {
//     if(str1.length !== str2.length) {
//         return false
//     }
//     if(str1 === '' || str2 === '') {
//         return true
//     }
//     if(str1.charAt(0) === str2.charAt(0) && str1.charAt(str1.length-1) === str2.charAt(str2.length-1)) {
//         console.log(str1)
//         console.log(str2)
//         return recursiveAnagram(str1.slice(1, str1.length-1), str2.slice(1, str2.length-1))
//     }
//     return false
// }
// function sortString(str) {
//     if(!str) {
//         return
//     }
//     return str.toLowerCase().split('').sort().join('')
// }

// console.log(recursiveAnagram(sortString('racecar'),sortString('carrace')))
// console.log(recursiveAnagram(sortString('racecar'),sortString('carrac')))

// function recursiveFibonacci(n) {
//     if(n < 2) return n
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(0)) // 0
// console.log(recursiveFibonacci(1)) // 1
// console.log(recursiveFibonacci(6)) // 8
// console.log(recursiveFibonacci(7)) // 13
// Recursive Fibonacci has a Big-O time complexity of
// O(2^n) `O 2 to the power of n`


// Recursive Factorial of a Number -------------------
// Problem - Given an integer `n`, find the factorial
// of that integer

// my solution
// function recursiveFactorial(n) {
//     // base case
//     if(n === 0) {
//         return 1
//     }
//     return n * recursiveFactorial(n-1)
// }

// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(4))
// console.log(recursiveFactorial(5))

// Recursive Factorial has a Big-O time complexity
// of O(n)




// Linear Search -----------------------------------
// Problem - Given an array of `n` elements and a target
// element `t`, find the index of `t` in the array.
// Return -1 if the target element is not found.

// my solution
// function linearSearch(arr, target) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === target) return i
//     }
//     return -1
// }

// console.log(linearSearch([-5, 2, 10, 4, 6], 10))
// console.log(linearSearch([-5, 2, 10, 4, 6], 6))
// console.log(linearSearch([-5, 2, 10, 4, 6], 20))
// Linear Search has a Big-O time complexity of
// O(n)



// Binary Search ------------------------------------
// Problem - Given a sorted array of `n` elements and a
// target element `t`, find the index of `t` in the array.
// Return -1 if the target element is not found.

// function binarySearch(arr, target) {
//     if (arr.length === 0) {
//         return -1;
//     }
//     let mid = Math.floor(arr.length / 2);
//     if (target === arr[mid]) {
//         return mid;
//     }
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid + 1);
//     if(target < arr[mid]) {
//         return binarySearch(left, target)
//     }
//     if(target > arr[mid]) {
//         let rightResult = binarySearch(right, target);
//         if (rightResult !== -1) {
//             return mid + 1 + rightResult;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10))
// console.log(binarySearch([-5, 2, 4, 6, 10], 6))
// console.log(binarySearch([-5, 2, 4, 6, 10], 20))

// function binarySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1

//     while(left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         if(target === arr[mid]) {
//             return mid
//         }
//         if(target < arr[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10))
// console.log(binarySearch([-5, 2, 4, 6, 10], 6))
// console.log(binarySearch([-5, 2, 4, 6, 10], 20))
// Non-recursive binary search has Big-O time complexity
// of O(log n)

// function recursiveBinarySearch(arr, target) {
//     if(arr.length === 0) {
//         return -1
//     }
//     let mid = Math.floor(arr.length/2)
//     if(target === arr[mid]) return mid
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid+1)
//     if(target < arr[mid]) {
//         return recursiveBinarySearch(left, target)
//     }
//     if(target > arr[mid]) {
//         let rightResult = recursiveBinarySearch(right, target)
//         if(rightResult !== -1) {
//             return mid + 1 + rightResult
//         }
//     }
//     return -1
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20))
// Recursive binary search has Big-O time complexity
// of O(log n)

// alternate recursive binary search
// function recursiveBinarySearch(arr, target) {
//     return search(arr, target, 0, arr.length-1)
// }

// function search(arr, target, left, right) {
//     // base case
//     if(left > right) {
//         return -1
//     }

//     let mid = Math.floor((left + right)/2)
//     if(target === arr[mid] ) {
//         return mid
//     }

//     if(target < arr[mid]) {
//         return search(arr, target, left, mid-1)
//     }
//     if(target > arr[mid]) {
//         return search(arr, target, mid+1, right)
//     }
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20))
// Recursive binary search has Big-O time complexity
// of O(log n)


// Sorting Algorithms -----------------------------------

// Bubble Sort
// Problem - Given an array of integers, sort the array.

// my solution with do while loop
// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false
//         for(let i = 0; i < arr.length-1; i++) {
//             if(arr[i] > arr[i+1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while(swapped)
//     return arr
// }

// console.log(bubbleSort([-6, 20, 8, -2, 4]))
// this bubble sort algorithm has a Big-O time complexity
// of O(n^2) / quadratic time complexity


// Insertion Sort
// Problem - Given an array of integers, sort the array

// my solution
// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let numberToInsert = arr[i]
//         let j = i - 1
//         while(j >= 0 && arr[j] > numberToInsert) {
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = numberToInsert
//     }
// }

const arr = [8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr)

// my second solution
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        for(let j = i; j > 0; j--) {
            if(arr[j] < arr[j-1]) {
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    }
    return arr
}
// Insertion Sort Big-O time complexity is O(n^2)
// quadratic