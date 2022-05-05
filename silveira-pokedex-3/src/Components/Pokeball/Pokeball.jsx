import './style.css'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { PokemonList } from '../GlobalStates/contexts'

export const ComponetPokeball = () => {
    const parms = useContext(PokemonList)

    const navMenuSwitch = () => {
        switch (parms.Menu) {
            case 'home':
                return (
                    <div className='OpenPokebol'>
                        <Link to='/pokemon/pokedex'><button> Entrar! </button></Link>
                    </div>
                )
            case 'MyPoleDex':
                return (
                    <div className='OpenPokebol'>
                        <Link to='/'><button> Home </button></Link>
                        <Link to={-1}><button> Voltar </button></Link>
                    </div>
                )
            case 'PokeDetais':
                return (
                    <div className='OpenPokebol' >
                        <Link to={-1}><button> Voltar </button></Link>
                    </div>
                )
            default:
                return (
                    <div className='OpenPokebol'>
                        <Link to='/pokemon/userpokedex'><button> Minha Pokedex </button></Link>
                    </div>
                )
        }
    }

    return (
        <div id="container">
            <div className="pokewrap">
                <div className="top"></div>
                <div className="content">
                    {navMenuSwitch()}
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    )
}
