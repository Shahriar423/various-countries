import React from 'react';
import './Countries.css';

const Country = (props) => {
    return (
        <div className="country">
            <h1>{props.name}</h1>
            <h3>Capital: {props.capital}</h3>
            <h4>Country Domain: {props.topLevelDomain}</h4>
        </div>
    );
};

export default Country;