import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../CardPokemon/Card'
import { PokemonList } from '../GlobalStates/contexts'



function MyPokeDex() {
  const params = useContext(PokemonList)

  return (
    <div>

      <Link to='/'><button> Home </button></Link>
      <Link to={-1}><button> Voltar </button></Link>

      <Card batata={`MyPokemons`} place={params.MyPokemons} />
    </div>
  )
}

export default MyPokeDex