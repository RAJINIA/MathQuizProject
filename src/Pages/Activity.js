import React from 'react';

import {useHistory} from 'react-router-dom';
import Addition10 from './Addition10';
import Addition15 from './Addition15';
import Addition20 from './Addition20';
import Subtraction10 from './Subtraction10';
import Subtraction15 from './Subtraction15';
import Subtraction20 from './Subtraction20';
import Multiplication10 from './Multiplication10';
import Multiplication15 from './Multiplication15';
import Multiplication20 from './Multiplication20';

function Activity(){
    let[addition, setAddition] = React.useState('');
    let[subtraction, setSubtraction] = React.useState('');
    let[multiplication, setMultiplication] = React.useState('');
    let history = useHistory();

    function handleAdditionQuestionChange (event){
        setAddition(event.currentTarget.value);
    }

    function handleSubtractionQuestionChange(event){
        setSubtraction(event.currentTarget.value);
    }

    function handleMultiplicationQuestionChange(event) {
        setMultiplication(event.currentTarget.value);
    }

    function handleAdditionSubmitButton(event){
        if (addition === "10 Questions") {
            history.push('/Addition10');
        } else if (addition === "15 Questions") {
            history.push('/Addition15');
        } else {
            history.push('/Addition20');
        }
    }

    function handleSubtractionSubmitButton(event){
        if (subtraction === "10 Questions") {
            history.push('/Subtraction10');
        } else if (subtraction === "15 Questions") {
            history.push('/Subtraction15');
        } else {
            history.push('/Subtraction20');
        }
    }

    function handleMultiplicationSubmitButton(event){
        if (multiplication === "10 Questions") {
            history.push('/Multiplication10');
        } else if (multiplication === "15 Questions") {
            history.push('/Multiplication15');
        } else {
            history.push('/Multiplication20');
        }
    }

    return(
        
            <div>
                <div className = "activity-header">
                    <h1>Select your activity</h1>
                    <p>The links below will generate a set of random math problems based on the number you choose </p>
                    <p>Good Luck!</p>
                    <p>Select the operations and the number of problems then click "Start Quiz"</p>
                </div>

                <div className = "table-content">
                <table>                    
                    <tr>
                        <td>
                            <label>Addition</label>
                        </td>
                        <td>
                            <select value = {addition} onChange = {handleAdditionQuestionChange}>
                            <option value="Default">Select Questions</option>
                            <option value="10 Questions">10 Questions</option>
                            <option value="15 Questions">15 Questions</option>
                            <option value="20 Questions">20 Questions</option>
                        </select>
                        </td>
                        <td>
                            <button onClick = {handleAdditionSubmitButton}>Select Quiz</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Subtraction</label>
                        </td>
                        <td>
                            <select value = {subtraction} onChange = {handleSubtractionQuestionChange}>
                            <option value="Default">Select Questions</option>
                            <option value="10 Questions">10 Questions</option>
                            <option value="15 Questions">15 Questions</option>
                            <option value="20 Questions">20 Questions</option>
                        </select>
                        </td>
                        <td>
                            <button onClick = {handleSubtractionSubmitButton}>Select Quiz</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Multiplication</label>
                        </td>
                        <td>
                            <select value = {multiplication} onChange = {handleMultiplicationQuestionChange}>
                            <option value="Default">Select Questions</option>
                            <option value="10 Questions">10 Questions</option>
                            <option value="15 Questions">15 Questions</option>
                            <option value="20 Questions">20 Questions</option>
                        </select>
                        </td>
                        <td>
                            <button onClick = {handleMultiplicationSubmitButton}>Select Quiz</button>
                        </td>
                    </tr>
                    
                </table>
                </div>

            

        </div>
        

    )    
}

export default Activity;