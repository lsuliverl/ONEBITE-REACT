import { useRef, useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo";
import CurrentDate from "./components/CurrentDate";
import ToDoList from "./components/ToDoList";

function App() {
    const [todos, setTodos] = useState([]);
    const idRef = useRef(0);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };
        setTodos([newTodo, ...todos]);
    };

    const onUpdate = (targetId) => {
        setTodos(
            todos.map((todo) =>
                todo.id === targetId
                    ? {
                          ...todo,
                          isDone: !todo.isDone,
                      }
                    : todo
            )
        );
    };

    const onDelete = (targetId) => {
        setTodos(todos.filter((todo) => todo.id !== targetId));
    };

    return (
        <div className="App">
            <CurrentDate />
            <CreateToDo onCreate={onCreate} />
            <h4>Todo List</h4>
            <ToDoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;
