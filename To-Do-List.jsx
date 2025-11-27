import React, { useState } from "react";

function todolist() {

    const [tasks, settasks] = useState([]);
    const [newtask, setnewtask] = useState("");

    function handleinputchange(event) {
        setnewtask(event.target.value);

    }

    function addtask() {
        if (newtask.trim() !== "") {
            settasks(t => [...t, newtask]);
            setnewtask("");
        }
    }

    function removetask(index) {
        const updatedtask = tasks.filter((_, i) => i !== index);
        settasks(updatedtask);
    }

    function taskup(index) {
        if (index > 0) {
            const updatedtask = [...tasks];
            [updatedtask[index], updatedtask[index - 1]] = [updatedtask[index - 1], updatedtask[index]];
            settasks(updatedtask);
        }
    }

    function taskdown(index) {
        if (index < tasks.length - 1) {
            const updatedtask = [...tasks];
            [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index]];
            settasks(updatedtask);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter your Task"
                    value={newtask}
                    onChange={handleinputchange}>
                </input>
                <button
                    className="Add-btn"
                    onClick={addtask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span>{task}</span>
                        <button
                            className="delete-btn"
                            onClick={() => removetask(index)}>Delete
                        </button>
                        <button
                            className="move-btn"
                            onClick={() => taskup(index)}
                        >👆</button>
                        <button
                            className="move-btn"
                            onClick={() => taskdown(index)}
                        >👇</button>
                    </li>
                )}
            </ol>
        </div>
    );

}

export default todolist