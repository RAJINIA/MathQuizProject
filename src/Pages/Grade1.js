import React from 'react';
import Progress from './Progress';
import Questions from './Questions';
import Answers from './Answers';


function Grade1() {
    let[currentQuestion, setCurrentQuestion] = React.useState(0);
    let[currentAnswer, setCurrentAnswer] = React.useState('');
    let[answers, setAnswers] = React.useState([]);
    let[showResults, setShowResults] = React.useState(false);
    let[error, setError] = React.useState('');
    let questions = [
        {
            id: 1,
            question: "Select the even number below",
            answer_a: "6",
            answer_b: "9",
            answer_c: "7",
            answer_d: "13",
            correct_answer: "a",
        },
        {
            id: 2,
            question: "Which is greater 29 or 19 ?",
            answer_a: "9",
            answer_b: "19",
            answer_c: "29",
            answer_d: "None of the above",
            correct_answer: "c",
        },
        {
            id: 3,
            question: "Fill the comparison operator for 33 _____ 33 ",
            answer_a: ">",
            answer_b: "=",
            answer_c: "<",
            answer_d: "==",
            correct_answer: "b",
        },
        {
            id: 4,
            question: "6 tens and 8 ones = _____ ",
            answer_a: "6",
            answer_b: "68",
            answer_c: "86",
            answer_d: "8",
            correct_answer: "b",
        },
        {
            id: 5,
            question: "Complete the pattern 56, 52, 48, ____, 40, 36, 32 ",
            answer_a: "46",
            answer_b: "45",
            answer_c: "42",
            answer_d: "44",
            correct_answer: "d",
        },
    ];

    let question = questions[currentQuestion];

    function handleClick(event){
        setCurrentAnswer(event.currentTarget.value);
        setError('');
    }

    function renderError(){
        if (!error){
            return;
        }
        return <div className = "error">{error}</div>
    }

    function renderResultMark(question, answer) {
        if(question.correct_answer === answer.answer) {
            return <span className = "correct">&#9989;</span>;
        }
        return <span className = "failed">&#10060;</span>;
    }

    function renderResultsData() {
        return answers.map(answer => {
            let question = questions.find(
                question => question.id === answer.questionId
            );
            return (
                <div key = {question.id}>
                    {question.question}  - {renderResultMark(question, answer)}
                </div>
            );
        });
    }

    function restart(){
        setAnswers([]);
        setCurrentAnswer('');
        setCurrentQuestion(0);
        setShowResults(false);
    }

    function next(){
        let answer = {questionId:question.id, answer:currentAnswer};
        
        if (!currentAnswer) {
            setError("Please Select an option");
            return;
        }

        answers.push(answer);
        setAnswers(answers);
        setCurrentAnswer('');

        if (currentQuestion + 1 < questions.length){
            setCurrentQuestion(currentQuestion + 1);
            return;
        }
        setShowResults(true);
    }

    if (showResults) {
        return (
            <div className = "container results">
                <h2>Results</h2>
                    <ul>{renderResultsData()}</ul>
                <button className = "btn btn-primary" onClick = {restart}>Restart</button>
            </div>
        )
    } else {
        return(
            <div className = "container">
                <Progress total = {questions.length} current = {currentQuestion + 1}/>
                <Questions question = {question.question}/>
                {renderError()}
                <Answers question={question} currentAnswer={currentAnswer} handleClick={handleClick}/>
                <button className = "btn btn-primary" onClick = {next}>Confirm and Continue</button>
            </div>
        );
    }

    
}

export default Grade1;