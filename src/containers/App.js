import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  // Switch
} from 'react-router-dom'

import { configureStore } from 'Lib'
import { Home } from 'Components'
import { Header } from 'Components/common'
import { Footer } from 'Containers/common'

import DevTools from './DevTools'

import './App.scss'

const store = configureStore()

export default () => (

  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Redirect exact from='/' to={'/th'} />                
          <Route path='/:lang'>
            <div>
              <Route path='/' component={Header} />     

              <Route exact path='' component={Home} />            

              <Route path='/' component={Footer} />        
            </div>
          </Route>
        </div>
      </Router>
      <DevTools />
    </div>
  </Provider>
)
