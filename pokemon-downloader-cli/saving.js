import fs from "fs/promises"
import path from "path"

const createFolder = async (folderName) => {
    try {
        const dirPath = path.join(process.cwd(), folderName);
        await fs.mkdir(dirPath, { recursive: true })
        console.log(`Directory created at ${dirPath}`)
    } catch (error) {
        console.error(error)
    }
}

const saveImageFile = async (filePath, arrayBuffer) => {

}

const savePokemonStats = async (folderName, pokemonStatsObject) => {

}

const savePokemonSprites = async (folderName, pokemonSpritesObject) => {

}

const savePokemonArtwork = async (folderName, pokemonSpritesObject) => {

}

const parseOptions = async (pokemonObject, optionsObject) => {

}

createFolder('example')

export { parseOptions }