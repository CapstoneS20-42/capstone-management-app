import React, { Component } from 'react';
import Home from './Pages/Home/Home.js';
import Header from './components/Header/Header.js';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register}/>
          <Route exact path ="/login" component={Login}/>
        </Switch>
        </div>
        )
}
}


 export default App;