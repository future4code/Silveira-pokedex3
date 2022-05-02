import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../CardPokemon/Card'


function MyPokeDex() {
  return (
    <div>
      <Link to='/'><button> Home </button></Link>
      <Link to={-1}><button> Voltar </button></Link>
      <Card/>
    </div>
  )
}

export default MyPokeDex