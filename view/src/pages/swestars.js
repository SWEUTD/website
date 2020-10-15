// swestars.js

// page displaying information about the SWE Stars program

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import NavBar from "../components/navbar";
import database from "../components/firebase";

const styles = (theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
});

class swestars extends Component {
  constructor(props) {
    super(props);
    this.state = { headerReady: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ headerReady: true });
    }, 0);
    database
      .collection("members")
      .where("points", ">", 0)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
  render() {
    const { headerReady } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">Our SWE Stars</p>
        </div>
        <div className="fullscreen">
          <Grid
            container
            height="100%"
            width="100%"
            alignItems="stretch"
            justify="space-evenly"
            className="movingItem"
          >
            <Grid
              style={{ padding: "50px" }}
              className={classes.gridItem}
              md={3}
              xs={12}
            >
              <div>
                <h1 align="center">Become a SWE Star</h1>
                <Divider />
                <List dense="true">
                  <ListSubheader>Earn SWE Points by:</ListSubheader>
                  <ListItem>Attending industry events</ListItem>
                  <ListItem>Meeting other SWE members at socials</ListItem>
                  <ListItem>Volunteering</ListItem>
                </List>
                <br />
                <br />
                <h1 align="center">Tier Prizes for Fall 2020</h1>
                <Divider />
                <List dense="true">
                  <ListSubheader>Gold Tier:</ListSubheader>
                  <ListItem>(Top 15 SWE Gold Stars) SWE Gift Bags</ListItem>
                  <ListItem>1x1 Resume Critiquing Session</ListItem>
                  <br />
                  <ListSubheader>Silver Tier:</ListSubheader>
                  <ListItem>Social media shoutout</ListItem>
                  <br />
                  <ListSubheader>Bronze Tier:</ListSubheader>
                  <ListItem>
                    Invitation to a virtual networking session
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid
              container
              height="100%"
              width="100%"
              alignItems="stretch"
              justify="space-evenly"
              className="movingItem"
              md={9}
              xs={12}
              style={{ color: "white" }}
            >
              <Grid
                className={classes.gridItem}
                style={{ backgroundColor: "#DBC554", padding: "50px" }}
                item
                xs={12}
              >
                <div>
                  <h1 align="center">Gold Tier</h1>
                  <br />
                  <Divider />
                  <br />
                  <List alignItems="center">
                    <ListSubheader align="center">Fall 2020:</ListSubheader>
                    <ListItemText align="center">
                      <h2>Become our first Fall 2020 SWE Star!</h2>
                    </ListItemText>
                    <ListSubheader align="center">Summer 2020:</ListSubheader>
                    <ListItemText align="center">
                      <h2>Lisa Chen</h2>
                    </ListItemText>
                  </List>
                </div>
              </Grid>
              <Grid
                className={classes.gridItem}
                style={{ backgroundColor: "#A9A8A9", padding: "50px" }}
                item
                md={7}
                xs={12}
              >
                <div>
                  <h1 align="center">Silver Tier</h1>
                  <br />
                  <Divider />
                  <br />
                  <List alignItems="center">
                    <ListSubheader align="center">Fall 2020:</ListSubheader>
                    <ListItemText align="center">
                      <h4>Become our first Fall 2020 SWE Star!</h4>
                    </ListItemText>
                    <ListSubheader align="center">Summer 2020:</ListSubheader>
                    <ListItemText align="center">
                      <h4>Lan Bui</h4>
                    </ListItemText>
                    <ListItemText align="center">
                      <h4>Aishani De Sirkar</h4>
                    </ListItemText>
                  </List>
                </div>
              </Grid>
              <Grid
                className={classes.gridItem}
                style={{ backgroundColor: "#916f51", padding: "50px" }}
                item
                md={5}
                xs={12}
              >
                <div>
                  <h1 align="center">Bronze Tier</h1>
                  <br />
                  <Divider />
                  <br />
                  <List alignItems="center">
                    <ListSubheader align="center">Fall 2020:</ListSubheader>
                    <ListItemText align="center">
                      <h4>Become our first Fall 2020 SWE Star!</h4>
                    </ListItemText>
                    <ListSubheader align="center">Summer 2020:</ListSubheader>
                    <ListItemText align="center">
                      <h6>Jyostna Thanjavur</h6>
                    </ListItemText>
                    <ListItemText align="center">
                      <h6>Kendra Huang</h6>
                    </ListItemText>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(swestars);
