import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from 'react-router-dom'

import { configureStore } from 'Lib'
import { Footer } from 'Containers/common'
import { Home } from 'Components'
import DevTools from './DevTools'

import './App.scss'

const store = configureStore()

export default () => (

  <Provider store={store}>
    <div>
      <Router>
        <Switch>
          {/* <Redirect from='/' to="/th" />              */}
          <Route path='/:lang' name="home" component={Home} />
        </Switch>
      </Router>

              {/* <Route path='/:lang'>
          <Switch>
            <Route path='' name="home" something="foo" component={Home} />
            {/* <Route path='/our-work' component={Home} />
          </Switch> 
        </Route> */}

        {/* <Redirect to="/not-found" />       
     
      {/* <Switch>
      </Switch>        */}
        {/*<Route path='/test' component={Test} />
        <Route path='/login' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/articles/new' component={CreateArticle} />
        <Route path='/articles/:id/edit' component={EditArticle} />
        <Route path='/articles/:id' component={ShowArticle} />
        <Route path='/articles' component={Articles} />*/}
      <DevTools />
      <Footer />
    </div>
  </Provider>
)
