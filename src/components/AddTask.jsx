import React, { useState } from 'react';

import "./AddTask.css";
import Button from './Button';

const AddTask = ({handleTaskAdittion}) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        //handle = lidar em inglês
        // console.log(e); usei para achar o valor de e, que estava em e.target.value
        setInputData(e.target.value);
    };

    const handleAddtaskClick = () => {
        if(inputData){
            handleTaskAdittion(inputData);
            setInputData(" ");
        }
    };

    return ( 
        <>
            <div className='add-task-container'>
                <input 
                    onChange={handleInputChange}
                    value={inputData}
                    className='add-task-input'
                    type="text"
                />
                <div className="add-task-button-container">
                    <Button onClick={handleAddtaskClick}>Adicionar</Button>
                </div>
            </div>
        </>
     );
}
 
export default AddTask;