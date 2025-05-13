import React, { useState } from 'react';
import '../Style/Todoapp.css'
import logo from '../Image/to-do img.png'
const Todoapp = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleClick = () => {
        if (!name.trim()) return;

        if (editIndex !== null) {
            const updatedList = list.map((item, index) => index === editIndex ? name : item);
            setList(updatedList);
            setEditIndex(null);
        } else {
            setList([...list, name]);
        }

        setName("");
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setName(list[index]);
    };

    const handleDelete = (index) => {
        const filteredList = list.filter((_, i) => i !== index);
        setList(filteredList);
        if (editIndex === index) {
            setEditIndex(null);
            setName("");
        }
    };

    return (
        <div className='todo-container'>
            <div className='todo-main-container'>
                <div className='h1-logo-container'>
                    <h1>To-Do List</h1>
                    <img src={logo} alt='' />
                </div>
                <div className='input-container'>
                    <input
                        type="text"
                        value={name}
                        placeholder="Add your text"
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>
                        {editIndex !== null ? "Update" : "Submit"}
                    </button>
                </div>
                <ul className='list-container'>
                    {list.map((item, index) => (
                        <li key={index}>
                            <div className='item'>{item}</div>
                            <div className='list-btns'>
                                <button onClick={() => handleEdit(index)} className='btn1'>Edit</button>
                                <button onClick={() => handleDelete(index)} className='btn2'>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todoapp;
