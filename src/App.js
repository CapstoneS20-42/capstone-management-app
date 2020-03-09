import React, {Component} from "react";
import Header from "./components/Header/Header.js";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
  return (
      <div className="App">
        <Header />
        <Routes />
      </div>
  );
}
}

export default App;
