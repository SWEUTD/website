// events.js

// page displaying event flyers

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListSubheader,
} from "@material-ui/core";
import NavBar from "../components/navbar";
import { CenterFocusStrong } from "@material-ui/icons";

const upcomingEvents = [
  {
    name: "AutoCAD with ASME",
    date: "10/22/2020 - 7:00 PM",
    description:
      "Mechanical engineering majors and AutoCAD enthusiasts, check out our AutoCAD workshop with ASME! It'll be Among Us themed and an introduction to computer aided design software. This is a beginner friendly workshop where you'll learn a great skill you can add to your resume! Don't miss this!",
    link:
      "https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D3c18722279%26e%3D09a746bd56&data=02%7C01%7CAarushi.Pandey%40UTDallas.edu%7C75d7ba8d505c432aa84808d86ed08538%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637381189184646320&sdata=2KPbtx6Jf%2FoQwDdZhtnlXx3NM5fQX1NCwUBicfbdHrc%3D&reserved=0",
  },
  {
    name: "Technical Interview 101 with ACM",
    date: "10/26/2020 - 7:00 PM",
    description:
      "Come learn about technical interviews with SWE x ACM! Learn useful tips and tricks on approaching technical problems, and test that new knowledge with some mock questions! This is a beginner friendly workshop where you’ll brush up on skills that can get you your next internship!",
    link: "",
  },
  {
    name: "SWE at HackUTD GameJam",
    date: "10/27/2020 - 7:00 PM",
    description:
      "HackUTD is bringing you GameJam on October 25th-31st. This is a weeklong event for you to learn how to develop games! On October 27th at 7pm, SWE will be hosting a beginner workshop that will teach you how to develop your own game using Construct 3. This event is completely free and includes a $1,000 prize pool! HackUTD will also be sending out free T-shirts by mail for those that submit a game. Registration is open until October 11th at https://gamejam.hackutd.co/! Note that you MUST be registered to obtain a free T-shirt / win any prizes. We'll see you at the GameJam! ",
    link:
      "https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D1f5eddba21%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7C9dcf7e561b3d4ea797a308d8745775f8%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637387266316351691%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=EgHz7kWg%2FQrVTM%2F21AEAMej9TyJeo5KtfxUXCssFOJw%3D&reserved=0",
  },
  {
    name: "Acing your Behavioral Interview with WITB",
    date: "10/28/2020 - 7:00 PM",
    description:
      "Learn how to ace your behavioral interview with SWE x WITB!  Gain exclusive knowledge about how to crack that interview from Harman International’s recruiter, Jacqueline Joseph! Additionally, you’ll practice answering mock interview questions and receive individual feedback to improve! No prior experience with interviews is required to attend.",
    link: "",
  },
];

const flyers = [];

const styles = (theme) => ({
  gridItem: {
    display: "flex",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
});

class events extends Component {
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
          <p className="heading">Events</p>
        </div>
        <div className="fullscreen">
          <Grid
            container
            spacing={2}
            height="100%"
            width="100%"
            alignItems="stretch"
            justify="space-evenly"
            className={classes.gridItem}
            style={{ padding: "40px" }}
          >
            <Grid
              container
              item
              md={8}
              xs={12}
              spacing={2}
              height="100%"
              width="100%"
              alignItems="stretch"
              justify="space-evenly"
              className={classes.gridItem}
              style={{ padding: "40px" }}
            >
              {flyers.map((flyer) => (
                <Grid item md={4} xs={12} className={classes.gridItem}>
                  <div>
                    <br />
                    <a href={flyer.link}>
                      <img
                        className="movingItem"
                        src={flyer.image}
                        verticalAlign="center"
                        width="100%"
                      />
                    </a>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid item md={3} xs={12} className={classes.gridItem}>
              <div align="center">
                <h1>Upcoming Events</h1>
                <br />
                {upcomingEvents.map((event) => (
                  <List alignItems="center">
                    <h4>{event.name}</h4>
                    <ListSubheader>{event.date}</ListSubheader>
                    <h5>{event.description}</h5>
                    <br />
                    {event.link != "" && event.link != null ? (
                      <div>
                        <Button
                          href={event.link}
                          align="center"
                          variant="contained"
                          color="primary"
                        >
                          Join Meeting
                        </Button>
                        <br />
                        <br />
                      </div>
                    ) : null}
                    <Divider />
                  </List>
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(events);
