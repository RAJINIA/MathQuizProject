import React from 'react';
import {Link} from 'react-router-dom';

function MulLevel3() {
    let[response1, setResponse1] = React.useState(0);
    let[response2, setResponse2] = React.useState(0);
    let[response3, setResponse3] = React.useState(0);
    let[response4, setResponse4] = React.useState(0);
    let[response5, setResponse5] = React.useState(0);
    let[response6, setResponse6] = React.useState(0);
    let[response7, setResponse7] = React.useState(0);
    let[response8, setResponse8] = React.useState(0);
    let[response9, setResponse9] = React.useState(0);
    let[response10, setResponse10] = React.useState(0);

    let [score, setScore] = React.useState(0);
    let [message, setMessage] = React.useState('');

    let questions = [
        {
            que: 19 * 6,
            ans: 114
        },
        {
            que: 4 * 27,
            ans: 108
        },
        {
            que: 6 * 75,
            ans: 450
        },
        {
            que: 88 * 9,
            ans: 792
        },
        {
            que: 6 * 31,
            ans: 186
        },
        {
            que: 3 * 19,
            ans: 58
        },
        {
            que: 5 * 55,
            ans: 275
        },
        {
            que: 7 * 80,
            ans: 560
        },
        {
            que: 22 * 5,
            ans: 110
        },
        {
            que: 70 * 0,
            ans: 0
        },
    ];

    function userAnswer1(event){
        setResponse1(event.currentTarget.value)
    }
    function userAnswer2(event){
        setResponse2(event.currentTarget.value)
    }function userAnswer3(event){
        setResponse3(event.currentTarget.value)
    }function userAnswer4(event){
        setResponse4(event.currentTarget.value)
    }function userAnswer5(event){
        setResponse5(event.currentTarget.value)
    }function userAnswer6(event){
        setResponse6(event.currentTarget.value)
    }function userAnswer7(event){
        setResponse7(event.currentTarget.value)
    }function userAnswer8(event){
        setResponse8(event.currentTarget.value)
    }function userAnswer9(event){
        setResponse9(event.currentTarget.value)
    }function userAnswer10(event){
        setResponse10(event.currentTarget.value)
    }

    function checkAnswers(){
        let newScore = score;
            if(Number(response1) === questions[0].ans){
                newScore ++;
            } if(Number(response2) === questions[1].ans){
                newScore ++;
            } if(Number(response3) === questions[2].ans){
                newScore ++;
            } if(Number(response4) === questions[3].ans){
                newScore ++;
            } if(Number(response5) === questions[4].ans){
                newScore ++;
            } if(Number(response6) === questions[5].ans){
                newScore ++;
            } if(Number(response7) === questions[6].ans){
                newScore ++;
            } if(Number(response8) === questions[7].ans){
                newScore ++;
            } if(Number(response9) === questions[8].ans){
                newScore ++;
            } if(Number(response10) === questions[9].ans){
                newScore ++;
            } 
            setScore(newScore);
    }

    function appreciation(score){
        let quizmessage = ["Work Hard" , "Good Job", "Awesome!!"];
        if (score = 0 & score<=4){
            setMessage('work Hard');
        } else if (score >4 & score <7){
            setMessage('Good Job');
        } else {
            setMessage('Awesome!!');
        }
    }

    return(
        <div className = "quiz10">
            <h1>Level 3 Problems...</h1>
            <div className = "table-content">
            <table>
                    <tr>
                        <td>19 x 6</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer1} /></td>
                    </tr>
                    <tr>
                        <td>4 x 27</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer2}/></td>
                    </tr>
                    <tr>
                        <td>6 x 75</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer3}/></td>
                    </tr>  
                    <tr>
                        <td>88 x 9</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer4}/></td>
                    </tr>   
                    <tr>
                        <td>6 + 31</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer5}/></td>
                    </tr>  
                    <tr>
                        <td>3 x 19</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer6}/></td>
                    </tr>  
                    <tr>
                        <td>5 x 55</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer7}/></td>
                    </tr>  
                    <tr>
                        <td>7 x 80</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer8}/></td>
                    </tr> 
                    <tr>
                        <td>22 x 5</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer9}/></td>
                    </tr>   
                    <tr>
                        <td>70 x 0</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer10}/></td>
                    </tr>   
                </table>
            </div>

            <button onClick = {checkAnswers}>Submit Answers</button>
            <Link to = "/MulLevel4">Next Level</Link>
            <Link to = "/MulLevel2">Previous Level</Link>
            <div>
            <p>Your score is {score} out of {questions.length}</p>
            </div>
             
        </div>
    )
}

export default MulLevel3;