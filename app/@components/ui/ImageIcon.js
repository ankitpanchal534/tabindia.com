import React from 'react'

export default function ImageIcon({url,size,style,alt}) {
  
    let sizes ={
        small:20,
        medium:30,
        large:40,
        xl:60,
    }
  
    return (
        <img src={url} height={sizes[size] ??'auto'} width={sizes[size] ??'auto'} style={{objectFit:'contain',...style}} alt={alt||"icon"}/>
)
}
