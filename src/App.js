import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import { Route, Switch, Redirect, useHistory} from 'react-router-dom';
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar';
import News from './pages/News';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import {useSelector} from 'react-redux';




function App() {
  const status = useSelector(state=>state.isLogged)

  return (
    <div className="App">
      <Navbar/>
      <LeftSidebar/>
      <Switch>
        <Route path='/Login' component={Login}/>
        <PrivateRoute path='/Home' component={Home} isAuth={status.isLog} />
        <PrivateRoute path='/News' component={News} isAuth={status.isLog} />
        <Route path='/'>
          <Redirect to='/Login'></Redirect>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
