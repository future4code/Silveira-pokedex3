import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContainerCard } from './styleCard'
import { PokemonList } from '../GlobalStates/contexts'

function Card() {
  const params = useContext(PokemonList)

  const arrayPokemons = params.allPokemons && params.allPokemons.map(pokemon => {
    return (
      <ContainerCard key={pokemon.order}>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites.other.dream_world.front_default} />
        <div>
          <Link to='/pokemon/pokedexdetails'><button> Detalhes pokemon </button></Link>
          <button> Adicionar </button>
        </div>

      </ContainerCard>
    )
  })
  return (
    <>
      {arrayPokemons}
    </>
  )
}

export default Card