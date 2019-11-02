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
        <>
            <Map center={[-6.2088, 106.8267]} zoom={12} height={240} />
            <div className='scroll-wrapper'>
                {cars.map(car => <CarCard {...car} toggleLock={toggleLock} />)}
            </div>
        </>
    )
}

export default Cars