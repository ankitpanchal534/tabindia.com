"use client"
import React from 'react'
import { Autocomplete, Button, Container, Grid, IconButton, TextField, styled } from '@mui/material'
import classes from './navbar.module.css'
import { Notifications, RingVolume, Search } from '@mui/icons-material'
import NavButton from '../@components/ui/NavButton'

const CssTextField = styled(TextField)({
    background: 'white',
    outline: 'none',
    '& label.Mui-focused': {
        color: 'black'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'transparent',
        },
    },
});
export default function Navbar() {

    return (
        <Grid container p={2} className={classes.navbar} >
            <Container maxWidth={'xl'}  >
                <Grid container justifyContent={'space-between'}  wrap='wrap-reverse' alignItems={'start'} >
                    <Grid item container xs={12} lg={6} sm={6} md={6} xl={8}  justifyContent={'space-between'} alignItems={'center'}>
                        <Grid item xs={2} lg={2} sm={12} md={12} xl={12} sx={{ display: { xs: 'block', sm: 'block', md: 'none', xl: 'none', lg: 'none' } }}>
                            <img src='/logo.png' height={60} width={60} alt='logo' style={{ objectFit: 'contain' }} />
                        </Grid>
                        <Grid item xs={9}  lg={6} sm={8} md={6} xl={10} container border={'1px solid lightgray'} flexDirection={'row'} alignItems={'center'} wrap='nowrap'>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={['hello', 'hello1']}
                                size='small'
                                fullWidth
                                forcePopupIcon={false}
                                renderInput={(params) => <CssTextField sx={{ border: 'none' }}  {...params} label="Search Colleges" />}

                            />
                            <IconButton style={{ background: '#F9B200', color: 'black', outline: "none", border: 'none', padding: '8px 10px', borderRadius: '0px 4px  4px 0px ' }}><Search /></IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6} sm={6} md={6} xl={4} container alignItems={'center'} gap={"2vw"} justifyContent={'flex-end'}>
                        <NavButton sx={{ padding: '5px 25px' }} >LOG IN</NavButton>
                        <NavButton sx={{ padding: '5px 25px' }}>SIGN UP</NavButton>
                        <NavButton sx={{ padding: '5px 25px' }} ><Notifications /> </NavButton>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}
