import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'

import { configureStore } from 'Lib'
import { Footer } from 'Containers/common'
import { Home } from 'Components'
import DevTools from './DevTools'

import './App.scss'

const store = configureStore()

export default () => (

  <Provider store={store}>
    <div>
      <Switch>
        <Route path='/:lang' exact component={Home} />
        <Redirect to="/not-found" />      
      </Switch> 
     
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
