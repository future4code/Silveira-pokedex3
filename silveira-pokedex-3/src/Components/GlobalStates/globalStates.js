import React, { useState, useEffect } from 'react';
import { PokemonList } from './contexts';
import { GetAllPokemons, GetPokemonData } from '../Services/service';

export const GlobalState = (props) => {
    const [Pokemons, setPokemons] = useState([])
    const [PokemonsData, setPokemonData] = useState([])
    // const [Menu, setMenu] = useState('')

    useEffect(() => GetAllPokemons(setPokemons, 20), [])

    const getData = () => {
        const array = []
        Pokemons.forEach(pokemon => {
            GetPokemonData(pokemon.name, array, setPokemonData)
        })
    }

    useEffect(() => { Pokemons.length > 0 && getData() }, [Pokemons])

    const params = {
        allPokemons: PokemonsData,
    }



    return (
        <PokemonList.Provider value={params} >
            {props.children}
        </PokemonList.Provider>
    )
}

