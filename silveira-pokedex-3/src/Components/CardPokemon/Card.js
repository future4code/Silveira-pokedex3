import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {ContainerCard} from './styleCard'
import {PokemonList} from '../Constants/contexts'

function Card() {
const objeto = useContext(PokemonList) 

  return (
    <ContainerCard>
      {console.log(objeto)}
       {/* <p>{objeto.propriedade}</p> */}
      <p>Nome do Pokemon</p>
     <img />
        <Link to='/pokemon/pokedexdetails'><button> Detalhes pokemon </button></Link>
        <button> Adicionar </button>    
    </ContainerCard>
  )
}

export default Card