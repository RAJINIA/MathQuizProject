import React from 'react';
import {useHistory} from 'react-router-dom';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
import Level5 from './Level5';


function Addition(){
    let[level, setLevel] = React.useState('');
    let history = useHistory();

    function handleLevelChange(event){
        setLevel(event.currentTarget.value);
    }

    function handleButton(event){
        if (level === "Level1"){
            history.push('/Level1');
        } else if(level === "Level2"){
            history.push('/Level2');
        } else if(level === "Level3"){
            history.push('/Level3');
        } else if(level === "Level4"){
            history.push('/Level4');
        } else {
            history.push('/Level5');
        }
    }

   
    
    return(
        <div>
            <div className = "header">
                <h1>Select Levels For Addition Problems</h1>
                <p>The links below will generate a set of random math problems based on the LEVELS you choose </p>
                <p>Good Luck!</p>
                <p>Select the levels then click "Start Quiz"</p>
            </div>
            <div className = "table-content">
                <table>
                    <tr>
                        <td>
                            <label>Addition Levels</label>
                        </td>

                        <td>
                            <select value = {level} onChange = {handleLevelChange}>
                                <option value="Default">select Levels</option>
                                <option value="Level1">Level 1</option>
                                <option value="Level2">Level 2</option>
                                <option value="Level3">Level 3</option>
                                <option value="Level4">Level 4</option>
                                <option value="Level5">Level 5</option>
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