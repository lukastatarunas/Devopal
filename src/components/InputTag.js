import React, { useState } from 'react'
import './InputTag.css'

const InputTag = props => {
  
  const [tags, setTags] = useState([])

  const removeTag = i => {
    const newTags = [ ...tags ]
    newTags.splice(i, 1)
    setTags(newTags)
  }

  const inputKeyDown = e => {
    const val = e.target.value
    if (e.key === 'Enter' && val) {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return
      }
      setTags([...tags, val])
      e.target.value = null
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1)
    }
  }

  let component

  if (1) {
    component = <div className="input-tag">
      <ul className="input-tag__tags">
        { tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button type="button" onClick={() => { removeTag(i) }}>+</button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input type="email" list="languages" onKeyDown={inputKeyDown} />
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
        </li>
      </ul>
    </div>
  }

  else {
    component = <div className="input-tag">
      <ul className="input-tag__tags">
        <li className="input-tag__tags__input">
          <input type="email" list="languages" />
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
        </li>
      </ul>
    </div>
  }

  return (
    <div className="App">
      <div className="input-tag">
        <ul className="input-tag__tags">
          { tags.map((tag, i) => (
            <li key={tag}>
              {tag}
              <button type="button" onClick={() => { removeTag(i) }}>+</button>
            </li>
          ))}
          <li className="input-tag__tags__input">
            <input type="email" list="languages" onKeyDown={inputKeyDown} />
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
          </li>
        </ul>
      </div>
    </div>
  )
}

export default InputTag