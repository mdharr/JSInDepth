/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
       
    2. Make a request to: https://www.craigslist.org/about/
       and print out the resulting HTML (text) String, using Fetch
    3. Compare what you see in Node to visiting the actual page in
       your Browser - what matches up?
*/

// const fetchData = async function() {
//     const result = await fetch("https://www.craigslist.org/about/")
//     const html = await result.text()
//     console.log(html)
// }
// fetchData()



/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)

    2. Make a request to:
       https://jsonplaceholder.typicode.com/posts/1
       and print out the resulting JSON using Fetch
    
    BONUS: How does this differ from text content and what might
           fetch be doing with the JSON response for us?
*/


// const fetchData = async function() {
//     const result = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const json = await result.json()
//     console.log(json)
// }
// fetchData()




/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)

    2. Have a read through pokeapi.co

    2. Make a request to:
       https://pokeapi.co/api/v2/pokemon/pikachu
       and print out pikachu's "official-artwork"'s URL for
       their image (png). Visit this URL to make sure it works
       using your Browser.
    
    HINT: Be careful with the naming of the keys here when trying
          to access the parsed JSON
*/

// const fetchData = async function() {
//     const result = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     const json = await result.json()
//     console.log(json.sprites.other['official-artwork'].front_default)
// }

// fetchData()






/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
    2. Import "fs" from "fs/promises" which is built-in to NodeJS
       (Doesn't need an NPM install)

    3. Go to "wallhaven.cc" and find a wallpaper you like. Visit the
       wallpaper's page and right click the wallpaper and "open image
       in new tab" to you have just the image in a tab. The URL should
       end with .png or .jpg.
       Eg: https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png
    4. Use fetch to get this image, and parse it correctly. Then,
       use "fs" to write a file to your filesystem with the actual
       image itself so you can open it after you run the script.
       Note that these functions in fs return Promises.

    * This is purposefully challenging and will require lots of
      Googling to see how to parse the image and save it using Node.
*/


