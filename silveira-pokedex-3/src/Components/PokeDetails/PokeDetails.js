import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokemonList } from '../GlobalStates/contexts'

const PokeDetails = () => {
   const params = useContext(PokemonList)
   // console.log(params.PokeDetails.stats[0].stat.name)





   return (
      <div>
         <Link to={-1}><button> Voltar </button></Link>
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
                              <div key={stats.name}>
                                 <p> {stats.stat.name}: {stats.base_stat} </p>
                              </div>
                           )
                        })}
                     </div>
                     <div>
                        <p>Types:</p>
                        {params.PokeDetails.types.map(stats => {
                           return (
                              <div key={stats.name}>
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
                              <div key={stats.name}>
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