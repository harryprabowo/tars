import React from 'react'

import {
    NavLink
} from 'react-router-dom'

import './style.scss'

const Navbar = props => {
    const { links } = props

    return (
        <div className="navbar">
            {
                links.map((link, key) => (
                    <NavLink exact to={link.path} activeClassName="active">
                        <div className="navbar-button">{link.icon}</div>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default Navbar