// educationoutreach.js

// page displaying information about the Education Outreach committee

import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Logo from "../assets/MatchLogo.png";

const styles = (theme) => ({});

class educationoutreach extends Component {
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
          <p className="heading">Education Outreach</p>
        </div>
        <Container className={classes.container}>
          
          <p align="center" class="movingItem">
          We are the Education Outreach committee of SWE UTD, a committee dedicated to providing STEM 
          education opportunities to K-12 students in the local community! We hope to inspire more students, 
          especially underrepresented groups, to learn about engineering early on! Our programs run on volunteers, 
          so we welcome everyone to come teach with us and make a difference.

          </p>
          <p align="center" class="movingItem">
            <strong>
            Interested in volunteering with us? Fill out this interest form to stay updated on our upcoming volunteering events! 
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIQiTCjuugSWrSJqN5-EZC7jVIPg1VjOblGmcXOuH6MQX8rQ/viewform"> Education Outreach 22-23 Interest Form </a>
          
            </strong>
            
          </p>

          <br></br>
          
          <h4 align="center"> Upcoming events </h4>
          <p align="left" class="movingItem">
          We have an upcoming volunteering opportunity with iCode Plano. 
          This event will involve helping the Girl Scouts earn their Junior 
          Robotics badge! iCode will be providing any curriculum you would 
          need to know in advance. The volunteering event will be on 09/25/2022
           (Sunday), 10am - 12pm.

          </p>
          <br></br>
          
          <h4 align="center"> Past events </h4>
          
          <p align="left" class="movingItem">
          <b> 1. <u>ECS Freshman Orientation</u> - </b> Current and previous SWE UTD officers 
          collaborated to host an event on August 23, 2022 offering advice 
          for freshmen entering the Engineering and Computer Science (ECS) 
          school at UTD. The event was a hit and it was great meeting all 
          of the freshmen!
          </p>
          
          <p align="left" class="movingItem">
          <b>2. <u>Noorishment</u> - </b> Our SWE chapter partnered with Noorishment 
          USA in Dallas, TX in March 2022 to teach hands-on engineering 
          workshops for refugee students.
          </p>

          <p align="left" class="movingItem">
          <b>3. <u>Haggard Library STEAM Skills: Website Development</u> - </b> We 
          partnered with Haggard Library once again to host a 5-week virtual 
          workshop series from Febuary to March 2022 teaching introductory 
          web development in HTML and CSS for middle school students.
          </p>

          <p align="left" class="movingItem">
          <b>4. <u>Haggard Library STEAM Skills: Coding and Circuits</u> - </b> We 
          partnered with Haggard Library in Plano, TX to host a 5-week 
          virtual workshop series from June to July 2021 teaching 
          introductory programming in C++ along with electrical engineering
           skills in Arduino and TinkerCAD for middle school students. 
           Over 150 students attended each week!

          </p>
          
          
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(educationoutreach);
