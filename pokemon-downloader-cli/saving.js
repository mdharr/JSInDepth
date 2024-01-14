import fs from "fs/promises"
import path from "path"

const createFolder = async (folderName) => {
    try {
        const dirPath = path.join(process.cwd(), folderName);
        await fs.mkdir(dirPath, { recursive: true })
        // console.log(`Directory created at ${dirPath}`)
        return dirPath
    } catch (error) {
        console.error(error)
    }
}

const saveImageFile = async (filePath, arrayBuffer) => {
    try {
        const buffer = Buffer.from(arrayBuffer)

        await fs.writeFile(filePath, buffer)
        // console.log(`Image saved to ${filePath}`)
    } catch (error) {
        console.error(error)
    }
}

const savePokemonStats = async (folderName, pokemonStatsObject) => {
    const filePath = path.join(folderName, 'stats.txt');

    let content = '';
    for (const stat of pokemonStatsObject.stats) {
        content += `${stat.stat.name}: ${stat.base_stat}\n`;
    }

    try {
        await fs.writeFile(filePath, content, 'utf8');
    } catch (error) {
        console.error('Error writing stats file:', error);
    }
};


const savePokemonSprites = async (folderName, pokemonSpritesObject) => {
    for (const key in pokemonSpritesObject) {
        const spriteUrl = pokemonSpritesObject[key];
        if (spriteUrl && typeof spriteUrl === 'string') {
            const response = await fetch(spriteUrl);
            const arrayBuffer = await response.arrayBuffer();
            const filePath = path.join(folderName, `${key}.png`);
            await saveImageFile(filePath, arrayBuffer);
        }
    }
}

const savePokemonArtwork = async (folderName, pokemonArtworkObject) => {
    for (const key in pokemonArtworkObject) {
        const artworkUrl = pokemonArtworkObject[key]
        if(artworkUrl && typeof artworkUrl === 'string') {
            const response = await fetch(artworkUrl)
            const arrayBuffer = await response.arrayBuffer()
            const filePath = path.join(folderName, `official_${key}.png`)
            await saveImageFile(filePath, arrayBuffer)
        }
    }
}

const parseOptions = async (pokemonObject, optionsObject) => {
    const folder = await createFolder(pokemonObject.name);
    for (const option of optionsObject.options) {
        if(option === "Stats") await savePokemonStats(folder, pokemonObject);
        if(option === "Sprites") await savePokemonSprites(folder, pokemonObject.sprites);
        if(option === "Artwork") await savePokemonArtwork(folder, pokemonObject.sprites.other['official-artwork']);
    }
}

export { parseOptions }