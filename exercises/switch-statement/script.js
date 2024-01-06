/*
    1. Create a variable called "food" that points to the String "Donut"

    2. Create a series of if/else if/else statements that:
        - First checks for "food" being equal to "Fish" and console.logs
          "Sounds fishy..." if true
        - Then checks for "food" being equal to "Hummus" and console.logs
          "Want chips with that?" if true
        - Then checks for "food" being equal to "Sushi" and console.logs
          "With or without seaweed?" if true
        - Console.logs("Food not in our database, sorry!") in all other cases

    3. Run the program and make sure the correct things gets printed out, then
       change "food" to be "Sushi" and verify it still works as exected.

    4. Create a switch statement that does step 2 and then repeat step 3 to
       make sure it works the same as the if/else if/else statements
*/

const food = "Donut"

switch(food) {
    case "Fish": {
        console.log("Sounds fishy...")
        break
    }
    case "Hummus": {
        console.log("Want chips with that?")
        break
    }
    case "Sushi": {
        console.log("With or without seaweed?")
        break
    }
    default: {
        console.log("Food not in our database, sorry!")
        break
    }
}



/*
    1. Create a variable called "activities" that points at the Array:
       ["Swimming", "Hiking", "Rock Climbing", "Biking", "Running"]

    2. Create a loop that loops over "activities" and inside the loop
       use a switch statement that has these cases:
       - "Swimming": only print out "Like a fish!"
       - "Rock Climbing": only print out "Like a mountain goat!"
       - "Running": only print out "Like a cheetah!"
       - Otherwise only print out "I'm sure some animal does that..."

    3. Run the code and make sure the correct messages get printed out
*/




/*
    1. Create a variable called "enemies" that points at the Object:
       {
        rat: { atk: 3, def: 2, hp: 20, class: 1 },
        goblin: { atk: 10, def: 6, hp: 50, class: 1 },
        troll: { atk: 30, def: 20, hp: 200, class: 2 },
        giant: { atk: 50, def: 40, hp: 500, class: 2 },
       }

    2. Create a loop that loops over "enemies" and inside the loop use
       a switch statement on the "class" property that has these cases:
       - 1: print out only "This is an easy fight"
       - 2: print out only "This will require some training"
       - Otherwise only print out "Not implemented yet..."

    3. Run the code and make sure the correct messages get printed out
*/




/*
    1. Create a variable called "points" that points at the Array:
       [3, 4, 1, 0, 1, 5, 6]

    2. Create a loop that loops over "points" and inside the loop use
       a switch statement that has these cases:
       - 0-2: print out only "Good try!"
       - 3-5: print out only "Very well done!"
       - Otherwise only print out "Wow, shooting for the moon!"

    3. Run the code and make sure the correct messages get printed out
*/