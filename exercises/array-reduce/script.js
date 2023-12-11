/*
    1. Create an array called "points" with the numbers 55-60 (inclusive)

    2. Create a variable called "sum" using reduce that sums up the points in "points"
    
    3. Print out both "points" and "sum"
*/

// const points = [55, 56, 57, 58, 59, 60]
// const sum = points.reduce((total, point) => {
//     return total += point
// }, 0)
// console.log(points)
// console.log(sum)


/*
    1. Create an array called 'companies' of the following strings:
        ["apple", "tesla", "spacex", "amazon", "meta", "google"]

    2. Create a const called "modded" that reduces the "companies"
       array to a string of companies that DO NOT start with the
       letter 'a', separated by dashes

    3. Print out "companies" and "modded"

    "modded" should be: "tesla-spacex-meta-google-"

    BONUS: How can you get rid of the trailing '-' ?
    TIP: Look up reduce on Google using docs like MDN
*/

// const companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];
// const modded = companies.reduce((string, company) => {
//     if (company.startsWith('a')) {
//         return string ? `${string}-${company}` : company;
//     }
//     return string;
// }, '');

// simplified even further
// const modded = companies.reduce((string, company) => {
//     return company.startsWith('a') ? (string ? `${string}-${company}` : company) : string;
// }, '');

// console.log(modded);



/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a const called "afterTax" that does a sum like so:
        - If the price is greater than 6, add the price with no tax
        - Otherwise, add the price plus a tax of 20%

    3. Print out "prices" and "afterTax"
*/

// const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2]
// const afterTax = prices.reduce((sum, price) => {
//     return price > 6 ? sum += price : sum += price*0.2
// }, 0)
// console.log(prices)
// console.log(afterTax)

/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create an new array called "caps" that:
        - maps over "items" and capitalizes each item

    3. Create a const called "concat" that:
        - uses reduce to concatenate all the strings in "caps"
          using a space to separate each item

    4. Print out "items", "caps" and "concat"

    BONUS: Can you do steps 1-3 in one line?
*/

// const items = ["light", "banana", "phone", "book", "mouse"]
// const caps = items.map(item => `${item.charAt(0).toUpperCase()}${item.slice(1)}`)
// const concat = caps.reduce((string, item) => {
//     return string ? `${string} ${item}` : string += item
// }, '')
// console.log(items)
// console.log(caps)
// console.log(concat)


/*
    1. Create the following array called "nums":
        [10, 30, 50, 70, 90]

    2. Create a new array called "squares" that:
        - maps over "nums" and return each item squared (x by itself)

    3. Create another new array called "over1000" that:
        - filters "squares" to contain only values over 1000

    4. Create a const called "finale" that:
        - reduces "over1000" to a single sum of it's elements

    5. Print out "nums", "squares", "over1000" and "finale"

    BONUS^2: Can you do 1-4 all in one line?
*/

// const nums = [10, 30, 50, 70, 90]
// const squares = nums