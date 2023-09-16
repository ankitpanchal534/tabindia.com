import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import classes from './classes.module.css'
import { Grid, InputBase, MenuItem, Select, TextField } from '@mui/material';
import InputBox from '../@components/ui/InputBox'
import BootstrapButton from '../@components/ui/BootstrapButton'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    //   zIndex:1300
    transform: 'translate(-50%, -50%)',
    //   width: 400,

    //   bgcolor: 'background.paper',
    // height: "90%",
    //   backgroundColor:'white',
    width: '96%',
    maxHeight:"96%",
    
    maxWidth: 500,
    border: 'none',
    outline: "none",
    //   boxShadow: 24,
    //   p: 1,
};


export default function FloatingEnquiryForm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInput = (e) => {

    }
    return (
        <div>
            <button className={classes.enquiry_btn} onClick={handleOpen}>Enquiry Form</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                >
                    <Grid container justifyContent={'center'} alignContent={'start'}
                        style={{ background: '#4A1E75',  borderRadius: '50px 0px 50px 0px',
                        height:'100%',width:'100%',
                        overflowX:'hidden',
                        overflowY:'scroll', }}  p={2}
                        className='animate__animated  animate__fadeInDownBig'
                    >
                        <Grid item container xs={12} lg={9} sm={12} md={9} justifyContent={'center'} gap={2} mb={6}>
                            <Grid item container xs={12} lg={12} sm={12} md={12} justifyContent={'center'} mt={4}>
                                <img src='/logo.png' height={100} width={70} style={{ objectFit: 'contain' }} />
                            </Grid>
                            <Grid item container xs={12} lg={12} sm={12} md={12} >
                                <InputBox
                                    fullWidth
                                    onChange={handleInput}
                                    placeholder='Full Name'

                                />
                            </Grid>

                            <Grid item container xs={12} lg={12} sm={12} md={12} >
                                <InputBox
                                    fullWidth
                                    onChange={handleInput}
                                    placeholder='Mobile No.'

                                />
                            </Grid>

                            <Grid item container xs={12} lg={12} sm={12} md={12} >
                                <Select size='small' value={'NEET-UG'} fullWidth style={{ background: 'white', borderRadius: 8 }}>
                                    <MenuItem value={'NEET-UG'}>NEET-UG</MenuItem>
                                    <MenuItem value={'NEET-PG'}>NEET-PG</MenuItem>
                                    <MenuItem value={'NEET-SS'}>NEET-SS</MenuItem>
                                </Select>
                            </Grid>

                            <Grid item container xs={12} lg={12} sm={12} md={12} >
                                <InputBox
                                    fullWidth
                                    onChange={handleInput}
                                    placeholder='Enter Your Rank'

                                />
                            </Grid>

                            <Grid item container xs={12} lg={12} sm={12} md={12} >

                            <BootstrapButton fullWidth >
                                Submit
                            </BootstrapButton>
                            </Grid>
       

                        </Grid>
                    </Grid>



                </Box>
            </Modal>
        </div>
    );
}
