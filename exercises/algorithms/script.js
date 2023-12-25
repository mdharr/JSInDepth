// Big-O Time complexity --------------------------
function summation(n) {
    let sum = 0 // executed once
    for (let i = 1; i <= n; i++) {
        sum += i // executed n times
    }
    return sum // executed once
}
// O(n) - Linear time complexity


function summation2(n) {
    return (n * (n + 1)) / 2 // only executed once
}
// O(1) - Constant time complexity


// nested loops generally mean O of n squared
for (i = 1; i <= n; i++) { // outer loop
    for(j = 1; j <= i; j++) { // inner loop
        // some code
    }
}
// O(n^2) - Quadratic time complexity


// triple nested loops generally mean O of n cubed
for (i = 1; i <= n; i++) { // outmost loop
    for (j = 1; j <= i; j++) { // inner loop
        for (k = 1; k <= j; k++) { // inmost loop
            // some code
        }
    }
}
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