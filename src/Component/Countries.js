import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>All Countries!</h1>
        </div>
    );
};

export default Countries;