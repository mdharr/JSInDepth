/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemies (Flying Aliens)?
       * There are multiple different Aliens

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/

class Entity {
   type = "Entity"

   constructor(name, hp, speed, yPos, xPos, sprite) {
      this.name = name
      this.hp = hp
      this.speed = speed
      this.xPos = xPos
      this.yPos = yPos
      this.sprite = sprite
   }

   move() {

   }

   shoot() {

   }
}

class Player extends Entity {
   type = "Player"

   constructor(name, hp, speed, yPos, xPos, sprite) {
      super(name, hp, speed, yPos, xPos, sprite)
   }

   move() {

   }

   shoot() {

   }
}

class Enemy extends Entity {
   type = "Enemy"
   constructor(name, hp, speed, yPos, xPos, sprite) {
      super(name, hp, speed, yPos, xPos, sprite)
   }

   move() {

   }

   shoot() {

   }
}

class LargeInvader extends Enemy {
   constructor(name, hp, speed, yPos, xPos, sprite) {
      super(name, hp, speed, yPos, xPos, sprite)
   }

   move() {
      // slowest movement speed
   }

   shoot() {
      // highest damage shot
   }
}

class MediumInvader extends Enemy {
   constructor(name, hp, speed, yPos, xPos, sprite) {
      super(name, hp, speed, yPos, xPos, sprite)
   }

   move() {
      // medium movement speed
   }

   shoot() {
      // medium damage shot
   }
}

class SmallInvader extends Enemy {
   constructor(name, hp, speed, yPos, xPos, sprite) {
      super(name, hp, speed, yPos, xPos, sprite)
   }

   move() {
      // fastest movement speed
   }

   shoot() {
      // lowest damage shot
   }
}

class UFO extends Enemy {
   constructor(name, hp, speed, yPos, xPos, sprite) {
      super(name, hp, speed, yPos, xPos, sprite)
   }

   move() {
      // high movement speed
   }

   shoot() {
      // high damage shot
   }

   chargeUp() {
      // charge attack in preparation to use lasers
      // cancels charge if enough damage dealt
   }

   laserAttack() {
      // shoots lasers as special attack
   }
}