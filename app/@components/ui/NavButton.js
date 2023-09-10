
import { Button } from '@mui/material'
import React from 'react'

const styles={
  borderRadius:25,
  color:'#FFDA00',
  borderColor:'#FFDA00',
  fontWeight:700,
  ":hover":{
    
  color:'black',
  borderColor:'white',
  background:"#FFDA00"
  }
}

export default function NavButton(props) {


  return (
<Button variant='outlined'   {...props} sx={{...styles,...props.sx}} >{props.children}</Button>
  )
}
