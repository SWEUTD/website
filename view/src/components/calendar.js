// calendar.js

// calendar component 

import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
//import NavBar from "../components/navbar";
//import Footer from "../components/footer";
import Button from "@material-ui/core/Button"

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
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">Calendar</p>
        </div>
        <Container width="80%" className="movingItem" align="center">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%239E69AF&amp;ctz=America%2FChicago&amp;src=c3dldXRkQGdtYWlsLmNvbQ&amp;color=%238E24AA&amp;showTabs=0&amp;showPrint=0&amp;showTz=1&amp;showTitle=0&amp;showNav=1&amp;title"
            style="border:solid 1px #777"
            style={{
              border: "0",
              width: "100%",
              height: "100vh",
              frameborder: "0",
              scrolling: "no",
            }}
          ></iframe>
          <a href="https://calendar.google.com/calendar/u/2?cid=c3dldXRkQGdtYWlsLmNvbQ" class="myButton" style={{"width" : "20%"},{"align" : "center"}}>Add to your calendar</a>
        </Container>
        <br />
      </div>
    );
  }
}
export default withStyles(styles)(calendar);
