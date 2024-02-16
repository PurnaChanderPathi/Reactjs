import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import bumrahDP from '../Images/bumrahDP.jpg'
import RohitDP from '../Images/RohitDP.jpeg'
import SachinDP from '../Images/SachinDP.jpg'
import SirajDP from '../Images/SirajDP.webp'
import ViratRCB from '../Images/ViratRCB.jpg'

export const RightBar = () => {
  return (
    <Box flex={2} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>
          OnLine Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Rohit Sharma" src={RohitDP} />
          <Avatar alt="Sachin" src={SachinDP} />
          <Avatar alt="Bumrah" src={bumrahDP} />
          <Avatar alt="Siraj" src={SirajDP} />
          <Avatar alt="Virat Kohli" src={ViratRCB} />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
              alt='' />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
              alt='' />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
              alt='' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={RohitDP} />
            </ListItemAvatar>
            <ListItemText
              primary="Rohit Sharma"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    WorldCup
                  </Typography>
                  {"-- most hundreds in Twenty20 Internationals (5). Rohit Sharma is the first player to score 5 T20I centuries."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={SachinDP}/>
            </ListItemAvatar>
            <ListItemText
              primary="Sachin"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    God of Cricket
                  </Typography>
                  {" — all-time highest run-scorer in both ODI and Test cricket with more than 18,000 runs and 15,000 runs"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={SirajDP} />
            </ListItemAvatar>
            <ListItemText
              primary="Siraj"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Best Bowler
                  </Typography>
                  {' — Siraj is the number 1 bowler in ODI, ha have record of two median overs in IPL …'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )


}


