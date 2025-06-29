import { useRef, useState } from "react";
import "./css/CreateToDo.css";

const CreateToDo = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeydown = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div className="CreateToDo">
            <input
                ref={contentRef}
                value={content}
                onKeyDown={onKeydown}
                onChange={onChangeContent}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default CreateToDo;
