import './style.css'
import { Link } from 'react-router-dom'

export const ComponetPokeball = <div id="container">
    <div className="pokewrap">
        <div className="top"></div>
        <div className="content">
            <Link to='/pokemon/pokedex'><button> Entrar! </button></Link>
        </div>
        <div className="bottom"></div>
    </div>
</div>