// Find the Symmetric Difference
function sym(...arrays) {
    let result = new Set()
    for(const currentArray of arrays) {
        const currentSet = new Set(currentArray)
        for(const elem of currentSet) {
            if(result.has(elem)) {
                result.delete(elem)
            } else {
                result.add(elem)
            }
        }
    }
    return Array.from(result)
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))