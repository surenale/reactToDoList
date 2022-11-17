import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

    // useState hooks for handling the state of the input field
    const [inputList, setInputList] = useState("");

    // creating empty array for storing the list using hooks
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        // updating the input field
        setInputList(event.target.value);
    };


    // while onClicking the button 
    const listOfItems = () => {
        // concatenating the old item in array and getting new item in array
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        // clearing the input field just clicking the add button
        setInputList("");

    }
    const deleteItems = (id) => {
        console.log("deleted");

        // deleting the items in list using filter 
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;

            });
        })
    }


    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDo List</h1>
                    <input type="text" placeholder='Add a Items' onChange={itemEvent}
                        value={inputList} />
                    <button onClick={listOfItems}> + </button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {
                            // map method is used for accesing the items of array
                            //it has four fields but we use value and corresponding index in this case 
                            items.map((itemVal, index) => {
                                return <ToDoList
                                    key={index}
                                    id={index}
                                    text={itemVal}
                                    onSelect={deleteItems}
                                />;
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;