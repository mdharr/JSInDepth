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

    speak(phrase) {
        console.log(`${phrase}!!!!!`)
    }
}

class Wizard extends Player {
    constructor(name, hp, mp, items, wand) {
        super(name, hp, mp, items)
        this.wand = wand
    }

    speak(phrase) {
        console.log(`${phrase} magically!`)
    }
}

class Bartender extends Player {
    constructor(name, hp, mp, items, mug) {
        super(name, hp, mp, items)
        this.mug = mug
    }

}

const warrior = new Warrior("Conan", 300, 50, ["Aquilonian Steel"], "Hide Shield")
const wizard = new Wizard("Malagant", 150, 300, ["Pointy Hat"], "Dark Staff")
const bartender = new Bartender("Moe", 220, 180, ["Apron", "Napkin"], "Crystal Mug")

const players = [warrior, wizard, bartender]

for (const player of players) player.speak("I am speaking")