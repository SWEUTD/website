// home.js

// Homepage

import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Slideshow from "../components/slideshow.js";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Events from "../components/eventList";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ListSubheader,
} from "@material-ui/core";
import { rows } from "../components/eventList"

const styles = (theme) => ({
  table: {
    width: "60%",
    padding: "3%",
    align: "center",
    margin: "auto"
  },
});

class home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <Slideshow />
        <TableContainer className={classes.table} align="center">
          <h1><a href="/events">Upcoming Events</a></h1>
          <TableBody>
            {rows.slice(0, 3).map((row) => (
              <TableRow key={row.event.name}>
                <TableCell component="th" scope="row" align="center">
                  <br />
                  <h4>{row.event.name}</h4>
                  <ListSubheader>{row.event.date}</ListSubheader>
                  {row.event.description != '' ?
                    (<div><h5 align="left">{row.event.description}</h5><br /> </div>) : null}
                  {row.event.link != '' && row.event.link != null
                    ? (<div>
                      <Button href={row.event.link} align="center" variant="contained" color="primary" position="relative" zIndex="-3000">Join Meeting</Button>
                      <br />
                      <br />
                    </div>)
                    : null
                  }
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.flyer != '' ?
                    (<img src={row.flyer} width="60%" />) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(home);
