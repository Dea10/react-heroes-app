import React from "react";
import { Link } from "react-router-dom";
import { heroesImages } from "../../helpers/heroesImages";

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card mb-3" style={{maxWidth: 400, padding: 0}}>
    <div className="row g-0">
      <div className="col-md-4">
        {/* <img src={`assets/heroes/${id}.jpg`} className="img-fluid rounded-start" alt={ superhero } /> */}
        <img src={heroesImages(`./${ id }.jpg`).default } className="img-fluid rounded-start" alt={ superhero } />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{ superhero }</h5>
          <p className="card-text">{ characters }</p>
          <p className="card-text"><small className="text-muted">{ first_appearance }</small></p>
          <Link to={`/hero/${ id }`}><button type="button" className="btn btn-info">More</button></Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeroCard;
