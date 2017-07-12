import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'

import { configureStore } from 'Lib'
import { Header } from 'Containers'
import { Home } from 'Components'
import DevTools from './DevTools'

import './App.scss'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        {/*<Route path='/test' component={Test} />
        <Route path='/login' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/articles/new' component={CreateArticle} />
        <Route path='/articles/:id/edit' component={EditArticle} />
        <Route path='/articles/:id' component={ShowArticle} />
        <Route path='/articles' component={Articles} />*/}
      </Switch>
      <DevTools />
    </div>
  </Provider>
)
