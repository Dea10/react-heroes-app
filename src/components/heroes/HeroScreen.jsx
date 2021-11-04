import React from 'react';
import { Redirect, useParams, useHistory } from 'react-router';
import { heroesImages } from '../../helpers/heroesImages';
import getHeroById from '../../selectors/getHeroById';

const HeroScreen = () => {
    const history = useHistory();
    const { heroId } = useParams();
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = getHeroById( heroId );

    const handleOnBack = () => {
        history.goBack();
    }

    if( !superhero ) return <Redirect to={'/'} />

    return (
        <div className='row'>
            <div className='col-sm-4'>
                <img src={heroesImages(`./${ heroId }.jpg`).default} className="img-thumbnail img-fluid" alt={ superhero } />
            </div>
            <div className='col-sm-4'>
                <h3>{ superhero }</h3>
                <p>First appeareance: { first_appearance }</p>
                <p>Alter ego: { alter_ego }</p>
                <p>Characters: { characters }</p>
                <p>Publisher: { publisher }</p>
                <button className='btn btn-primary' onClick={handleOnBack}> Back </button>
            </div>
        </div>
    );
}

export default HeroScreen;