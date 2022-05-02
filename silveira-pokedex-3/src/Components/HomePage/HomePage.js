import React from 'react'
import { Link } from 'react-router-dom'


function HomePage() {
  return (
    <div>
      
      <Link to='/pokemon/pokedex'><button> Entrar! </button></Link>
    </div>
  )
}

export default HomePage