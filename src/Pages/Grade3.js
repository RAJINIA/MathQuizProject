import React from 'react';
import Progress from './Progress';
import Questions from './Questions';
import Answers from './Answers';


function Grade3() {
    let[currentQuestion, setCurrentQuestion] = React.useState(0);
    let[currentAnswer, setCurrentAnswer] = React.useState('');
    let[answers, setAnswers] = React.useState([]);
    let[showResults, setShowResults] = React.useState(false);
    let[error, setError] = React.useState('');
    let questions = [
        {
            id: 1,
            question: "_____ + 900 = 1800 ?",
            answer_a: "1800",
            answer_b: "0",
            answer_c: "900",
            answer_d: "90",
            correct_answer: "c",
        },
        {
            id: 2,
            question: "What is 54 / 9 ?",
            answer_a: "6",
            answer_b: "9",
            answer_c: "54",
            answer_d: "4",
            correct_answer: "a",
        },
        {
            id: 3,
            question: "What is 8 X 14 ?",
            answer_a: "8",
            answer_b: "14",
            answer_c: "112",
            answer_d: "211",
            correct_answer: "c",
        },
        {
            id: 4,
            question: "Which of the following calculations is correct ",
            answer_a: "4 x 4 = 16",
            answer_b: "4 + 4 + 4 = 16",
            answer_c: "3 = 4 = 16",
            answer_d: "4 + 4 + 4 + 4 + 4 = 16",
            correct_answer: "a",
        },
        {
            id: 5,
            question: "2 + 2 + 2 + 2 is same as",
            answer_a: "4 x 4",
            answer_b: "2 x 2",
            answer_c: "4 x 2",
            answer_d: "2 x 2 x 2 x 2",
            correct_answer: "c",
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
                    {question.question} - {renderResultMark(question, answer)}
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

export default Grade3;