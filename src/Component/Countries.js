import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>All Countries: {countries.length}</h1>
            {
                countries.map(country => <Country name={country.name} capital={country.capital} topLevelDomain={country.topLevelDomain}></Country>)
            }

        </div>
    );
};

export default Countries;