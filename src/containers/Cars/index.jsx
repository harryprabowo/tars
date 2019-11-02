import React, { useState } from 'react';
import Map from 'pigeon-maps';

import CarCard from '../../components/CarCard';
import './style.scss';

const carsDummy = [
    {
        id: 1,
        name: 'Toyota Supra',
        pictureUrl: 'https://asset.kompas.com/crops/lFtLiZSSEKBqwxG9M8qtWl9PAvU=/180x91:1220x784/750x500/data/photo/2019/06/23/4035645934.jpg',
        locked: true,
    },
    {
        id: 2,
        name: 'Toyota Avanza',
        pictureUrl: 'https://images.summitmedia-digital.com/topgear/images/2019/05/14/2019-toyota-avanza-main-temp-1557805092.jpg',
        locked: false,
    }
]

const Cars = props => {
    const [cars, setCars] = useState(carsDummy);

    const toggleLock = (id) => {
        setCars(cars.map(car => car.id === id ? ({ ...car, locked: !car.locked }) : car));
    }

    return (
        <>
            <Map center={[50.879, 4.6997]} zoom={12} height={240} />
            <div className='scroll-wrapper'>
                {cars.map(car => <CarCard {...car} toggleLock={toggleLock} />)}
            </div>
        </>
    )
}

export default Cars