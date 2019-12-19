import React from 'react';
import {useHistory} from 'react-router-dom';
import SubLevel1 from './SubLevel1';
import SubLevel2 from './SubLevel2';
import SubLevel3 from './SubLevel3';
import SubLevel4 from './SubLevel4';
import SubLevel5 from './SubLevel5';

function Subtraction(){
    let[level, setLevel] = React.useState('');
    let history = useHistory();

    function handleLevelChange(event){
        setLevel(event.currentTarget.value);
    }

    function handleButton(event){
        if (level === "SubLevel1"){
            history.push('/SubLevel1');
        } else if(level === "SubLevel2"){
            history.push('/SubLevel2');
        } else if(level === "SubLevel3"){
            history.push('/SubLevel3');
        } else if(level === "SubLevel4"){
            history.push('/SubLevel4');
        } else {
            history.push('/SubLevel5');
        }
    }

   
    
    return(
        <div>
            <div className = "header">
                <h1>Select Levels For Subtraction Problems</h1>
                <p>The links below will generate a set of random math problems based on the LEVELS you choose </p>
                <p>Good Luck!</p>
                <p>Select the levels then click "Start Quiz"</p>
            </div>
            <div className = "table-content">
                <table>
                    <tr>
                        <td>
                            <label>Subtraction Levels</label>
                        </td>

                        <td>
                            <select value = {level} onChange = {handleLevelChange}>
                                <option value="Default">select Levels</option>
                                <option value="SubLevel1">Level 1</option>
                                <option value="SubLevel2">Level 2</option>
                                <option value="SubLevel3">Level 3</option>
                                <option value="SubLevel4">Level 4</option>
                                <option value="SubLevel5">Level 5</option>
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

export default Subtraction;