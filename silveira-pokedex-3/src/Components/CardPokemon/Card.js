import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContainerCard } from './styleCard'
import { PokemonList } from '../Constants/contexts'

function Card() {
  const params = useContext(PokemonList)

  const arrayPokemons = params.allPokemons && params.allPokemons.map(pokemon => {

    return (
      <ContainerCard key={pokemon.order}>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.back_default} />

        <Link to='/pokemon/pokedexdetails'><button> Detalhes pokemon </button></Link>
        <button> Adicionar </button>
      </ContainerCard>
    )
  })

  return (
    <>
      {console.log(params.allPokemons)}
      {arrayPokemons}
    </>


  )
}

export default Card