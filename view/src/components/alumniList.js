// AlumniList.js

// component containing user's AlumniList data, with option to edit

import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  FormControlLabel,
  Switch,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import axios from "axios";
import { authMiddleWare } from "../util/auth";

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
});

class AlumniList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  // makes sure user is logged in
  componentWillMount = () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .get(
        "http://localhost:5000/swe-utd-portal/us-central1/api/alumniList"
        //"https://us-central1-swe-utd-portal.cloudfunctions.net/api/alumniList"
      )
      .then((response) => {
        this.setState({
          users: response.data.users,
        });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          this.props.history.push("/login");
        }
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  };

  render() {
    const { classes } = this.props;
    if (this.state.uiLoading === true) {
      return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.uiLoading && (
            <CircularProgress size={150} className={classes.uiProgess} />
          )}
        </main>
      );
    } else {
      return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.users.map(() => (
            <Card className="movingItem" variant="outlined">
              <CardContent>
                <div>
                  <br />
                  <h1>account hewwo</h1>
                </div>
              </CardContent>
            </Card>
          ))}
        </main>
      );
    }
  }
}

export default withStyles(styles)(AlumniList);

// {"users":[{"alumDesc":"hi"}]} NEED TO SHOW MORE INFO
