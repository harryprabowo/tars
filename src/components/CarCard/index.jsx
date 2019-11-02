import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLock,
    faUnlock
} from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const CarCard = props => {
    const { id, name, pictureUrl, locked, toggleLock } = props;
    return (
        <div className="card">
            <Row>
                <Col xs={4}>
                    <img src={pictureUrl} alt='Car preview'/>
                </Col>
                <Col className="description" xs={8}>
                    {name}
                </Col>
                <button className={`lock ${locked ? 'locked' : 'unlocked'}`} onClick={() => toggleLock(id)}>
                    <FontAwesomeIcon size="2x" icon={locked ? faLock : faUnlock} />
                </button>
            </Row>
        </div>
    )
}

export default CarCard