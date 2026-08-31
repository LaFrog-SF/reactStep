import './App.css'
import Profilecard from './components/profilecard/profilecard.tsx'
import Counter from './components/counter/counter.tsx'
import {useState} from "react";
import TodoList from "./components/todolist/todolist.tsx";
import TimeOfMyLife from "./components/timeofmylife/timeofmylife.tsx";
import Citation from "./components/citation/citation.tsx";
import Pokemon from './components/pokemon/pokemon.tsx';

function App() {

    const [count, setCount] = useState(0);
    const [limitReached, setLimitReached] = useState(false);

    function increaseCounter(){
        const newCount = count + 1;
        if(newCount > 10){
            setLimitReached(true);
        } else {
            setCount(newCount);
        }
    }
    function decreaseCounter(){
        if(count > 0){
            setCount(count - 1);
        }
    }

    return (
        <>
            <section>
                <Profilecard name="Henry" role="admin" avatarUrl="https://www.elysee.fr/emmanuel-macron"
                             isOnline={true}></Profilecard>
                <Profilecard name="Sandra" role="content" avatarUrl="" isOnline={true}></Profilecard>
                <Profilecard name="Henry" role="intérim" avatarUrl="" isOnline={false}></Profilecard>
            </section>
            <section>
                Actual Value: {count}
                <div>{limitReached && "Limit reached"}</div>
                <Counter count={count} changerCounter={increaseCounter} nameAction="Increase"></Counter>
                <Counter count={count} changerCounter={decreaseCounter} nameAction="Decrease"></Counter>
            </section>
            <section>
                <TodoList></TodoList>
            </section>
            <section>
                <TimeOfMyLife/>
            </section>
            <section>
                <Citation/>
            </section>
            <section>
                <Pokemon/>
            </section>

        </>
    )
}

export default App
