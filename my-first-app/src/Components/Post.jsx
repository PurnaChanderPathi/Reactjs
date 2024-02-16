import { Block, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import ViratRCB from '../Images/ViratRCB.jpg'

export const Post = () => {
  return (
    <Card sx={{margin: 5}}>
   <CardHeader
     avatar={
       <Avatar sx={{ bgcolor: 'skyblue'}} aria-label="recipe">
         R
       </Avatar>
     }
     action={
       <IconButton aria-label="settings">
         <MoreVert />
       </IconButton>
     }
     title="Virat Kohli"
     subheader="September 14, 2016"
   />
   <CardMedia
     component="img"
     height="30%"
     image={ViratRCB}
     alt="Virat Kohli"
   />
   <CardContent>
     <Typography variant="body2" color="text.secondary">
     Former India skipper Virat Kohli is at number two in the list with 1377 runs
      in 11 ODI matches with six fifties and 3 centuries. At number three is India captain Rohit Sharma,
       scoring 1255 runs in 27 ODIs with 2 centuries and nine half-centuries in the year.
     </Typography>
   </CardContent>
   <CardActions disableSpacing>
     <IconButton aria-label="add to favorites">
     <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
     </IconButton>
     <IconButton aria-label="share">
       <Share />
     </IconButton>
   </CardActions>
 </Card>
  )
}
