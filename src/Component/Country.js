import React from 'react';
import './Countries.css';

const Country = (props) => {
    const { name, flag, capital, topLevelDomain } = props.country;
    return (
        <div className="country">
            <h2>{name}</h2>
            <img src={flag} alt="" />
            <h3>Capital: {capital}</h3>
            <h4>Country Domain: {topLevelDomain}</h4>

        </div>
    );
};

export default Country;