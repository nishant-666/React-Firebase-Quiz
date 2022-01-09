import React from 'react';
import Select from './common/Select';
import Input from './common/Input';
import QuizDifficulty from './common/DifficultySelect';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Quiz() {
    const navigate = useNavigate()
    const [quizCount, setQuizCount] = React.useState('10');
    const [quizType, setQuizType] = React.useState('');
    const [quizDifficulty, setQuizDifficulty] = React.useState('easy');
    const [playerName, setPlayerName] = React.useState('');
    const handleChange = (event) => {
        setQuizType(event.target.value);
    };

    const handleDifficulty = (event) => {
        setQuizDifficulty(event.target.value);
    };

    const getPlayerName = (value) => {
        setPlayerName(value)
        localStorage.setItem('Playername', value)
    }

    const getQuiz = () => {
        if (playerName) {
            axios.get(
                `https://opentdb.com/api.php?amount=${quizCount}&difficulty=${quizDifficulty}&category=${quizType}`)
                .then((response) => {
                    navigate('/play',
                        {
                            state: {
                                quizData: response.data.results,
                                quizCount: quizCount,
                                quizType: quizType,
                                quizDifficulty: quizDifficulty
                            }
                        })
                })
        }
        else {
            toast.error(`Please Enter the Player's Name`)
        }
    }
    return (
        <div className='quiz-main'>
            <ToastContainer />
            <h1>React Quiz</h1>
            <TextField
                required
                style={{ marginBottom: 20 }}
                fullWidth
                id="outlined-basic"
                label="Enter Your Name"
                variant="outlined"
                onChange={(e) => getPlayerName(e.target.value)}
                value={playerName}
            />
            <Input
                setQuizCount={setQuizCount}
                quizCount={quizCount} />
            <Select
                quizType={quizType}
                handleChange={handleChange} />
            <QuizDifficulty
                quizDifficulty={quizDifficulty}
                handleChange={handleDifficulty}
            />

            <Button
                onClick={getQuiz}
                variant="contained"
                style={{ marginTop: 10, marginRight: 5 }}>
                GET QUIZ
            </Button>

            <Button
                onClick={() => navigate('/results')}
                variant="contained"
                style={{ marginTop: 10, marginLeft: 5 }}>
                CHECK LEADERBOARD
            </Button>
        </div>
    )
}
