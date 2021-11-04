import { heroes } from '../data/heroes';

const getHeroesByPublisher = ( publisher ) => {


    return heroes
                .filter(hero => hero.publisher === publisher)
                .sort((firstEl, secondEl) => firstEl.superhero.localeCompare(secondEl.superhero));
}

export default getHeroesByPublisher;