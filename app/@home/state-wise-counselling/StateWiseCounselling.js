import { Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import StateCounsellingCards from './StateCounsellingCards'

export default function StateWiseCounselling() {


  let services = [
    {
      id: 1,
      image: 'delhi.png',
      title: 'Delhi NEET PG Counselling 2023.'
    }
    , {
      id: 2,
      image: 'delhi.png',
      title: 'Haryana NEET PG Counselling 2023.'
    }, {
      id: 3,
      image: 'delhi.png',
      title: 'Karnataka NEET PG Counselling 2023'
    }
    , {
      id: 4,
      image: 'delhi.png',
      title: 'MP NEET PG Counselling 2023'
    }
    , {
      id: 5,
      image: 'delhi.png',
      title: 'Odisha NEET PG Counselling 2023'
    }
    , {
      id: 6,
      image: 'delhi.png',
      title: 'Tamil Nadu NEET PG Counselling 2023'
    }
    , {
      id: 7,
      image: 'delhi.png',
      title: 'UP NEET PG Counselling 2023'
    }
    , {
      id: 8,
      image: 'delhi.png',
      title: 'Uttarakhand NEET PG Counselling 2023'
    }



  ]

  return (
    <Grid container justifyContent={'center'} pt={2} pb={7} sx={{ padding: '1vw', }}  >
      {/* <Container maxWidth="xl" > */}
        <Grid item container justifyContent={'center'}>
          <Grid item sx={{ padding: '2vw', textAlign: 'center' }} >
            <h3 style={{ color: 'gray' }} ># NEET PG 2023</h3>
            <h1 style={{ fontWeight: 400, marginTop: -15, fontSize: 29 }}>State Wise Counseling Information</h1>

          </Grid>
        </Grid>
        <Grid item container>
          <StateCounsellingCards data={services} viewAllBtn />
        </Grid>
      {/* </Container> */}
    </Grid>
  )
}
