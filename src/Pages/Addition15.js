import React from 'react';

function Addition15() {
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
    let[response11, setResponse11] = React.useState(0);
    let[response12, setResponse12] = React.useState(0);
    let[response13, setResponse13] = React.useState(0);
    let[response14, setResponse14] = React.useState(0);
    let[response15, setResponse15] = React.useState(0);


    let [score, setScore] = React.useState(0);
    let [message, setMessage] = React.useState('');

    let questions = [
        {
            que: 9 + 6,
            ans: 15
        },
        {
            que: 4 + 7,
            ans: 11
        },
        {
            que: 6 + 5,
            ans: 11
        },
        {
            que: 8 + 9,
            ans: 17
        },
        {
            que: 6 + 1,
            ans: 7
        },
        {
            que: 9 + 9,
            ans: 18
        },
        {
            que: 3 + 5,
            ans: 8
        },
        {
            que: 6 + 0,
            ans: 6
        },
        {
            que: 2 + 7,
            ans: 9
        },
        {
            que: 0 + 0,
            ans: 0
        },
        {
            que: 9 + 5,
            ans: 14
        },{
            que: 7 + 3,
            ans: 10
        },{
            que: 8 + 8,
            ans: 16
        },{
            que: 6 + 3,
            ans: 10
        },{
            que: 4 + 3,
            ans: 7
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
    }function userAnswer11(event){
        setResponse11(event.currentTarget.value)
    }function userAnswer12(event){
        setResponse12(event.currentTarget.value)
    }function userAnswer13(event){
        setResponse13(event.currentTarget.value)
    }function userAnswer14(event){
        setResponse14(event.currentTarget.value)
    }function userAnswer15(event){
        setResponse15(event.currentTarget.value)
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
            } if(Number(response11) === questions[10].ans){
                newScore ++;
            } if(Number(response12) === questions[11].ans){
                newScore ++;
            } if(Number(response13) === questions[12].ans){
                newScore ++;
            } if(Number(response14) === questions[13].ans){
                newScore ++;
            } if(Number(response15) === questions[14].ans){
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
        <div className = "quiz15">
            <h1>15 Addition Problems...</h1>
            <div className = "table-content">
                <table>
                    <tr>
                        <td>9 + 6</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer1} /></td>
                    </tr>
                    <tr>
                        <td>4 + 7</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer2}/></td>

                    </tr>
                    <tr>
                        <td>6 + 5</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer3}/></td>
                    </tr>  
                    <tr>
                        <td>8 + 9</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer4}/></td>
                    </tr>   
                    <tr>
                        <td>6 + 1</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer5}/></td>
                    </tr>  
                    <tr>
                        <td>9 + 9</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer6}/></td>
                    </tr>  
                    <tr>
                        <td>3 + 5</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer7}/></td>
                    </tr>  
                    <tr>
                        <td>6 + 0</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer8}/></td>
                    </tr> 
                    <tr>
                        <td>2 + 7</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer9}/></td>
                    </tr>   
                    <tr>
                        <td>0 + 0</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer10}/></td>
                    </tr> 
                    <tr>
                        <td>9 + 5</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer11}/></td>
                    </tr> 
                    <tr>
                        <td>7 + 3</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer12}/></td>
                    </tr>   
                    <tr>
                        <td>8 + 8</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer13}/></td>
                    </tr> 
                    <tr>
                        <td>6 + 3</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer14}/></td>
                    </tr> 
                    <tr>
                        <td>4 + 3</td>
                        <td>=</td>
                        <td><input type="text" onChange = {userAnswer15}/></td>
                    </tr> 
                </table>
            </div>

            <button onClick = {checkAnswers}>Submit Answers</button>
            <div>
            <p>Your score is {score} out of {questions.length}</p>
            </div>
             
        </div>
    )
}

export default Addition15;