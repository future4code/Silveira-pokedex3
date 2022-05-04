import React, { useEffect, useContext } from 'react'
import Card from '../CardPokemon/Card'
import Header from '../Header/Header'
import { PokedexContainerCards } from './styledPokedex'
import { PokemonList } from '../GlobalStates/contexts'


function Pokedex() {
  const parms = useContext(PokemonList)

  useEffect(() => parms.setPage('Pokedex'), [])

  return (
    <>
      <Header />
      <PokedexContainerCards>
        <Card />
      </PokedexContainerCards>
    </>
  )
}

export default Pokedex