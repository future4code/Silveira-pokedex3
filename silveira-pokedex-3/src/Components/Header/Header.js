import React from 'react'
import { ContainerHeader, Red, Black, White, SuportPokeball } from './styles'
import { ComponetPokeball } from '../Pokeball/Pokeball'

const Header = (props) => {
  return (
    <ContainerHeader>
      <Red></Red>
      <Black></Black>
      <SuportPokeball>
        <ComponetPokeball menu={props.menu} />
      </SuportPokeball>
      <White></White>
    </ContainerHeader>
  )
}

export default Header