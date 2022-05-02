import React from 'react'
import { Link } from 'react-router-dom'
import {ContainerCard} from './styleCard'

function Card() {
  return (
    <ContainerCard>
        <Link to='/pokemon/pokedexdetails'><button> Detalhes pokemon </button></Link>
        BatataBatataBatataBatataBatata
        
    </ContainerCard>
  )
}

export default Card