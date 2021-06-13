import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage.jsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/search" component={SearchPage} />
          <Route path="/" component={Home} />
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
