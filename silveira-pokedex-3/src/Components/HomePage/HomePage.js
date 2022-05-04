import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import { PokemonList } from '../GlobalStates/contexts'


function HomePage() {
  const params = useContext(PokemonList)

  useEffect(() => params.setPage('home'), [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default HomePage