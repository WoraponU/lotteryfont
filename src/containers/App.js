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
          <Route exact path='/'>
            <Redirect to={'/th'} />      
          </Route>         
          <Route path='/:lang'> 
            <div>
              <Header />
              <Switch>
                <Route exact path='' component={Home} />        
                <Route path='/our-work' component={Home} /> 
              </Switch> 
              <Footer />
            </div> 
          </Route>  
        </div>  
      </Router>
      <DevTools />
    </div>
  </Provider>
)
