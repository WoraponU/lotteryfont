import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import { configureStore } from 'Lib'
import { Home } from 'Components'

import DevTools from './DevTools'

import './App.scss'

const store = configureStore()

export default () => (

  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Redirect to={'/th'} />      
            </Route>         
            <Route path='/:lang' component={Home} />        
             <Route path='/:lang/our-work' component={Home} />         
          </Switch>   
        </div>
      </Router>
      <DevTools />
    </div>
  </Provider>
)
