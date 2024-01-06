/*
    1. Create a variable called "hungry" that start as true;

    2. Create an if/else statement that:
       - If "hungry" is true, print out "Have a cookie!"
       - Otherwise, print out: "No cookies for you!";

    3. Execute the code to make sure it works.

    4. Repeat steps 2-3 but with a ternary expression.
*/


// const hungry = true

// if(hungry) {
//     console.log("Have a cookie!")
// } else {
//     console.log("No cookies for you!")
// }

// hungry
// ? console.log("Have a cookie!")
// : console.log("No cookies for you!")


/*
  1. Create a function called "over9000" that has a single
     parameter which is a Number. This function:
     - Returns "It's over 9000!!!" if the argument is > 9000
     - Returns "Taking a Nappa..." in all other cases

  2. Do step 1 with a regular if/else clause first

  3. Re-do step 1 with a ternary expressions

  BONUS: Can you shorten this with the short "arrow function
         expression" syntax?
*/

// function over9000(num) {
//     if(num > 9000) return "It's over 9000!!!"
//     return "Taking a Nappa..."
// }

// function over9000(num) {
//     return num > 9000 ? "It's over 9000!!!" : "Taking a Nappa..."
// }

// console.log(over9000(10000))




/*
    1. Create a variable called "wizards" that points at the array:
       ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"]

    2. Map over "wizards" to create a new array that does the following:
      - If the name contains the letter "n" return the name but with
        all the "n"'s replaced with a "*" character
      - Otherwise return the name, but upper-cased
      - Use a regular if/else statement for this
   
    3. Repeat step 2 but with a ternary expression

    BONUS: Can you shorten this with the short "arrow function
           expression" syntax?
*/

// const wizards = ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"]

// const result = wizards.map(wizard => {
//     if(wizard.includes("n")) {
//         return wizard.replace(/[n]/g, "*")
//     } else {
//         return wizard.toUpperCase()
//     }
// })

// const result = wizards.map(wizard => wizard.includes("n") ? wizard.replace(/[n]/g, "*") : wizard.toUpperCase())

// console.log(result)



/*
    1. Create a variable called "characters" that points at the array:
       ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"]

    2. Filter over "characters" to create a new array that does the following:
      - If the name has a space in it " ", keep it in the result (return true)
      - Otherwise, filter it out (return false)
      - Use a regular if/else statement for this
   
    3. Repeat step 2 but with a ternary expression

    BONUS: Can you shorten this with the short "arrow function
           expression" syntax?
*/


const characters = ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"]
const result = characters.filter(character => character.includes(" "))

console.log(result)