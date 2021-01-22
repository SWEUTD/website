import React, { Component } from "react";
import Collapsible from 'react-collapsible';

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardContent,
  CircularProgress,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import axios from "axios";
import { authMiddleWare } from "../util/auth";

class event extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        netid: "",
        classification: "",
        major: "",
        otherMajor: "",
        events: [],
        points: 0,
        previousPoints: [],
        currentSection: "",
        uiLoading: true,
        buttonLoading: false,
        imageError: "",
        height: 0
      };
    }

    render() {
      return (
        <main>
        <Card>
        <CardContent>
            <p>Our fellow SWEsters and UTD Alumni are always looking to give back to this community. You can find their contact information below under various companies that they can provide a Referral for!</p>
            <br></br>
            <p>Please reach out to them with your resume and the position that you are interested in!</p>
        </CardContent>
      </Card>
      
      <br>
      </br>
      <div className='accordion'>
        <Collapsible trigger="INTEL    +" > 
          <br></br>
          <div className='panel'>
            <p>Medha Aiyah</p>
            <p>Email: mva170001@utdallas.edu</p>
          </div>

        </Collapsible>
        </div>

        <br>
        
        </br>

        <div className='accordion'>
        <Collapsible trigger="AMERICAN AIRLINES      +">
           <br></br>
          <div className='panel'>
            <p>Jessie Arnold</p>
            <p>Phone: (517) 364-3091</p>
            <p>Email: jarnold@gmail.com</p>
          </div>
        </Collapsible>
        </div>
        <br>  
        </br>
        <div className='accordion'>
        <Collapsible trigger="DELL TECHNOLOGIES      +">
           <br></br>
          <div className='panel'>
            <p>Jessie Arnold</p>
            <p>Phone: (517) 364-3091</p>
            <p>Email: jarnold@gmail.com</p>
          </div>
        </Collapsible>
        </div>

        <br></br>
        
      
        <Card>
          <CardContent>
            <p>Interested in providing Referrals to fellow SWEsters? </p>
            <a href="https://forms.gle/YVUUKhAapmzznKVB6" color="purple">Click here!</a>
          </CardContent>
        </Card>
        </main>
      )  

    }
}

export default withStyles(styles)(event);
