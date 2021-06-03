import React from 'react';

export const InputGroup = (props) => {
    return (
        <div>
            <input onChange={props.onChange} name="first_name" type="text" />
            <input onChange={props.onChange} name="second_name" type="text" />
            <input onChange={props.onChange} name="email" type="text" />
            <button onClick={props.onClick}>Click</button>
        </div>
    );
};

// export default InputGroup;