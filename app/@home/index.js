import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import classes from './classes.module.css'
import CustomCarousel from './CustomCarousel'
import HeaderLinks from './HeaderLinks'
import AboutUs from './AboutUs'
import DownloadSection from './download/DownloadSection'
import PricingSection from './pricing/PricingSection'
import OurServices from './our-services/OurServices'
import GuaranteedSuccess from './our-services/GuaranteedSuccess'

export default function index() {
 

  return (
    <Grid container>
      <Navbar />
      <HeaderLinks />
      <CustomCarousel />
      <AboutUs />
      <DownloadSection />
      <PricingSection />
      <OurServices />
      <GuaranteedSuccess />
    </Grid>
  )
}
