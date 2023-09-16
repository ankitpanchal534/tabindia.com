import { Telegram } from '@mui/icons-material'
import React from 'react'

export default function TelegramFloatingButton() {
    return (
        <div style={{ position: 'fixed', bottom: '3vw', right: '2vw', height: 45, width: 45, background: '#20A0E1', borderRadius: '25px', padding: '5px 3px' }}>
            <a href='https://t.me/tabindia' target='_blank' >
                <Telegram fontSize='large' style={{ color: 'white', }} />
            </a>
        </div>
    )
}
