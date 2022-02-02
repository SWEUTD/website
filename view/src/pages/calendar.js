// calendar.js

// calendar page

import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Calendar from "../components/calendar";

const styles = (theme) => ({});

class calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { headerReady: false, events: [] };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ headerReady: true });
    }, 0);
  }
  render() {
    const { headerReady } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <Calendar/>
        <br />
        <Footer />
      </div>
    );
  }
}
export default withStyles(styles)(calendar);
