import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Box, Button, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom/dist';

function Quiz({setQuizData}) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    console.log("setQuiz",setQuizData)

    const location = useLocation();
    const question = location?.state?.questions || [];
    // const titleName = location?.state?.TitleName;
    // console.log("TitleName",titleName)
    console.log("ques", question);

    const navigate = useNavigate();
    function postRequestForSomething() {
        if (question) {
            axios({
                method: 'post',
                url: `http://localhost:8081/questions/getQuestions`,
                data: question,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*',
                },

            })
                .then((res) => setQuestions(res.data))
                .catch((error) => console.error("Error:", error));
        }
    }

    useEffect(() => {
        postRequestForSomething();
    }, []);

    const handleNextQuestion = () => {
        const validationRes = validate();
        if (validationRes) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        const validationRes = validate();
        if (validationRes) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setResponses((prevResponses) => ({
            ...prevResponses,
            [currentQuestion.id]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [currentQuestion.id]: null, // Clear error for the current question
        }));
    };

    const validate = () => {
        const currentQuestion = questions[currentQuestionIndex];
        const response = responses[currentQuestion.id];
        if (!response) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [currentQuestion.id]: 'Please select an option.',
            }));
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        // Check if all questions have been answered
        const allQuestionsAnswered = questions.every(q => responses[q.id]);
        if (allQuestionsAnswered) {
            console.log("All questions answered:", responses);
            navigate('/Score', { state: { results: responses } });
            // Perform further actions, such as submitting responses to the server
        } else {
            // Display an error message for unanswered questions
            const newErrors = {};
            questions.forEach(q => {
                if (!responses[q.id]) {
                    newErrors[q.id] = 'Please select an option.';
                }
            });
            setErrors(newErrors);
        }
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div
            className='login_page'
            style={{
                backgroundImage:
                    "url('https://img.freepik.com/free-photo/ready-back-school_1134-12.jpg?w=900&t=st=1707209744~exp=1707210344~hmac=c74f5e3eb25f1a965f9358ea439e792fe188197cd6603387aa5a9b1c9493ca0a')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '97vh',
                maxWidth: '100%',
                maxHeight: '100%',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', boxShadow: 5, width: '600px', height: '450px', paddingTop: '30px', backgroundColor: 'white' }}>
                    <div style={{ padding: '15px' }}>
                        <h2>{currentQuestion.questionTitle}</h2>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                            onChange={handleOptionChange}
                            value={responses[currentQuestion.id] || ''}
                        >
                            <FormControlLabel value={currentQuestion.option1} control={<Radio />} label={currentQuestion.option1} />
                            <FormControlLabel value={currentQuestion.option2} control={<Radio />} label={currentQuestion.option2} />
                            <FormControlLabel value={currentQuestion.option3} control={<Radio />} label={currentQuestion.option3} />
                            <FormControlLabel value={currentQuestion.option4} control={<Radio />} label={currentQuestion.option4} />
                        </RadioGroup>
                        {errors[currentQuestion.id] && (
                            <FormHelperText error>{errors[currentQuestion.id]}</FormHelperText>
                        )}
                        {currentQuestionIndex !== 0 && (
                            <Button variant='contained' onClick={handlePreviousQuestion} sx={{ marginRight: '10px' }}>Previous Question</Button>
                        )}
                        {currentQuestionIndex < questions.length - 1 && (
                            <Button variant='contained' onClick={handleNextQuestion}>Next Question</Button>
                        )}
                        {currentQuestionIndex === questions.length - 1 && (
                            <Button variant='contained' onClick={handleSubmit} >Submit</Button>
                        )}
                    </div>
                </Box>
            </Box>
        </div>
    );
}

export default Quiz;
