import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {MovieDetail} from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </main>
  );
}

export default App;
