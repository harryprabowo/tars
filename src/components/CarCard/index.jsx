import React from 'react';
import { 
    Row,
    Col,
    Image
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLock,
    faUnlock,
} from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const scoreColor = (score) => {
    let color;
    if (score < 50) color = 'red';
    else if (score < 80) color = 'yellow';
    else color = 'green';

    return color;
}

const CarCard = props => {
    const { id, name, pictureUrl, locked, overallScore, history, toggleLock } = props;
    return (
        <div className="card">
            <Row>
                <Col>
                    <Image src={pictureUrl} alt='Car preview' style={{width:'100%'}}/>
                </Col>
            </Row>
            <Row>
                <Col className="description" xs={8}>
                    <div className="car-name">{name}</div>
                    <div className={`car-score`}>Overall score: {<span className={scoreColor(overallScore)}>{overallScore}</span>}/100</div>
                </Col>
                <button className={`lock ${locked ? 'locked' : 'unlocked'}`} onClick={() => toggleLock(id)}>
                    <FontAwesomeIcon size="2x" icon={locked ? faLock : faUnlock} />
                </button>
                {history.map(history =>
                    <div className="trip-history">
                        <Row>
                            <Col>{history.datetime}</Col>
                            <Col>{history.occassion}</Col>
                        </Row>
                        <Row>
                            <Col>{history.from}</Col>
                            <Col>{history.to}</Col>
                        </Row>
                        <Row>
                            <Col>{history.distance}</Col>
                            <Col>{history.fuel}</Col>
                        </Row>
                    </div>
                )}
            </Row>
        </div>
    )
}

export default CarCard