import React, { } from 'react'
import { Link } from 'react-router-dom'
import Card from '../CardPokemon/Card'
import Header from '../Header/Header'
import { PokedexContainerCards } from './styledPokedex'


function Pokedex() {

  return (
    <>
      <Header menu={false} />
      <PokedexContainerCards>
        <Card />
      </PokedexContainerCards>
    </>


  )
}

export default Pokedex