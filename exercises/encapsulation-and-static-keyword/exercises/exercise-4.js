/*
    1. Go to the MDN javascript documentation online
       and lookup "Array".

    2. What are all the STATIC properties and methods
       on the Array Object?

    3. What are all the INSTANCE properties and methods
       on Array instances?

    4. Explain why some of these are static and why some
       are instance fields/properties/methods
*/


/*


    Static properties
    Array[@@species]
    Returns the Array constructor.

    Static methods
    Array.from()
    Creates a new Array instance from an iterable or array-like object.

    Array.fromAsync()
    Creates a new Array instance from an async iterable, iterable, or array-like object.

    Array.isArray()
    Returns true if the argument is an array, or false otherwise.

    Array.of()
    Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

    Instance properties
    These properties are defined on Array.prototype and shared by all Array instances.

    Array.prototype.constructor
    The constructor function that created the instance object. For Array instances, the initial value is the Array constructor.

    Array.prototype[@@unscopables]
    Contains property names that were not included in the ECMAScript standard prior to the ES2015 version and that are ignored for with statement-binding purposes.

    These properties are own properties of each Array instance.

    length
    Reflects the number of elements in an array.

    Instance methods
    Array.prototype.at()
    Returns the array item at the given index. Accepts negative integers, which count back from the last item.

    Array.prototype.concat()
    Returns a new array that is the calling array joined with other array(s) and/or value(s).

    Array.prototype.copyWithin()
    Copies a sequence of array elements within an array.

    Array.prototype.entries()
    Returns a new array iterator object that contains the key/value pairs for each index in an array.

    Array.prototype.every()
    Returns true if every element in the calling array satisfies the testing function.

    Array.prototype.fill()
    Fills all the elements of an array from a start index to an end index with a static value.

    Array.prototype.filter()
    Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

    Array.prototype.find()
    Returns the value of the first element in the array that satisfies the provided testing function, or undefined if no appropriate element is found.

    Array.prototype.findIndex()
    Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.

    Array.prototype.findLast()
    Returns the value of the last element in the array that satisfies the provided testing function, or undefined if no appropriate element is found.

    Array.prototype.findLastIndex()
    Returns the index of the last element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.

    Array.prototype.flat()
    Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    Array.prototype.flatMap()
    Returns a new array formed by applying a given callback function to each element of the calling array, and then flattening the result by one level.

    Array.prototype.forEach()
    Calls a function for each element in the calling array.

    Array.prototype.includes()
    Determines whether the calling array contains a value, returning true or false as appropriate.

    Array.prototype.indexOf()
    Returns the first (least) index at which a given element can be found in the calling array.

    Array.prototype.join()
    Joins all elements of an array into a string.

    Array.prototype.keys()
    Returns a new array iterator that contains the keys for each index in the calling array.

    Array.prototype.lastIndexOf()
    Returns the last (greatest) index at which a given element can be found in the calling array, or -1 if none is found.

    Array.prototype.map()
    Returns a new array containing the results of invoking a function on every element in the calling array.

    Array.prototype.pop()
    Removes the last element from an array and returns that element.

    Array.prototype.push()
    Adds one or more elements to the end of an array, and returns the new length of the array.

    Array.prototype.reduce()
    Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.

    Array.prototype.reduceRight()
    Executes a user-supplied "reducer" callback function on each element of the array (from right to left), to reduce it to a single value.

    Array.prototype.reverse()
    Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)

    Array.prototype.shift()
    Removes the first element from an array and returns that element.

    Array.prototype.slice()
    Extracts a section of the calling array and returns a new array.

    Array.prototype.some()
    Returns true if at least one element in the calling array satisfies the provided testing function.

    Array.prototype.sort()
    Sorts the elements of an array in place and returns the array.

    Array.prototype.splice()
    Adds and/or removes elements from an array.

    Array.prototype.toLocaleString()
    Returns a localized string representing the calling array and its elements. Overrides the Object.prototype.toLocaleString() method.

    Array.prototype.toReversed()
    Returns a new array with the elements in reversed order, without modifying the original array.

    Array.prototype.toSorted()
    Returns a new array with the elements sorted in ascending order, without modifying the original array.

    Array.prototype.toSpliced()
    Returns a new array with some elements removed and/or replaced at a given index, without modifying the original array.

    Array.prototype.toString()
    Returns a string representing the calling array and its elements. Overrides the Object.prototype.toString() method.

    Array.prototype.unshift()
    Adds one or more elements to the front of an array, and returns the new length of the array.

    Array.prototype.values()
    Returns a new array iterator object that contains the values for each index in the array.

    Array.prototype.with()
    Returns a new array with the element at the given index replaced with the given value, without modifying the original array.

    Array.prototype[@@iterator]()
    An alias for the values() method by default.


*/


// static Array methods seem to be typically used in conjunction with (potentially) non array classes/objects
// while non static properties/methods are used directly on arrays


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const reduced = arr.reduce((acc, current) => {
//     acc.push(current)
//     return acc
// }, [])

// console.log(reduced)
// let total = 0
// const reducedRight = arr.reduceRight((acc, current) => {
//     acc.push(current)
//     return acc
// }, [])

// console.log(reducedRight)