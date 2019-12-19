import React from 'react';
import {useHistory} from 'react-router-dom';
import MulLevel1 from './MulLevel1';
import MulLevel2 from './MulLevel2';
import MulLevel3 from './MulLevel3';
import MulLevel4 from './MulLevel4';
import MulLevel5 from './MulLevel5';

function Multiplication(){
    let[level, setLevel] = React.useState('');
    let history = useHistory();

    function handleLevelChange(event){
        setLevel(event.currentTarget.value);
    }

    function handleButton(event){
        if (level === "MulLevel1"){
            history.push('/MulLevel1');
        } else if(level === "MulLevel2"){
            history.push('/MulLevel2');
        } else if(level === "MulLevel3"){
            history.push('/MulLevel3');
        } else if(level === "MulLevel4"){
            history.push('/MulLevel4');
        } else {
            history.push('/MulLevel5');
        }
    }

   
    
    return(
        <div>
            <div className = "header">
                <h1>Select Levels For Multiplication Problems</h1>
                <p>The links below will generate a set of random math problems based on the LEVELS you choose </p>
                <p>Good Luck!</p>
                <p>Select the levels then click "Start Quiz"</p>
            </div>
            <div className = "table-content">
                <table>
                    <tr>
                        <td>
                            <label>Multiplication Levels</label>
                        </td>

                        <td>
                            <select value = {level} onChange = {handleLevelChange}>
                                <option value="Default">select Levels</option>
                                <option value="MulLevel1">Level 1</option>
                                <option value="MulLevel2">Level 2</option>
                                <option value="MulLevel3">Level 3</option>
                                <option value="MulLevel4">Level 4</option>
                                <option value="MulLevel5">Level 5</option>
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

export default Multiplication;