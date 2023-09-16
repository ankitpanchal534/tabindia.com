import { Container, Grid } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import classes from './classes.module.css'

export default function HeaderLinks() {

    let header_items = [
        "NEET College Predictor",
        "Choice Filling Assistance",
        "Pricing",
        "Closing Rank",
        "Counsellings",
        "Advance Profile Assessment",
        "Cutoff Comparison",
        "Blog",
        "Allotment Tracker",
        "Closing Cutoff",
        "Advance Assessment Report"
    ]

    return (
            <Grid container p={2} sx={{display:{xs:'none',sm:'none',md:'flex',lg:'flex'}}} >
                <Grid container item xs={2} md={1} sm={1} lg={1}  >
                    <img src='/logo.png' height={60} width={60} alt='logo' style={{ objectFit: 'contain' }} />
                </Grid>
                <Grid container gap={2} item xs={10} md={11} sm={11} lg={11}  >
                    {
                        header_items.map((item) => <Link href={item} key={item} className={classes.link}>{item}</Link>)
                    }
                </Grid>
            </Grid>
       )
}
