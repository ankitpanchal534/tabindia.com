import { Button, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import classes from './classes.module.css'

export default function StateCounsellingCards({ data }) {
    return (
        <Grid item container>
            <Grid container justifyContent={'center'} spacing={2} padding={'2vw'} flexWrap={'wrap'}  >
                {
                    data?.map((item) =>
                        <Grid item xs={6} lg={3} sm={3} md={3} xl={3} key={item.id}>
                            <Card key={item.id} sx={{ background: 'white', padding: '10px', height: '100%', flexGrow: 1, padding: '1vw', borderRadius: '15px', boxShadow: '0px 0px 24px -10px rgba(98, 97, 97, 0.50)', color: '#0D6EFD', }} >
                                <Grid container gap={2} >
                                    <Grid item container justifyContent={'center'} sx={{ padding: '2vh' }}>
                                        <img src={item.image} height={70} width={70} />
                                    </Grid>
                                    <Grid item textAlign={'center'} >
                                        <Typography variant='h6' fontWeight={'bold'} sx={{ color: '#4A1E75', lineHeight: 1.3, fontSize: '3.2vh' }} >{item.title}</Typography>
                                    </Grid>
                                </Grid>
                            </Card></Grid>)
                }
            </Grid>
            <Grid container justifyContent={'center'} mt={4}>

                <button className={classes.view_more_btn}>VIEW MORE</button>
            </Grid>
            </Grid>
       
    )
}

