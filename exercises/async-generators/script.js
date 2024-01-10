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

// executeRandomNumbers()





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

const randomStrings = async function* () {
    while(true) {
        const randomResult = Math.floor(Math.random() * 2)
        if(randomResult === 1) {
            yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Fast!')
                }, 500)
            })
        } else {
            yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Slow!')
                }, 3000)
            })
        }
    }
}

const randomStringsObject = randomStrings()

const executeRandomStrings = async () => {
    for await (const string of randomStringsObject) {
        console.log(string)
    }
}

// executeRandomStrings()



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


const modifySentences = async function* (sentence) {
    for(let i = 0; i < sentence.length; i++) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                if(sentence[i].match(/[aeiouAEIOU]/)) {
                    resolve('*')
                } else {
                    resolve(sentence[i].toUpperCase())
                }
            }, 100)
        })
    }
}

const modifySentencesObject = modifySentences("Monkeys are the coolest animal!")

const executeModifySentences = async () => {
    for await(const letter of modifySentencesObject) {
        console.log(letter)
    }
}


// executeModifySentences()


// const letterGenerator = function (sentence) {
//     for(let i = 0; i < sentence.length; i++) {
//         setTimeout(() => {
//             if(sentence[i].match(/[aeiouAEIOU]/)) {
//                 console.log("*")
//             } else {
//                 console.log(sentence[i].toUpperCase())
//             }
//         }, 100 * i)
//     }
// }

// letterGenerator("Monkeys are the coolest animal!")


const letterGenerator = function (sentence) {
    let cumulativeDelay = 0

    for (let i = 0; i < sentence.length; i++) {
        const additionalDelay = sentence[(i === 0 ? i : i-1)].match(/[.]/) ? 500 : 100
        cumulativeDelay += additionalDelay
        setTimeout(() => {
            process.stdout.write(sentence[i]);
        }, cumulativeDelay);
    }
    setTimeout(() => {
        process.stdout.write('\n');
    }, cumulativeDelay);
}

// letterGenerator("Good morning, Michael. Let's get to work shall we?");





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


const doubleTime = async function* (time) {
    while(true) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(time)
            }, time)
        })
        time *= 2
    }
}

const doubleTimeGeneratorObject = doubleTime(1)

const executeDoubleTime = async () => {
    for await (const time of doubleTimeGeneratorObject) {
        console.log(time)
    }
}

// executeDoubleTime()