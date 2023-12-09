/*
    Create a while loop that prints out the numbers from 5 - 10 (inclusive)
*/

// let i = 5
// while(i >= 5 && i <= 10) {
//     console.log(i)
//     i++
// }

/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    3. After 3 loop iterations, change "loggedIn" to be true.
    4. After the loops is done print out: "Sucessfully logged in!"

    HINT1: Be careful for an infinite loop!
    HINT2: Use CMD+C or CTRL+C to get out of an infinite loop in node
*/

// let loggedIn = false
// while(!loggedIn) {
//     for(let i = 0; i < 3; i++) {
//         console.log("Incorrect login credentials")
//     }
//     loggedIn = true
// }
// console.log("Successfully logged in!")

/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/
// let count = 10
// const evens = []
// const odds = []
// while(count >= 10 && count <= 40) {
//     if(count % 2 === 0) {
//         evens.push(count)
//     } else {
//         odds.push(count)
//     }
//     count++
// }
// console.log(`Evens: ${evens}`)
// console.log(`Odds: ${odds}`)

/*
    1. Create a while loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!

    HINT: Lookup for "continue" keyword for loops
*/

let count = 1

while(count >= 1 && count <= 100) {
    if(count % 100 === 0) {
        console.log(`You made it!`)
    } else if (count % 50 === 0) {
        console.log(`Half way there!`)
    } else if (count % 10 === 0) {
        console.log(`Checkpoint! ${count}`)
    }
    count++
}
console.log(`All, done!`)