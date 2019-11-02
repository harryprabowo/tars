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
    faWheelchair,
    faKey,
    faStopCircle,
    faFan,
    faPlug,
    faFlask,
    faGasPump,
    faFire,
    faDotCircle,
    faCogs,
} from '@fortawesome/free-solid-svg-icons';
import {
    CircularGaugeComponent,
    AxesDirective,
    AxisDirective,
    PointersDirective,
    PointerDirective,
} from '@syncfusion/ej2-react-circulargauge';

import Logo from '../../assets/img/toyota.png';
import DetailCard from '../../components/DetailCard';

import './style.scss'
// import "../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";

const detail = [
    {
        'title': 'Tyres',
        'score': '3/7',
        'verdict': 'POOR',
        'icon': <FontAwesomeIcon size="2x" icon={faDotCircle} />
    },
    {
        'title': 'Starter',
        'score': '4/9',
        'verdict': 'POOR',
        'icon': <FontAwesomeIcon size="2x" icon={faKey} />
    },
    {
        'title': 'Braking',
        'score': '5/6',
        'verdict': 'OK',
        'icon': <FontAwesomeIcon size="2x" icon={faStopCircle} />
    },
    {
        'title': 'Belts',
        'score': '7/7',
        'verdict': 'GOOD',
        'icon': <FontAwesomeIcon size="2x" icon={faWheelchair} />
    },
    {
        'title': 'Cooling',
        'score': '7/7',
        'verdict': 'GOOD',
        'icon': <FontAwesomeIcon size="2x" icon={faFan} />
    },
    {
        'title': 'Electronics',
        'score': '8/8',
        'verdict': 'GOOD',
        'icon': <FontAwesomeIcon size="2x" icon={faPlug} />
    },
    {
        'title': 'Engine Lubrication',
        'score': '7/7',
        'verdict': 'GOOD',
        'icon': <FontAwesomeIcon size="2x" icon={faFlask} />
    },
    {
        'title': 'Fueling and Injection',
        'score': '7/7',
        'verdict': 'GOOD',
        'icon': <FontAwesomeIcon size="2x" icon={faGasPump} />
    },
    {
        'title': 'Ignition and Electricity',
        'score': '7/7',
        'verdict': 'GOOD',
        'icon': <FontAwesomeIcon size="2x" icon={faFire} />
    },
    {
        'title': 'Other',
        'score': '7/7',
        'verdict': 'GOOD',
        'icon': <FontAwesomeIcon size="2x" icon={faCogs} />
    },
]

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
                <Col xs={6} style={{ alignSelf: 'center' }}>
                    <Button size="sm" variant="dark">
                        <Badge variant="info" style={{ verticalAlign: "sub" }}>9,999</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button>
                </Col>
                <Col xs={3} className="has-button">
                    <Button variant="link">
                        <FontAwesomeIcon size="2x" icon={faBell} style={{ color: 'white' }} />
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

            <Row style={{ padding: '1em 0' }}>
                <Col style={{ padding: 0 }}>
                    <CircularGaugeComponent
                        id='circulargauge-1'
                        title='FUEL & TEMP.'
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
                        title='KM UNTIL SERVICE'
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
            <Row style={{ margin: '0.5em 0' }}>
                <Col style={{ textAlign: 'left' }}>
                    <label>CAR DETAIL</label>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                    <Button size="sm" variant="link" style={{ marginBOttom: '8px' }}>View more</Button>
                </Col>
            </Row>
            
            <section class="card">
                {detail.map((props) => (<DetailCard {...props} />))}
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