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

// class Person {
//     constructor(name, age, hobby) {
//         this.name = name
//         this.age = age
//         this.hobby = hobby
//     }
//     sayMyName() {
//         console.log(this.name)
//     }
// }

// let heisenberg = new Person('Walter White', 52, 'Cooking')
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


// function updateInventory(arr1, arr2) {
//     const inventoryMap = new Map(arr1.map(item => [item[1], [item[0], item[2]]]))
//     for(const [quantity, item, year] of arr2) {
//         if(inventoryMap.has(item)) {
//             inventoryMap.set(item, [inventoryMap.get(item)[0] + quantity, year])
//         } else {
//             inventoryMap.set(item, [quantity, year])
//         }
//     }
//     return Array.from(inventoryMap, ([item, [quantity, year]]) => [quantity, item, year])
//         .sort((a, b) => a[2] - b[2])
// }

// const inventory1 = [
//     [25, "Elden Ring", 2022],
//     [14, "Sekiro", 2019],
//     [1, "Dark Souls", 2011],
//     [5, "Bloodborne", 2015],
//     [32, "Dark Souls 3", 2016]
// ]

// const inventory2 = [
//     [2, "Elden Ring", 2022],
//     [3, "King's Field IV: The Ancient City", 2001],
//     [67, "Dark Souls 2: Scholar of the First Sin", 2014],
//     [7, "Dark Souls 3", 2016]
// ]

// console.log(updateInventory(inventory1, inventory2))

/**
 * Updates the inventory
 * @param {Array} currentInventory - The current inventory array.
 * @param {Array} newItems - Array of new items to add or update in the inventory.
 * @returns {Array} The updated inventory, sorted by year.
 */

// function updateInventory(currentInventory, newItems) {
//     if(!Array.isArray(currentInventory) || !Array.isArray(newItems)) {
//         throw new Error('Invalid input: Expected arrays for currentInventory and newItems')
//     }

//     const inventoryMap = currentInventory.reduce((map, [quantity, item, year]) => {
//         map.set(item, [quantity, year])
//         return map
//     }, new Map())

//     for (const [quantity, item, year] of newItems) {
//         const current = inventoryMap.get(item);
//         if (current) {
//             inventoryMap.set(item, [current[0] + quantity, year]);
//         } else {
//             inventoryMap.set(item, [quantity, year]);
//         }
//     }

//     return Array.from(inventoryMap, ([item, [quantity, year]]) => [quantity, item, year])
//         .sort((a, b) => a[2] - b[2]);
// }



// try {
//     console.log(updateInventory(inventory1, inventory2));
// } catch (error) {
//     console.error(error.message);
// }


/**
 * Updates the inventory
 * @param {Array} currentInventory - The current inventory array.
 * @param {Array} newItems - Array of new items to add or update in the inventory.
 * @returns {Array} The updated inventory, sorted by year.
 */


// const inventory1 = [
//     [25, "Elden Ring", 2022],
//     [14, "Sekiro", 2019],
//     [1, "Dark Souls", 2011],
//     [5, "Bloodborne", 2015],
//     [32, "Dark Souls 3", 2016]
// ];

// const inventory2 = [
//     [2, "Elden Ring", 2022],
//     [3, "King's Field IV: The Ancient City", 2001],
//     [67, "Dark Souls 2: Scholar of the First Sin", 2014],
//     [7, "Dark Souls 3", 2016]
// ];

// const oops = 1000

// function updateInventory(currentInventory, newItems) {
//     if(!Array.isArray(currentInventory) || !Array.isArray(newItems)) {
//         throw new Error('Invalid input: expected arrays for currentInventory and newItems')
//     }
//     const inventoryMap = currentInventory.reduce((map, [quantity, item, year]) => {
//         map.set(item, [quantity, year])
//         return map
//     }, new Map())
//     for(const [quantity, item, year] of newItems) {
//         const current = inventoryMap.get(item)
//         if(current) {
//             inventoryMap.set(item, [current[0] + quantity, year])
//         } else {
//             inventoryMap.set(item, [quantity, year])
//         }
//     }
//     return Array.from(inventoryMap, ([item, [quantity, year]]) => [quantity, item, year])
//         .sort((a,b) => a[2] - b[2])
// }

// try {
//     console.log(updateInventory(inventory1, inventory2))
// } catch (error) {
//     console.error(error)
// }

// class Person {
//     constructor(name, age, familySize, primaryLanguage, hobby) {
//         this.name = name
//         this.age = age
//         this.familySize = familySize
//         this.primaryLanguage = primaryLanguage
//         this.hobby = hobby
//     }
//     sayMyName() {
//         console.log(`My name is ${this.name}`)
//     }
// }

// const michael = new Person('Michael', 35, 3, 'English', 'Programming')
// console.log(michael)
// console.log(michael.name)
// michael.sayMyName()

// let obj = {
//     type: 'bird',
//     color: 'blue',
//     makeSound: function() {
//         console.log('chirp chirp')
//     }
// }

// console.log(obj.type)
// obj.makeSound()



// Sets ---------------------------------------------
/*
    A set is a data structure that can hold a collection of values.
    The values however must be unique.

    Sets can contain a mix of different data types.
    You can store strings, booleans, numbers or even
    objects all in the same set.

    Sets are dynamically sized. You don't have to declare
    the size of a set before creating it.

    Sets do no maintain an insertion order.

    Sets are iterables. They can be used with a for...of loop.
*/

// Sets vs Arrays
/* 
    Arrays can contain duplicate values whereas
    Sets cannot.

    Insertion order is maintained in arrays but
    it is not the case with sets.

    Searching and deleting an element in a set
    is faster compared to arrays.
*/

// const set = new Set([1, 2, 3])
// set.add(4)
// console.log(set.has(4))
// set.delete(3)
// console.log(set.size)
// set.clear()

// for(const item of set) {
//     console.log(item)
// }

// Maps ------------------------------------------------------
/* 
    A map is an unordered collection of key-value
    pairs. Both keys and values can be of any data type.

    To retrieve a value, you can use the corresponding key.

    Maps are iterables. They can be used with a for...of loop.
*/

// Object vs Map
/* 
    Objects are unordered whereas maps are ordered.

    Keys in objects can only be string or symbol
    type whereas in maps, they can be of any type.

    An object has a prototype and may contain a few default
    keys which may collide with your own keys if you're
    not careful. A map on the other hand does not contain
    any keys by default.

    Objects are not iterables whereas maps are iterables.

    The number of items in an object must be determined
    manually whereas it is readily available with the size
    property in a map.

    Apart from storing data, you can attach functionality
    to an object whereas maps are restricted to just storing
    data.
*/

// const map = new Map([['a', 1], ['b', 2]])

// map.set('c', 3)
// map.delete('c')
// console.log(map.has('a'))
// console.log(map.size)
// console.log(map.get('a'))
// map.clear()


// for(const [key,value] of map) {
//     console.log(`${key}: ${value}`)
// }



// Stack --------------------------------------

/* 
    The stack data structure is a sequential collection 
    of elements that follows the principle of Last In First
    Out (LIFO).

    The last element inserted into the stack is first element
    to be removed.

    A stack of plates. The last plate placed on top of the stack
    is also the first plate removed from the stack.

    Stack is an abstract data type. It is defined by its behavior
    rather than being a mathematical model.

    The Stack data structure supports two main operations
        - Push, which adds an element to the collection
        - Pop, which removes the most recently added element
        from the collection.
*/

// Stack Usage

/* 
    Browser history tracking

    Undo operation when typing

    Expression conversions

    Call stack in JavaScript runtime

*/

// class Stack {
//     constructor() {
//         this.items = []
//     }

//     push(element) {
//         this.items.push(element)
//     }

//     pop() {
//         if (this.items.length === 0) {
//             return 'Underflow - The stack is empty.'
//         }
//         return this.items.pop()
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     print() {
//         console.log(this.items)
//     }
// }

// // Create a new stack
// const myStack = new Stack();

// // Push elements onto the stack
// myStack.push(5);
// myStack.push(10);
// myStack.push(15);

// // Display the stack's content
// console.log("Stack after push operations:");
// myStack.print();

// // Pop an element
// const poppedElement = myStack.pop();
// console.log("Popped element:", poppedElement);

// // Check if the stack is empty
// console.log("Is the stack empty?", myStack.isEmpty());

// // Display the stack's content after pop
// console.log("Stack after pop operation:");
// myStack.print();

// class Stack {
//     constructor() {
//         this.items = []
//     }

//     push(element) {
//         this.items.push(element)
//     }

//     pop() {
//         if(!this.isEmpty()) {
//             return this.items.pop()
//         }
//         return null
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     clear() {
//         this.items = []
//     }

//     print() {
//         console.log(this.items.toString())
//     }
// }

// const myStack = new Stack()

// for(let i = 1; i <= 10; i++) {
//     myStack.push(i)
// }

// myStack.print()

// console.log(myStack.isEmpty())

// myStack.pop()

// myStack.print()

// myStack.clear()

// myStack.print()








// Queue ------------------------------------

/* 
    The queue data structure is a sequential collection
    of elements that follows the principle of First In
    First Out (FIFO).

    The first element inserted into the queue is first
    element to be removed.

    A queue of people. People enter the queue at one end
    (rear/tail) and leave the queue from the other end
    (front/head).

    Queue is an abstract data type. It is defined by its
    behavior rather than being a mathematical model.

    The queue data structure supports two main operations.
        - Enqueue, which adds an element to the rear/tail
        - Dequeue, which removes an element from the front/head
*/

// Queue Usage

/* 
    Printers (printing multiple documents)

    CPU task scheduling (self-explanatory)

    Callback queue in JavaScript runtime (determine order of code execution)

*/

// Queue Implementation

/* 
    enqueue(element) - add an element to the queue

    dequeue() - remove the oldest element from the queue

    peek() - get the value of the element at the front
    of the queue without removing it

    isEmpty() - check if the queue is empty

    size() - get the number of elements in the queue

    print() - visualize the elements in the queue

*/

// class Queue {
//     constructor() {
//         this.items = []
//     }
//     enqueue(element) {
//         this.items.push(element)
//     }
//     dequeue() {
//         return this.items.shift()
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }
//     size() {
//         return this.items.length
//     }
//     print() {
//         console.log(this.items.toString())
//     }
// }

// const myQueue = new Queue()
// console.log(myQueue.isEmpty())
// myQueue.enqueue(10)
// myQueue.enqueue(20)
// myQueue.enqueue(30)
// console.log(myQueue.size())
// myQueue.print()
// console.log(myQueue.dequeue())
// console.log(myQueue.peek())

// Queue Data Structure Optimized

// class Queue {
//     constructor() {
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element) {
//         this.items[this.rear] = element
//         this.rear++
//     }

//     dequeue() {
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty() {
//         return this.rear - this.front === 0
//     }

//     peek() {
//         return this.items[this.front]
//     }

//     size() {
//         return this.rear - this.front
//     }

//     print() {
//         console.log(this.items)
//     }
// }

// const queue = new Queue()
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size())
// queue.print()
// console.log(queue.dequeue())
// console.log(queue.peek())

// enqueue and dequeue have constant big-o time complexity
// O(1)


// Circular Queue ---------------------------------------------
/* 
    Useful in Clock
    Streaming data
    Traffic lights
    FIFO
*/

// Circular Queue Implementation

/* 
    enqueue(element) - add an element to the queue
    dequeue() - remove the oldest element from the queue
    isFull() - check if the queue is full
    isEmpty() - check if the queue is empty
    peek() - get the value of the element at the front of the queue without removing it
    size() - get the number of elements in the queue
    print() - visualize the elements in the queue
*/

class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }

    enqueue(element) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength += 1
            if(this.front === -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
        if(this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        if(this.isEmpty()) {
            console.log('Queue is empty')
        } else {
            let i
            let str = ''
            for(i = this.front; i !== this.rear; i = (i+1) % this.capacity) {
                str += this.items[i] + " "
            }
            str += this.items[i]
            console.log(str)
        }
    }
}

const circularQueue = new CircularQueue(5)
console.log(circularQueue.isEmpty())
circularQueue.enqueue(10)
circularQueue.enqueue(20)
circularQueue.enqueue(30)
circularQueue.enqueue(40)
circularQueue.enqueue(50)

console.log(circularQueue.isFull())
circularQueue.print()

console.log(circularQueue.dequeue())
console.log(circularQueue.peek())

circularQueue.print()
circularQueue.enqueue(60)
circularQueue.print()