import React from 'react';
import HeroesList from '../heroes/HeroesList';
import { PUBLISHER } from '../heroes/HeroesList';

const DcScreen = () => {
    return (
        <div>
            <h1>DC</h1>
            <HeroesList publisher={PUBLISHER.dc} />
        </div>
    );
}

export default DcScreen;