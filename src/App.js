import React from 'react';
import Home from './pages/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <LeftSidebar/>
      <Switch>
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/'>
          <Redirect to='/Home'></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
