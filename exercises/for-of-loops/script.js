/*
    1. Create a variable called "numbers" that points to this array:
        [10, 20, 40, 50, 20, 100]

    2. Use a for-of loop to print out each number squared
*/

// const numbers = [10, 20, 40, 50, 20, 100]
// for(const number of numbers) {
//     console.log(number)
// }


/*
    1. Create a variable called "ages" that points to this array:
        [10, 42, 15, 22, 11, 74, 39, 2]

    2. Create an array called "results" that starts off empty

    3. Use a for-of loop to loop over "ages" and add an Object
       to "results" with an "age" key having the value of the "age" 
       being looped over. Also, add a "name" key that is always "Dragon".
       Eg: {age: 10, name: "Dragon"}, {age: 42, name: "Dragon"}

    4. Print out "results"

    5. "results" should be:
        [{age: 10, name: "Dragon"}, {age: 42, name: "Dragon"},
         {age: 15, name: "Dragon"}, {age: 22, name: "Dragon"},
         {age: 11, name: "Dragon"}, {age: 74, name: "Dragon"},
         {age: 39, name: "Dragon"}, {age: 2, name: "Dragon"}]
*/

const ages = [10, 42, 15, 22, 11, 74, 39, 2]

const results = []

for(const obj of ages) {
    results.push({ age: obj, name: "Dragon" })
}
console.log(results)




/*
    1. Create an empty Set called "names"

    2. Create another empty Set called "capsNames"

    2. Add the following names to the set "names":
        - Bilbo
        - Hermione
        - Spock
        - Leia

    3. Use a for-of loop to loop over "names" and
       adds the capitalized version of each name
       to the "capsNames" set

    4. Print out "capsNames"
*/







/*
    1. Create a Map called "backpack" and add the following entries:
        - 1 => {name: "Sword", value: 300}
        - 2 => {name: "Banana", value: 5}
        - 3 => {name: "Gold Nugget", value: 10000}
        - 4 => {name: "Pants", value: 100}

    2. Use a for-of loop to loop over "backpack" and print out
       the name and the value for each item in the following format:
       Name: $Value
       For example: Sword: $300

    3. Also print out the total value of all items in the backpack
*/