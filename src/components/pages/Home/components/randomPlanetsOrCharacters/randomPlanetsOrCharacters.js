import React from "react";
import Spinner from '../spinner/spinner';
import './planet.css';

const randomPlanetsOrCharacters = ({planetButtons, planetLoading, planetInfo, planetFilter}) => {

    if (planetLoading) {
        return (
            <div className='section-5'>
                <div className="container">
                    <div className="random-planet jumbotron rounded">
                        <Spinner/>
                    </div>
                </div>
            </div>)
    }

    return (
        <div className='section-5'>
            <div className="container">
                <div className='button-block'>
                    {planetButtons}
                </div>
                <div className="random-planet jumbotron rounded">

                    {planetLoading ? <Spinner/> :
                        <img className="planet-image" alt={'test'}
                             src={`https://starwars-visualguide.com/assets/img/${planetFilter}/${planetInfo.id}.jpg`}/>
                    }
                    <div>
                        <h4>{planetInfo.name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Population</span>
                                <span>{planetInfo.ell1}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Rotation Period</span>
                                <span>{planetInfo.ell2}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter</span>
                                <span>{planetInfo.ell3}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default randomPlanetsOrCharacters;