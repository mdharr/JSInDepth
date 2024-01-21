class Player {
    constructor(name, hp, mp, items) {
        this.name = name
        this.hp = hp
        this.mp = mp
        this.items = items
    }
    speak(phrase) {
        console.log(`${this.name} says: "${phrase}"`)
    }
}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"])
console.log(hanSolo)
console.log(Object.getOwnPropertyNames(hanSolo))
console.log(Object.getOwnPropertyNames(hanSolo.__proto__))

const nader = new Player("Nader", 10, 5, ["Computer"])
console.log(nader)
console.log(Object.getOwnPropertyNames(nader))
console.log(Object.getOwnPropertyNames(nader.__proto__))


function AnotherPlayer(name, hp, mp, items) {
    this.name = name
    this.hp = hp
    this.mp = mp
    this.items = items
}

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"])
console.log(darthVader)
console.log(Object.getOwnPropertyNames(darthVader))
console.log(Object.getOwnPropertyNames(darthVader.__proto__))

hanSolo.speak("Never tell me the odds..")