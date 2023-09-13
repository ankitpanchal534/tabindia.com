import { Button, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import classes from './classes.module.css'
import { ArrowRightAlt } from '@mui/icons-material'

const styles = {
    card_style: {
        width: {xs:'100%',sm:'100%',md:"92%",sm:"92%",xl:'90%'},
        boxShadow:'0px 3px 18px lightgray',
        borderRadius:'10px 0px 15px 0px '
    },
    description:{
        fontSize:16
    }
}

export default function AboutUs() {
    let data1 = [
        {
            title: 'NEET College Predictor',
            image: '/div.infoboximg (1).png',
            route: '',
            description: 'Tool that help aspirants to predict college and courses they are eligible for based on their…'
        },
        {
            title: 'Cutoff Comparison',
            image: '/div.infoboximg (2).png',
            route: '',
            description: 'Tool that helps candidates in selecting their preferences during the Counseling process,…'
        },
    ]
    let data2 = [
        {
            title: 'Choice Filling Assistance',
            image: '/div.infoboximg (4).png',
            route: '',
            description: 'Tool that provide personalised guidance to students to fill their choices for NEET…'
        },
        {
            title: 'Closing Rank',
            image: '/div.infoboximg (3).png',
            route: '',
            description: 'Tool that helps to compare all round wise cutoff of various counselling.'
        },
    ]



    return (
        <Grid container sx={{ background: '#F5F5F5' }}>
            <Container maxWidth="xl" >
                <Grid container padding={'5vw 0px'} sx={{alignItems:{xs:'stretch',md:'inherit'}}} >

                    <Grid container item xs={12} xl={6} lg={6} md={6} sm={12}  justifyContent={'center'}>
                        <Grid container item xs={12} lg={11} md={11} sm={12} gap={1} sx={{ padding: '4vw 2vw' }}>
                            <Grid item container>
                                <Typography fontWeight={'bold'}>About Us</Typography>
                            </Grid>
                            <Grid item container>
                                <Typography sx={{fontSize:{xs:22,xl:40,md:40,sm:35,lg:40}}} lineHeight={1} fontWeight={700}>Reliable & Cost Efficient Consulting</Typography>
                            </Grid>
                            <Grid item container gap={2}>
                                <Typography sx={styles.description}>
                                    TAB India is an exclusive platform founded by Anubhav Garg where we provide innovative &
                                    Customised NEET counselling services to students aspiring to get into Medical Education.

                                </Typography>
                                <Typography sx={styles.description}>
                                    Right information is key to Success & TAB India is committed to provide all the information you
                                    need to make your decision,at one place. Every Aspirant & their requirements are unique and
                                    we understand that. Hence we provide you customised services to grab the best possible
                                    opportunity based on your profile.
                                </Typography>
                                <Typography sx={styles.description}>
                                    Our Expert advisory scrutinize your merit & aspirations to deliver the best opportunity through
                                    our advance statistical analysis.
                                </Typography>
                                <button className={classes.read_more_btn}>
                                    READ MORE
                                </button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} lg={6} xl={6} md={6} sm={12} alignItems={'center'} justifyContent={'space-between'} >
                        <Grid item xs={12} lg={6} md={6} xl={6} sm={12} container spacing={2} >
                            {
                                data1.map((item) => <Grid item xs={6} xl={6} lg={12} md={12} sm={6} >
                                    <Card key={item} sx={styles.card_style}>
                                        <Grid container  >
                                            <Grid item container >
                                                <img src={item?.image} height={100} width={'100%'}  />
                                            </Grid>
                                            <Grid item container mt={1} pl={1} >
                                                <Typography sx={{color:'#4A1E75',fontSize:18,fontWeight:800,lineHeight:1}}>{item?.title}</Typography>
                                            </Grid>
                                            <Grid item container mt={1} pl={1} sx={{height:45,overflow:'hidden'}}>
                                                <Typography variant='body2'>{item?.description}</Typography>
                                            </Grid>
                                            </Grid>

                                            <Grid item container pt={1}>
                                                {/* <Button fullWidth style={{ background: '#4A1E75', color: 'white',borderRadius:"0px" }}> Use Now</Button> */}
                                                <button  className={classes.use_now_btn}>Use Now &nbsp;<ArrowRightAlt /> </button>

                                        </Grid>
                                    </Card>
                                </Grid>)
                            }
                        </Grid>
                        <Grid item xs={12} lg={6} md={6} sm={12} pt={'4vw'} xl={6} container spacing={2}>
                            {
                                data2.map((item) => <Grid item xs={6} xl={6} lg={12} md={12} sm={6} >
                                    <Card key={item} sx={styles.card_style}>
                                    <Grid container  >
                                            <Grid item container >
                                                <img src={item?.image} height={100} width={'100%'}  />
                                            </Grid>
                                            <Grid item container pl={1} mt={2} >
                                                <Typography  sx={{color:'#4A1E75',fontSize:18,fontWeight:800,lineHeight:1}}>{item?.title}</Typography>
                                            </Grid>
                                            <Grid item container mt={1} pl={1} sx={{height:45,overflow:'hidden'}}>
                                                <Typography variant='body2'>{item?.description}</Typography>
                                            </Grid>
                                            </Grid>

                                            <Grid item container pt={1}>
                                                <button  className={classes.use_now_btn}>Use Now &nbsp;<ArrowRightAlt /> </button>
                                        </Grid>
                                    </Card>
                                </Grid>)
                            }
                        </Grid>
                    </Grid>
                </Grid>

            </Container>

        </Grid>
    )
}
