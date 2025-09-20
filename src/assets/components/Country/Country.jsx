import React, { useState } from 'react';
import './Country.css';

const Country = ({country, hanleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);
    const handleClick = ()=>{
        if (visited) {
            setVisited(false)
        }else{
            setVisited(true)
            hanleVisitedCountries(country)
        }
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Area: {country.area.area} {country.area.area > 300000 ? <p>Big Country</p> : <p>Small Country</p>}</p>
               
            <button onClick={handleClick}>
            {
                    visited ? "Visited" : "Not Visited"
                }
            </button>
        </div>
    );
};

export default Country;