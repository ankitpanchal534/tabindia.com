

import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import classes from './classes.module.css'
import { Add, Minimize, Remove } from '@mui/icons-material'
import { Carousel } from 'react-responsive-carousel'
import Slider from 'react-slick'


export default function Faq() {
    const [expanded, setExpanded] = useState(null)

    const handleExpand = (id) => {
        if (id == expanded) {
            setExpanded(null)
        } else {
            setExpanded(id)

        }
    }


    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Grid container justifyContent={'center'} style={{ background: '#FBFBFB', overflow: 'hidden' }}>
            <Grid item container justifyContent={'center'} gap={2} padding={'3vw 0px'}>
                <Grid item sx={{ padding: '1vw', textAlign: 'center' }} >
                    <h3 style={{ opacity: 0.7 }}># Testimonials</h3>
                    <h1 style={{ fontWeight: 400, marginTop: -15 }}> Our Client Feedback</h1>
                    <img src='/line.png' alt="line" />
                </Grid>
            </Grid>
            <div style={{ width: '90%', overflow: 'hidden', padding: '4vw',paddingTop:'10px' }}>
                <Slider {...settings} >

                    <div className={classes.testimonial_wrapper}>
                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{width:'100%'}}>
                                <p>
                                    "As a guardian, I was initially hesitant to entrust my child's future to an
                                    online counseling service. However, after working with Tab India website for
                                    MBBS counseling, my concerns were quickly put to rest. The counselors were patient,
                                    thorough, and committed to helping my child achieve their goals. I would highly
                                    recommend Tab India  to anyone looking for expert guidance and support during the
                                    admissions process."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Mr.PK.Sharma</h3>
                            </div>
                        </div>
                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "I was feeling overwhelmed and unsure about the MD/MS admission process,
                                    but TAB India  portal  made everything so much easier. The counselors were
                                    responsive and approachable, and they provided me with personalized advice
                                    and support every step of the way. I would highly recommend TAB India to anyone
                                    looking for admission in MD/MS in most suitable college with appropriate fee."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Dr.Davesh Singh</h3>
                            </div>
                        </div>
                    </div>

                    {/* <div className={classes.testimonial_wrapper}>

                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "I was feeling overwhelmed and unsure about the MD/MS admission process,
                                    but TAB India  portal  made everything so much easier. The counselors were
                                    responsive and approachable, and they provided me with personalized advice
                                    and support every step of the way. I would highly recommend TAB India to anyone
                                    looking for admission in MD/MS in most suitable college with appropriate fee."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Dr.Davesh Singh</h3>
                            </div>
                        </div>
                    </div> */}
                    <div className={classes.testimonial_wrapper}>

                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "The Best place to get counselling . Mr. Anubhav Garg sir provides the
                                    best guidance for admission procedure and he personally ensure that
                                    student gets the admission . I personally got a seat from NEET Pg counselling
                                    and it wouldn't have
                                    possible with the help of Admission Bureau and Mr. Anubhav sir."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Dr.Akshay Bhumkar</h3>
                            </div>
                        </div>
                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "I am so grateful to have found this MD/MS admission
                                    counseling website. The counselors were incredibly
                                    knowledgeable and supportive throughout the entire process,
                                    from helping me to choose the right branch and college. Thanks to their guidance,
                                    I was able to secure a seat in my dream branch."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Naren Nandha</h3>
                            </div>
                        </div>
                    </div>
                    {/* <div className={classes.testimonial_wrapper}>

                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "I am so grateful to have found this MD/MS admission
                                    counseling website. The counselors were incredibly
                                    knowledgeable and supportive throughout the entire process,
                                    from helping me to choose the right branch and college. Thanks to their guidance,
                                    I was able to secure a seat in my dream branch."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Naren Nandha</h3>
                            </div>
                        </div>
                    </div> */}
                    <div className={classes.testimonial_wrapper}>

                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "Great People,very professional and helpful.Specially
                                    Mr Anubhav Garg a great person and very dedicated
                                    towards work.Best Counselling services provided."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Dr. Sachin Malik</h3>
                            </div>
                        </div>
                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "Very good guidance at every moment of pre, per,
                                    and post councilling. Great job by Mr. Anubhav garg.
                                    I appreciate your valuable services without expecting any thing.
                                    My heart felt thanks. Wishing you let this saga
                                    continues forever and many professionals get benefit."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Dr.Karri Sriman</h3>
                            </div>
                        </div>
                    </div>
                    {/* <div className={classes.testimonial_wrapper}>

                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "Very good guidance at every moment of pre, per,
                                    and post councilling. Great job by Mr. Anubhav garg.
                                    I appreciate your valuable services without expecting any thing.
                                    My heart felt thanks. Wishing you let this saga
                                    continues forever and many professionals get benefit."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Dr.Karri Sriman</h3>
                            </div>
                        </div>
                    </div> */}
                    <div className={classes.testimonial_wrapper}>

                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "I had an amazing experience with TAB India for
                                    NEET PG Counseling guidance &amp; support. The
                                    counselors were very professional, knowledgeable
                                    and patient
                                    in understanding my requirements and provided me with
                                    the best options available."
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Dr. Narendra Kashyap</h3>
                            </div>
                        </div>
                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "I am extremely grateful to TAB India
                                    for their invaluable assistance in my pursuit
                                    of admission into MD Radiology. From the initial
                                    consultation to the final admission, their guidance
                                    was exemplary. The team at TAB India provided me with
                                    detailed information about various medical colleges,
                                    eligibility criteria, etc.  which helped me make
                                    informed decisions. Their prompt response to
                                    queries and constant support
                                    made the admission process seamless. Thanks to TAB India"
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Dr. Ashima</h3>
                            </div>
                        </div>
                    </div>
                    {/* <div className={classes.testimonial_wrapper}>

                        <div className={classes.testimonial_div}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='/testimonials_div.png' alt="testimonials_div.pic" height={130} width={120} style={{ filter: `drop-shadow('0px 2px 6px lightgray')` }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p>
                                    "I am extremely grateful to TAB India
                                    for their invaluable assistance in my pursuit
                                    of admission into MD Radiology. From the initial
                                    consultation to the final admission, their guidance
                                    was exemplary. The team at TAB India provided me with
                                    detailed information about various medical colleges,
                                    eligibility criteria, etc.  which helped me make
                                    informed decisions. Their prompt response to
                                    queries and constant support
                                    made the admission process seamless. Thanks to TAB India"
                                </p>
                                <h3 style={{ color: 'darkblue' }}>Dr. Ashima</h3>
                            </div>
                        </div>
                    </div> */}

                </Slider>
            </div >
            <Grid item container mt={-10}>
                <img src='/ssasa-removebg-preview.png' />
            </Grid>

        </Grid >
    )
}
