import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavbarContainer from "./components/navbar/NavbarContainer";
import RoomsContainer from "./components/rooms/RoomsContainer";
import UserContainer from "./components/user/UserContainer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <div>
            <Route path="/" component={ NavbarContainer }/>
            <Switch>
              <Route exact path="/" component={ RoomsContainer }/>
              <Route path="/rooms/:number" component={ UserContainer }/>
            </Switch>
           
            {/* <Route exact path="/users" component={ UserContainer }/> */}
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
