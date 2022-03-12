import React from 'react'

function Header() {
    return (
        <div className='header'>
            <a href="#">Gmail</a>
            <a href="#">Images</a>
            <i className="fa fa-bars" aria-hidden="true"></i>
            <img src="images/avatar.jpg" alt="" />
        </div >
    )
}

export default Header