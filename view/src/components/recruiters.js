import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardContent,
  CircularProgress,
  Button,
  ButtonGroup,
  Divider,
} from "@material-ui/core";
import ContactIcon from "../assets/contact.png";
import { authMiddleWare } from "../util/auth";

const recruiters = [
    {
      name: "A Recruiter",
      company: "ABC",
      email: "person@email.com",
      phone: "123-456-789",
      other: "none"
    }
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
    uiProgess: {
      position: "fixed",
      zIndex: "1000",
      height: "31px",
      width: "31px",
      left: "50%",
      top: "35%",
    },
    progess: {
      position: "absolute",
    },
    uploadButton: {
      marginLeft: "8px",
      margin: theme.spacing(1),
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10,
    },
    submitButton: {
      marginTop: "10px",
    },
    body: {
      display: "flex",
    },
    linkBtns: {
      borderRadius: "10px",
      flexDirection: "row",
      margin: "20px",
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
                        Here you will find the contact info for any recruiters that are in contact with SWEsters. Feel free to reach out to them! 
                        <b> If you would like to add to these resources, please fill out <a href="https://forms.gle/XYhwKi2UZahKaugR7">this form</a>.</b>
                        </h5>
                        <br />
                        <div className={classes.body}>
                        {recruiters.map((person) => (
                            <div className={classes.box}>
                            <img src={ContactIcon} className={classes.iconImg}/>
                            <p>Name: {person.name}</p>
                            <p>Company: {person.company}</p>
                            <p>Email: {person.email}</p>
                            <p>Phone: {person.phone}</p>
                            <p>Other info: {person.other}</p>
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