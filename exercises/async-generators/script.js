/*
    1. Create an async Generator function that will yield
       a Promise that resolves after 1 second with a random
       number between 0-9 (integer and inclusive)

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)
*/

const randomNumbers = async function* () {
    while(true) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 10))
            }, 1000)
        })
    }
}

const randomNumbersObject = randomNumbers()

const executeRandomNumbers = async () => {
    for await (const number of randomNumbersObject) {
        console.log(number)
    }
}

executeRandomNumbers()





/*
    1. Create an async Generator function that has a 50%
       chance of yielding either of the following Promises:
       - Resolve after 500ms with the value "Fast!"
       - Resolve after 3000ms with the value "Slow!"

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    *HINT: Math.random() is your friend
*/







/*
    1. Create an async Generator function that has a single
       parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will
       yield a Promise that resolves after 100ms that:
       - If the letter is a vowel (aeiou) then resolve with a "*"
       - Otherwise resolve with the letter, but uppercased

    2. Create the generator object by calling the function ^
       with a value of "Monkeys are the coolest animal!"

    3. Use a for-await-of loop to loop through the generator

    *There are MANY ways to check if a string has any of several letters
*/









/*
    1. Create an async Generator function that has a single
       parameter called "time". This function will yield a
       Promise that resolves with the time taken after that
       many milliseconds. The time for each subsequent Promise
       will take TWICE as long.

    2. Create the generator object by calling the function ^
       with the value 100 to start.

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    4. Example output if we started with:
       const timeGeneratorObject = timeGenerator(100)
       for await (const time of timeGeneratorObject)
          - ^ If we logged "time" each loop we'd get:
          - 100, 200, 400, 800, 1600, 3200 ... etc
*/