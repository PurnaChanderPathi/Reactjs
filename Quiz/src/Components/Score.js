import { Box, Stack, Typography, } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom/dist';
import { useSelector } from 'react-redux';

function Score() {

    const [questions, setQuestions] = useState([]);
    const location = useLocation();

    const scores=useSelector(state=>state.Score)
     console.log(scores);

    const questionObject = location?.state?.results || {};
    const questionArray = Object.entries(questionObject).map(([key, response]) => ({ id: key, response })); // Convert object to array of objects
    console.log("questions", questionArray);
    function postRequestForSomething() {
        if (questionArray) {
            axios({
                method: 'post',
                url: `http://localhost:8081/questions/getScore`,
                data: questionArray,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*',
                },
            })
                .then((res) => setQuestions(res.data))
                .catch((error) => console.error("Error:", error));
            console.log(questions);
        }
    }
    useEffect(() => {
        postRequestForSomething();
    }, []);
    return (
        <div
            className='login_page'
            style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/notebooks-green-background-school-concept-flat-lay_169016-26565.jpg?w=900&t=st=1707209715~exp=1707210315~hmac=126e69c73de910591f53f4dba2a080eb2a2641c6e81c3f31d0fdb376e73b1b61')",
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

                        <Typography variant='h4'>Title :{scores[0].title}</Typography>
                        <Typography variant='h4'>Subject :{scores[0].subject}</Typography>
                        <Typography variant='h4'>Questions :{scores[0].numOfQues}</Typography>
                        <Typography variant='h4'>Your Score : {questions}</Typography>              
                    </Stack>
                </Box>
            </Box>
        </div>
    )
}



export default Score;
