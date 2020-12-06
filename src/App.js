import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header.component'
import HelloFromRouter from './components/hello-from-router'
import HomePage from './pages/homepage/homepage'
import Footer from './components/footer/footer.component'

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/hello" component={HelloFromRouter} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
