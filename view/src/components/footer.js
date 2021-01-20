import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import MediaQuery from "react-responsive";

//images
import Award from "../assets/SilverAward.png";

const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#343a40",
    color: "#929598",
    flexGrow: 1,
  },
  row1: {
    padding: "3em",
    display: "flex",
  },
  row2: {
    padding: "3em",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    backgroundColor: "#24292e",
  },
  imgCol: {},
});

class footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <MediaQuery minDeviceWidth={1224}>
          <Grid container spacing={2} className={classes.row1}>
            <Grid item xs={6} className={classes.col}>
              <h5>Society of Women Engineers @ UT Dallas</h5>
              <br />
              <p>
                The UTD SWE stimulates women to achieve full potential in
                careers as engineers and leaders, expand the image of the
                engineering profession as a positive force in improving the
                quality of life, and demonstrate the value of diversity.
              </p>
              <p>
                The SWE Mission Awards recognize SWE groups that embody SWE core
                values and demonstrate continuous improvement and growth as they
                work to achieve the Society’s strategic goals. UT-Dallas SWE is
                proud to have been awarded a 2020 Collegiate Silver award.
              </p>
            </Grid>
            <Grid item xs={2} className={classes.col}>
              <img src={Award} width="50%"></img>
            </Grid>
            <Grid item xs={2} className={classes.linkCol}>
              <ul style={{ listStyleType: "none", margin: "10%" }}>
                <h5>EXPLORE</h5>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/officers">Officers</a>
                </li>
              </ul>
              <ul style={{ listStyleType: "none", margin: "10%" }}>
                <li>
                  <a href="/portal">Portal</a>
                </li>
                <li>
                  <a href="/home">Home</a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={2} className={classes.linkCol}>
              <ul style={{ listStyleType: "none", margin: "10%" }}>
                <h5>JOIN US</h5>
                <li>
                  <a href="/join">Sign Up</a>
                </li>
                <li>
                  <a href="/login">Log In</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
              </ul>
              <ul style={{ listStyleType: "none", margin: "10%" }}>
                <li>
                  <a href="/swestars">SWE Stars</a>
                </li>
                <li>
                  <a href="/swematch">SWE Match</a>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid container className={classes.row2}>
            &copy; {new Date().getFullYear()} UTD Society of Women Engineers
          </Grid>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <Grid container spacing={2} className={classes.row1}>
            <h5>Society of Women Engineers @ UTD</h5>
            <br />
            <p>
              The UTD SWE stimulates women to achieve full potential in careers
              as engineers and leaders, expand the image of the engineering
              profession as a positive force in improving the quality of life,
              and demonstrate the value of diversity.
            </p>
          </Grid>
          <Grid container className={classes.row2}>
            &copy; {new Date().getFullYear()} UTD Society of Women Engineers
          </Grid>
        </MediaQuery>
      </Grid>
    );
  }
}

export default withStyles(styles)(footer);
