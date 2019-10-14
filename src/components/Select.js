import React, { useState } from 'react'
import './Select.css'

const Select = props => {

    const [values, setValues] = useState([])

    let arr = []

    const onChange = e => {
        arr.push(e.target.value)
        setValues(arr)
        console.log(arr)
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
            <datalist className="datalist" id="languages">
                <div className="datalist__items">
                    <option className="datalist__items-item" value="HTML"></option>
                    <option className="datalist__items-item" value="CSS"></option>
                    <option className="datalist__items-item" value="JavaScript"></option>
                    <option className="datalist__items-item" value="Java"></option>
                    <option className="datalist__items-item" value="Ruby"></option>
                    <option className="datalist__items-item" value="PHP"></option>
                    <option className="datalist__items-item" value="Go"></option>
                    <option className="datalist__items-item" value="Erlang"></option>
                    <option className="datalist__items-item" value="Python"></option>
                    <option className="datalist__items-item" value="C"></option>
                    <option className="datalist__items-item" value="C#"></option>
                    <option className="datalist__items-item" value="C++"></option>
                </div>
            </datalist>
        </div>
    )
}

export default Select