import React, { useState } from 'react';

import {
    Row,
    Col,
    Image,
    Button,
    Toast,
    Badge
} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import { 
    CircularGaugeComponent,
    AxesDirective,
    AxisDirective,
    PointersDirective,
    PointerDirective,
} from '@syncfusion/ej2-react-circulargauge';

import Logo from '../../assets/img/toyota.png'

import './style.scss'
// import "../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";

const Home = props => {
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => {
        setShowToast(false);
    }

    return (
        <div id="Home">
            {/* HEADER STARTS HERE */}
            <Row className="topbar">
                <Col xs={3}>
                    <Image src={Logo} fluid />
                </Col>
                <Col xs={6} style={{alignSelf: 'center'}}>
                    <Button size="sm" variant="dark">
                        <Badge variant="info" style={{ verticalAlign: "sub"}}>9,999</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button>
                </Col>
                <Col xs={3} className="has-button">
                    <Button variant="link">
                        <FontAwesomeIcon size="2x" icon={faBell} style={{color: 'white'}} />
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
            
            <Row style={{margin: '0.5em 0', padding: '0.75em 0'}}>
                <Col style={{ padding: 0 }}>
                    <CircularGaugeComponent 
                        id='circulargauge-1'
                        title='Fuel & Temperature'
                        height='200'
                    >
                        <AxesDirective>
                            <AxisDirective>
                                <PointersDirective>
                                    <PointerDirective value={35}></PointerDirective>
                                </PointersDirective>
                            </AxisDirective>
                        </AxesDirective>
                    </CircularGaugeComponent>
                </Col>
                <Col style={{ padding: 0 }}>
                    <CircularGaugeComponent
                        id='circulargauge-2'
                        title='Distance to Next Service'
                        height='200'
                    >
                        <AxesDirective>
                            <AxisDirective>
                                <PointersDirective>
                                    <PointerDirective value={35}></PointerDirective>
                                </PointersDirective>
                            </AxisDirective>
                        </AxesDirective>
                    </CircularGaugeComponent>
                </Col>
            </Row>
            <Row style={{margin: '0.5em 0'}}>
                <Col style={{ textAlign: 'left' }}>
                    <label>CAR DETAIL</label>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                    <Button variant="link" style={{padding: 0}}>View more</Button>
                </Col>
            </Row>

            <section class="card">
                <div class="card--content"></div>
                <div class="card--content"></div>
                <div class="card--content"></div>
                <div class="card--content"></div>
                <div class="card--content"></div>
                <div class="card--content"></div>
                <div class="card--content"></div>
                <div class="card--content"></div>
                <div class="card--content"></div>
                <div class="card--content"></div>
            </section>

            <Row style={{ margin: '2em 0', color: "grey" }}>
                <Col>
                    <Button variant="dark" block>ASdasd</Button>
                </Col>
                <Col>
                    <Button variant="dark" block>ASdasd</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Home