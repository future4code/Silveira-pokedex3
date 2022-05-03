import './style.css'
import {Link} from 'react-router-dom' 

export const ComponetPokeball = <div id="container">
    <div class="pokewrap">
        <div class="top"></div>
        <div class="content">
        <Link to='/pokemon/pokedex'><button> Entrar! </button></Link>
        </div>
        <div class="bottom"></div>
    </div>
</div>