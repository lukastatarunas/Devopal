import React from 'react';
import './Select.css';

const Select = props => {
    
    const onChange = e => {
        console.log(e.target.value)
    }

    let input

    if (props.multipleOptions) {
        input = <input className="dropdown" type="email" list="languages" onChange={onChange} multiple />
    }

    else {
        input = <input className="dropdown" type="text" list="languages" onChange={onChange} />
    }

    return (
        <div className="App">
            {input}
            <datalist id="languages">
                <option value="HTML"></option>
                <option value="CSS"></option>
                <option value="JavaScript"></option>
                <option value="Java"></option>
                <option value="Ruby"></option>
                <option value="PHP"></option>
                <option value="Go"></option>
                <option value="Erlang"></option>
                <option value="Python"></option>
                <option value="C"></option>
                <option value="C#"></option>
                <option value="C++"></option>
            </datalist>
        </div>
    );
}

export default Select;