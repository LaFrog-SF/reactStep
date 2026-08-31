import { useState, useEffect } from 'react';

export default function Citation() {

    const [quote, setQuote] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchQuote();
    }, []);

    function fetchQuote() {
        setIsLoading(true);
        fetch("https://api.chucknorris.io/jokes/random")
        .then(result => result.json())
        .then(data => {
            setQuote(data.value);
            setIsLoading(false);
        });
    }

    return (<>
        IsCitation loading: {isLoading ? "Oui" : "Non"}

        Citation: {quote}


        <button onClick={fetchQuote}>Call Chuck Norris</button>
        </>);
    }