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
import axios from "axios";
import DocIcon from "../assets/document-icon.png";
import LinkIcon from "../assets/link.png";
import CameraIcon from "../assets/camera.png";
import SlideshowIcon from "../assets/slideshow.png";
import { authMiddleWare } from "../util/auth";

const resources = [
    {
      title: "Document Title",
      type: "document",
      link: "#"
    },
    {
      title: "Link Title",
      type: "link",
      link: "#"
    },
    {
      title: "Image / Video Title",
      type: "media",
      link: "#"
    },
    {
      title: "Slideshow Title",
      type: "slideshow",
      link: "#"
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
                        <h3>Company Info</h3>
                        <h5>
                            Here you will find links to various resources with general information that may be useful when applying to different companies! 
                            <b> If you would like to add to these resources, please fill out <a href="https://forms.gle/XYhwKi2UZahKaugR7">this form</a>.</b>
                        </h5>
                        <br />
                        <div className={classes.body}>
                            {resources.map((resource) => (
                            <Button
                                variant={"outlined"}
                                className={classes.linkBtns}
                            >
                                <img src={
                                (() => {
                                    switch (resource.type) {
                                    case "document": return DocIcon;
                                    case "link": return LinkIcon;
                                    case "media": return CameraIcon;
                                    case "slideshow": return SlideshowIcon;
                                    }
                                })()
                                } className={classes.iconImg}/>
                                <p>{resource.title}</p>
                            </Button>
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