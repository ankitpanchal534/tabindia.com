"use client"

import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import CustomCarousel from './CustomCarousel'
import HeaderLinks from './HeaderLinks'
import AboutUs from './AboutUs'
import DownloadSection from './download/DownloadSection'
import PricingSection from './pricing/PricingSection'
import OurServices from './our-services/OurServices'
import GuaranteedSuccess from './our-services/GuaranteedSuccess'
import StateWiseCounselling from './state-wise-counselling/StateWiseCounselling'
import NotificationsSection from './notifications/NotificationsSection'
import Faq from './notifications/Faq'
import TestimonialsSection from './testimonials/TestimonialsCarousel'
import StayInTouch from '../@home/footer/StayInTouch'
import Footer from './footer/Footer'
import FloatingButtons from './FloatingButtons'
import TelegramFloatingButton from './TelegramFloatingButton'
import FloatingEnquiryForm from './FloatingEnquiryForm'



export default function index() {


  return (
    <Grid container justifyContent={'center'}>

      <Navbar />
      <HeaderLinks />
      <Container maxWidth="xl" style={{ margin: 0, padding: 0, }}>
        <CustomCarousel />
        <AboutUs />
        <DownloadSection />
        <PricingSection />
        <OurServices />
        <GuaranteedSuccess />
        <StateWiseCounselling />
        <NotificationsSection />
        <Faq />
        <TestimonialsSection />
        <StayInTouch />
        <Footer />
      </Container>
      <Grid item container style={{ position: 'fixed', left: 0, bottom: 0 }}>
        <FloatingButtons />
        <TelegramFloatingButton />
        <FloatingEnquiryForm />
      </Grid>
    </Grid>
  )
}
