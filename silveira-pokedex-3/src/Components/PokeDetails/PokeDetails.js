import React, { useContext, useEffect } from 'react'
import { PokemonList } from '../GlobalStates/contexts'
import Header from '../Header/Header'
import {Title, ContainerMaster} from '../PokeDetails/styledPokeDetails'


const PokeDetails = () => {
   const params = useContext(PokemonList)

   useEffect(() => params.setPage('PokeDetais'), [])

   return (
      <div>
         <Header />
         <ContainerMaster>
            {params.PokeDetails.name &&
               <div>
                  <div>
                     <h1>{params.PokeDetails.name}</h1>
                     <img src={params.PokeDetails.sprites.front_default} />
                     <img src={params.PokeDetails.sprites.back_default} />
                  </div>
                  <div>
                     <div>
                        <h1>Status:</h1>
                        {params.PokeDetails.stats.map(stats => {
                           return (
                              <div key={stats.stat.name}>
                                 <li> {stats.stat.name}: {stats.base_stat} </li>
                              </div>
                           )
                        })}
                     </div>
                     <div>
                        <h1>Types:</h1>
                        {params.PokeDetails.types.map(stats => {
                           return (
                              <div key={stats.type.name}>
                                 <li> {stats.type.name}</li>
                              </div>
                           )
                        })}
                     </div>
                     <div>
                        <h1>Moves:</h1>
                        {params.PokeDetails.moves.map((stats, index) => {
                           return (
                              index < 5 &&
                              <div key={stats.move.name}>
                                 <li> {stats.move.name}</li>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               </div>
            }
         </ContainerMaster>
      </div>
   )
}

export default PokeDetails