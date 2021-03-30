import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ExchangeRate from './views/exchangeRate'
import ExchangeComparison from './views/exchangeRateComparison'
import Menu from './views/menu'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/exchangeRate">
          <ExchangeRate />
        </Route>
        <Route exact path="/exchangeComparison">
          <ExchangeComparison />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
