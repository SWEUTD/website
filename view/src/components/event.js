// event.js

// component for displaying user's event history and points status

import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import { authMiddleWare } from "../util/auth";

import EventLinkCreater from "./eventLink";

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  details: {
    display: "flex",
  },
  locationText: {
    paddingLeft: "15px",
  },
  gridItem: {
    display: "flex",
    width: "100%",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
  buttonProperty: {
    position: "absolute",
    top: "50%",
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  progess: {
    position: "absolute",
  },
  uploadButton: {
    marginLeft: "8px",
    margin: theme.spacing(1),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  submitButton: {
    marginTop: "10px",
  },
});

class event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      netid: "",
      classification: "",
      major: "",
      otherMajor: "",
      events: [],
      points: 0,
      previousPoints: [],
      uiLoading: true,
      buttonLoading: false,
      imageError: "",
    };
  }

  // makes sure user is logged in
  componentWillMount = () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .get("https://us-central1-swe-utd-portal.cloudfunctions.net/api/member")
      .then((response) => {
        console.log(response.data);
        this.setState({
          firstName: response.data.memberInfo.firstName,
          lastName: response.data.memberInfo.lastName,
          email: response.data.memberInfo.email,
          phoneNumber: response.data.memberInfo.phoneNumber,
          classification: response.data.memberInfo.classification,
          major: response.data.memberInfo.major,
          otherMajor: response.data.memberInfo.otherMajor,
          netid: response.data.memberInfo.netid,
          events: response.data.memberInfo.events,
          points: response.data.memberInfo.points,
          previousPoints: response.data.memberInfo.previousPoints || {},
          uiLoading: false,
        });
      })
      .catch((error) => {
        if (error.response !== undefined) {
          if (error.response.status === 403) {
            this.props.history.push("/login");
          }
        }
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  };

  render() {
    const { classes } = this.props;
    const history = this.state.events
      .slice(0)
      .reverse()
      .map((item, key) => (
        <TableContainer component={Paper} align="center">
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableRow key={key}>
                <TableCell
                  component="th"
                  width="60%"
                  scope="row"
                  align="center"
                >
                  {item.eventName}
                </TableCell>
                <TableCell
                  component="th"
                  width="25%"
                  scope="row"
                  align="center"
                >
                  {item.eventDate}
                </TableCell>
                <TableCell
                  component="th"
                  width="15%"
                  scope="row"
                  align="center"
                >
                  {item.eventPoints} pt
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ));

    var summer2020Points;
    if(this.state.previousPoints.summer2020 != undefined) {
      summer2020Points = <td align="center">Summer 2020: {this.state.previousPoints.summer2020} points</td>   
    }

    var fall2020Points;
    if(this.state.previousPoints.fall2020 != undefined) {
      fall2020Points = <td align="center">Fall 2020: {this.state.previousPoints.fall2020} points</td>
    }

    let rewardStatus;
    let nextLevel;
    if (this.state.points < 5) {
      nextLevel = 5 - this.state.points;
      rewardStatus = (
        <div>
          <h4 align="center">
            You are {nextLevel} points away from becoming a SWE Star!
          </h4>
          <Divider />
          <br />
          <h5>Reach the bronze tier and unlock:</h5>
          <p>★ Invitation to a virtual networking session</p>
        </div>
      );
    } else if (this.state.points < 7) {
      nextLevel = 7 - this.state.points;
      rewardStatus = (
        <div>
          <h1 align="center">You are a Bronze SWE Star!</h1>
          <Divider />
          <br />
          <h4 align="center">
            You are {nextLevel} points away from the silver tier
          </h4>
          <br />
          <Divider />
          <br />
          <h5>Reach the silver tier and unlock:</h5>
          <p>★ Social Media Shoutout</p>
          <Divider />
          <br />
          <h5>You have unlocked:</h5>
          <p>★ Virtual Networking Session</p>
        </div>
      );
    } else if (this.state.points < 9) {
      nextLevel = 9 - this.state.points;
      rewardStatus = (
        <div>
          <h1 align="center">You are a Silver SWE Star!</h1>
          <Divider />
          <br />
          <h4 align="center">
            You are {nextLevel} points away from the gold tier
          </h4>
          <br />
          <Divider />
          <br />
          <h5>Reach the gold tier and unlock:</h5>
          <p>★ 1x1 Resume Critiquing Session</p>
          <Divider />
          <br />
          <h5>You have unlocked:</h5>
          <p>★ Virtual Networking Session</p>
          <p>★ Social Media Shoutout</p>
        </div>
      );
    } else {
      rewardStatus = (
        <div>
          <h1 align="center">You are a Gold SWE Star!</h1>
          <Divider />
          <br />
          <h4 align="center">
            You have reached the SWE gold tier! Congratulations!
          </h4>
          <br />
          <Divider />
          <br />
          <h5>You have unlocked:</h5>
          <p>★ Social Media Shoutout</p>
          <p>★ Exclusive invite to our end-of-summer celebration</p>
          <p>★ SWE gift bag</p>
        </div>
      );
    }

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
        <div>
          <div className={classes.toolbar} />
          <br />
          <Grid
            container
            spacing={2}
            height="100%"
            width="100%"
            alignItems="stretch"
            justify="space-evenly"
          >
            <Grid
              className={classes.gridItem}
              style={{ flexDirection: "column" }}
              item
              md={6}
              xs={12}
            >
              <Card className="movingItem" variant="outlined" fullWidth>
                <CardContent align="center" style={{ padding: "10px" }}>
                  <br />
                  <h1>{this.state.points} SWE points</h1>
                </CardContent>
              </Card>
              <br />
              <Card className="movingItem" variant="outlined" fullWidth>
                <CardContent align="center" style={{ padding: "10px" }}>
                  <div>
                    <h4 align="center">Previous Semesters</h4>
                    <Divider />
                    <div fullWidth>
                      <br />
                      <table width="100%">
                        <tr>
                          {fall2020Points}
                          {summer2020Points}
                        </tr>
                      </table>
                      <br />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <br />
              <Card
                alignItems="stretch"
                className="movingItem"
                variant="outlined"
                style={{ padding: "10px" }}
              >
                <CardContent height="100%" align="left" fullWidth>
                  {rewardStatus}
                </CardContent>
              </Card>
            </Grid>
            <Grid className={classes.gridItem} item md={6} xs={12}>
              <Card
                height="100%"
                className="movingItem"
                variant="outlined"
                style={{ padding: "10px" }}
              >
                <CardContent height="100%" align="center">
                  <h1 align="center">Your Attendance History</h1>
                  <Divider />
                  <br />
                  <Divider />
                  {history}
                </CardContent>
              </Card>
            </Grid>
            <Grid className={classes.gridItem} item md={6} xs={12}>
              <Card
                height="100%"
                className="movingItem"
                variant="outlined"
                style={{ padding: "10px" }}
              >
                <CardContent height="100%" align="center">
                  <EventLinkCreater/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default withStyles(styles)(event);
