import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'

import { configureStore } from 'Lib'
import { Header } from 'Components/common'
import { WorkDetail, OurWorks } from 'Components/ourWorksSections'
import { Home } from 'Components'

import { Footer } from 'Containers/common'

import DevTools from './DevTools'

import './App.scss'
 


const store = configureStore()

export default () => (

  <Provider store={store}>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/work' component={OurWorks} />
        <Route path='/workdetail' component={ WorkDetail } />
        {/*<Route path='/test' component={Test} />
        <Route path='/login' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/articles/new' component={CreateArticle} />
        <Route path='/articles/:id/edit' component={EditArticle} />
        <Route path='/articles/:id' component={ShowArticle} />
        <Route path='/articles' component={Articles} />*/}
      </Switch>
      <DevTools />
      <Footer />
    </div>
  </Provider>
)
