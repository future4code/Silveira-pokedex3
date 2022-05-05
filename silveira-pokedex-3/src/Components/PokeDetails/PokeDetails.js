import React, { useContext, useEffect } from 'react'
import { PokemonList } from '../GlobalStates/contexts'
import Header from '../Header/Header'
import {ContainerMaster, Photo1, Photo2, Stats, Types, Moves } from '../PokeDetails/styledPokeDetails'


const PokeDetails = () => {
   const params = useContext(PokemonList)

   useEffect(() => params.setPage('PokeDetais'), [])

   return (
      <div>
         <Header />
         <h1>{params.PokeDetails.name}</h1>
         
            {params.PokeDetails.name &&
               <ContainerMaster>
                  
                     <Photo1>
                        <img src={params.PokeDetails.sprites.front_default} />
                     </Photo1>
                     <Photo2>
                        <img src={params.PokeDetails.sprites.back_default} />
                     </Photo2>
                  
                  
                     <Stats>
                        <h1>Status:</h1>
                        {params.PokeDetails.stats.map(stats => {
                           return (
                              <div key={stats.stat.name}>
                                 <li> {stats.stat.name}: {stats.base_stat} </li>
                              </div>
                           )
                        })}
                     </Stats>
                     <Types>
                        <h1>Types:</h1>
                        {params.PokeDetails.types.map(stats => {
                           return (
                              <div key={stats.type.name}>
                                 <li> {stats.type.name}</li>
                              </div>
                           )
                        })}
                     </Types>
                     <Moves>
                        <h1>Moves:</h1>
                        {params.PokeDetails.moves.map((stats, index) => {
                           return (
                              index < 5 &&
                              <div key={stats.move.name}>
                                 <li> {stats.move.name}</li>
                              </div>
                           )
                        })}
                     </Moves>
                  
               </ContainerMaster>
            }
        
      </div>
   )
}

export default PokeDetails