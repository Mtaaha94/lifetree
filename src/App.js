import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// ? Styles
import "./App.css";
// ? Components
import Header from "./components/header/Header.component";
import SideNavigator from "./components/sideNavigator/SideNavigator.component";
import StatusMenu from "./components/statusMenu/StatusMenu.component";
import FeedPage from "./pages/feed/Feed.component";
import { Grid } from "@material-ui/core";
// ? Images
import userImg from "./assests/Group_29.png";
import Login from "./components/Login";

function App() {
  const [user] = useState({
    name: "Simmon Bradley",
    picture: userImg,
  });
  return (
    <div className="App">
      <Router>
        <Header user={user} />
        <Route path="/login" component={Login} />
      </Router>
      <Grid container justify="space-between">
        <SideNavigator user={user} />
        <FeedPage user={user} />
        <StatusMenu />
      </Grid>
    </div>
  );
}

export default App;
