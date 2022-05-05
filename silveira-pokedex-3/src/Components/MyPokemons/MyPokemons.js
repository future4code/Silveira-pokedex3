import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../CardPokemon/Card'
import { ContainerMyPokemonsCards } from './styledMyPokemons'
import Header from '../Header/Header'
import { PokemonList } from '../GlobalStates/contexts'



function MyPokeDex() {
  const params = useContext(PokemonList)

  useEffect(() => params.setPage('MyPokeDex'), [])

  return (
    <div>
      <Header />
      <ContainerMyPokemonsCards>
        <Card property={`MyPokemons`} />
      </ContainerMyPokemonsCards>
    </div>
  )
}

export default MyPokeDex