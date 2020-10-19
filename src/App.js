import React from "react";
import Buscador from "./components/buscador";
import Preview from "./components/preview";
import Lista from "./components/lista";

import PokemonState from './context/pokemonState';

const App = () => {    
  return (
    <PokemonState>
      <div className="App">
        <Buscador />
        <Preview />
        <Lista />
      </div>
    </PokemonState>
  );
};

export default App;
