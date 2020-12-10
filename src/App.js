import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage'
import Footer from './components/footer/footer.component'
import ContentPage from './pages/content-page/content-page'

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/page/:pageName' component={ContentPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
