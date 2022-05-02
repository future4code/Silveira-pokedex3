import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../CardPokemon/Card'

function Pokedex() {
  return (
    <div>
      

      <Link to='/pokemon/userpokedex'><button> Minha Pokedex </button></Link>
      <Card/>
    </div>
  )
}

export default Pokedex