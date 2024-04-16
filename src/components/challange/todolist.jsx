import React, {useState,useEffect} from 'react'

export default function Todolist() {
    const [list,setList]=useState({
        todo:["do so thing"]
    })
    const [inputValue, setInputValue] = useState("")
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            setList(prevState => ({
                ...prevState,
                todo: [...prevState.todo, inputValue]
            }));
            setInputValue('');
        }
    };
    const handleDelete = (index) => {
        setList(prevState => ({
            ...prevState,
            todo: prevState.todo.filter((_, i) => i !== index)
        }));
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                name='input'
                id='input'
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {list.todo.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
