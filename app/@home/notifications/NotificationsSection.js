import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import classes from './classes.module.css'
import { ArrowBack, ArrowRightAlt } from '@mui/icons-material'
export default function NotificationsSection() {
    return (
        <Grid container justifyContent={'center'} pt={10}>
            <Container maxWidth="lg">
                <Grid container alignItems={'center'} >

                    <Grid item container justifyContent={'center'} xs={12} lg={6} sm={6} md={6}>
                        <img src='/indiaMap.png' style={{ width: '100%', maxWidth: 550 }} alt="india map" />
                    </Grid>
                    <Grid item xs={12} lg={6} sm={6} md={6} container padding={'3vw'} paddingBottom={'40px'} justifyContent={'center'}
                        style={{ color: 'white', background: '#4A1E75' }}>
                        <Grid item container flexDirection={'column'} alignItems={'center'} rowGap={1} >
                            <Typography variant='h5' >Latest Notificatons</Typography>
                            <img src='/line.png' alt="line" />

                        </Grid>
                        <Grid item container className={classes.notifications_area} alignItems={'flex-start'} sx={{
                            '::-webkit-scrollbar': {
                                display: 'none'
                            }
                        }}>
                            {/* <marquee direction='up' behavior="scroll" loop> */}
                            <div className={classes.marquee}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((it, id) => <Grid key={it} item container alignItems={'center'} flexWrap={'nowrap'} sx={{ cursor: 'pointer' }}>
                                    <ArrowRightAlt fontSize='large' sx={{ color: '#FFDA00' }} />
                                    <Typography variant='h6' sx={{
                                        fontWeight: 400,
                                         margin: '10px',
                                         marginLeft: '2px',
                                        fontSize:'3.5vmin',
                                        ":hover": {
                                            color: '#FFDA00'
                                        }
                                    }}> &nbsp; West Bengal PG Counseling Schedule Published</Typography>
                                </Grid>)}
                            </div>
                            {/* </marquee>   */}
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </Grid>
    )
}
