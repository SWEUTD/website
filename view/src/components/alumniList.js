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
        "https://us-central1-swe-utd-portal.cloudfunctions.net/api/alumniList"
      )
      .then((response) => {
        // console.log(response.data.user);
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
          <Card
            className={classes.details}
            className="movingItem"
            variant="outlined"
          >
            <CardContent>
              <div className={classes.details}>
                <div>
                  <br />
                  <h1>Member List</h1>
                  <h4>
                    Go to your profile and toggle on "Show on Member List" and
                    add a description to be shown on this list! It is place for
                    you to network and reach out to other SWEsters!
                  </h4>
                </div>
              </div>
              <div className={classes.progress} />
            </CardContent>
          </Card>
          <br />
          {this.state.users.length == 0 ? (
            <h2>No users are currently on the Member List.</h2>
          ) : (
            <List>
              {this.state.users.map((user) => (
                <ListItem>
                  <Card className="movingItem" variant="outlined">
                    <CardContent>
                      <h3>
                        {user.firstName} {user.lastName}
                      </h3>
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
