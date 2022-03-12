import React from 'react'


export default function FooterLink(porps) {
    return (
        <li>
            <a href={porps.url}>{porps.title}</a>
        </li>
    )
}

//about, privacy, contact