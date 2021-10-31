// meetingform.js

// Meeting form for SWE events

import React, { Component } from "react";
import {
  Button,
  Select,
  MenuItem,
  Grid,
  Container,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import { authMiddleWare } from "../util/auth";
import NavBar from "../components/navbar";
import axios from "axios";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signin: {
    margin: theme.spacing(3, 0, 2),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progess: {
    position: "absolute",
  },
});

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = { headerReady: false, eventProcessing: true };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI != undefined) {
      if (nextProps.UI.errors) {
        this.setState({
          errors: nextProps.UI.errors,
        });
      }
    }
  }

  componentWillMount = () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    try {
        const findEventResp = axios.get("https://us-central1-swe-utd-portal.cloudfunctions.net/api/eventLookup", {eventId: this.props.match.params.eventId});
        console.log(findEventResp);
        const addEventResp = axios.post("https://us-central1-swe-utd-portal.cloudfunctions.net/api/newEvent");
    } catch(err) {
        if (error.response != undefined) {
            if (error.response.status === 403) {
              this.props.history.push("/login");
            }
        }
        this.setState({ errorMsg: "Error in retrieving the data" });
    }
  };

  // needed for header animation
  componentDidMount() {
    setTimeout(() => {
      this.setState({ headerReady: true });
    }, 0);
  }

  render() {
    const { headerReady } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">{this.props.eventHeading}</p>
        </div>
        <Container width="75%">
            <Grid item sm={6} xs={12}>
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Already a member? Log in!
                </Typography>
                <CircularProgress
                          size={30}
                          className={classes.progess}
                        />
                <br />
              </div>
            </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(EventForm);
