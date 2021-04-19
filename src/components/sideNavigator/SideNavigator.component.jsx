import React from "react";
// ? Styles
import "./sideNavigator.styles.scss";
// ? Components
import { Grid } from "@material-ui/core";

const SideNavigator = ({ user: { picture, name } }) => {
  return (
    <Grid item md={2} lg={2} sm={12} xs={12}>
      <div className="main">
        <div className="user-detail">
          <img src={picture} alt="user" />
          <h6>{name}</h6>
        </div>
        <div className="list">
          <ul>
            <li>Home Feed</li>
            <li>Personal Info</li>
            <li>Photo</li>
            <li>Feed</li>
            <li>Chat</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </Grid>
  );
};

export default SideNavigator;
