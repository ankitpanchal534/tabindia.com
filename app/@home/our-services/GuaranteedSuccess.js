import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ImageIcon from '../../@components/ui/ImageIcon'
export default function GuaranteedSuccess() {


    return (
        <Grid container justifyContent={'center'} style={{
            backgroundImage: `url('/div.counter-main.jpg')`,
            // height: '75vh',
            backgroundSize: 'cover',
            backgroundPosition: '80% 10%',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* <Container maxWidth="lg" style={{ padding: 0, margin: 0 }}> */}
                <Grid container padding={'5vw'} justifyContent={'center'} >
                    <Grid container justifyContent={'center'}>
                        <Grid item sx={{ textAlign: 'center', color: 'white' }} >
                            <h3 style={{ color: '#FFDA00' }} ># Guaranteed Success</h3>
                            <h1 style={{ fontWeight: 400, marginTop: -15, }}>What will you Discover?</h1>
                            <img src='/line.png' alt="line" />
                        </Grid>
                    </Grid>
                    <Grid item container flexWrap={'wrap'} pt={1} style={{ textAlign: 'center', color: 'white' }} >
                        <Grid item xs={6} lg={3} md={3} sm={6} >
                            <ImageIcon url='/icons/Symbol (4).png' alt="user-symbol" size={'xl'} />
                            <h1 style={{ fontWeight:400,fontSize:'10vmin', marginTop: 0 }}>19878</h1>
                            <h4 style={{marginTop:'-6vh'}}>Total Registered User</h4>
                        </Grid>
                        <Grid item xs={6} lg={3} md={3} sm={6} >
                            <ImageIcon url='/icons/Symbol (3).png' alt="user-symbol" size={'xl'} />
                            <h1 style={{ fontWeight:400,fontSize:'10vmin', marginTop: 0 }}>14439</h1>
                            <h4 style={{marginTop:'-6vh'}}>Total Admissions</h4>
                        </Grid>
                        <Grid item xs={6} lg={3} md={3} sm={6} >
                            <ImageIcon url='/icons/Symbol (2).png' alt="user-symbol" size={'xl'} />
                            <h1 style={{ fontWeight:400,fontSize:'10vmin', marginTop: 0 }}>2420</h1>
                            <h4 style={{marginTop:'-6vh'}}>College Hospital Details</h4>
                        </Grid>
                        <Grid item xs={6} lg={3} md={3} sm={6} >
                            <ImageIcon url='/icons/Symbol.png' alt="user-symbol" size={'xl'} />
                            <h1 style={{ fontWeight:400,fontSize:'10vmin', marginTop: 0 }}>11</h1>
                            <h4 style={{marginTop:'-6vh'}}>Years of Rich Experience</h4>
                        </Grid>
                    </Grid>

                </Grid>
            {/* </Container> */}

        </Grid>
    )
}
