import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from 'react-router-dom'

import { configureStore } from 'Lib'
import { Home } from 'Components'
import { Header } from 'Components/common'
import { WorkDetail, OurWorks } from 'Components/ourWorkSections'
import { Footer } from 'Containers/common'

import DevTools from './DevTools'

import './App.scss'
 


const store = configureStore()

export default () => (
  <Provider store={store}>
    <div>
      <Router>
        <div>
          {/* <Route exact path='/'>
            <Redirect to={'/th'} />      
          </Route>          */}
          <Route path='/:lang'> 
            <div>
              <Header />
              <Switch>
                <Route exact path='' component={WorkDetail} />        
                <Route path='/our-work' component={OurWorks} /> 
                <Route path='/workdetail' component={ WorkDetail } />
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
