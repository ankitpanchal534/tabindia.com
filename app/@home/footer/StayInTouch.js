import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import classes from './classes.module.css'


export default function StayInTouch() {


  return (
        <Grid container justifyContent={'space-between'} className={classes.container} alignItems={'center'} spacing={2} p={"5vw"}>
          <Grid item xs={12} lg={6} md={6} sm={12} pl={'2vw'}>
            <Typography variant='h3' fontSize={33} fontWeight={'bold'} sx={{ color: '#4A1E75' }}>Stay Always In Touch</Typography>
            <Typography pt={2} fontSize={18} fontWeight={'lighten'} sx={{ color: '#4A1E75' }}>Get Latest Updates On Mail.</Typography>
          </Grid>
          <Grid item container xs={12} lg={6} md={6} sm={12} spacing={1} > 
            <Grid item container xs={8} lg={8} md={8} sm={8} >

            <input
            placeholder='Enter Your Email Address'
            className={classes.input}
            />
            </Grid>
            <Grid item container xs={4} lg={4} md={4} sm={8} >

            <button className={classes.submit_btn}>SUBMIT </button>
          </Grid>
          </Grid>

        </Grid>
          
  )
}
