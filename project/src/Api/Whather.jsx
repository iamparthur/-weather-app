import React from 'react';

const Whather = ({pressure, sunset, country, temp, city, error}) => (
    <div className="container__whather-wrapper">
    {city &&
    <div className="container__whather">
        <p>Город: {city}, {country}</p>
        <p>Температура: {temp}</p>
        <p>Давление: {pressure}</p>
        <p>Закат: {sunset}</p>  
    </div>
    }
    <div className="container__whater-error">
        <p className="whater__error">{error}</p>
    </div>
</div>
)

export default Whather;