import React from "react";
// ? Styles
import "./createFeed.styles.scss";
// ? Components
import { TextField, Grid } from "@material-ui/core";

const CreateFeed = ({ image, name }) => {
  return (
    <div className="create-feed">
      <Grid justify="center" alignItems="center" container spacing={1}>
        <Grid item md={5} sm={8}>
          <div className="user-info">
            <div className="img">
              <img src={image} alt="user" />
            </div>
            <div className="text">
              <span className="user-name">
                {name}Simmon Bradley <br />
              </span>
              <span>Share your thoughts</span>
            </div>
          </div>
        </Grid>
        <Grid item md={7} sm={4}>
          <div className="input-div">
            <TextField
              fullWidth={true}
              id="outlined-password-input"
              label="Type here"
              className="input"
              type="text"
              variant="outlined"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateFeed;
