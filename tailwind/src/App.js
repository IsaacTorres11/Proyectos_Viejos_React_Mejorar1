import React from 'react';
import './App.css';

import {BroswerRouter, Switch, Route} from "react-router-dom"


//Vitas
import Home from './Paginas/Home/Home';
import Followers from './Paginas/Home/Followers/Followers';

function App() {
  return (
    <BroswerRouter>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>

        <Route path ='/followers/:user' exact>
          <Followers/>
        </Route>


      </Switch>
    </BroswerRouter>
  )
}

export default App;
