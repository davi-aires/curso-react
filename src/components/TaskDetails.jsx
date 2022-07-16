import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Button from './Button';
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handeTaskHomeClick = () => {
        history.goBack(); // === push('/')
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handeTaskHomeClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Totam, numquam nihil? Debitis accusamus veniam voluptatem.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;