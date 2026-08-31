import {useState} from "react";
import type {Todo} from "../../model/todo.tsx";


export default function TodoList() {

    const [todos, setTodos] = useState<Todo[]>([]);

    function deleteTodoById(id: number) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function addTodo(todo: Todo) {
        setTodos([...todos, todo]);
    }

    function handleSubmit(formData: { get: (arg0: string) => any; }) {
        const title = formData.get("title");

        if (title) {
            addTodo({
                id: todos.length + 1,
                title: title,
                completed: false
            });
        }

    }

    function setCompleted(id: number) {
        setTodos(
            todos.map(
                todo => todo.id === id
                    ? {...todo, completed: true}
                    : todo
            )
        );
    }

    return (
        <>
            TodoList:
            {todos.map(todo => (
                <div key={todo.id}>
                    Title: {todo.title}
                    Is Completed: {todo.completed}
                    <input type="radio" name={`completed-${todo.id}`} checked={todo.completed}
                           onChange={() => setCompleted(todo.id)}/> Yes
                    <button onClick={() => deleteTodoById(todo.id)}>Delete</button>
                </div>
            ))}
            <form action={handleSubmit}>
                <label>
                    Title:
                    <input name="title"/>
                </label>
                <button type="submit">Add</button>
            </form>
        </>
    );
}