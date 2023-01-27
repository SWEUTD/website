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
import Footer from "../components/footer";
import { database } from "../components/firebase";

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
    this.getStars_Spring();
    this.getStars_Fall();
    //this.getStars_Spring();
  }
  /*getStars_Fall = () => {
    database
      .collection("members")
      .where("points", ">", 0)
      .get()
      .then((querySnapshot) => {
        let goldMem_Fall = [],
          silverMem_Fall = [],
          bronzeMem_Fall = [];
        querySnapshot.forEach((doc) => {
          const name = `${doc.data().firstName} ${doc.data().lastName}`;
          if (doc.data().points > 7) {
            goldMem_Fall.push(name);
          } else if (doc.data().points > 5) {
            silverMem_Fall.push(name);
          } else if (doc.data().points > 3) {
            bronzeMem_Fall.push(name);
          }
        });
        this.setState({
          tierMembers_Fall: {
            goldF: goldMem_Fall,
            silverF: silverMem_Fall,
            bronzeF: bronzeMem_Fall,
          },
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };*/

  getStars_Spring = () => {
    database
      .collection("members")
      .where("points", ">", 0)
      .get()
      .then((querySnapshot) => {
        let goldMem_Spring = [],
          silverMem_Spring = [],
          bronzeMem_Spring = [];
        querySnapshot.forEach((doc) => {
          const name = `${doc.data().firstName} ${doc.data().lastName}`;
          if (doc.data().points > 5) {
            goldMem_Spring.push(name);
          } else if (doc.data().points > 4) {
            silverMem_Spring.push(name);
          } else if (doc.data().points > 3) {
            bronzeMem_Spring.push(name);
          }
        });
        this.setState({
          tierMembers_Spring: {
            goldS: goldMem_Spring,
            silverS: silverMem_Spring,
            bronzeS: bronzeMem_Spring,
          },
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };

  getStars_Fall = () => {
    database
      .collection("members")
      .where("previousPoints.fall2021", ">", 0)
      .get()
      .then((querySnapshot) => {
        let goldMem_Fall = [],
          silverMem_Fall = [],
          bronzeMem_Fall = [];
        querySnapshot.forEach((doc) => {
          const name = `${doc.data().firstName} ${doc.data().lastName}`;

          if (doc.data().previousPoints.fall2021 > 7) {
            goldMem_Fall.push(name);
          } else if (doc.data().previousPoints.fall2021 > 5) {
            silverMem_Fall.push(name);
          } else if (doc.data().previousPoints.fall2021 > 3) {
            bronzeMem_Fall.push(name);
          }
        });
        this.setState({
          tierMembers_Fall: {
            goldF: goldMem_Fall,
            silverF: silverMem_Fall,
            bronzeF: bronzeMem_Fall,
          },
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };

  render() {
    const { headerReady, tierMembers_Spring, tierMembers_Fall } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">SWE Stars</p>
        </div>
        <div className="fullscreen">
          <Grid
            container
            height="100%"
            width="100%"
            alignItems="stretch"
            justify="space-evenly"
            className="movingItem"
            direction="column"
          >
          <div className="howTo">
            <Grid
              style={{ padding: "50px" }}
              className={classes.gridItem}
              //md={3}
              xs={12}
            >
              <div>
                <h1 align="center">Become a SWE Star</h1>
                <Divider />
                <h3 align="center" color="black">
                  Earn SWE Points by:
                </h3>

                <br></br>

                <h4 align="center">- Attending industry events</h4>
                <h4 align="center">- Meeting other SWE members at socials</h4>
                <h4 align="center">- Volunteering</h4>
                
                <br />
                <br />
                <h1 align="center">Tier Prizes for Spring 2023</h1>
                <Divider />
                <Grid
                  container
                  height="100%"
                  width="100%"
                  alignItems="stretch"
                  justify="space-evenly"
                  className="movingItem"
                  //md={9}
                  xs={12}
                  style={{ color: "black" }}
                >
                  <Grid
                    className={classes.gridItem}
                    style={{ backgroundColor: "#cacacba6", padding: "50px" }}
                    item
                    md={4}
                    xs={12}
                  >
                    <List dense="true">
                      <ListSubheader>
                        <h3 color="gold">Gold Tier (more than 9 points):</h3>
                      </ListSubheader>
                      <ListItem>
                        <h4>(Top 15 SWE Gold Stars) SWE Gift Bags</h4>
                      </ListItem>
                      <ListItem>
                        <h4>1x1 Resume Critiquing Session + Mock Interview</h4>
                      </ListItem>
                    </List>
                  </Grid>

                  <Grid
                    className={classes.gridItem}
                    style={{ backgroundColor: "#cacacba6", padding: "50px" }}
                    item
                    md={4}
                    xs={12}
                  >
                    <List dense="true">
                      <ListSubheader>
                        <h3>Silver Tier (more than 7 points):</h3>
                      </ListSubheader>
                      <ListItem>
                        <h4>Mock Interview with a Recruiter</h4>
                      </ListItem>
                    </List>
                  </Grid>

                  <Grid
                    className={classes.gridItem}
                    style={{ backgroundColor: "#cacacba6", padding: "50px" }}
                    item
                    md={4}
                    xs={12}
                  >
                    <List dense="true">
                      <ListSubheader>
                        <h3>Bronze Tier (more than 5 points)</h3>
                      </ListSubheader>
                      <ListItem>
                        <h4>Social Media Shoutout</h4>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <h1 align="center">Our SWE Stars</h1>
            <Divider />
          </div>
            
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
                  <ListSubheader align="center">
                      <h4>Spring 2022:</h4>
                    </ListSubheader>{" "}
                    <br></br>
                    {tierMembers_Spring &&
                      tierMembers_Spring.goldS.map((val) => (
                        <ListItemText align="center">
                          <h4>{val}</h4>
                        </ListItemText>
                      ))}
                      <br/><br/>
                  <ListSubheader align="center">
                      <h4>Fall 2021:</h4>
                    </ListSubheader>{" "}
                    <br></br>
                    {tierMembers_Fall &&
                      tierMembers_Fall.goldF.map((val) => (
                        <ListItemText align="center">
                          <h4>{val}</h4>
                        </ListItemText>
                      ))}
                    
                  </List>
                </div>
              </Grid>
              <Grid
                className={classes.gridItem}
                style={{ backgroundColor: "#A9A8A9", padding: "50px" }}
                item
                md={4}
                xs={12}
                direction="row"
              >
                <div>
                  <h1 align="center">Silver Tier</h1>
                  <br />
                  <Divider />
                  <br />
                  <List alignItems="center">
                  <ListSubheader align="center">
                  
                      <h4>Spring 2022:</h4>
                    </ListSubheader> {" "}
                    <br></br>
                    {tierMembers_Spring &&
                      tierMembers_Spring.silverS.map((val) => (
                        <ListItemText align="center">
                          <h4>{val}</h4>
                        </ListItemText>
                      ))}
                      <br/><br/>
                      <ListSubheader align="center">
                      <h4>Fall 2021:</h4>
                    </ListSubheader>{" "}
                    <br></br>
                    {tierMembers_Fall &&
                      tierMembers_Fall.silverF.map((val) => (
                        <ListItemText align="center">
                          <h4>{val}</h4>
                        </ListItemText>
                      ))}
                    
      
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
                  <ListSubheader align="center">
                  
                      <h4>Spring 2022:</h4>
                    </ListSubheader> {" "}
                    <br></br>
                    {tierMembers_Spring &&
                      tierMembers_Spring.bronzeS.map((val) => (
                        <ListItemText align="center">
                          <h4>{val}</h4>
                        </ListItemText>
                      ))}
                      <br/><br/>
                      <ListSubheader align="center">
                      <h4>Fall 2021:</h4>
                    </ListSubheader>{" "}
                    <br></br>
                    {tierMembers_Fall &&
                      tierMembers_Fall.bronzeF.map((val) => (
                        <ListItemText align="center">
                          <h4>{val}</h4>
                        </ListItemText>
                      ))}
                    
                    
                  </List>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(swestars);
