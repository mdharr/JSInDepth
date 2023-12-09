/*
    Write a function called "chill" that does the following:
    1. Prints out at the start: "Doing some chilling:"
    2. Then, prints out:
        "Chill... 1"
        "Chill... 2"
        "Chill... 3"
        ...
        "Chill... 10"
    3. Then finally prints out: "That was ice cold!""

    When you're done, call the function once.
*/

function chill() {
    console.log("Doing some chilling:")
    for(let i = 1; i <= 10; i++) {
        console.log(`Chill... ${i}`)
    }
    console.log("That was ice cold!")
}

chill()

/*
    Write a function called "noRemainder":

    1. This function has two parameters:
        - number
        - mod
    2. The function will return:
        - true: if "number" is evenly divisible by "mod" (no remainder)
        - false: if "number" is not evenly divisible by "mod" (has a remainder)

    3. Call your function like so:
        const result1 = noRemainder(10, 7); // result1 should be false
        const result2 = noRemainder(100, 10); // result2 should be true
*/



/*
    Write a function called "login":

    1. The function has 2 parameters:
        - username: this should be a string
        - password: this should be a string too

    2. Return true in the following cases:
        - username is "admin" (any password, doesn't matter)
        - username is "monkey" and password is "123"
        - username is "moomoo" and password is "farm"

    3. In all other cases, return false

    4. Test the function like so:
     - const test = login('hello', 'meow'); // "test" should be false
     - const test2 = login('admin', 'lol'); // "test2" should be true
     - const test3 = login('monkey', '123'); // "test3" should be true
     - const test4 = login('moomoo', 'farm'); // "test4" should be true
     - const test5 = login('moomoo', 'moo'); // "test5" should be false
*/



/*
    1. Write a function called "square":

    square will have 1 parameter:
        - num: this will be a number
    
    "square" will return the square of "num" (num**2)

    2. Write another function called sumOfSquares:

    sumOfSquares will have 2 parameters:
        - num1: this will be a number
        - num2: this will also be a number

    sumOfSquares will need to:
        1. Use the square function inside itself
        2. return back square of num1 + the square of num2

    3. Test the function using these:
     - const sum1 = sumOfSquares(2, 3); // "sum1" should be 13 (4 + 9)
     - const sum2 = sumOfSquares(3, 4); // "sum1" should be 25 (9 + 16)
*/