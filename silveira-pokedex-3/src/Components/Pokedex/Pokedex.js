import React, { useEffect, useContext } from 'react'
import Card from '../CardPokemon/Card'
import Header from '../Header/Header'
import { PokedexContainerCards, ContainerPokeDex } from './styledPokedex'
import { PokemonList } from '../GlobalStates/contexts'


function Pokedex() {
  const parms = useContext(PokemonList)

  useEffect(() => parms.setPage('Pokedex'), [])

  return (
    <ContainerPokeDex>
      <Header />
      <h2>Pokedex</h2>
      <PokedexContainerCards>
        <Card property={`PokemonsData`} />
      </PokedexContainerCards>
    </ContainerPokeDex>
  )
}

export default Pokedex