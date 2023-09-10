import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import classes from './classes.module.css'


export default function DownloadSection() {


  return (
    <Grid container className={classes.container}>

      <Container maxWidth="xl" sx={{padding:"0px"}}>

        <Grid container justifyContent={'space-between'} alignItems={'center'} spacing={2}>
          <Grid item xs={12} lg={9} md={9} sm={8} >
            <Typography variant='h3' fontSize={33} fontWeight={'bold'} sx={{ color: '#4A1E75' }}>Get counseling update on your mobile</Typography>
            <Typography variant='caption' fontSize={18} fontWeight={'lighten'} sx={{ color: '#4A1E75' }}>You will get all the notification on your mobile application as will as our website.</Typography>
          </Grid>
          <Grid item xs={12} lg={3} md={3} sm={4} >
            <button className={classes.download_btn}>Download </button>
          </Grid>

        </Grid>
      </Container>
    </Grid>
  )
}
