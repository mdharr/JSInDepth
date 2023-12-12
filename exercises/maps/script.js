/*
    1. Create a Map called "mexico" with the following entries:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]

    2. Print out "mexico" to the terminal

    3. Change "id" to be 25

    4. Add "Honduras" to the list of neighbours to "mexico"
    
    5. Print out "mexico" to the terminal again
*/

// const mexico = new Map()
//     mexico.set("id", 24)
//     mexico.set("name", "Mexico")
//     mexico.set("capital", "Mexico City")
//     mexico.set("neighbors", ["USA", "Guatemala", "Belize"])
// console.log(mexico)

// mexico.set("id", 25)

// mexico.get("neighbors").push("Honduras")
// console.log(mexico)


/*
    1. Create a Map called "myPet" with the following entries:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]

    2. Print out "myPet" to the terminal

    3. Add a new entry: colour -> "Black"

    4. Change "breed" to be "Beagle"

    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again

    7. Add "Chip" to the list of friends for "myPet"

    8. Print out "myPet" to the terminal again
*/

// const myPet = new Map()
// myPet.set("name", "Sudo")
// myPet.set("type", "Dog")
// myPet.set("breed", "Poodle")
// myPet.set("age", 7)
// myPet.set("friends", ["Bit", "Byte", "Data"])
// console.log(myPet)

// myPet.set("color", "Black")
// console.log(myPet)

// myPet.set("breed", "Beagle")
// console.log(myPet)

// let filteredFriends = myPet.get("friends").filter(friend => friend !== "Data")
// myPet.set("friends", filteredFriends)
// console.log(myPet)

// filteredFriends.push("Chip")
// console.log(myPet)

/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}

    2. Create a Map called "store" with the following entries:
        - storeNumber -> 5
        - locationCity -> "Milan"
        - locationCountry -> "Italy"
        - products: [banana, apple, candy]

    3. Print out "store" to the terminal

    4. Only print out all the product objects in "store"

    5. Only print out the 3rd product object in "store"

    6. Change the price of the banana object through the store Map
       to be 1.75..

    7. Print out both "store" and "banana"

    8. Change the price of the candy object directly to be 4.99

    9. Print out both "store" and "candy"
*/
// const banana = {name: "banana", quantity: 1, price: 1.95}
// const apple = {name: "apple", quantity: 1, price: 1.45}
// const candy = {name: "candy", quantity: 1, price: 3.50}

// const store = new Map()
// store.set("storeNumber", 5)
// store.set("locationCity", "Milan")
// store.set("locationCountry", "Italy")
// store.set("products", [banana, apple, candy])
// console.log(store)

// console.log(store.get("products"))

// store.get("products").forEach(product => {
//     console.log(product)
// })

// for(let i = 0; i < store.get("products").length; i++) {
    // console.log(store.get("products")[i])
// }

// console.log(store.get("products")[2])

// store.get("products")[0].price = 1.75
// store.get("products").find(product => product === banana ? product.price = 1.75 : product.price)
// console.log(store)
// console.log(banana)

// candy.price = 4.99
// console.log(store)
// console.log(candy)

/*
    1. Create a Map called "houseForSale" with the following entries:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal

    3. Delete the entry with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new entry: "sale price" -> 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/

// const houseForSale = new Map()
// houseForSale.set("area", 940)
// houseForSale.set("value", 320000)
// houseForSale.set("streetName", "Fifth Street")
// houseForSale.set("built", "2012")
// houseForSale.set("owner", { name: "Blake", age: 29} )
// houseForSale.set("offers", [290000, 295000, 315000, 312000])
// console.log(houseForSale)

// houseForSale.delete("built")
// console.log(houseForSale)

// houseForSale.get("owner").age = 30
// console.log(houseForSale)

// const maxOfferPrice = houseForSale.get("offers").reduce((max, price) => {
//     return price > max ? max = price : max
// }, -Infinity)
// console.log(maxOfferPrice)

// houseForSale.set("salePrice", 312000)
// console.log(houseForSale)

/*
    1. Create a Map called "myConsole"
    
    2. Assign "myConsole" the key "log" with a value that is
       an arrow function.

       This arrow function will have one parameter called "message"

       The function will just console.log out the "message"

    3. Call the function with a message. How does this compare to Objects?

    4. Add the following key-value pairs to the map:
        -  1  : "number one"
        - "1" : "string one"

    5. Print out each of the 2 values for the keys you just added.
       How does this differ from an Object?
*/

const myConsole = new Map()
myConsole.set("log", (message) => { console.log(message) })

myConsole.get("log")("Hello there!")

myConsole.set(1, "number one")
myConsole.set("1", "string one")
console.log(myConsole)

console.log(myConsole.get("1"))

/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       out the INDEX of that value as well as the INDEX
       of where it was first found in "numbers"

    3. In this case, we will print:
       4 2

       (4 is where the duplicate index was)
       (2 is where the first pair of that duplicate was, as an index)

    HINT: Use a Map to keep track of number->index pairs

    *This is very challenging and is a common interview question
*/




// const myMap = new Map()

// console.log(myMap)

// myMap.set("name", "michael")
// myMap.set("age", "35")

// console.log(myMap)

// const age = myMap.get("age")
// console.log(age)

// console.log(myMap.has("name"))

// console.log(myMap.size)

// myMap.delete("age")

// console.log(myMap)
// console.log(myMap.size)