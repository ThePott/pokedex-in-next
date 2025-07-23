const getJson = async (url) => {
    const response = await fetch(url)
    if (!response.ok) { throw new Error("---- INVALID RESPONSE:", response) }

    const json = await response.json()

    return json
}

const getPokemon = async (index) => {
    try {

        const front = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
        const back = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`

        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${index}/`
        const speciesJson = await getJson(speciesUrl)

        const nameDict = speciesJson.names.find((el) => el.language.name === "ko")
        const name = nameDict.name

        const textDict = speciesJson["flavor_text_entries"].find((el) => el.language.name === "ko")
        const text = textDict["flavor_text"]

        return {front, back, name, text, pokemonIndex: index, doLike: false}

    } catch (error) {
        console.log("---- ERROR OCCURRED:", error)
    }

}

const getAllPokemon = async (setPokemonArray) => {
    const indexArray = [...Array(152).keys()]
    indexArray.shift()

    const promiseArray = indexArray.reduce((acc, index) => [...acc, getPokemon(index)], [])
    const pokemonArray = await Promise.all(promiseArray)
    setPokemonArray(pokemonArray)
}

export { getPokemon, getAllPokemon }