/*
    1. Create a variable called points that starts at 40
    2. Create an if statement that checks if points are greater than 20
    3. If points are greater than 20, subtract 10 from points
    4. Log out the points at the end of the program (this should always log)
    5. Change points to start at 15 and run the program again
*/

// let points = 15
// if(points > 20) {
//     points -= 10
// }
// console.log(points)

/*
    1. At the start of the program print out: "--- Animal Checker Program ---"
    2. Create a variable called animal that starts at the value "cat"
    3. Create an if statement that checks if animal is equal to "cat"
    4. If it is equal to "cat", print out "Meow!" to the screen
    5. If it is equal to "dog", print out "Woof!" to the screen
    6. If it is neither "cat" nor "dog", print out "Must be an alien"
    7. At the end of the program print out: "--- Animal check complete ---"
    8. Change animal to different values to make sure it works in all cases
*/

// console.log("--- Animal Checker Program ---")
// let animal = "cat"
// if(animal === "cat") {
//     console.log("Meow!")
// } else if(animal === "dog") {
//     console.log("Woof!")
// } else {
//     console.log("Must be an alien")
// }
// console.log("--- Animal check complete ---")

/*
    Create a program that starts with a number variable.
    The program will print out whether the variable is
    even or odd to the screen when run.

    Change the variable to test it works in both cases.

    HINT: modulus operator ( % ) is your friend
*/

function determineIfEven(n) {
    console.log("Determining even or odd...")
    let isEven = false
    if (n % 2 === 0) {
        isEven = true
    } else {
        isEven = false
    }
    return isEven
}

function calculateSum(...numbers) {
    console.log("Performing calculations...")
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Program started")
        let num1 = 17
        let num2 = 19
        resolve(calculateSum(num1, num2))
    }, 1000)
}).then((value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`The number is: ${ value }, and it is an ${ determineIfEven(value) ? 'even' : 'odd' } number.`);
            resolve();
        }, 3000);
    });
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Program ended");
            resolve();
        }, 3000);
    });
});


/* 
   Spot the bug 🐞
   Should print:
   "Most places consider you an adult."
   but it doesn't, why?
*/

// const age = 20;

// if (age < 3) {
//   console.log("You're just a baby!");
// } else if (age >= 3) {
//     console.log("You are in elementary school, kid.");
// } else if (age >= 13) {
//     console.log("Nice, you're a teenager!");
// } else if (age >= 18) {
//     console.log("Most places consider you an adult.");
// } else {
//     console.log("What? How did this happen!?");
// }

// if (age >= 18) {
//     console.log("Most places consider you an adult.");
// } else if (age >= 13) {
//     console.log("Nice, you're a teenager!");
// } else if (age >= 3) {
//     console.log("You are in elementary school, kid.");
// } else if (age < 3) {
//     console.log("You're just a baby!");
// } else {
//     console.log("What? How did this happen!?");
// }