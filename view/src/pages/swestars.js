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
    this.state = { headerReady: false, tierMembers: null };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ headerReady: true });
    }, 0);
    this.getStars();
  }
  getStars = () => {
    database
      .collection("members")
      .where("points", ">", 0)
      .get()
      .then((querySnapshot) => {
        let goldMem = [],
          silverMem = [],
          bronzeMem = [];
        querySnapshot.forEach((doc) => {
          const name = `${doc.data().firstName} ${doc.data().lastName}`;
          if (doc.data().points > 9) {
            goldMem.push(name);
          } else if (doc.data().points > 7) {
            silverMem.push(name);
          } else if (doc.data().points > 5) {
            bronzeMem.push(name);
          }
        });
        this.setState({
          tierMembers: { gold: goldMem, silver: silverMem, bronze: bronzeMem },
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };

  render() {
    const { headerReady, tierMembers } = this.state;
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
            direction="column">
            
            
            <Grid
              container
              height="100%"
              width="100%"
              alignItems="stretch"
              justify="space-evenly"
              className="movingItem"
              //md={9}
              xs={12}
              style={{ color: "white" }}
            >
              <Grid
                className={classes.gridItem}
                style={{ backgroundColor: "#DBC554", padding: "50px" }}
                item
                md={4}
                xs={12}
              >
                <div className="gold">

                  <h1 align="center">Gold Tier</h1>
                  <br />
                  <Divider />
                  <br />
                  <List alignItems="center">
                    <ListSubheader align="center"><h4>Fall 2020:</h4></ListSubheader> <br></br>
                    {tierMembers &&
                      tierMembers.gold.map((val) => (
                        <ListItemText align="center">
                          <h4>{val}</h4>
                        </ListItemText>
                      ))}
                    <br></br>
                    <ListSubheader align="center"><h4>Summer 2020:</h4></ListSubheader><br></br>
                    <ListItemText align="center">
                      <h4>Lisa Chen</h4>
                    </ListItemText>
                  </List>
                </div>
              </Grid>
              <Grid
                className={classes.gridItem}
                style={{ backgroundColor: "#A9A8A9", padding: "50px" }}
                item
                md={4}
                xs={12}
                direction='row'
              >
                <div>
                  <h1 align="center">Silver Tier</h1>
                  <br />
                  <Divider />
                  <br />
                  <List alignItems="center">
                    <ListSubheader align="center"><h4>Fall 2020:</h4></ListSubheader><br></br>
                    {tierMembers &&
                      tierMembers.silver.map((val) => (
                        <ListItemText align="center">
                          <h4>{val}</h4>
                        </ListItemText>
                      ))}
                    <br></br>
                    <ListSubheader align="center"><h4>Summer 2020:</h4></ListSubheader><br></br>
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
                md={4}
                xs={12}
              >
                <div>
                  <h1 align="center">Bronze Tier</h1>
                  <br />
                  <Divider />
                  <br />
                  <List alignItems="center">
                    <ListSubheader align="center"><h4>Fall 2020:</h4></ListSubheader><br></br>
                    {tierMembers &&
                      tierMembers.bronze.map((val) => (
                        <ListItemText align="center">
                          <h4>{val}</h4>
                        </ListItemText>
                      ))}
                      <br></br>
                    <ListSubheader align="center"><h4>Summer 2020:</h4></ListSubheader><br></br>
                    <ListItemText align="center">
                      <h4>Jyostna Thanjavur</h4>
                    </ListItemText>
                    <ListItemText align="center">
                      <h4>Kendra Huang</h4>
                    </ListItemText>
                  </List>
                </div>
              </Grid>
            </Grid>
            
            <div className="howTo">
            <Grid
              style={{ padding: "50px" }}
              className={classes.gridItem}
              //md={3}
              xs={12}>
              <div>
                <h1 align="center">Become a SWE Star</h1>
                <Divider />
                <List dense="true">
                  <ListSubheader><h3>Earn SWE Points by:</h3></ListSubheader>
                  <ListItem ><h4>Attending industry events</h4></ListItem>
                  <ListItem><h4>Meeting other SWE members at socials</h4></ListItem>
                  <ListItem><h4>Volunteering</h4></ListItem>
                </List>
                <br />
                <br />
                <h1 align="center">Tier Prizes for Fall 2020</h1>
                <Divider />
                <List dense="true">
                  <ListSubheader><h3>Gold Tier:</h3></ListSubheader>
                  <ListItem><h4>(Top 15 SWE Gold Stars) SWE Gift Bags</h4></ListItem>
                  <ListItem><h4>1x1 Resume Critiquing Session</h4></ListItem>
                  <br />
                  <ListSubheader><h3>Silver Tier:</h3></ListSubheader>
                  <ListItem><h4>Social media shoutout</h4></ListItem>
                  <br />
                  <ListSubheader><h3>Bronze Tier:</h3></ListSubheader>
                  <ListItem>
                  <h4>Invitation to a virtual networking session</h4>
                  </ListItem>
                </List>
              </div>
            </Grid>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(swestars);
