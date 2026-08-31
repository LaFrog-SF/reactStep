type CounterProps = {
    changerCounter: () => void;
    nameAction: string;
}
export default function Counter({changerCounter, nameAction}: CounterProps) {
    return (
        <>
            <button onClick={changerCounter}>{nameAction}</button>
        </>
    )
}