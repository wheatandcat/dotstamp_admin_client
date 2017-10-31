// @flow
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Provider from "./Provider"
import ContributionList from "./components/Contribution/List"
import Home from "./components/Home"

export default () => (
  <Provider>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/contributionList' component={ContributionList} />
      </div>
    </Router>
  </Provider>
)
