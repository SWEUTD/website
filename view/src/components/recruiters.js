import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardContent,
  Button,
  ButtonGroup,
  Divider,
} from "@material-ui/core";
import ContactIcon from "../assets/contact.png";

const recruiters = [
  {
    name: "Example Recruiter",
    company: "ABC",
    email: "person@email.com",
    phone: "123 456 789",
    other: "Role",
  }
    /*{ cannot share these recruiters yet
      name: "Susanna Biancheri",
      company: "AT&T",
      email: "sb2321@att.com",
      phone: "214 486 8408",
      other: "Tech Operations"
    },
    {
      name: "Will Brown",
      company: "AT&T",
      email: "WB1912@att.com",
      phone: "713.591.9388",
      other: "UTD Recruiting Manager"
    },
    {
      name: "Maegan Wade",
      company: "Capital One",
      email: "maegan.wade@capitalone.com",
      phone: "Not Given",
      other: "Recruiter"
    },
    {
      name: "Marcela Izaguirre",
      company: "Tetra Pak",
      email: "Marcela.Izaguirre@Tetrapak.com",
      phone: "52 55 3456 2283",
      other: "University Relations Specialist"
    },
    {
      name: "Jolene Kim Nguyen",
      company: "Xilinx",
      email: "jolenen@xilinx.com",
      phone: "408-324-4906",
      other: "Talent Acquisition Program Manager"
    },*/
];

const styles = (theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    details: {
      display: "flex",
    },
    locationText: {
      paddingLeft: "15px",
    },
    gridItem: {
      display: "flex",
      width: "100%",
    },
    card: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      width: "100%",
    },
    buttonProperty: {
      position: "absolute",
      top: "50%",
    },
    progess: {
      position: "absolute",
    },
    submitButton: {
      marginTop: "10px",
    },
    body: {
      display: "flex",
      flexWrap: "wrap",
    },
    iconImg: {
      width: "100px",
      padding: "10px",
    },
    box: {
      display: "inline-block",
      margin: "20px",
      padding: "20px",
      border: "1px solid #eee",
      borderRadius: "10px",
      boxShadow: "0 2px 2px #eee",
      width: "25%",
    },
});

class event extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
            <Card
                className={classes.details}
                className="movingItem"
                variant="outlined"
            >
                    <CardContent align="center">
                    <div>
                        <br />
                        <h3>Recruiters</h3>
                        <h5>
                        Here you will find the contact info for any recruiters that are in contact with SWE. Feel free to reach out to them! 
                        <b> If you would like to add to these resources, please fill out <a href="https://forms.gle/XYhwKi2UZahKaugR7">this form</a>. (Make sure you have their permission to share their contact info!)</b>
                        </h5>
                        <br />
                        <div className={classes.body} className="movingItem">
                            {recruiters.map((person) => (
                                <div className={classes.box} >
                                    <img src={ContactIcon} className={classes.iconImg}/>
                                    <p><b>{person.name}</b></p>
                                    <p>{person.company}</p>
                                    <p>Email: {person.email}</p>
                                    <p>Phone: {person.phone}</p>
                                    <p>{person.other}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>                
            </div>

        );

    }
}

export default withStyles(styles)(event);