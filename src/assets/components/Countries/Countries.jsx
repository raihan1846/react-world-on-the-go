import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const hanleVisitedCountries = (country)=>{
        console.log("visitedCountries", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>Hello World: {countries.length}</h1>
            <p>Total country visited: {visitedCountries.length}</p>
            <ol>
                {
                    visitedCountries.map(country=><li>{country.name.common}</li>)
                }
            </ol>
           <div className='countries'>
           {
                countries.map(country => <Country country={country}
                    hanleVisitedCountries={hanleVisitedCountries}
                ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;