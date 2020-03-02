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
    );
  }
}


export default App;
// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
 
// class App extends Component {
 
//     state = {};
 
//     componentDidMount() {
//         setInterval(this.hello, 250);
//     }
 
//     hello = () => {
//         fetch('/api/home')
//             .then(response => response.text())
//             .then(message => {
//                 this.setState({message: message});
//             });
//     };
 
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo"/>
//                     <h1 className="App-title">{this.state.message}</h1>
//                 </header>
//                 <p className="App-intro">
//                     To get started, edit <code>src/App.js</code> and save to reload.
//                 </p>
//             </div>
//         );
//     }
// }
 
// export default App;
