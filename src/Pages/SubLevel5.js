import React from 'react';
import {Link} from 'react-router-dom';

function SubLevel5() {
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
            que: 987 - 56,
            ans: 932
        },
        {
            que: 578 - 60 - 7,
            ans: 511
        },
        {
            que: 88 - 79,
            ans: 9
        },
        {
            que: 114 -  58 - 56,
            ans: 0
        },
        {
            que: 630 - 530,
            ans: 100
        },
        {
            que: 291 - 190,
            ans: 101
        },
        {
            que: 1000 - 999,
            ans: 1
        },
        {
            que: 163 - 5,
            ans: 158
        },
        {
            que: 222 - 222,
            ans: 0
        },
        {
            que: 801 - 1,
            ans: 800
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
            <h1>Level 5 Problems...</h1>
            <div className = "table-content">
                <table>
                    <tr>
                        <td>987 - 56</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer1} /></td>
                    </tr>
                    <tr>
                        <td>4578 - 60 - 7</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer2}/></td>

                    </tr>
                    <tr>
                        <td>88 - 79</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer3}/></td>
                    </tr>  
                    <tr>
                        <td>114 -  58 - 56</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer4}/></td>
                    </tr>   
                    <tr>
                        <td>630 - 530</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer5}/></td>
                    </tr>  
                    <tr>
                        <td>291 - 190</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer6}/></td>
                    </tr>  
                    <tr>
                        <td>1000 - 999</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer7}/></td>
                    </tr>  
                    <tr>
                        <td>163 - 5</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer8}/></td>
                    </tr> 
                    <tr>
                        <td>222 - 222</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer9}/></td>
                    </tr>   
                    <tr>
                        <td>801 - 1</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer10}/></td>
                    </tr>   
                </table>
            </div>

            <button onClick = {checkAnswers}>Submit Answers</button>
            <Link to = "/SubLevel4">Previous Level</Link>
            <div>
            <p>Your score is {score} out of {questions.length}</p>
            </div>
             
        </div>
    )
}

export default SubLevel5;