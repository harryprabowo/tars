import React from 'react';

import './style.scss';

const DetailCard = props => {
    const { title, score, verdict, icon } = props;
    return (
        <div className="detail-card">
            <div className={`score ${verdict.toLowerCase()}`}>
                {icon}
                <div className="verdict">{verdict}</div>
                {score}
            </div>
            <div className="bold">{title}</div>
        </div>
    )
}

export default DetailCard