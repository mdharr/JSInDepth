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

async function promptUser() {
    let searchAgain = true
    while(searchAgain) {
        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter a pokemon to fetch:"
            }
        ])
        const data = await fetchData(answers.name)
        console.log(data)
        const confirm = await inquirer.prompt([
            {
                type: "confirm",
                name: "searchAgain",
                message: "Do you want to search for another pokemon?"
            }
        ])
        searchAgain = confirm.searchAgain
    }
}

export { promptUser }