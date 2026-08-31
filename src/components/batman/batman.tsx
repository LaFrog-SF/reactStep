import { useEffect, useState } from "react";

export default function BatmanSearch() {

    const [query, setQuery] = useState("");
    const [episodes, setEpisodes] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (query.trim().length < 3) {
            setEpisodes([]);
            return;
        }

        const timer = setTimeout(() => {
            inputChange();
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, [query]);

    function inputChange() {
        setError(null);
        setIsLoading(true);
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(result => {
                if (!result.ok) throw new Error("Show not found");

                return result.json();
            })
            .then(data => setEpisodes(data))
            .catch(err => {
                setIsLoading(false);
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });

    }



    return (
        <> <h1>Shows</h1>
            <label>
                Nom du show:
                <input type="text" name="show" value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>
            Que pasta? {isLoading ? "Fréro calme toi ça arrive!" : "Rien ne se passe"}
        <div>

            {episodes.map((episode) => (
                <div key={episode.show.id}>
                    Title: {episode.show.name}
                </div>
            ))}

        </div>
        {error && <div>{error.message}</div>}   
        </>
    );
}