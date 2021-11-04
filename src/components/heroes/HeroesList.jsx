import React, { useMemo } from 'react';
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

import styles from './HeroesList.module.css';

export const PUBLISHER = {
    dc: 'DC Comics',
    marvel: 'Marvel Comics'
}

const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]);
    
    return (
        <div className={styles.test}>
           {
               heroes.map( (hero, idx) => (
                   <HeroCard key={idx} { ...hero } /> 
               ))
           } 
        </div>
    )
}

export default HeroesList;