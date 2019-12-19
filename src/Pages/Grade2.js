import React from 'react';
import Progress from './Progress';
import Questions from './Questions';
import Answers from './Answers';


function Grade2() {
    let[currentQuestion, setCurrentQuestion] = React.useState(0);
    let[currentAnswer, setCurrentAnswer] = React.useState('');
    let[answers, setAnswers] = React.useState([]);
    let[showResults, setShowResults] = React.useState(false);
    let[error, setError] = React.useState('');
    let questions = [
        {
            id: 1,
            question: "_____ = 700 + 70 + 9 ",
            answer_a: "779",
            answer_b: "79",
            answer_c: "700",
            answer_d: "9",
            correct_answer: "a",
        },
        {
            id: 2,
            question: "Which number sentence is incorrect?",
            answer_a: "28 + 35 = 63",
            answer_b: "63 - 35 = 28",
            answer_c: "35 + 28 = 63",
            answer_d: "28 - 35 = 63",
            correct_answer: "d",
        },
        {
            id: 3,
            question: "What would we add to 56 to total 100?",
            answer_a: "44",
            answer_b: "45",
            answer_c: "54",
            answer_d: "64",
            correct_answer: "a",
        },
        {
            id: 4,
            question: "What is the total when 7, 5 and 6 are added together ?",
            answer_a: "56",
            answer_b: "18",
            answer_c: "75",
            answer_d: "15",
            correct_answer: "b",
        },
        {
            id: 5,
            question: "What is 6 more than 3?",
            answer_a: "36",
            answer_b: "9",
            answer_c: "63",
            answer_d: "3",
            correct_answer: "b",
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

export default Grade2;