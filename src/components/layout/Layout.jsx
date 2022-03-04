import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
    return (
        <div>
            <Header />
            <div className='content'>
                <h1>{props.title}</h1>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
