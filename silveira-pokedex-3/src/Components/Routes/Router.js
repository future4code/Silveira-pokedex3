import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import MyPokeDex from '../MyPokemons/MyPokemons'
import PokeDetails from '../PokeDetails/PokeDetails'
import Pokedex from '../Pokedex/Pokedex'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path='/pokemon/userpokedex' element={<MyPokeDex />} />
        <Route path='/pokemon/pokedexdetails' element={<PokeDetails />} />
        <Route path='/pokemon/pokedex' element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router