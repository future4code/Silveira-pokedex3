import axios from "axios";

const BaseUrl = 'https://pokeapi.co/api/v2/'

export const GetAllPokemons = (setAllPokenons, limit,) => {
    axios.get(`${BaseUrl}pokemon?limit=${limit}&offset=0`).then(response => {
        setAllPokenons(response.data.results)
    }).catch(err => {
        console.log(err.response.data)
    })
}

export const GetPokemonData = (name, array, setPokemonData) => {
    axios.get(`${BaseUrl}pokemon/${name}`).then(response => {
        array.push(response.data)
        array.length === 20 && setPokemonData(array)
    }).catch(err => {
        console.log(err.response.data)
    })
} 