import React from 'react';

const Form = ({weatherMethod}) => (
        <form onSubmit={weatherMethod} className="form">
            <input className="input" type="text" name="city" placeholder="Город"/>
            <button className="button" >Получть погоду</button>
        </form>
)

export default Form;

