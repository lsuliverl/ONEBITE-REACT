import { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./css/ToDoList.css";

const ToDoList = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    };

    const filteredTodos = getFilteredData();

    return (
        <div className="List">
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력해주세요" />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <ToDoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
                })}
            </div>
        </div>
    );
};

export default ToDoList;
