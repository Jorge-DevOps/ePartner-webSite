import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {
  Home,
  Nosotros,
  Partners,
  Contactenos,
  Servicios,
  Empleo
} from './pages'


function App() {
  return (
    <Router>
      <Switch>
      <Redirect exact from='/' to='/home' />
        <Route exact path='/home' component={Home} />
        <Route exact path='/nosotros' component={Nosotros} />
        <Route exact path='/partners' component={Partners} />
        <Route exact path='/partners' component={Partners} />
        <Route exact path='/contactenos' component={Contactenos} />
        <Route exact path='/servicios' component={Servicios} />
        <Route exact path='/empleo' component={Empleo} />


      </Switch>
    </Router>
  )
}

export { App }