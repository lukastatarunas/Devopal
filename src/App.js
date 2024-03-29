import React, { useState } from 'react'
import './App.css'
import Select from './components/Select'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const App = () => {

  const [multipleOptions, setMultipleOptions] = useState(false)

  const setOnlyOption = () => {
    setMultipleOptions(false)
  }

  const setMultipleOption = () => {
    setMultipleOptions(true)
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link onClick={setOnlyOption} className="link" to="/one">Select One Option</Link>
            </li>
            <li>
              <Link onClick={setMultipleOption} className="link" to="/multiple">Select Multiple Options</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/one">
            <Select multipleOptions={multipleOptions} />
          </Route>
          <Route path="/multiple">
            <Select multipleOptions={multipleOptions} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App