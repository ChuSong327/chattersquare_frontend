import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import NavbarContainer from "./components/navbar/NavbarContainer";
import UserContainer from "./components/user/UserContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={NavbarContainer}/>
          <Route exact path="/users" component={UserContainer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
