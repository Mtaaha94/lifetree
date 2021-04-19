import React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import logo from "../assests/Lifetwig.png";
import lifetree from "../assests/LIFETREE.png";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./Login.css";
const useStyle = makeStyles((theme) => ({
  paper: {
    margintop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex",
  },
  logo: {},

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formDiv: {
    position: "absolute",
    left: "50%",
    bottom: "50%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login = () => {
  const classes = useStyle();

  return (
    <Container>
      <CssBaseline />
      <Grid display="flex" className={classes.root} container spacing={1}>
        <Grid item md={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="main-form">
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  padding: "20%",
                }}
                className="logo"
              >
                <img
                  className={classes.logo}
                  src={logo}
                  style={{ paddingTop: "inherit" }}
                  alt="login-logo"
                  align="center"
                  id="login"
                />
              </div>

              <form noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ color: "green" }}
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item md={12}></Grid>
                  <Grid item>
                    <Link to="#" style={{ paddingBottom: "2rem 0rem 2rem" }}>
                      {"Don't have an account? "}
                    </Link>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={{ color: "green" }}
                      className={classes.submit}
                    >
                      Create an Account
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </Grid>
        <Grid item md={8}>
          <img
            // className={classes.itemgrids}
            src={lifetree}
            alt="life-tree"
          />
        </Grid>

        {/* <Grid item md={6}>
            <Typography
              component="h1"
              variant="h5"
              style={{
                justifyContent: "center",
                color: "green",
                fontFamily: "fantasy",
              }}
            >
              <img className={classes.logo} src={logo} alt="login-logo" />
            </Typography>
          </Grid> */}
      </Grid>
      <div>azm</div>

      <Box mt={8}></Box>
      <div>Taaha</div>
    </Container>
  );
};

export default Login;
