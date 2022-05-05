import React, { useContext, useEffect } from 'react'
import { PokemonList } from '../GlobalStates/contexts'
import Header from '../Header/Header'

const PokeDetails = () => {
   const params = useContext(PokemonList)

   useEffect(() => params.setPage('PokeDetais'), [])

   return (
      <div>
         <Header />
         <div>
            {params.PokeDetails.name &&
               <div>
                  <div>
                     <p>{params.PokeDetails.name}</p>
                     <img src={params.PokeDetails.sprites.front_default} />
                     <img src={params.PokeDetails.sprites.back_default} />
                  </div>
                  <div>
                     <div>
                        <p>Status:</p>
                        {params.PokeDetails.stats.map(stats => {
                           return (
                              <div key={stats.stat.name}>
                                 <p> {stats.stat.name}: {stats.base_stat} </p>
                              </div>
                           )
                        })}
                     </div>
                     <div>
                        <p>Types:</p>
                        {params.PokeDetails.types.map(stats => {
                           return (
                              <div key={stats.type.name}>
                                 <p> {stats.type.name}</p>
                              </div>
                           )
                        })}
                     </div>
                     <div>
                        <p>Moves:</p>
                        {params.PokeDetails.moves.map((stats, index) => {
                           return (
                              index < 5 &&
                              <div key={stats.move.name}>
                                 <p> {stats.move.name}</p>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               </div>
            }
         </div>
      </div>
   )
}

export default PokeDetails