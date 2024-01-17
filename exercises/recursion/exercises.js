/*
    1. Create a function called "fizzbuzz" that takes two
       number arguments: "startNum" and "endNum"
    2. The function will count from "startNum" to the "endNum"
       incrementing by 1 each time and do the following:
    3. If the number is:
       - Divisible by 3: Print "Fizz" followed by the number
       - Divisible by 5: Print "Buzz" followed by the number
       - Divisible by both 3 AND 5:
         - Print "FizzBuzz" followed by the number (no fizz or buzz)
       - In all other cases, just print the number itself
        
    3. You must solve this using recursion
    4. Test it with different start and end values

    HINT: What is the base-case vs the "regular" cases here?
*/




/*
    1. Create a function called "palindrome" that will take
       a single String as an argument

    2. The function will return true if the String is a palindrome
       or false if it's not

    3. A String is a palindrome if it reads the same start-end
       as it does end-start

    4. Examples of palindromes:
       - racecar
       - level
       - mom
       - kayak

    5. Solve this using recursion instead of loops

    HINT: What are the base-cases? (I thought of 4)
*/




/*
    1. Create a function called "flatten" that will take
       a single Array as an argument

    2. The function will return a flattened version of the Array
       no matter the nested levels

    3. Solve this using recursion

    Examples:    
        console.log(flatten([1, 2, 3]));
        // [ 1, 2, 3 ]

        console.log(flatten([1, 2, 3, [1, 2, 3]]));
        // [ 1, 2, 3, 1, 2, 3 ]

        console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
        // [1, 4, 5, 6, 7,8, 9, 2, 3]

    HINT: Look up "how to check if something is an Array in js"
          on Google/MDN
    HINT2: What are the base-cases and what do we want to return?
*/




/*
    1. Create a function called "flatten" that will take
       a single Object as an argument

    2. The function will return a flattened version of the Object
       no matter the nested levels (it will overwrite duplicate keys)

    3. Solve this using recursion

    Example:    
        
    console.log(
    flatten({
        id: 1,
        name: "bob",
        happy: true,
        friend: {
        id2: 2,
        name2: "alice",
        happy2: true,
        },
    })
    );

    // {
    //     id: 1,
    //     name: 'bob',
    //     happy: true,
    //     id2: 2,
    //     name2: 'alice',
    //     happy2: true
    // }

    HINT: Use the "typeof" operator to check if something
          is an Object (naiive check, no need to be 100%)
    HINT2: The "delete" operator will delete a key from an Object
*/




/*
    1. Create a function called "constructDOM" that takes a single
       Object as it's argument.

    2. The Object passed in simulates a simple DOM Object from the
       Browser. Each Node has 3 possible properties:
       - childNodes (Array of Nodes)
       - nodeName (String - Type/Name of the Node, eg: p, div, h1)
       - innerText (String - Actual Content in between the node tags)
    
    3. Use recursion to re-construct the HTML in the correct order
       given the DOM Object passed in and all the children inside.
    
    * You can assume if a Node has "innerText" that it's a Child
      node (no further childNodes under it)
    * You can also assume that all tags have a start and end tag
      Eg: <p> _innerText_content_in_here_ </p>
    * Do not worry about the indentation/spacing, the result String
      should all be on one line/single string

    Example:
    // console.log(constructDOM(document));
    // (on one line, no indents, the spacing is for clarity):
    // <html>
    //   <head>
    //     <script>console.log('hi');</script>
    //   </head>
    //   <body>
    //     <ul>
    //       <li>
    //         <b>Home</b>
    //       </li>
    //       <li>Blog</li>
    //       <li>About</li>
    //     </ul>
    //     <div>
    //       <h1>My Blog</h1>
    //       <p>Welcome to my blog!</p>
    //     </div>
    //   </body>
    // </html>

*/

// const document = {
//     childNodes: [
//       {
//         nodeName: "html",
//         childNodes: [
//           {
//             nodeName: "head",
//             childNodes: [
//               {
//                 nodeName: "script",
//                 innerText: "console.log('hi');",
//               },
//             ],
//           },
//           {
//             nodeName: "body",
//             childNodes: [
//               {
//                 nodeName: "ul",
//                 childNodes: [
//                   {
//                     nodeName: "li",
//                     childNodes: [
//                       {
//                         nodeName: "b",
//                         innerText: "Home",
//                       },
//                     ],
//                   },
//                   {
//                     nodeName: "li",
//                     innerText: "Blog",
//                   },
//                   {
//                     nodeName: "li",
//                     innerText: "About",
//                   },
//                 ],
//               },
//               {
//                 nodeName: "div",
//                 childNodes: [
//                   {
//                     nodeName: "h1",
//                     innerText: "My Blog",
//                   },
//                   {
//                     nodeName: "p",
//                     innerText: "Welcome to my blog!",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   }