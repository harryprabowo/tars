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
} from '@fortawesome/free-solid-svg-icons';
import { 
    CircularGaugeComponent,
    AxesDirective,
    AxisDirective,
    PointersDirective,
    PointerDirective,
    Inject
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
                <Col xs={{ span: 4, offset: 1 }}>
                    sdsdf
                </Col>
                <Col xs={{ span: 3, offset: 1 }} className="has-button">
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
        </div>
    )
}

export default Home