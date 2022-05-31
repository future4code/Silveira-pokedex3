import React, { useContext, useEffect } from 'react'
import { PokemonList } from '../GlobalStates/contexts'
import { HomePageContainer} from './styledHomePage'
import HeaderHomePage from '../HeaderHomePage/HeaderHomePage'


function HomePage() {
  const params = useContext(PokemonList)

  useEffect(() => params.setPage('home'), [])

  return (

    <HomePageContainer>


     <HeaderHomePage/>

     

    </HomePageContainer>

  )
}

export default HomePage