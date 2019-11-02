import React, { useState } from 'react';

import {
    Row,
    Col, 
    Image,
    Button,
    Toast
} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCar,
} from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/img/toyota.png'

import './style.scss'

const Home = props => {
    const [showToast, setShowToast] = useState(true);

    const toggleShowToast = () => {
        setShowToast(false);
    }

    return (
        <div id="Home">
            {/* HEADER STARTS HERE */}
            <Row className="topbar">
                <Col xs={3}>
                    <Image src={Logo} fluid/>
                </Col>
                <Col xs={6}>asdasdasd</Col>
                <Col xs={3} className="has-button">
                    <Button variant="link">
                        <FontAwesomeIcon size="2x" icon={faBell} />
                    </Button>
                </Col>
            </Row>
            {/* HEADER ENDS HERE */}

            <Row>
                <Col>
                    <Toast show={showToast} onClose={toggleShowToast} style={{ display: showToast ? 'block' : 'none' }}>
                        <Toast.Header>
                            <span className="mr-auto">Bootstrap</span>
                            {/* <small>11 mins ago</small> */}
                        </Toast.Header>
                    </Toast>
                </Col>
            </Row>
            <Row>
                <Col>asdasdasd</Col>
                <Col>asdasdasd</Col>
                <Col>asdasdasd</Col>
            </Row>
        </div>
    )
}

export default Home