import { AppBar, Box, Toolbar, Typography, styled, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'
import { Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%"
}))

const Icons = styled('div')(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}))

export const Navbar = () => {
    const [open , setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
                    Chandu
                </Typography>
                <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Badge>
                        <Avatar sx={{ width: 30, height: 30 }}
                         src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRqprksER3ZS6M1gVUmWxpDe-TSdtVHethWwGvmOqalWJEFsHHVLVdNW94sHFPRuA3WlK8DqGhfPrw5B2U&psig=AOvVaw2WDutDd4GDjZEv8y9CiPsF&ust=1706775662608000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCEovqYh4QDFQAAAAAdAAAAABAE'
                        onClick={e=> setOpen(true)} />
                    </Badge>
                </Icons>
                <UserBox onClick={e=> setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRqprksER3ZS6M1gVUmWxpDe-TSdtVHethWwGvmOqalWJEFsHHVLVdNW94sHFPRuA3WlK8DqGhfPrw5B2U&psig=AOvVaw2WDutDd4GDjZEv8y9CiPsF&ust=1706775662608000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCEovqYh4QDFQAAAAAdAAAAABAE' />
                    <Typography>
                        Pathi
                    </Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=> setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}
