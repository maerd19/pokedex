import React, { useContext, useEffect } from "react";
import PokemonContext from "./../context/pokemonContext";
import Card from "./card/card";

const Lista = () => {
    // Extraer lista del context
    const { listaPokemon } = useContext(PokemonContext);

    useEffect(() => {

    }, [listaPokemon])

    return (
        <>
            {listaPokemon.length !== 0 ? (
                <>
                    <h1>Pokedex</h1>
                    {listaPokemon.map(x => (<Card data={x}/>))}
                </>
            ) : <h2>Pokedex vacio</h2>}
        </>
    );
};

export default Lista;