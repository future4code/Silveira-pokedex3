import React from 'react'
import { ContainerHeader, Red, Black, White, SuportPokeball } from './styledHeaderHomePage'
import { ComponetPokeball } from '../Pokeball/Pokeball'
import Logo from '../../Assets/Imagens/pokedexLogo.png'

const HeaderHomePage = () => {
  return (
    <ContainerHeader>
      <Red></Red>
      <Black><img src={Logo}/></Black>
      <SuportPokeball>
        <ComponetPokeball />
        
      </SuportPokeball>
      <White></White>
    </ContainerHeader>
  )
}

export default HeaderHomePage