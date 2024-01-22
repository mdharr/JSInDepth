/*
    1. Create a class called "Utilties"

    2. Add a STATIC method to "Utilties" called
       "camelCase" that has a single parameter:
       - str (String)

    3. Add logic to "camelCase" that assumes that
       "str" is a String and returns the camel-
       cased version of the String. Eg:
       "hello there" => "helloThere"
       "Number Stock Items" => "numberStockItems"
       * You can assume that the spaces are where
         we move to the next upper-cased word

    4. Test this function on some Strings:
       console.log(Utilities.camelCase("hello there"))
       // helloThere
       console.log(Utilities.camelCase("HELLO THERE"))
       // helloThere
       console.log(Utilities.camelCase("I love cookies"))
       // iLoveCookies
       console.log(Utilities.camelCase("Monkey Banana"))
       // monkeyBanana
*/

class Utilities {
    static camelCase(str) {
        let result = ''
        const arr = str.toLowerCase().split(' ')
        const firstWord = arr[0]
        const rest = arr.slice(1)
        for(const word of rest) {
            result += word.charAt(0).toUpperCase() + word.slice(1)
        }
        return firstWord + result
    }
}

console.log(Utilities.camelCase("Hello There My FRIEND"))
console.log(Utilities.camelCase("hello there")) // helloThere
console.log(Utilities.camelCase("HELLO THERE")) // helloThere
console.log(Utilities.camelCase("I love cookies")) // iLoveCookies
console.log(Utilities.camelCase("Monkey Banana")) // monkeyBanana