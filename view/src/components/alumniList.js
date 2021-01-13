// AlumniList.js

// component containing the list of opted in alumni

import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  Card,
  CardContent,
  CircularProgress,
} from "@material-ui/core";

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
      uiLoading: true,
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
          uiLoading: false,
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
          {this.state.users.length == 0 ? (
            <h2>No users are currently on the Alumni List.</h2>
          ) : (
            <List>
              {this.state.users.map((user) => (
                <ListItem>
                  <Card className="movingItem" variant="outlined">
                    <CardContent>
                      <h1>
                        {user.firstName} {user.lastName}
                      </h1>
                      <p>{user.alumDesc}</p>
                    </CardContent>
                  </Card>
                </ListItem>
              ))}
            </List>
          )}
        </main>
      );
    }
  }
}

export default withStyles(styles)(AlumniList);

// {"users":[{"alumDesc":"hi"}]} NEED TO SHOW MORE INFO
