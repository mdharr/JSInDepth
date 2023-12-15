/*
    1. Create an variable called "points" that points at this array:
       [10, 15, 20, 30, 5]

    2. Create another variable called "pointsCopy" that creates a
       copy of "points" using the spread operator, but also adds
       2 extra values at the end: 50 and 75

    3. Print out both "pointsCopy" and "points"
*/


// const points = [10, 15, 20, 30, 5]

// const pointsCopy = [...points, 50, 75]

// console.log(points)
// console.log(pointsCopy)




/*
    1. Create an variable called "views" that points at this array:
       [ [5, 10, 20], [10, 20, 30] ]

    2. Create another variable called "viewsCopy" that creates a
       copy of "views" using the spread operator

    3. Print out "views" and "viewsCopy"

    4. Add the number 40 to the end of the second array inside "viewsCopy"
       and delete the last number (20) inside the first array

    5. Add the array [100, 200] to the end of "viewsCopy"

    6. Print out "views" and "viewsCopy"

    *Explain this behaviour
    */
   
   
// const views = [[5, 10, 20], [10, 20, 30]];
// const viewsCopy = [...views]
// console.log(views)
// console.log(viewsCopy)
// viewsCopy[1].push(40)
// viewsCopy[0].pop()
// console.log(views)
// console.log(viewsCopy)
// views.push([200, 300])
// viewsCopy.push([100, 200])
// console.log(views)
// console.log(viewsCopy)

/*
    When making shallow copies like above, the arrays in views and viewsCopy are
    referencing the same locations in memory, so when those arrays are modified in 
    any way in either views or viewsCopy, both are modified. However, when a new
    array is pushed onto one of them, it is not pushed onto the other, because it 
    is an entirely new location in memory and not part of the original reference(s).
    In order to make a deep copy, you would have to use Array's map function like
    this: const viewsCopy = views.map(innerArray => [...innerArray]);
    Which maps over the inner arrays in the views array and spreads them into 
    an entirely new array assigned to `viewsCopy`.
*/

// testing deep copying arrays and removing duplicate inner arrays by stringifying
// the data and converting to Set, the parsing the data back into an inner array
// const viewsCopy = views.map(innerArray => [...innerArray]);

// views[0].push(30);
// viewsCopy[1].push(40);

// views.push([15, 30, 45]);
// viewsCopy.push([15, 30, 45]);

// // Concatenating the two arrays
// const concatenated = views.concat(viewsCopy);

// // Creating a Set to filter out unique arrays based on their string representation
// const uniqueSet = new Set(concatenated.map(arr => JSON.stringify(arr)));

// // Converting back to arrays
// const unique = Array.from(uniqueSet).map(str => JSON.parse(str));

// console.log(unique);



/*
    1. Create a variable called "animal" that points at this Object:
        { name: "Koala", kingdom: "Australia", cute: true, 
          friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] }

    2. Create a variable called "koala" that points at a COPY of
       "animal" using the spread operator for Objects, but add the
       following property as well: "tail": false 

    3. Print out both "animal" as well as "koala"

    4. Change "cute" to be false inside of "animal". Print out both
       "animal" and "koala" again and observe the change. Does this
       make sense?

    5. Add a "cute" property initialized to be false inside of the
       "kangaroo" object, inside of the "friends" array in "animal".
       Print out both "animal" and "koala" again and observe the change.
       Does this make sense?
*/


// const animal = { 
//     name: "Koala", 
//     kingdom: "Australia", 
//     cute: true, 
//     friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] 
// }

// const koala = {...animal, tail: false}
// animal.cute = false
// animal.friends[0].cute = false
// console.log(animal)
// console.log(koala)



/*
    1. Create a variable called "superhero" that points at this Object:
        {   name: "Bruce Wayne", alias: "Batman", universe: "DC",
            happy: false, enemies: ["Joker", "Catwoman", "Bane"],
            bestMovie: {title: "The Dark Knight", rating: 95}   }

    2. How would you create a COPY of the Object pointed to by
       "superhero" INCLUDING COPIES of "enemies" and "bestMovie".

    3. Once you've created a total copy, modify the following:
       - add "Poison Ivy" to the copy's array of "enemies"
       - add { year: 2008 } to the copy's "bestMovie" Object

    4. Print out both "superhero" and it's copy to ensure that
       "superhero"'s "enemies" and "bestMovie" were NOT modified.

    *This can be done MANY different ways but is also quite challenging!
*/


const superhero = { 
    name: "Bruce Wayne", 
    alias: "Batman", 
    universe: "DC",
    happy: false, 
    enemies: ["Joker", "Catwoman", "Bane"],
    bestMovie: {title: "The Dark Knight", rating: 95} 
}

const superheroCopy = {
    ...superhero,
    enemies: [...superhero.enemies, "Poison Ivy"],
    bestMovie: {...superhero.bestMovie, year: 2008}
}
console.log(superhero)
console.log(superheroCopy)

// superheroCopy.enemies.push("Poison Ivy")
// superheroCopy.bestMovie.year = 2008

console.log(superhero)
console.log(superheroCopy)
















// NOTES

// const myMap = new Map()

// myMap.set("Monkey", 5)
// myMap.set("Tiger", 1)
// myMap.set("Elephant", 2)

// console.log(myMap)

// const myMapArray = [...myMap, ["Baboon", 3]]
// console.log(myMapArray)




// const countryPop = {
//     Germany: 83,
//     Brazil: 212,
//     Egypt: 102,
// }

// const countryPopCopy = {
//     Germany: 999,
//     ...countryPop,
//     Indonesia: 273,
// }

// console.log(countryPop)
// console.log(countryPopCopy)



// console.log(countryPop)

// const countryPopExtended = {}

// for(const entry of Object.entries(countryPop)) {
//     const key = entry[0]
//     const value = entry[1]
//     countryPopExtended[key] = value
// }
// countryPopExtended["Indonesia"] = 273
// countryPopExtended["Japan"] = 125

// const countryPopExtended2 = {
//     ...countryPop,
//     Indonesia: 273,
//     Japan: 125
// }

// console.log(countryPopExtended)
// console.log(countryPopExtended2)


// primitive values do not alter original if changed in shallow copy
// however reference types such as arrays, maps, sets, objects, etc will
// be modified because they are references to a single memory location
// const arrOriginal = [[1],[2],3]
// const arrCopy = [...arrOriginal]
// arrCopy[2] = 5
// arrCopy[0][0] = 2
// console.log(arrOriginal)
// console.log(arrCopy)

// const countryPop = {
//     Germany: 83,
//     Brazil: 212,
//     Egypt: 102,
//     Canada: {
//         pop: 38
//     },
// }

// const countryPopCopy = {...countryPop}

// console.log(countryPop)
// console.log(countryPopCopy)

// console.log("---------")

// countryPop.Canada.capital = "Ottawa"

// console.log(countryPop)
// console.log(countryPopCopy)