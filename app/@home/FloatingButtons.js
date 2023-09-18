import { faCirclePause } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Add, Call, Email, Message, WhatsApp } from '@mui/icons-material'
import { Icon, IconButton } from '@mui/material'
import React, { useState } from 'react'

export default function FloatingButtons() {
    const [open, setOpen] = useState(true)

    let contactButtons = [
        {
            id: 1,
            icon: <Call sx={{ fontSize: '28px', fontWeight: 900 }} />,
            bgColor: '#3B5998',
        },
        {
            id: 2,
            icon: <Email sx={{ fontSize: '28px', fontWeight: 900 }} />,
            bgColor: '#55ACEE',
        },
        {
            id: 3,
            icon: <WhatsApp sx={{ fontSize: '28px', fontWeight: 900 }} />,
            bgColor: '#25D366',
        }
    ]

    const styles = {
        addBtn: {
            transform: 'rotate(0deg)',
            transition: "0.2s ease all",
            padding: 2

            // border:'1px solid red'

        },
        add_btn: {
            // fontWeight: 900
            transform: 'rotate(225deg)',
            transition: '0.2s ease all',
            padding: 2

            // border:'1px solid yellow'

        }
    }
    const handleOpen = () => {
        setOpen(!open)
    }
    const handleSelect = () => {
        console.log('clicked')
    }

    return (
        <div style={{ position: 'fixed', bottom: 10, left: 10, }}>
            <IconButton size='large' style={{ color: 'white', background: "black", zIndex: 100, width:'105%',padding:'10px'}} onClick={handleOpen}>
                {/* <FontAwesomeIcon icon={'fa-plus'} style={styles[open ? "add_btn" : "addBtn"]} sx={{ fontSize: '32px', fontWeight: 900 }} /> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-plus" style={styles[open ? "add_btn" : "addBtn"]} sx={{ fontSize: '32px', fontWeight: 900 }}  /> */}
                <FontAwesomeIcon
                    icon={faPlus}
                    size='1x'
                    style={styles[open ? "add_btn" : "addBtn"]}
                />
            </IconButton>

            {
                contactButtons.map((item) =>
                    <div key={item.id} style={{ position: 'absolute', bottom: 2, zIndex: 90, left: open ? (55 * item.id) : 0, transition: `left 0.${3+item.id}s` }}>
                        <IconButton size='medium'
                        //  style={{  }} 
                         sx={{
                            color: 'white',
                            // background:`linear-gradient(white,${item.bgColor})`,
                            // background:`linear-gradient(${item.bgColor},white)`,
                            //  background: item.bgColor,
                             background: `linear-gradient(0deg,  white 47%, ${item.bgColor} 48%)`,
                            border:`3px solid ${item.bgColor}`, 
                            backgroundSize: "100% 200%",
                            transition:'background 0.5s',
                            // backgroundPosition: "50% 100%",
                            ':hover': {
                                // backgroundColor: 'white',
                                color:item.bgColor,
                                backgroundPosition: "100% 104%"
                                // transform:'rotate(-260deg)',
                                // transition:'background 0.5s',


                            }
                        }} onClick={handleSelect}>
                            {/* <Add sx={{ fontSize: '28px', fontWeight: 900 }} /> */}
                            {item.icon}

                        </IconButton>
                    </div>
                )
            }
        </div>
    )
}
