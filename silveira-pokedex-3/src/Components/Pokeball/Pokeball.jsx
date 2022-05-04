import './style.css'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { PokemonList } from '../GlobalStates/contexts'

export const ComponetPokeball = () => {
    const parms = useContext(PokemonList)

    const navMenuSwitc = () => {
        switch (parms.Menu) {
            case 'home':
                return <Link to='/pokemon/pokedex'><button> Entrar! </button></Link>
            default:
                return <Link to='/pokemon/userpokedex'><button> Minha Pokedex </button></Link>
        }
    }

    return (
        <div id="container">
            <div className="pokewrap">
                <div className="top"></div>
                <div className="content">
                    {navMenuSwitc()}
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    )
}
