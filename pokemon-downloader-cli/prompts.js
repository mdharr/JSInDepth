import inquirer from "inquirer";
import { parseOptions } from "./saving.js"

async function fetchData(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    try {
        const response = await fetch(url)
        const data = response.json()
        return data
    } catch (error) {
        console.error(error);
        return null
    }
}

async function promptForPokemon() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter a pokemon to fetch:"
        }
    ])
    const data = await fetchData(answers.name)
    console.log(data)
    return data
}

async function promptForDownloadInfo() {
    const options = await inquirer.prompt([
        {
            type: "checkbox",
            name: "options",
            message: 'What features do you want?',
            choices: [
                { name: 'Stats' },
                { name: 'Sprites' },
                { name: 'Artwork' }
            ]
        }
    ])
    return options
}

async function promptToContinue() {
    const confirm = await inquirer.prompt([
        {
            type: "confirm",
            name: "searchAgain",
            message: "Do you want to search for another pokemon?"
        }
    ])
    return confirm.searchAgain
}

async function promptUser() {
    let searchAgain = true
    while(searchAgain) {
        const pokemonObject = await promptForPokemon()
        console.log(pokemonObject)

        const optionsObject = await promptForDownloadInfo()
        console.log(optionsObject)

        if(optionsObject.options.length > 0) {
            await parseOptions(pokemonObject, optionsObject)
        }

        searchAgain = await promptToContinue()
    }
}

export { promptUser }