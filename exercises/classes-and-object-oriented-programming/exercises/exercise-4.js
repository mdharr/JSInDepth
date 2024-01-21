/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/

class Player {
    lives = 3
    shotDelay = 2000
    totalScore = 0
    xPos
    yPos
    constructor(xPos, yPos) {
        this.xPos = xPos
        this.yPos = yPos
    }
    shoot() {

    }
}

class Enemy {
    hp = 1
    shotDelay = 9000
    xPos
    yPos
    score = 10
    constructor(xPos, yPos) {
        this.xPos = xPos
        this.yPos = yPos
    }
    shoot() {
        
    }
}

const spaceShip = new Player(500, 500)
console.log(spaceShip)

const enemy1 = new Enemy(10, 10)
console.log(enemy1)

