/*
    1. Log out "Program started"
    2. Throw an Error Object with the message "Uh oh!"
    3. At the end of the program log out "Program complete!"
    4. Run the program and watch it crash

    5. Create a try/catch block that console.error's out 
       the error message
    6. Run the program again and see the difference
*/


// console.log("Program started")

// try {
//     throw("Uh oh")
// } catch (error) {
//     console.error(error)
// }

// console.log("Program complete!")

/*
    1. Create a loop that loops 10 times starting at 1
    2. On each loop iteration, print out the loop number
    3. On loop number 5, throw an Error Object with the message "Boom!"
    
    4. Catch the error and console.error the loop number
    5. Make sure the loop goes all the way to 10
*/

// console.log("Program started")

// for(let i = 1; i <= 10; i++) {
//     try {
//         console.log(i)
//         if(i === 5) {
//             throw('Boom!')
//         }
//     } catch (error) {
//         console.error(error)
//         console.error(`Error on loop ${i}`)
//     }
// }

// console.log("Program complete")




/*
    1. Assign the following object to a variable called "user":
        { name: "Misha", age: 22, settings: {colour: "blue"} }
    2. Log out "Creating user..."
    3. Try to log out: user.profile.colour
    4. Log out "User created!"
    5. Run the code and observe the behaviour

    6. How would you fix this code (without changing steps 1-4
       or the user Object)? Also, add any appropriate logging 
       you feel makes sense.
*/

// console.log("Program started")

// try {
//     const user = { name: "Misha", age: 22, settings: { color: "blue" } }

//     console.log("Creating user...")

//     console.log(user.profile.color)

//     console.log("User created!")

// } catch (error) {
//     console.error(error)
// }

// console.log("Program complete")

/*
    1. Create a try block that does the following:
        - Create a variable called "number" and initialize
          it to the number 1337
        - Add a random number between 0-1000 to "number"
        - Logs out "number"
        - If number is less than 2000:
            - Throws an Error Object with the message: "You lose!"
        - Otherwise, log out "You win!" with no throw/error
    2. Create a catch block that catches the error and logs it
    3. Inside the catch block, log out "number" as well

    4. What is the issue with this setup/code?
    5. How can we fix it so we can access "number" in the catch?
*/

console.log("Program started")

let number = 1337

try {
    number += Math.floor(Math.random() * 1001)
    console.log(number)
    if(number < 2000) {
        throw new Error('You lose!')
    }
    console.log('You win!')
} catch (error) {
    console.error(error)
    console.error(number)
}

console.log("Program complete")

















// console.log("Program started")

// try {
//     throw("kaboom!")
// } catch (error) {
//     console.error(error)
//     console.error("I got you, don't worry!")
// }

// console.log("Program complete!")