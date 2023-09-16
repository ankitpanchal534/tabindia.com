import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import classes from './classes.module.css'
import { Call, Drafts, KeyboardDoubleArrowRight, Map, Tty } from '@mui/icons-material'

export default function Footer() {

  return (
    <Grid item container mt={4}>
       <style jsx>{`
      h5{
        font-size:18px;
        font-weight:400;
        text-transform:uppercase;
      }
      .container{
         display:flex;
        flex-direction:column;
        align-content:center;
      }
      ul{
        list-style-type:none;
        padding:5px;
        margin-top:-30px;
      }
      li{
        padding:0px;
        margin:0px;
        font-size:15px;
        margin-top:10px;
        display:flex;
        align-items:center;
        gap:5px
      }
      a{
        color: white;
        text-decoration: none;
      }
      a:hover{
        margin-left:7px;
        transition:margin 0.4s;
      }
      `}

      </style>
    <Grid container padding={'3vw 5vw'} style={{background:'#4A1E75',color:'white'}} spacing={4} >
      <Grid item xs={12} lg={4} md={4} sm={4} >

        <div className='container'>
          <h5>Get In Touch</h5>
          <ul>
            <li> <Map fontSize='15px'/>C-190, Ground Floor Vivek Vihar,New Delhi 110095 </li>
            <li><Tty fontSize='15px'/><a  href="tel:9311483555"> +91- 9311483555 </a></li>
            {/* <!--<li><a  href="tel:9899559595"><i className="fa-solid fa-phone-volume"></i> +91- 9899559595 </a></li>--> */}
            <li><Drafts fontSize='15px'/><a  href="mailto:info@tabindia.org" >  info@tabindia.org</a></li>
            <li><Drafts fontSize='15px'/><a  href="mailto:contact@tabindia.org">  contact@tabindia.org</a></li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} lg={3} md={3} sm={3} >

        <div className='container'>
          <h5>Important link</h5>
          <ul className="ul">
            <li> <KeyboardDoubleArrowRight fontSize='20px'/>  <a   href="https://tabindia.org">Home</a></li>
            <li> <KeyboardDoubleArrowRight fontSize='20px'/> <a  href="https://tabindia.org/about-us">About us</a></li>
            <li> <KeyboardDoubleArrowRight fontSize='20px'/> <a  href="https://tabindia.org/why-subscribe">Why Subscribe us</a></li>
            <li> <KeyboardDoubleArrowRight fontSize='20px'/> <a  href="https://tabindia.org/term-condition">Terms &amp; Condition</a></li>
            <li> <KeyboardDoubleArrowRight fontSize='20px'/> <a  href="https://tabindia.org/refund-policy">Refund Policy</a></li>
            <li> <KeyboardDoubleArrowRight fontSize='20px'/> <a  href="https://tabindia.org/contact-us">Contact us</a></li>

          </ul>
        </div>
      </Grid>
      <Grid item xs={12} lg={3} md={3} sm={3} >

        <div className="col-md-3 col-xs-12 column">
          <h5>Services</h5>
          <ul>
            <li><KeyboardDoubleArrowRight fontSize='20px'/><a  href="https://tabindia.org/paid-counseling-service">Paid counseling service</a></li>
            <li><KeyboardDoubleArrowRight fontSize='20px'/><a  href="https://tabindia.org/free-counseling-service">Free Profile Assessment</a></li>
            <li><KeyboardDoubleArrowRight fontSize='20px'/><a  href="https://tabindia.org/neet-ug-counseling-service">Neet-UG counseling service</a></li>
            <li><KeyboardDoubleArrowRight fontSize='20px'/><a  href="https://tabindia.org/check-ipd">Check IPD/OPD/BEDS</a></li>
            {/* <!--<li><KeyboardDoubleArrowRight fontSize='20px'/><a  href="https://tabindia.org/check-opd">Check OPD</a></li>--> */}
            <li><KeyboardDoubleArrowRight fontSize='20px'/><a  href="https://tabindia.org/check-fee-structure">Fee Structure</a></li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} lg={2} md={2} sm={2} >

        <div >
          <h5>App Download</h5>
          <div><a  href="https://play.google.com/store/apps/details?id=com.tabindia">
            <img src="https://tabindia.org/assets1/img/google-play.png" /></a></div>
        </div>
      </Grid>
      </Grid>
      <Grid item container style={{background:'#4A1E75',color:'white',}} justifyContent={'center'} padding={'30px 0px'}>
      <hr style={{width:'100%',opacity:0.4}}/>
        <div >Powered By <a  href="#">TAB INDIA</a> © 2023</div>
      </Grid>
     
    </Grid>
    )
}
