import axios from "axios";

const BaseUrl = 'https://pokeapi.co/api/v2/'

export const GetAllPokemons = (setAllPokenons, limit) => {
    axios.get(`${BaseUrl}pokemon?limit=${limit}&offset=0`).then(response => {
        setAllPokenons(response.data.results)
    }).catch(err => {
        console.log(err.response.data)
    })
}

export const GetPokemonData = (name, array, setPokemonData) => {
    axios.get(`${BaseUrl}pokemon/${name}`).then(response => {
        array.push(response.data)
        if (array.length === 20) {
            const orderedList = array.sort((a, b) => {
                return a.id - b.id
            })
            setPokemonData(orderedList)
        }
    }).catch(err => {
        console.log(err.response.data)
    })
} 