import React, { useContext, useEffect } from 'react'
import { PokemonList } from '../GlobalStates/contexts'
import Header from '../Header/Header'
import { SuperContainerMaster, ContainerMaster, Photo1, Photo2, Stats, Types, Moves } from '../PokeDetails/styledPokeDetails'


const PokeDetails = () => {
   const params = useContext(PokemonList)

   useEffect(() => params.setPage('PokeDetails'), [])

   return (
      <SuperContainerMaster>
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
                  <div>
                     <h3>Status:</h3>
                     {params.PokeDetails.stats.map(stats => {
                        return (
                           <div key={stats.stat.name}>
                              <li> <span>{stats.stat.name}</span>: {stats.base_stat} </li>
                           </div>
                        )
                     })}
                  </div>

               </Stats>
               <Types>
                  <h3>Types:</h3>
                  {params.PokeDetails.types.map(stats => {
                     return (
                        <div key={stats.type.name}>
                           <li> {stats.type.name}</li>
                        </div>
                     )
                  })}
               </Types>
               <Moves>
                  <h3>Moves:</h3>
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
      </SuperContainerMaster>
   )
}

export default PokeDetails