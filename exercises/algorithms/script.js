// Big-O Time complexity
function summation(n) {
    let sum = 0 // executed once
    for (let i = 1; i <= n; i++) {
        sum += i // executed n times
    }
    return sum // executed once
}
// O(n) - Linear time complexity