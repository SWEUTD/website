// events.js

// page displaying event flyers

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Divider, Grid, List, ListSubheader } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Events from "../components/events"
import NavBar from "../components/navbar";
import Footer from "../components/footer";


const styles = (theme) => ({
  gridItem: {
    display: "flex",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
  table: {
    minWidth: "50%",
    maxWidth: "70%",
  },
  imgResponsive: {
    width: "200 px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

class events extends Component {
  constructor(props) {
    super(props);
    this.state = { headerReady: false };
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
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">Events</p>
        </div>
        <Events />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(events);
