// swematch.js

// page displaying information about the SWE Match program

import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Logo from "../assets/MatchLogo.png";

const styles = (theme) => ({});

class swematch extends Component {
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
          <p className="heading">SWEMatch</p>
        </div>
        <Container className={classes.container}>
          
          <p align="center" class="movingItem">
          Apply for SWEMatch '22! Work on an engineering project with a group throughout the year! 
          You’ll also build your engineering and professional skills by attending our weekly workshops!

            <strong> Follow SWE UTD on social media to keep up to date!</strong>
          </p>
          <p align="center" class="movingItem">
            <strong>
              All engineering majors are welcome and encouraged to apply!
            </strong>
          </p>
          <h3 class="movingItem">Get Involved!</h3>
          <Row>
            <Col>
        
              <h4 class="movingItem">
                <a href="https://forms.gle/8U8m8AYgPTByP45x8">
                Non-competitive:
                </a>
              </h4>
              <p class="movingItem">
                Work in small groups on a project of your choice
                Team Lead Applications available for Upperclassmen and previous SWEMatch members (Freshmen cannot apply for Team Lead)
                For freshmen, we strongly recommend the member application on this track!

              </p>
            </Col>
            <Col>
              <h4 class="movingItem">
                <a href="https://forms.gle/FAs4K37QfuzPBoab8">
                Competitive: 
                </a>
              </h4>
              <p class="movingItem">
              Work in a group with our sponsor company to engineer a competitive project
              Goal is to compete at the WE23 Team Tech Competition
              The competitive track applications are available for upperclassmen ONLY (Freshmen cannot apply for this track)

              </p>
              
            </Col>
          </Row>

      
          
          
      
          {/* <h3 class="movingItem">Dates to Save:</h3>
          <ul class="movingItem">
            <li>
              <strong>7 September 2020:</strong> SWE Match Advanced and Beginner
              track Applications open
            </li>
            <li>
              <strong>2 October 2020:</strong> Applications close
            </li>
            <li>
              <strong>5-9 October 2020:</strong> Interviews!
            </li>
            <li>
              <strong>11 October 2020:</strong> Candidates notified of their
              statuses; there will be a waitlist
            </li>
            <li>
              <strong>15 October 2020:</strong> RSVP due
            </li>
            <li>
              <strong>19 October 2020 at 7PM:</strong>Advanced Track Check-in
            </li>
            <li>
              <strong>20 October 2020 at 8:30PM:</strong> First General Meeting!
            </li>
          </ul> */}
          <div align="center">
            <img
              class="movingItem"
              alt="SWEMatch logo"
              src={Logo}
              width="100%"
            />
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(swematch);
