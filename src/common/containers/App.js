import React from 'react'
import { Provider } from 'react-redux'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { configureStore } from 'Lib'
import { Home } from 'Components'

import DevTools from './DevTools'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
 
const store = configureStore()

export default () => (
  <Provider store={store}>
    <div>
      <div className="main">
        <Route exact path="/" render={() => (
          <Redirect to="/th"/>
        )}/>   

        {/* <Route path='/:lang' component={Header} />                                     */}
        <ReactCSSTransitionGroup
          transitionName="transition"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={100}>
          <Switch key={location.pathname} location={location}>
            <Route exact path='/:lang' component={Home} />    
            {/* <Route path='/:lang/our-work/:id' component={WorkDetail} />                             
            <Route path='/:lang/our-work' component={OurWorks} /> 
            <Route path='/:lang/aboutUs' component={About} /> 
            <Route path='/:lang/contact' component={Contact} />  
            <Route path='/:lang/clients' component={Clients} />   */}
            
          </Switch> 
        </ReactCSSTransitionGroup>
        {/* <Route path='/:lang' component={Footer} />   */}
      </div>
      <DevTools />
    </div>
  </Provider>
)
