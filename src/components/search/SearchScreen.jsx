import React, { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../heroes/HeroCard";
import { useHistory, useLocation } from "react-router";
import queryString from 'query-string';
import { getHeroesByName } from "../../selectors/getHeroesByName";


const SearchScreen = () => {
    const history = useHistory();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const [{ search }, handleInputChange ] = useForm({
        search: q
    });
    // const filteredHeroes = getHeroesByName(search);
    const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

    const searchHeroes = (event) => {
        event.preventDefault();
        history.push(`?q=${search}`)
    }

    return (
        <div className="row">
            <div className="col-md-5">
                <div className="row g-3 align-items-center">
                    <form onSubmit={searchHeroes}>
                        <div className="col-auto">
                            <label className="col-form-label">Search</label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                id="inputSearch"
                                className="form-control"
                                name="search"
                                onChange={handleInputChange}
                                value={search || ""}
                                autoComplete='off'
                            />
                        </div>
                        <button className='btn btn-primary' type='submit' > Search </button>
                    </form>
                </div>
            </div>
            <div className="col-md-7">
                {
                    filteredHeroes.map(hero => <HeroCard  key={hero.id} { ...hero } />)
                }
            </div>
        </div>
    );
};

export default SearchScreen;
