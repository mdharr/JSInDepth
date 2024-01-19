const fetchJoke = async () => {
    const baseUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

    const response = await fetch(baseUrl)
    const json = await response.json()
    console.log(json.joke)
    return json
}

// fetchJoke()

const fetchAllCountries = async () => {
    const baseUrl = 'https://restcountries.com/v3.1/all'

    try {
        const response = await fetch(baseUrl)
        const countries = await response.json()
        const countryNames = countries.map(country => country.name.common)
        console.log(countryNames)
        return countryNames
    } catch (error) {
        console.error(`Oops. ${error}`)
    }
}

// fetchAllCountries()

const fetchCountry = async (countryName) => {
    const baseUrl = `https://restcountries.com/v3.1/name/${countryName}`

    try {
        const response = await fetch(baseUrl)
        const country = await response.json()
        console.log(country)
        return country
    } catch (error) {
        console.error(`I'm sorry. ${error}`)
    }
}

fetchCountry('Belize')