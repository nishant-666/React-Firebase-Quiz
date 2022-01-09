import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from './common/Card';
import { database } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import moment from 'moment';
export default function PlayQuiz() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [questionCounter, setQuesCounter] = useState(1);
    const [totalQuiz, setTotalQuiz] = useState(1);
    const [questionsArray, setQuesArray] = useState([]);
    const [quizType, setQuizType] = useState('');
    const [quizDifficulty, setQuizDifficulty] = useState('');
    const [result, setResult] = useState(0);
    const [playerName, setPlayerName] = useState('');
    const databaseRef = collection(database, 'Leader Board')
    React.useEffect(() => {
        const { quizData, quizCount, quizType, quizDifficulty } = state;
        setQuesArray(quizData)
        setTotalQuiz(quizCount)
        setQuizDifficulty(quizDifficulty)
        setQuizType(quizType)
        setPlayerName(localStorage.getItem('Playername'))
    }, [])

    const nextQuestion = () => {
        if (questionCounter < totalQuiz) {
            setQuesCounter(questionCounter + 1)
        }
    }

    const submitQuiz = () => {
        addDoc(databaseRef, {
            playerName: playerName,
            timeStamp: moment().format('LLL'),
            difficulty: quizDifficulty,
            category: questionsArray[0].category,
            finalScore: result
        })
        .then(() => {
            navigate('/results', {
                state: {
                    finalResults: result,
                }
            })
        })
    }
    return (
        <div>
            <h1>Play Quiz</h1>

            <h2>Question Number: {questionCounter}</h2>
            <h3>Difficulty Level: {quizDifficulty}</h3>
            <Card
                questionsArray={questionsArray}
                questionCounter={questionCounter}
                nextQuestion={nextQuestion}
                setResult={setResult}
                result={result}
            />
            {questionCounter === Number(totalQuiz) ? (
                <Button
                    onClick={submitQuiz}
                    variant="contained"
                    style={{ marginLeft: 10 }}>
                    Submit
                </Button>
            ) : (
                ""
            )}
        </div>
    )
}
