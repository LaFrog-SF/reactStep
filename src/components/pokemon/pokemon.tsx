import { useState, useEffect } from 'react';

type PokemonData = {
    sprites: {
        front_default: string
    },
    name:string
    
}

export default function Pokemon(){

    const [pokemon, setPokemon] = useState<PokemonData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    // useEffect(() => {
    //     // Initial fetch or other side effects
    // }, []);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(result => {
           if (!result.ok) throw new Error("Pokémon introuvable");

           return result.json();
        })
        .then(data => setPokemon(data))
        .catch(err => {
            setIsLoading(false);
            setError(err);
        })
        .finally(() => {
            setIsLoading(false);
        });
        
    }

    return (<>
        <h1>Pokémon</h1>

        <form onSubmit={handleSubmit}>
        <label>
            Nom du Pokémon:
            <input type="text" name="name" />
            <input type="submit" value="Rechercher" />
        </label>

        </form>

        Que pasta? {isLoading ? "Fréro calme toi ça arrive!" : "Rien ne se passe"}
        <div>

            {pokemon && (<img src={pokemon?.sprites.front_default} alt={pokemon?.name} />)}

            
        </div>
            {error && <div>{error.message}</div>}
        </>);
}