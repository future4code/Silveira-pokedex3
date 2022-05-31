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

    const addOrRemoveToMyPokemons = (id, property) => {
        const dataSource = {
            PokemonsData: [PokemonsData, setPokemonData, MyPokemons, setMyPokemons],
            MyPokemons: [MyPokemons, setMyPokemons, PokemonsData, setPokemonData]
        }

        const pokemon = dataSource[`${property}`][0].find(pokemon => {
            return pokemon.id === id
        })

        const newPokemons = [...dataSource[`${property}`][2], pokemon]

        dataSource[`${property}`][3](newPokemons)

        const removePokemon = dataSource[`${property}`][0].filter(pokemon => {
            return pokemon.id !== id
        })

        dataSource[`${property}`][1](removePokemon)
    }

    const getPokemonDetails = (id, property) => {
        const dataSource = { PokemonsData, MyPokemons }
        const pokemon = dataSource[`${property}`].find(pokemon => {
            return pokemon.id === id
        })

        setPokemonDetails([pokemon, property])
    }

    const params = {
        PokemonsData,
        setPage,
        Menu,
        addOrRemoveToMyPokemons,
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

