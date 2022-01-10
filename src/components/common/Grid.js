import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rightAnswer from '../../assets/correct-answer.mp3';
import wrongAnswer from '../../assets/wrong-answer.mp3';
import JSConfetti from 'js-confetti'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid({
    options,
    correctAnswer,
    nextQuestion,
    setResult,
    result
}) {
    const jsConfetti = new JSConfetti()
    const handleOptions = (option) => {
        if (correctAnswer === option) {
            setResult(result + 1);
            document.getElementById('correct-answer').play()
            jsConfetti.addConfetti({
                confettiNumber: 300,
                confettiColors: [
                    '#e91e63',
                    '#00bcd4',
                    '#9c27b0',
                    '#ffeb3b',
                    '#ff5722',
                    '#212121',
                    '#ffc107',
                    '#76ff03',
                    '#00e676',
                    '#cddc39'
                ],
            })
            toast.success("Right Answer", {
                autoClose: 2000,
            })
        }
        else {
            document.getElementById('wrong-answer').play()
            toast.error("Wrong Answer", {
                autoClose: 2000,
            })
        }
        nextQuestion()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <>
                <audio src={rightAnswer} id="correct-answer"></audio>
                <audio src={wrongAnswer} id="wrong-answer"></audio>
            </>
            <ToastContainer />
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ margin: 10 }}>
                    <Item
                        className='options-grid'
                        onClick={() => handleOptions(options)}>
                        {options}
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
