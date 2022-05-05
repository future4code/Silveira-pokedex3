import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContainerCard } from './styleCard'
import { PokemonList } from '../GlobalStates/contexts'

function Card(props) {
  const params = useContext(PokemonList)
  const arrayPokemons = params[`${props.property}`] && params[`${props.property}`].map((pokemon, index) => {
    return (
      <ContainerCard key={pokemon.order}>
        <p>{pokemon.name.toUpperCase()}</p>
        <img src={pokemon.sprites.other.dream_world.front_default} />
        <div>
          <Link to='/pokemon/pokedexdetails'>
            <button onClick={() => params.getPokemonDetails(pokemon.id, props.property)}> Detalhes pokemon </button>
          </Link>
          {props.property === 'PokemonsData' ?
            <button onClick={() => params.addOrRemoveToMyPokemons(pokemon.id, props.property)}> Adicionar </button>
            :
            <button onClick={() => params.addOrRemoveToMyPokemons(pokemon.id, props.property)}> Remover </button>}

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