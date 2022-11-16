import React, { useState } from 'react';

const App = () => {

    // useState hooks for handling the state of the input field
    const [inputList, setInputList] = useState("buy apple");

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDo List</h1>
                    <input type="text" placeholder='Add a Items' onChange={itemEvent} />
                    <button> + </button>
                    <ol>
                        <li>{inputList}</li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;