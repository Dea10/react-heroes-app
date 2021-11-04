import React from 'react';
import HeroesList from '../heroes/HeroesList';
import { PUBLISHER } from '../heroes/HeroesList';

const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Screen</h1>
            <HeroesList publisher={ PUBLISHER.marvel } />
        </div>
    );
}

export default MarvelScreen;