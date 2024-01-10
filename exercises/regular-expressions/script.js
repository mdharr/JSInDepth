/*
    1. Create a variable called "quote" that points at:
       "What is this? A center for ants?"

    2. Create a variable called "pattern" that points at
       a regular expression to search for "ant" in a string

    3. Use the .test method on the "pattern" in step
       2 to check if "quote" has the pattern in it

    4. Use the .match method on the "quote" string to return
       a match for the "pattern" regexp

    5. Print out the results from steps 3 and 4
*/

const quote = "What is this? A center for ants?"

const pattern = /ant/i

console.log(pattern.test(quote))

console.log(quote.match(pattern))




/*
    1. Create a variable called "email" that points at:
       "monkey@trees.com"

    2. Create a variable called "emailPattern" that is
       a regular expression that will look for a string
       that ENDS with ".com"

    3. Test "email" against "emailPattern" to see if
       it returns true/false using .test on "emailPattern"

    4. Find a match using .match on "email" with the
       "emailPattern regex"

    5. Print out the results from 3 and 4.

    BONUS: What is an issue with this pattern?
*/








/*
    *Building on exercise 2

    1. Create a variable called "email" that points at:
       "monkey@trees.com"

    2. Create a variable called "emailPattern" that is
       a regular expression that will look for a string
       that ENDS with ".com" AND has ANY number of letters
       followed by the '@' char followed by ANY number of
       letters and ending with the "".com"

    3. Test "email" against "emailPattern" to see if
       it returns true/false using .test on "emailPattern"

    4. Find a match using .match on "email" with the
       "emailPattern regex"

    5. Print out the results from 3 and 4.

    BONUS: What is an issue with this pattern?
*/








/*
    1. Create a variable called "phoneNumber" that points at:
       the string: "020-382-6940"

    2. Create a regular expression called "phonePattern" that
       is a regular expression that would match a phone number
       with the format above in "phoneNumber" (including dashes)

    3. Test "phoneNumber" against "phonePattern" to see if
       it returns true/false using .test on "phonePattern"

    4. Find a match using .match on "phoneNumber" with the
       "phonePattern regex"

    5. Print out the results from 3 and 4.

    BONUS: What is an issue with this pattern?
*/
