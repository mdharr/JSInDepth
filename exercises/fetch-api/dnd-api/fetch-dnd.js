const fetchSpellbook = async () => {
    const baseUrl = 'https://www.dnd5eapi.co/api/spells/'
    const response = await fetch(`${baseUrl}`)
    const json = await response.json()
    return json
}

const fetchSpell = async (spellName) => {
    const baseUrl = `https://www.dnd5eapi.co/api/spells/${spellName}/`
    const response = await fetch(`${baseUrl}`)
    const json = await response.json()
    return json
}

const fetchMonsters = async () => {
    const baseUrl = 'https://www.dnd5eapi.co/api/monsters/'
    const response = await fetch(`${baseUrl}`)
    const json = await response.json()
    return json
}

const fetchMonster = async (monsterName) => {
    const baseUrl = `https://www.dnd5eapi.co/api/monsters/${monsterName}/`
    const response = await fetch(baseUrl)
    const json = await response.json()
    return json
}

const fetchClasses = async () => {
    const baseUrl = `https://www.dnd5eapi.co/api/classes/`
    const response = await fetch(baseUrl)
    const json = await response.json()
    return json
}

const fetchClass = async (className) => {
    const baseUrl = `https://www.dnd5eapi.co/api/classes/${className}/`
    const response = await fetch(baseUrl)
    const json = await response.json()
    return json
}

const fetchSubclass = async (className) => {
    const baseUrl = `https://www.dnd5eapi.co/api/classes/${className}/subclasses/`
    const response = await fetch(baseUrl)
    const json = await response.json()
    return json
}

const dndClasses = await fetchClasses()
const dndSpells = await fetchSpellbook()
const dndMonsters = await fetchMonsters()
const dndSubclass = await fetchSubclass()
// fetchSpell('delayed-blast-fireball')
// fetchMonster('wight')
// console.log(await fetchClass('wizard'))
// console.log(await fetchSubclass('warlock'))

export { fetchClasses, fetchSpellbook, fetchMonsters, fetchSubclass }