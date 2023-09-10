import React from 'react'
import classes from './classes.module.css'
import { Button } from '@mui/material'
import { Check, CheckCircle } from '@mui/icons-material'
export default function PricingCard({ plan }) {
  return (

    <div className={plan?.popular ?classes.card_wrapper_filled:classes.card_wrapper}>
      <div >
        <h1 style={{ lineHeight: '10px' }}>₹ {plan?.price}</h1>
        <h2 style={{ fontWeight: 400, lineHeight: 1, fontSize: 27 }}>{plan?.name}</h2>
        <Button variant='contained' size='small' style={{ borderRadius: 20, background:plan?.popular?'red': '#4A1E75', padding: '4px 15px' }}>Get Started</Button>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0,marginTop:'10px' ,}} className={classes.card_content} >
          {
            plan?.benefits.map((item) => <li style={{ display: 'flex', color: plan?.popular?'white':'#4A1E75', alignItems: 'start', marginTop: 7,fontSize:14 }}>
              <Check style={{ background:plan?.popular?'whitesmoke': '#4A1E7520',color:'#4A1E75', borderRadius: 20, padding: 4 }} fontSize='medium' />&nbsp; {item}
            </li>)
          }
        </ul>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button variant='contained' style={{ borderRadius: 20, background:plan?.popular?'red': '#4A1E75', padding: '7px 20px' }}>Get Started</Button>
      </div>
      {/* </div> */}
    </div>
  )
}
