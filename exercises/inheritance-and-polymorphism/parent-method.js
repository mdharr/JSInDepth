class Player {
    constructor(name, hp, mp, items) {
        this.name = name
        this.hp = hp
        this.mp = mp
        this.items = items
    }

    speak(phrase) {
        console.log(
            `${this.name} says: "${phrase}"`
        )
    }
}

class Warrior extends Player {
    constructor(name, hp, mp, items, shield) {
        super(name, hp, mp, items)
        this.shield = shield
    }
}

const warrior = new Warrior("Genghis Khan", 500, 50, ["Saber"], "Leather Shield")

warrior.speak("Hello")
