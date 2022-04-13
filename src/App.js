import './App.css';
import {useState} from "react";

function App() {
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);


    const handleInput = (event) => {
        setValue(event.target.value);
    }

    const handleAddTask = (event) => {
        if (event.key === 'Enter'){
            setTasks([...tasks, value]);
            setValue('');
        }
    }

    return (
        <div className="App">
            <h1>Todo</h1>
            <input
                type='text'
                value={value}
                onChange={handleInput}
                onKeyUp={handleAddTask}
            />
            <h2>{value}</h2>
        </div>
    );
}

export default App;
