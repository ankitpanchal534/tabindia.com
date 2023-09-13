import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
<Grid container style={{background:'#4A1E75',height:500}}>
     

<Grid item container color={'white'} justifyContent={'center'} >
    <Divider style={{width:'100%',borderBottom:'1px solid lightgray'}}/>
    <Typography variant='subtitle2' pt={1}>Powered by TAB INDIA © 2023</Typography>
    </Grid>
        </Grid>
  )
}
