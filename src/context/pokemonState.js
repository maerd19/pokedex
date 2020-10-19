import React, { useReducer } from "react";
import PokemonContext from "./pokemonContext";
import PokemonReducer from "./pokemonReducer";

import axios from 'axios';

import { 
    REGISTRAR_POKEMON, 
    AGREGAR_POKEMON_LISTA, 
    ERROR_POKEMON, 
    ELIMINAR_ERROR,
    DESCARTAR_POKEMON,
    POKEMON_REPETIDO
} from "./../types";

const PokemonState = ({ children }) => {
  const initialState = {
    pokemonActual: null,
    listaPokemon: [],    
    error: false,
    mensaje: ''
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  // Buscar Pokemon
  const buscarPokemon = async nombrePokemon => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
        const respuesta = await axios.get(url);

        dispatch({
            type: REGISTRAR_POKEMON,
            payload: respuesta.data
        })
      } catch (err) {
        dispatch({
            type: ERROR_POKEMON,
            payload: true
        })
      }
  }

  // Almacenar Pokemon en State
  const guardarPokemon = () => {
    // Validar pokemon en pokedex
    let obj = state.listaPokemon.find(x => x.id === state.pokemonActual.id);
    if (obj) {
      dispatch({
        type: POKEMON_REPETIDO
      })  
    } else {
      dispatch({
        type: AGREGAR_POKEMON_LISTA,
        payload: state.pokemonActual
    })
    }    
  }

  // Eliminar error
  const eliminarError = () => {
      dispatch({
        type: ELIMINAR_ERROR,
        payload: false
      })
  }

  // Descartar Pokemon
  const descartar = () => {
    dispatch({
        type: DESCARTAR_POKEMON
      })
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemonActual: state.pokemonActual,
        listaPokemon: state.listaPokemon,
        error: state.error,
        mensaje: state.mensaje,
        buscarPokemon,
        guardarPokemon,
        eliminarError,
        descartar
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
