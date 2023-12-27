// Find the Symmetric Difference -----------------------------------------------
// function sym(...arrays) {
//     let result = new Set()
//     for(const currentArray of arrays) {
//         const currentSet = new Set(currentArray)
//         for(const elem of currentSet) {
//             if(result.has(elem)) {
//                 result.delete(elem)
//             } else {
//                 result.add(elem)
//             }
//         }
//     }
//     return Array.from(result)
// }

// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))

// Update Inventory -------------------------------------------------------------
// function updateInventory(arr1, arr2) {
//     const inventoryMap = new Map(arr1.map(item => [item[1], item[0]]))

//     for (const [quantity, item] of arr2) {
//         if(inventoryMap.has(item)) {
//             inventoryMap.set(item, inventoryMap.get(item) + quantity)
//         } else {
//             inventoryMap.set(item, quantity)
//         }
//     }
//     return Array.from(inventoryMap, ([item, quantity]) => [quantity, item])
//         .sort((a, b) => a[1].localeCompare(b[1]))
// }

// console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))

// function updateInventory(arr1, arr2) {
//     const inventoryMap = new Map(arr1.map(item => [item[1], item[0]]))

//     for(const [quantity, item] of arr2) {
//         if(inventoryMap.has(item)) {
//             inventoryMap.set(item, inventoryMap.get(item) + quantity)
//         } else {
//             inventoryMap.set(item, quantity)
//         }
//     }
//     return Array.from(inventoryMap, ([item, quantity]) => [quantity, item])
//         .sort((a, b) => a[1].localeCompare(b[1]))
// }

// console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))

// function permute(str) {
//     if (str.length <= 1) {
//         return [str];
//     }

//     let permutations = [];
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         let remainingChars = str.slice(0, i) + str.slice(i + 1);
//         for (let permutation of permute(remainingChars)) {
//             permutations.push(char + permutation);
//         }
//     }
//     return permutations;
// }

// function noConsecutiveRepeats(str) {
//     return permute(str).filter(perm => {
//         for (let i = 0; i < perm.length - 1; i++) {
//             if (perm[i] === perm[i + 1]) {
//                 return false;
//             }
//         }
//         return true;
//     }).length;
// }

// console.log(noConsecutiveRepeats("aab"));



function permute(str) {
    if (str.length <= 1) {
        return [str]
    }

    const permutations = []
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        for (const permutation of permute(remainingChars)) {
            permutations.push(char + permutation)
        }
    }
    return permutations
}

function noConsecutives(arr) {
    return arr.filter(perm => {
        for (let i = 0; i < perm.length - 1; i++) {
            if (perm[i] === perm[i + 1]) {
                return false
            }
        }
        return true
    }).length
}

function permAlone(str) {
    const allPerms = permute(str)
    return noConsecutives(allPerms)
}

// Test cases
console.log(permAlone("aab"))
console.log(permAlone("aaa"))
console.log(permAlone("aabb"))


