import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Score from './Score';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { add } from './scoreSlice';


function QuizSetup() {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [numOfQues, setNumOfQues] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const dispatch=useDispatch()
     const setQuizData = {
        title,
        subject,
        numOfQues
    };
     const addToScore=()=>{
        dispatch(add(setQuizData))
     }
   
     var title1=setQuizData.title
     var subject1=setQuizData.subject
     var numOfQues1=setQuizData.numOfQues
     console.log(title1,subject1,numOfQues1);
     


    
   // <Link to={`/componentB?param1=${value1}&param2=${value2}`}>Go to ComponentB</Link>
 

    console.log("setQuiz1", setQuizData);



    const submit = async () => {
        if (!title || !subject || !numOfQues) {
            setError('All fields are required.');
            return 
  
        }
        try {
            const response = await axios.get(`http://localhost:8080/QUESTION-SERVICE/questions/generate?categoryName=${subject}&numQuestions=${numOfQues}`);
            console.log("get Data", response.data);
            setTitle('')
            setSubject('')
            setNumOfQues('')
            setError('');
            navigate('/Quiz', { state: { questions: response.data } }
            );
        } catch (error) {
            console.error('Error fetching quiz data:', error);
            // Handle errors, e.g., display an error message to the user
        }
    };

    return (
        <div
            className='login_page'
            style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/school-accessories-light-green-background_23-2148224237.jpg?w=900&t=st=1707212956~exp=1707213556~hmac=69b16b83dea9788184cc302ce921588c14b65a9badc3404b7b51e3c956c37ff7')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '97vh',
                maxWidth: '100%',
                maxHeight: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        boxShadow: 5,
                        width: '600px',
                        height: '450px',
                        paddingTop: '30px',
                        backgroundColor: 'white',
                    }}
                >
                    <Stack spacing={2}>
                        <Typography variant='h5' fontFamily={'cursive'} alignSelf={'center'}>Start Quiz..</Typography>
                        <Stack spacing={2} direction='column'>

                            <TextField
                                id="outlined-basic"
                                label="Title"
                                value={title}
                                sx={{ width: '250px' }}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                >
                                    <MenuItem value='Java'>Java</MenuItem>
                                    <MenuItem value='Python'>Python</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Questions</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Questions"
                                    value={numOfQues}
                                    onChange={(e) => setNumOfQues(e.target.value)}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </FormControl>
                            {error && (
                                <Typography color="error">{error}</Typography>
                            )}
                            <Button
                                variant='contained'
                                sx={{ borderRadius: '30px', width: '150px', alignSelf: 'center' }}
                                onClick={() => { submit(); addToScore(); }}

                            >
                                Start
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </div>
    )
}

export default QuizSetup;
