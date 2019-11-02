import React from 'react'
import {
    Row,
    Col,
} from 'react-bootstrap'

import './style.scss'

// SidebarButton object prototype
class ButtonPrototype {
    constructor(link, name, icon) {
        this.link = link;
        this.name = name;
        this.icon = icon;
    }
}

// Company logo
const Logo = props => {
    return (
        <div className="sidebar-logo">
            {props.children}
        </div>
    )
}

// Sidebar container component
const Container = props => {
    return (
        <Row>
            <Col sm={8} id="Sidebar">
                <ul>
                    {props.children}
                </ul>
            </Col>
            <Col id="hide">
                awerawer
            </Col>
        </Row>
    )
}

// Sidebar button component
const Button = props => {
    return (
        <li>
            <div className="sidebar-button">{props.children}</div>
        </li>
    )
}

export default {
    ButtonPrototype,
    Container,
    Logo,
    Button
}