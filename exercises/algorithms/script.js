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