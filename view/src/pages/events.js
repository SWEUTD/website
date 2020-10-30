// events.js

// page displaying event flyers

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Divider, Grid, List, ListSubheader } from "@material-ui/core";
import NavBar from "../components/navbar";

import Technical_Interview_101 from "../assets/EventFlyers/Technical_Interview_101.png";
import Technical_and_Behavioral_Interview from "../assets/EventFlyers/Technical_and_Behavioral_Interview.png";

const upcomingEvents = [
  {
    name: "Technical Interview 101 with ACM",
    date: "10/26/2020 - 7:00 PM",
    description:
      "Come learn about technical interviews with SWE x ACM! Learn useful tips and tricks on approaching technical problems, and test that new knowledge with some mock questions! This is a beginner friendly workshop where you’ll brush up on skills that can get you your next internship!",
    link:
      "https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3Ddd4687d47c%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cefe56688b47b41ebc97a08d879dbf603%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637393332941356668%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=d0R512exKHscB8NjKQtF3fIvFO6cnr7AOfHharMnLiY%3D&reserved=0",
  },
  {
    name: "SWE at HackUTD GameJam",
    date: "10/27/2020 - 7:00 PM",
    description:
      "HackUTD is bringing you GameJam on October 25th-31st. This is a weeklong event for you to learn how to develop games! On October 27th at 7pm, SWE will be hosting a beginner workshop that will teach you how to develop your own game using Construct 3. This event is completely free and includes a $1,000 prize pool! HackUTD will also be sending out free T-shirts by mail for those that submit a game. Registration is open until October 11th at https://gamejam.hackutd.co/! Note that you MUST be registered to obtain a free T-shirt / win any prizes. We'll see you at the GameJam! ",
    link:
      "https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D64baa6223b%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cefe56688b47b41ebc97a08d879dbf603%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637393332941366661%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=Ui3DjNEm%2BDVxjVWUw1fQy5a22iSInDgXHhuiBGsd2UY%3D&reserved=0",
  },
  {
    name: "Acing your Behavioral Interview with WITB",
    date: "10/28/2020 - 7:00 PM",
    description:
      "Learn how to ace your behavioral interview with SWE x WITB!  Gain exclusive knowledge about how to crack that interview from Harman International’s recruiter, Jacqueline Joseph! Additionally, you’ll practice answering mock interview questions and receive individual feedback to improve! No prior experience with interviews is required to attend.",
    link:
      "https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3De8e5eb850e%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cefe56688b47b41ebc97a08d879dbf603%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637393332941376655%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=wpNm9nrylxZFkhRsR2%2BBAATBgTDjYJ6WBrZD%2BDnoKiw%3D&reserved=0",
  },
  {
    name: "USAA Tech Talk",
    date: "11/05/2020 - 6:30 PM",
    description:
      "Come learn about the “Tech” part of “InsureTech”, meaning how financial institutions are leveraging cutting-edge technology to do things to help USAA's customers like never before.",
    link:
      "https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D02b7e8d6e8%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cefe56688b47b41ebc97a08d879dbf603%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637393332941376655%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=WZXEFGul5yVU9BKVwxFTloZ0g%2BLCe6DVXz7p%2B%2FDlcZk%3D&reserved=0",
  },
  {
    name: "Diversity and Inclusion in Research Collab with ACM and WWC",
    date: "11/06/2020 - 12:00 PM",
    description:
      "The Office of Research fosters the advancement of cutting-edge research discoveries and technology at the University of Texas at Dallas, an innovative institution in the heart of North Texas that has achieved Tier One national research status. Women have played an integral role in the tech world, which is constantly changing every day. Join us to learn more about how women in tech can contribute to the ongoing research in technology!",
    link:
      "https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3Defd9f05be3%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cefe56688b47b41ebc97a08d879dbf603%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637393332941386649%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=5PlY2eMDQnTAqMYSllYTxjAI%2BCX7i0O6%2B%2B5NsOHTdro%3D&reserved=0",
  },
];

const flyers = [
  {
    /*
	{
		image: Technical_Interview_101,
		link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3Ddd4687d47c%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cefe56688b47b41ebc97a08d879dbf603%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637393332941356668%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=d0R512exKHscB8NjKQtF3fIvFO6cnr7AOfHharMnLiY%3D&reserved=0'
	},
	{
		image: Technical_and_Behavioral_Interview,
		link: 'https://xxx.com'
	},
*/
  },
];

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
            {/*
					 <Grid container
						item md={8} xs={12}
							spacing={2}
							height="100%"
							width="100%"
							alignItems="stretch"
							justify="space-evenly"
							className={classes.gridItem}
							style={{padding:'40px'}}
						>
							{flyers.map((flyer) => (
							<Grid item md={4} xs={12} className={classes.gridItem}>
								<div>
									<br/>
									<a href={flyer.link}>
										<img className="movingItem"  src={flyer.image} verticalAlign="center" width = "100%"/>
									</a>
								</div>
							</Grid>
							))}
						</Grid> 
							*/}
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
