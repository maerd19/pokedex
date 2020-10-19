import React, { useState, useContext } from 'react';
import PokemonContext from "./../context/pokemonContext";

const Buscador = () => {
  // Extraer funcion buscar del context
  const { error, mensaje, eliminarError, buscarPokemon } = useContext(PokemonContext);
  
  const [pokemon, setPokemon] = useState({
    nombre: ""
  });

  const { nombre } = pokemon;

  const handleChange = (e) => {    
    if (error) eliminarError();
    setPokemon({ ...pokemon, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarPokemon(nombre.toLowerCase());
    // Reinicar form
    setPokemon({
      nombre: ""
    })
  };

    return (
        <div>
            <h1>Pokemon API</h1>
            <form onSubmit={handleSubmit}>
              <label style={{display: "flex", justifyContent: "center"}}>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"            
                  value={nombre}
                  onChange={handleChange}
                  placeholder="Nombre Pokemon"
              />

              <input
                  type="submit"
                  value="Buscar..."
                />
              </label>
            </form>

            {error && <h3>Quien es ese pokemon?</h3>}
            {mensaje.length !== 0 && <h3>{mensaje}</h3>}
        </div>
    );
};

export default Buscador;