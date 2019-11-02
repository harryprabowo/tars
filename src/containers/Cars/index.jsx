import React, { useState } from 'react';
import Map from 'pigeon-maps';

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
    faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/img/toyota.png'

import CarCard from '../../components/CarCard';
import './style.scss';

const carsDummy = [
    {
        id: 1,
        name: 'Toyota Supra',
        pictureUrl: 'https://asset.kompas.com/crops/lFtLiZSSEKBqwxG9M8qtWl9PAvU=/180x91:1220x784/750x500/data/photo/2019/06/23/4035645934.jpg',
        locked: true,
        overallScore: 87,
        history: [
            {
                from: 'Candi Bentar Hall',
                to: 'Pancoran Riverside Apartment',
                distance: '7.6 km',
                datetime: '2 November 2019, 19.40 - 20.08',
                fuel: '13.8 L/km',
                occassion: 'Personal',
            },
            {
                from: 'Pancoran Riverside Apartment',
                to: 'Candi Bentar Hall',
                distance: '7.5 km',
                datetime: '2 November 2019, 18.01 - 18.34',
                fuel: '24.5 L/km',
                occassion: 'Personal',
            }
        ],
    },
    {
        id: 2,
        name: 'Toyota Avanza',
        pictureUrl: 'https://images.summitmedia-digital.com/topgear/images/2019/05/14/2019-toyota-avanza-main-temp-1557805092.jpg',
        locked: false,
        overallScore: 54,
        history: [
            {
                from: 'Candi Bentar Hall',
                to: 'Pancoran Riverside Apartment',
                distance: '7.6 km',
                datetime: '2 November 2019, 19.40 - 20.28',
                fuel: '23.8 L/km',
                occassion: 'Car Sharing',
            },
            {
                from: 'Pancoran Riverside Apartment',
                to: 'Candi Bentar Hall',
                distance: '7.5 km',
                datetime: '2 November 2019, 18.01 - 18.54',
                fuel: '28.5 L/km',
                occassion: 'Car Sharing',
            },
            {
                from: 'Tokopedia Tower',
                to: 'Pancoran Riverside Apartment',
                distance: '11.0 km',
                datetime: '2 November 2019, 16.01 - 16.52',
                fuel: '22.5 L/km',
                occassion: 'Personal',
            }
        ],
    }
]

const Cars = () => {
    const [cars, setCars] = useState(carsDummy);

    const toggleLock = (id) => {
        setCars(cars.map(car => car.id === id ? ({ ...car, locked: !car.locked }) : car));
    }

    return (
        <div id="Cars">
            {/* HEADER STARTS HERE */}
            <Row className="topbar">
                <Col xs={3}>
                    <Image src={Logo} fluid />
                </Col>
                <Col xs={7} style={{ alignSelf: 'center' }}>
                    {/* <Button size="sm" variant="dark">
                        <Badge variant="info" style={{ verticalAlign: "sub"}}>9,999</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button> */}
                    <label style={{ marginRight: 0 }}>
                        <Badge variant="dark" style={{ fontSize: '12pt', marginRight: '1em' }}>B 1 RI</Badge>
                        <br />
                        <span style={{ marginRight: '1em', fontWeight: 100, color: 'rgba(255,255,255,0.8)' }}>TOYOTA SUPRA</span>
                    </label>
                    <FontAwesomeIcon icon={faChevronCircleDown} style={{ opacity: '0.3', verticalAlign: 'super' }} />
                </Col>
                <Col xs={2} className="has-button">
                    <Button variant="link">
                        <FontAwesomeIcon size="2x" icon={faBell} style={{ color: 'white' }} />
                    </Button>
                </Col>
            </Row>
            {/* HEADER ENDS HERE */}

            {/* <Map center={[-6.2088, 106.8267]} zoom={12} height={240} /> */}
            <div className='scroll-wrapper horizontal-cardlist'>
                {cars.map(car => <CarCard {...car} toggleLock={toggleLock} />)}
            </div>
        </div>
    )
}

export default Cars