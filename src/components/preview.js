import React, { useContext } from 'react';
import PokemonContext from "./../context/pokemonContext";
import Card from "./card/card";

const Preview = () => {
    // Extrar pokemon buscador recientemente del context
    const { pokemonActual, guardarPokemon, descartar } = useContext(PokemonContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        guardarPokemon();
      };

    return (
        <>
            {pokemonActual &&
                <>
                    <Card data={pokemonActual}/>
                    <form onSubmit={handleSubmit}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <input
                                type="submit"
                                value="Guardar..."
                            />

                            <input
                                type="submit"
                                value="Descartar..."
                                onClick={descartar}
                            />
                        </div>                                                
                    </form>
                </>
            } 
        </>
    );
};

export default Preview;