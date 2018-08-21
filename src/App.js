import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import MainPage from "./components/mainpage/MainPage";
import PageUserChatRoomsContainer from "./components/page-userchatrooms/Page-UserChatRoomsContainer";
import PageUserFriendsContainer from "./components/page-userfriends/Page-UserFriendsContainer";
import PageUserSettingContainer from "./components/page-usersetting/Page-UserSettingContainer";
import PageDirectMessagesContainer from "./components/page-directmessages/Page-DirectMessagesContainer";
import PageChatRoomMessagesContainer from "./components/page-chatroommessages/Page-ChatRoomMessagesContainer";
import PageChatRoomUsersContainer from './components/page-chatroomusers/Page-ChatRoomUsersContainer';

const theme = createMuiTheme ({
  palette: {
    primary: { main: "#5f2c82", contrastText: "rgb(255,255,255)" },
    secondary: { main: "#49a09d", contrastText:"#556DAC" }
  },
  breakpoints: {
    
  }
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={ theme }>
          <BrowserRouter>
              <Switch>
                <Route exact path="/" component={ MainPage }/>
                <Route exact path="/users/:user_id/dashboard/chatrooms" component={ PageUserChatRoomsContainer }/>
                <Route exact path="/users/:user_id/dashboard/friends" component={ PageUserFriendsContainer }/>
                <Route exact path="/users/:user_id/dashboard/setting" component={ PageUserSettingContainer }/>
                <Route exact path="/users/:user_id/directmessages" component={ PageDirectMessagesContainer }/>
                <Route exact path="/chatrooms/user/:user_id/chatroom/:room_id/messages" component={ PageChatRoomMessagesContainer }/>
                <Route exact path="/chatrooms/user/:user_id/chatroom/:room_id/users" component={ PageChatRoomUsersContainer }/>
              </Switch> 
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
