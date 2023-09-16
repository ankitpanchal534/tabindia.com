import { Add, Call, Email, Message, WhatsApp } from '@mui/icons-material'
import { Icon, IconButton } from '@mui/material'
import React, { useState } from 'react'

export default function FloatingButtons() {
    const [open, setOpen] = useState(true)

let contactButtons =[
    {
        id:1,
        icon:<Call sx={{ fontSize: '28px', fontWeight: 900 }} />,
        bgColor:'#3B5998',
    },
    {
        id:2,
        icon:<Email sx={{ fontSize: '28px', fontWeight: 900 }} />,
        bgColor:'#55ACEE',
    },
    {
        id:3,
        icon:<WhatsApp sx={{ fontSize: '28px', fontWeight: 900 }}/>,
        bgColor:'#25D366',
    }
]

    const styles = {
        addBtn: {
            transform: 'rotate(0deg)',
            transition: "0.2s ease all",

            // border:'1px solid red'

        },
        add_btn: {
            // fontWeight: 900
            transform: 'rotate(225deg)',
            transition: '0.2s ease all',
            // border:'1px solid yellow'

        }
    }
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div style={{ position: 'fixed', bottom: 10, left: 10 ,}}>
            <IconButton size='large' style={{ color: 'white', background: "black" ,zIndex:100}} onClick={handleOpen}>
                <Add style={styles[open ? "add_btn" : "addBtn"]} sx={{ fontSize: '32px', fontWeight: 900 }} />
            </IconButton>

            {
                contactButtons.map((item) =>
                    <div key={item.id} style={{ position: 'absolute',  bottom: 2,zIndex:90,left: open?(58 * item.id):0,  transition: 'left 1s' }}>
                        <IconButton size='large'  style={{ color: 'white', background: item.bgColor }} onClick={handleOpen}>
                            {/* <Add sx={{ fontSize: '28px', fontWeight: 900 }} /> */}
                            {item.icon}
                            
                        </IconButton>
                    </div>
                )
            }
        </div>
    )
}
