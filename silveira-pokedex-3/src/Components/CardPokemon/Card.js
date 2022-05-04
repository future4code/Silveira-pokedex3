import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContainerCard } from './styleCard'
import { PokemonList } from '../GlobalStates/contexts'

function Card(props) {
  const params = useContext(PokemonList)

  const arrayPokemons = params[`${props.batata}`] && params[`${props.batata}`].map(pokemon => {
    return (
      <ContainerCard key={pokemon.order}>
        <p>{pokemon.name.toUpperCase()}</p>
        <img src={pokemon.sprites.other.dream_world.front_default} />
        <div>
          <Link to='/pokemon/pokedexdetails'><button onClick={() => params.getPokemonDetails(pokemon.id)}> Detalhes pokemon </button></Link>
          <button onClick={() => params.addToMyPokemons(pokemon.id)}> Adicionar </button>
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