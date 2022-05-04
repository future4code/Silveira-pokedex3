import './style.css'
import { Link } from 'react-router-dom'

export const ComponetPokeball = (props) => {

    const navMenuSwitc = () => {
        switch (props.menu) {
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
