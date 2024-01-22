/*
    1. Copy your code over from your exercise-2 solution.

    2. Add another class called "Circle" that extends
       the "Shape" class.
    
    3. The "Circle" constructor will have two parameters:
       - colour
       - radius
       Call the super constructor with "colour"
       Assign "radius" to the instance of "Circle"
       Assign "Circle" to the "type" property

    4. Add an "area" method to "Circle" that will calculate
       and return the total area of the circle.
       (Area of a circle is: pi * radius * radius )
       * Lookup how to get the value for "pi" on Google/MDN

    5. Add a method to "Circle" called "describe" that
       will log out the following to the console:
       "A round and awesome ${this.colour} ${this.type}"

    6. Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       const circle = new Circle("green", 3);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       console.log( circle.area() ); // 28.27433
       for ( const shape of [square, rectangle, circle] ) {
        shape.describe();
       }
       // A blue square
       // A red rectangle
       // A round and awesome green circle
*/


class Shape {
   type = "Shape"

   constructor(color = "Transparent") {
      this.color = color
   }

   describe() {
      console.log(`A ${this.color} ${this.type}`)
   }
}

class Square extends Shape {
   type = "Square"

   constructor(color, sideLength) {
      super(color)
      this.sideLength = sideLength
   }

   area() {
      return this.sideLength**2
   }
}

class Rectangle extends Shape {
   type = "Rectangle"

   constructor(color, width, height) {
      super(color)
      this.width = width
      this.height = height
   }

   area() {
      return this.width * this.height
   }
}

class Circle extends Shape {
   type = "Circle"

   constructor(color, radius) {
      super(color)
      this.radius = radius
   }

   area() {
      return ((this.radius**2) * Math.PI).toFixed(5)
   }

   describe() {
      console.log(`A round and awesome ${this.color} ${this.type}`)
   }
}

const square = new Square("blue", 5)
const rectangle = new Rectangle("red", 5, 6)
const circle = new Circle("green", 3)
console.log( square.area() ) // 25
console.log( rectangle.area() ) // 30
console.log( circle.area() ) // 28.27433
for ( const shape of [square, rectangle, circle] ) {
 shape.describe()
}
// A blue square
// A red rectangle
// A round and awesome green circle