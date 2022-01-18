import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import TextEditor from './components/TextEditor';
import { v4 as uuidv4 } from 'uuid';



const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to= {`/document/ ${uuidv4()}`}/>
          </Route>
          <Route path="/document/:id" exact component={TextEditor} />


        </Switch>

      </Router>
    </div>
  )
}

export default App

