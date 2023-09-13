import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PricingCard from './PricingCard'
import { prices_arr } from './dummy_data'
export default function PricingSection() {


  return (
    <Grid container p={"3vw"} >
      {/* <Container maxWidth="xl" sx={{ padding: '1vw', }}> */}
        <Grid container justifyContent={'center'}>
          <Grid item sx={{ padding: '4vw', textAlign: 'center' }} >
            <h3 style={{ opacity: 0.7 }}># Pricing</h3>
            <h1 style={{ fontWeight: 400, marginTop: -15 }}> Our Pricing Plan</h1>
            <img src='/line.png' alt="line" />
          </Grid>
        </Grid>
        <Grid container justifyContent={'flex-start'} sx={{ boxShadow: '0px 2px 16px lightgray', borderRadius: "15px" }} gap={'1vw'} flexWrap={'wrap'}>
          {
            prices_arr.map((item) => <PricingCard key={item.id} plan={item} />
            )
          }
        </Grid>
      {/* </Container> */}
    </Grid>
  )
}
