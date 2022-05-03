// import Router from "./Components/Routes/Router";
import Card from './Components/CardPokemon/Card';
import {PokemonList} from './Components/Constants/contexts'

function App() {
  const objeto = {propriedade: 'qualquer coisa'}
  return (
  <div>
      <PokemonList.Provider value={objeto} >
      <Card/>
      </PokemonList.Provider>
      {/* <Router /> */}

 
    </div>
  );
}

export default App;
