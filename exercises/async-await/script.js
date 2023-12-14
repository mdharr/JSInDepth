/*
    1. Create a function called "fetchPokemon" that returns 
       a Promise that resolves with the value :
       { data: {name: "Pickachu", power: 20} } after 2 seconds
    2. Print out "Program starting..."
    
    3. Create an async function that uses await to wait for
       the data to comes back from "fetchPokemon" then log out
       the data

    4. Call the async function you created
    5. Log out "Program complete!"

    After your're done the above ^:
    6. Change "fetchPokemon" to reject after 2 seconds instead
       with a new Error Object with the message "Danger, danger!"
    7. How can you modify your async function to catch this error?
*/

// function fetchPokemon() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve({ data: {name: "Pickachu", power: 20} })
//             reject(new Error('Danger, danger!'))
//         }, 2000)
//     })
// }

// console.log("Program starting...")

// const useData = async () => {
//     try {
//         const data = await fetchPokemon()
//         console.log(data)
//         console.log("Done fetching...")
//     } catch (error) {
//         console.error(error)
//     }
//     console.log(String("Error was handled!").toUpperCase())
// }

// useData()
// console.log("Program complete!")


/*
    1. Create a function called "fetchUser" that returns 
       a Promise that resolves with the value :
       { data: {user: "Monkey", admin: true} } after 3 seconds
    2. Create a function called "login" that takes an Object
       as an argument. If the object has a property called 
       "admin" with a value of true, then log out
       "Successfully logged in!", otherwise log out
       "Failed to log in, please try again."

    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchUser".
    
    5. Pass the user that comes back from "fetchUser" to the
       "login" function you created above

    6. Call the async function you created
    7. Log out "Program complete!"
*/

// const fetchUser = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ data: {username: "Monkey", admin: true} })
//             reject('failed to login')
//         }, 3000)   
//     })
// }

// const login = (user) => {
//     if(user.admin) {
//         console.log("Successfully logged in!")
//     } else {
//         console.log("Failed to log in, please try again.")
//     }
// }

// console.log("Program starting...")

// const useAdmin = async () => {
//     try {
//         const result = await fetchUser()
//         login(result.data)
//     } catch (error) {
//         console.error(error)
//     }
//     console.log("end of async function")
// }

// useAdmin()

// console.log("Program complete!")




/*
    1. Create a function called "fetchFast" that returns 
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns 
       a Promise that resolves with the String "Slow Done"
       after 6 seconds 
    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    5. Call the async function you created
    6. Log out "Program complete!"

    7. How long does this take and why?
    ANSWER: It took a total of 8000ms because fetchFast resolves after 2000ms then
    fetchSlow executes and resolves after another 6000ms
    8. How could you speed it up?
    ANSWER: Since fetchFast and fetchSlow are not dependant on each other, I can remove the await
    keywords in my async function and declare fastResult/slowResult outside of the try catch blocks 
    in the beginning of the async function to execute both functions at the same time so each one can 
    fetch their specified data simultaneously (asynchronously) rather than waiting (synchronously),
    then finally surround another promise at the bottom of the function with a try/catch
    and it will be a Promise.all([promise1, promise2]) which waits for the promises to fulfill
    before executing.
*/


// const fetchFast = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Fast Done!')
//             reject('error fetching fast')
//         }, 2000);
//     })
// }

// const fetchSlow = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Slow Done!')
//             reject('error fetching slow')
//         }, 6000);
//     })
// }
// const startTime = new Date()
// console.log("Program starting...")

// const useData = async () => {
//     let fastResult, slowResult

//     try {
//         fastResult = fetchFast()
//         console.log(fastResult)
//     } catch (error) {
//         console.error(error)
//     }
    
//     try {
//         slowResult = fetchSlow()
//         console.log(slowResult)
//     } catch (error) {
//         console.error(error)
//     }

//     try {
//         const finalResults = await Promise.all([fastResult, slowResult])
//         console.log("Done fetching data!", finalResults)
//     } catch (error) {
//         console.error(error)
//     }

//     const endTime = new Date()
//     const timeElapsed = endTime - startTime
//     console.log("Execution time: ", timeElapsed)
// }

// useData()


/*
    1. Create a function called "goGetCandies" which will
       return a Promise Object that resolves to the value:
       { candy: "sour keys", quantity: 10 }
       This should take 2 seconds

    2. Create another function called "sellCandies" that
       will take a candy Object like above ^ and return
       a Number that is 25 * quantity. This will be 
       how much (in cents) we get for our candies. However,
       make this function take 3 seconds to do this math
       (return a Promise with a setTimeout with the answer).

    3. Write an async function that uses await to:
       1. Get the candy object from goGetCandies()
       2. Passes it to "sellCandies" and waits for the response
       3. Prints out how much money we made from our sale

    4. Do the same steps as #3 but with vanilla Promises.

    Q1: Which of these 2 methods do you prefer?
    Q2: Which of these 2 methods is easier to read?
*/

const goGetCandies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ candy: "sour keys", quantity: 10 })
        }, 2000);
    })
}

const sellCandies = (candyObj) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(25 * candyObj.quantity)
        }, 3000);
    })
}

const useCandies = async () => {

    console.log('Program starting...')
    const startTime = new Date()

    let candy, money

    try {
        candy = await goGetCandies()
    } catch (error) {
        console.error(error)
    }
    
    try {
        money = await sellCandies(candy)
    } catch (error) {
        console.error(error)
    }
    console.log(`We made ${parseFloat(money/100).toFixed(2)} dollars`)
    console.log('Program complete')
    const endTime = new Date()
    const elapsedTime = endTime - startTime
    console.log('Elapsed time: ', elapsedTime)
}

useCandies()

// const candy = goGetCandies()
// candy.then((result) => {
//     const sellValue = sellCandies(result)
//     sellValue.then((value) => {
//         console.log(value)
//     })
// })





// NOTES

// const makeTimeout = (ms) => {
//     const timeout = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("All done!")
//             reject('there was an error!')
//         }, ms)
//     })

//     return timeout
// }

// const causeError = async () => {
//     try {
//         const result = await makeTimeout(2000)
//         console.log(result)
//     } catch (error) {
//         console.log('we are in the error case, all done')
//         console.error(error)
//     }
// }

// console.log("Program started")
// causeError()
// console.log("Program done")