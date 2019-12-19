import React from 'react';
import {useHistory} from 'react-router-dom';
import Grade1 from './Grade1';
import Grade2 from './Grade2';
import Grade3 from './Grade3';


function Addition(){
    let[grade, setGrade] = React.useState('');
    let history = useHistory();

    function handleGradeChange(event){
        setGrade(event.currentTarget.value);
    }

    function handleButton(event){
        if (grade === "Grade1"){
            history.push('/Grade1');
        } else if(grade === "Grade2"){
            history.push('/Grade2');
        } else {
            history.push('/Grade3');
        } 
    }
   
    return(
        <div>
            <div className = "header">
                <h1>Select Grades For Quiz Problems</h1>
                <p>The links below will generate a set of random math problems based on the GRADE you choose </p>
                <p>Good Luck!</p>
                <p>Select the grade then click "Start Quiz"</p>
            </div>
            <div className = "table-content">
                <table>
                    <tr>
                        <td>
                            <label>Grade</label>
                        </td>

                        <td>
                            <select value = {grade} onChange = {handleGradeChange}>
                                <option value="Default">select Levels</option>
                                <option value="Grade1">Grade 1</option>
                                <option value="Grade2">Grade 2</option>
                                <option value="Grade3">Grade 3</option>
                            </select>
                            
                        </td>

                        <td>
                        <button onClick = {handleButton}>Start Quiz</button>
                        </td>
                    </tr>
                    
                </table>
            </div>
        </div>
        
    )
}

export default Addition;