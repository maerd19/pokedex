import { 
    REGISTRAR_POKEMON, 
    AGREGAR_POKEMON_LISTA, 
    ERROR_POKEMON, 
    ELIMINAR_ERROR,
    DESCARTAR_POKEMON,
    POKEMON_REPETIDO
} from "./../types";
  
  export default (state, action) => {
    switch (action.type) {
      case REGISTRAR_POKEMON:
        return {
          ...state,
          pokemonActual: action.payload,
          mensaje: ''
        };      
      case AGREGAR_POKEMON_LISTA:
        return {
          ...state,
          listaPokemon: [action.payload, ...state.listaPokemon],
          pokemonActual: null
        };
      case ERROR_POKEMON:
            return {
              ...state,
              error: action.payload
            };
    case ELIMINAR_ERROR:
        return {
            ...state,
            error: action.payload
        };
    case DESCARTAR_POKEMON:
        return {
            ...state,
            pokemonActual: null,
            mensaje: ''
        };
    case POKEMON_REPETIDO:
      return {
          ...state,
          mensaje: 'Ese pokemon ya esta en el Pokedex'
      };      
      default:
        return state;
    }
  };
  