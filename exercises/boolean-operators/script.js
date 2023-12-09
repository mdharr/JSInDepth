/*
    Write out the truth tables for the following boolean operators
    using two boolean values, one on each side:
    - AND
    - OR
    - NOT

    Use console.log to log out the results for each.

    HINT: AND and OR will have 4 possibilities, while NOT has 2
    HINT2: console.log(true && true)
*/

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

console.log(!true);  // false
console.log(!false); // true

/*
    Try to think of these answers before coding and printing them out:

    1. What is the result of: "1" === 1
    2. What is the result of: (3 > 2) === true
    3. What is the result of: (2 ** 2) !== "4"
    4. What is the result of: (true === true) && (false === false)
*/

// console.log("1" === 1) 
// console.log((3 > 2) === true)
// console.log((2 ** 2) !== "4")
// console.log((true === true) && (false === false))
// false
// true
// true
// true

/*
    What would each of these variables evaluate to?

    1. const one = true && "hi";
    2. const two = false && "bye";
    3. const three = true || "meow";
    4. const four = false || "rawr";

    Print them out to the console to see if you got them right.

    HINT: 3 & 4 are more challenging, so don't worry if you don't
    get them right away!
*/

// const one = true && "hi"
// const two = false && "bye"
// const three = true || "meow"
// const four = false || "rawr"
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)
// true (actually "hi")
// false
// true
// false (actually "rawr")

// What I learned:
// The result of an && expression is the first falsy operand or the last operand if none are falsy.
// The result of an || expression is the first truthy operand.
// In JavaScript, both && and || operators use short-circuit evaluation. && stops evaluating as soon as 
// it encounters a falsy value, while || stops as soon as it encounters a truthy value.

/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    This is a very challenging problem set. Once you see the results,
    try to see if you can see WHY it works that way. This will come in
    very handy in the future.
*/

// log "moo"
// false (since && operator ends with first false value, the right side does not execute, so nothing happens)
// true (log doesn't execute due to || operator)
// log "bye friend"

/*
    First, lookup how logical AND, OR and NULLISH assignment work
    using Google. Then try the following examples.

    What would each of the following variables evaluate to:

    1. let username = "";
       username &&= "tiger";

    2. let vip = 0;
       vip ||= 3;

    3. let loggedIn = null;
       loggedIn ??= 0;

    Log each of the values out to see the results.

    This is very very challenging, it might take several tries
    or coming back to it in the future when it's more relevant.
*/

// 1. username would remain an empty string
// 2. vip would log a value of 3
// 3. loggedIn would evaluate to 0

// let username = ""
// username &&= "tiger"
// console.log(typeof username)

// let vip = 0
// vip ||= 3
// console.log(vip)

// let loggedIn = null
// loggedIn ??= 0
// console.log(loggedIn)