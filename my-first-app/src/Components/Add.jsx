import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import ViratRCB from '../Images/ViratRCB.jpg'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyleModel = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: "20px"
})

function Add() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)}
                title="Delete"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 },
                }} >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModel
                open={open}
                onClose={(e) => setOpen(true)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"}
                 color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign='center'>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src={ViratRCB}
                            sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant='span'>
                            Pathi
                        </Typography>
                    </UserBox>
                    <TextField sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button >Post</Button>
                        <Button sx={{width: "100px"}}><DateRangeIcon /></Button>
                    </ButtonGroup>
                </Box>
            </StyleModel>
        </>
    )
}

export default Add