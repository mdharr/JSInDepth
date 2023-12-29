// Data Structures ------------------------


// Arrays ---------------------------------
// const arr = [1, 2, 3, 'Michael']
// arr.push(4)
// arr.unshift(0)
// arr.pop()
// arr.shift()

// for(const item of arr) {
//     console.log(item)
// }

// map, filter, reduce, concat, slice and splice
// Array - Big-O time complexity
// insert/ remove from end - O(1)
// insert / remove from beginning - O(n)
// accessing index - O(1)
// Search - O(n)
// push/pop - O(1)
// shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)

// Objects -----------------------------------
// An object is an unordered collection of key-value pairs
// The key must either be a string or symbol data type
// where as the value can be of any data type

// To retrieve a value, you can use the corresponding key
// This can be achieved using the dot notation or bracket
// notation

// Objects are not iterables. You cannot use it with a
// for...of loop

class Person {
    constructor(name, age, hobby) {
        this.name = name
        this.age = age
        this.hobby = hobby
    }
    sayMyName() {
        console.log(this.name)
    }
}

let heisenberg = new Person('Walter White', 52, 'Cooking')
// console.log(heisenberg)
// heisenberg.sayMyName()

// Object.keys() .values() .entries() ----------------
// const obj = { a: 1, b: 2, c: 3 };

// console.log(Object.keys(obj));      // ['a', 'b', 'c']
// console.log(Object.values(obj));    // [1, 2, 3]
// console.log(Object.entries(obj));   // [['a', 1], ['b', 2], ['c', 3]]

// Object - Big-O time complexity ----------------------
// insert - O(1)
// remove - O(1)
// access - O(1)
// search - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)


