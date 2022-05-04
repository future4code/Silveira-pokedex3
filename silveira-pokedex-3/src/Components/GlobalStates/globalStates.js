import React, { useState, useEffect } from 'react';
import { PokemonList } from './contexts';
import { GetAllPokemons, GetPokemonData } from '../Services/service';

export const GlobalState = (props) => {
    const [Pokemons, setPokemons] = useState([])
    const [PokemonsData, setPokemonData] = useState([])
    const [Menu, setMenu] = useState('')
    const [MyPokemons, setMyPokemons] = useState([])
    const [PokeDetails, setPokemonDetails] = useState({})

    useEffect(() => GetAllPokemons(setPokemons, 20), [])

    const getData = () => {
        const array = []
        Pokemons.forEach(pokemon => {
            GetPokemonData(pokemon.name, array, setPokemonData)
        })
    }

    useEffect(() => { Pokemons.length > 0 && getData() }, [Pokemons])

    const setPage = page => setMenu(page)



    const addToMyPokemons = (id) => {
        const pokemon = PokemonsData.find(pokemon => {
            return pokemon.id === id
        })

        const newPokemons = [...MyPokemons, pokemon]
        setMyPokemons(newPokemons)

        const removePokemon = PokemonsData.filter(pokemon => {
            return pokemon.id !== id
        })

        setPokemonData(removePokemon)
    }

    const getPokemonDetails = (id, place) => {
        const pokemon = place.find(pokemon => {
            return pokemon.id === id
        })
        setPokemonDetails(pokemon)
    }

    const params = {
        PokemonsData,
        setPage,
        Menu,
        addToMyPokemons,
        MyPokemons,
        getPokemonDetails,
        PokeDetails,
    }

    return (
        <PokemonList.Provider value={params} >
            {props.children}
        </PokemonList.Provider>
    )
}

