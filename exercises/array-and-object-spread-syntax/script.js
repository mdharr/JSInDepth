/*
    1. Create an variable called "points" that points at this array:
       [10, 15, 20, 30, 5]

    2. Create another variable called "pointsCopy" that creates a
       copy of "points" using the spread operator, but also adds
       2 extra values at the end: 50 and 75

    3. Print out both "pointsCopy" and "points"
*/







/*
    1. Create an variable called "views" that points at this array:
       [ [5, 10, 20], [10, 20, 30] ]

    2. Create another variable called "viewsCopy" that creates a
       copy of "views" using the spread operator

    3. Print out "views" and "viewsCopy"

    4. Add the number 40 to the end of the second array inside "viewsCopy"
       and delete the last number (20) inside the first array

    5. Add the array [100, 200] to the end of "viewsCopy"

    6. Print out "views" and "viewsCopy"

    *Explain this behaviour
*/









/*
    1. Create a variable called "animal" that points at this Object:
        { name: "Koala", kingdom: "Australia", cute: true, 
          friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] }

    2. Create a variable called "koala" that points at a COPY of
       "animal" using the spread operator for Objects, but add the
       following property as well: "tail": false 

    3. Print out both "animal" as well as "koala"

    4. Change "cute" to be false inside of "animal". Print out both
       "animal" and "koala" again and observe the change. Does this
       make sense?

    5. Add a "cute" property initialized to be false inside of the
       "kangaroo" object, inside of the "friends" array in "animal".
       Print out both "animal" and "koala" again and observe the change.
       Does this make sense?
*/








/*
    1. Create a variable called "superhero" that points at this Object:
        {   name: "Bruce Wayne", alias: "Batman", universe: "DC",
            happy: false, enemies: ["Joker", "Catwoman", "Bane"],
            bestMovie: {title: "The Dark Knight", rating: 95}   }

    2. How would you create a COPY of the Object pointed to by
       "superhero" INCLUDING COPIES of "enemies" and "bestMovie".

    3. Once you've created a total copy, modify the following:
       - add "Poison Ivy" to the copy's array of "enemies"
       - add { year: 2008 } to the copy's "bestMovie" Object

    4. Print out both "superhero" and it's copy to ensure that
       "superhero"'s "enemies" and "bestMovie" were NOT modified.

    *This can be done MANY different ways but is also quite challenging!
*/