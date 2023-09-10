import { Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function OurServices() {
  let services = [
    {
      id: 1,
      title: 'Counselling Details',
      image: '/Counselling-Details.png',
      detail: 'Get Rank based College & Course prediction.'
    }
    , {
      id: 2,
      title: 'Dedicated Personalized',
      image: '/Expert-Counselling.png',
      detail: 'ONE to ONE Counseling Sessions with Experts.'
    }, {
      id: 3,
      title: 'Cutoff Comparison',
      image: '/Alert-and-Notification-01.png',
      detail: 'Tool that helps candidates in selecting their preferences...'
    }
    , {
      id: 4,
      title: 'Closing Rank',
      image: '/Personalised-Guidence.png',
      detail: 'Tool that helps to compare roundwise cutoff in various counselling.'
    }
    , {
      id: 5,
      title: 'Advance Assessment Report',
      image: '/state-wise-eligibility.png',
      detail: 'Know all possible options in just one click!'
    }
    , {
      id: 6,
      title: 'Fee Structure',
      image: '/Transparent-process-01.png',
      detail: 'Check fee structure of all particular states'
    }



  ]

  return (
    <Grid container mt={2} pb={7} style={{background:'#F7F2F9'}} >
      <Container maxWidth="xl" sx={{ padding: '1vw', }}>
        <Grid container justifyContent={'center'}>
          <Grid item sx={{ padding: '2vw', textAlign: 'center' }} >
            <h3 ># Our Tools</h3>
            <h1 style={{ fontWeight: 400, marginTop: -15 }}>Explore Our Services</h1>

          </Grid>
        </Grid>
        <Grid container justifyContent={'space-between'}  gap={'2vh'} flexWrap={'wrap'} p={1}>
          {
            services.map((item) => <Card key={item.id} sx={{background:'white',padding:'10px',width:"30vmax",flexGrow:1,maxWidth:180,padding:'1vw',borderRadius:'15px',boxShadow:'0px 0px 24px -10px rgba(98, 97, 97, 0.50)',color:'#0D6EFD',}} >
              <Grid container gap={2} >
                <Grid item container justifyContent={'center'} sx={{padding:'2vh'}}>
                  <img src={item.image} height={70} width={70} />
                </Grid>
                <Grid item textAlign={'center'} >
                  <Typography fontWeight={'bold'} >{item.title}</Typography>
                  <Typography  variant='subtitle1'>{item.detail}</Typography>
                </Grid>
              </Grid>
            </Card>)
          }
        </Grid>
      </Container>
    </Grid>
  )
}
