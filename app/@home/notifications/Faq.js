

import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import classes from './classes.module.css'
import { Add, Minimize, Remove } from '@mui/icons-material'



export default function Faq() {
const [expanded,setExpanded] = useState(null)

const handleExpand = (id)=>{
if(id ==expanded){
    setExpanded(null)
}else{
    setExpanded(id)
    
}
}
    let faqs = [
        {   id:1,
            ques: 'How should I prepare for NEET PG exam?',
            ans: 'The preparation for NEET PG exam should involve studying all the topics in the syllabus, solving previous year question papers, taking mock tests, and revision. A proper study plan and time management are essential for effective preparation.'
        },
        {id:2,
            ques: 'Can I change my category during the NEET PG counseling process?',
            ans: 'No, candidates cannot change their category once they have registered for the NEET PG counseling process.'
        },
        {id:3,
            ques: 'What is the eligibility criteria for NEET PG counseling?',
            ans: 'The eligibility criteria for NEET PG counseling includes qualifying NEET PG, obtaining the minimum required percentile, completing the internship, and fulfilling other criteria as specified by the counseling authority.'
        }
    ]

    return (
        <Grid container justifyContent={'center'} pt={"4vw"}>
            <Grid item container justifyContent={'center'} gap={2} padding={'3vw 0px'}>
                <Typography variant='h4' fontWeight={400}>FAQ</Typography>
                <Grid item container justifyContent={'center'}>
                    <img src='/line.png' alt='line_png' />
                </Grid>
            </Grid>
            <Grid item xs={11} lg={7} sm={7} md={7} container mt={3}>
                {
                    faqs.map((item, index) => <Grid key={index} item container onClick={()=>handleExpand(item.id)} marginTop={-3}>
                        <Grid item container className={classes.ques_div} alignItems={'center'} justifyContent={'space-between'}>
                            <Grid item xs={10} lg={10} md={10} sm={10}>
                            <Typography variant='h5' fontSize={16} fontWeight={600}>{item.ques}</Typography>
                        </Grid>
                            {expanded ==item.id ?<Remove />:<Add />}
                        </Grid>
                       <Grid item container p={2} className={classes.ans_div} sx={{height:expanded ==item.id ?'140px':'10px',visibility:expanded ==item.id?'visible':'hidden'}}>
                            <Typography>{item.ans}</Typography>
                        </Grid>
                    </Grid>)
                }
            </Grid>

        </Grid>
    )
}
