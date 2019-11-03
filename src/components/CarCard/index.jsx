import React from 'react';
import { 
    Row,
    Col,
    Image,
    Badge
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLock,
    faUnlock,
    faLongArrowAltRight,
    faLeaf,
    faCogs,
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

            <div className="car-detail">
                <Row>
                    <Col className="description">
                        <Row>
                            <Col xs={9}>
                                <div className="car-name">
                                    {name}
                                    <Badge variant="success" style={{ margin: '0 1em' }}>{overallScore}/100</Badge>
                                </div>
                                <div>B123123123/XVII/2019/1203</div>
                                <label>Distance driven: 12345 KM</label>
                            </Col>
                            <Col xs={3}>
                                <button className={`lock ${locked ? 'locked' : 'unlocked'}`} onClick={() => toggleLock(id)}>
                                    <FontAwesomeIcon size="lg" icon={locked ? faLock : faUnlock} />
                                </button>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <Row>
                    <Col style={{ textAlign: 'left', marginLeft: '1em', opacity: '0.7' }}>
                        <label>TRIP HISTORY</label>
                    </Col>

                    {history.map(history =>
                        <div className="trip-history">
                            <Row>
                                <Col>{history.datetime}</Col>
                                <Col><label>{history.occassion.toUpperCase()}</label></Col>
                            </Row>
                            <Row>
                                <Col>{history.from}</Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                                </Col>
                                <Col>{history.to}</Col>
                            </Row>
                            <Row>
                                <Col>{history.distance}</Col>
                                <Col>{history.fuel}</Col>
                            </Row>
                            <Row className='history-score'>
                                {history.ecodriving && <span className="badge"><FontAwesomeIcon size="lg" icon={faLeaf} /></span>}
                                {history.enginesafe && <span className="badge"><FontAwesomeIcon size="lg" icon={faCogs} /></span>}
                            </Row>
                        </div>
                    )}
                </Row>
            </div>
        </div>
    )
}

export default CarCard