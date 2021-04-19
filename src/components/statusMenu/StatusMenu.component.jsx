import React from "react";
// ? Styles
import "./statusMenu.styles.scss";
// ? Components
import { Grid, Box } from "@material-ui/core";
import UserContainer from "../userContainer/UserContainer.component";
// ? Data
import { data } from "./data";

const StatusMenu = () => {
  return (
    <Box clone order={{ xs: 2, sm: 2, md: 3 }}>
      <Grid item md={4} lg={3} sm={12} xs={12}>
        <div className="status-menu">
          <div className="family">
            <div className="text">
              <p>Family Online</p>
              <div className="line"></div>
            </div>
            <div className="family-members">
              {data.family.map(({ id, status, name, picture }) => (
                <UserContainer
                  className="users"
                  key={id}
                  status={status}
                  name={name}
                  photo={picture}
                />
              ))}
            </div>
          </div>

          <div className="friends">
            <div className="text">
              <p>Friends</p>
              <div className="line"></div>
            </div>
            <div className="family-members">
              {data.friends.map(({ id, status, name, picture }) => (
                <UserContainer
                  className="users"
                  key={id}
                  status={status}
                  name={name}
                  photo={picture}
                />
              ))}
            </div>
          </div>
        </div>
      </Grid>
    </Box>
  );
};

export default StatusMenu;
