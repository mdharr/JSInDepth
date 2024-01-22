class Utils {
    static description = "Awesome utilities!"
    description = "Another description?"

    static caps(str) {
        return str.toUpperCase()
    }

    lower(str) {
        return str.toLowerCase()
    }
}

const newString = "HeLLo"

console.log(Utils.description)
const utils = new Utils()
console.log(utils.description)

console.log(Utils.caps(newString))
console.log(utils.lower(newString))

console.log(Utils)
console.log(Object.getOwnPropertyNames(Utils))
console.log(Object.getOwnPropertyNames(utils))
console.log(Object.getOwnPropertyNames(utils.__proto__))


