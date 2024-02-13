import { Avatar, Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import './Images/QuizAppImg.jpg';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Login = () => {
  return (
    <div
      className='login_page'
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-vector/monochrome-banner-template-with-hands-people-solving-puzzle-riddle-quiz-tournament-knowledge-competition-intelligence-test-smart-game-elements-vector-illustration-line-art-style_198278-8719.jpg?w=996')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '97vh', // Set height to 100% of the viewport height
        maxWidth: '100%',
        maxHeight: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%', // Set height to 100% of the viewport height

        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 5,
            width: '400px',
            height: '450px',
            paddingTop: '30px',
            backgroundColor:'white',
          }}
        >
          <Stack spacing={2}>
            <Avatar sx={{ alignSelf: 'center' }} />
            <Stack spacing={2} direction='column'>
              <TextField id="outlined-basic" label="Username" variant="outlined" sx={{ width: '250px' }} />
              <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ width: '250px' }} />
              <Typography variant='body2' paddingLeft={16} color='GrayText'>Forgot password?</Typography>
              <Button variant='contained' sx={{borderRadius:'30px', width:'150px', alignSelf:'center'}}>Login</Button>
            </Stack>
            <Box paddingLeft={1} paddingTop={2} sx={{display:'flex', justifyContent:'space-evenly'}}>
            <GoogleIcon color='primary'/>
            <FacebookIcon color='primary'  />
            <YouTubeIcon color='error'/>
            </Box>
            <Typography variant='body2' paddingLeft={6} color='GrayText'>Don't have an account?</Typography>
            <Typography variant='body2' paddingLeft={12} color='GrayText'>SignUp</Typography>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
