// events.js

// page displaying event flyers

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Divider, Grid, List, ListSubheader } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import NavBar from "../components/navbar";

import Frisco_HS_Panel from "../assets/EventFlyers/Frisco_HS_Panel.png"
import Tetrapak from "../assets/EventFlyers/Tetrapak.png"
import Intel_Coffee_Chat from "../assets/EventFlyers/Intel_Coffee_Chat.png"

const upcomingEvents = [
  {
    name: "Get to Know TetraPak!",
    date: '3/24/2021 - 6:00 PM CST',
    description: 'Meet Tetra Pak, a world leading food processing and packaging solutions company. They have positions open in a variety of engineering disciplines, and you can learn more at this informational session! Message from TetraPak: "We are offering career opportunities for seniors and recent graduates (1-2 years out of college) who don’t have a lot of experience. It’s a training program called Future Talent. This is a really good program for people who are interested in both technology and sales."',
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D3acf2d7ff0%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cc6543fde065b42e298fa08d8e7d5057a%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637514249399669096%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=tzFZT7nqxWlAVO03jt3xre5pu6S1wa9WYQWpOOrcA84%3D&reserved=0'
  },
  {
    name: "High School Panel with CTE SWE Next",
    date: '3/25/2021 - 5:30 PM CST',
    description: "High school panel with CTE SWE Next where current SWE members will be sharing their experience on what it's like to be a member of SWE in college, provide insight about the several broad engineering fields/topics, as well as any personal experiences in these fields. If you're interested in volunteering as a panelist for our high-school panel events, please watch for future announcements on our Discord!",
    link: ''
  },
  {
    name: "Fulfilling Your Potential with Intel",
    date: '3/26/2021 - 4:00 PM CST',
    description: "Join us for a special event with Intel to learn about goal planning and preparing for next recruiting season, standing out at your internship, and summer to do’s to grow your skills! Don't miss this great opportunity to meet Intel representatives including Lisa Depew!",
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3Dbe91c2b9c1%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cc6543fde065b42e298fa08d8e7d5057a%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637514249399689085%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=CUrnL%2FgAy9Fw0GOwNpffmcLcM10zfuze2vklC2Q%2FMGI%3D&reserved=0'
  },
  {
    name: "WITB x WWC Women's Day Panel",
    date: '3/29/2021 - 6:00 PM CST',
    description: "Join us for an exciting panel with notable researchers, industry professionals, & businesswomen in STEM. More details coming soon!",
    link: ''
  },
];

const flyers = [
  {
    image: Tetrapak,
    link: ''
  },
  {
    image: Frisco_HS_Panel,
    link: ''
  },
  {
    image: Intel_Coffee_Chat,
    link: ''
  },
  {
    image: '',
    link: ''
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
  table: {
    minWidth: "50%",
    maxWidth: "70%",
  },
  imgResponsive: {
    width: "200 px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

function createData(event, flyer) {
  return { event, flyer };
}


const rows = [
  createData(upcomingEvents[0], flyers[0].image),
  createData(upcomingEvents[1], flyers[1].image),
  createData(upcomingEvents[2], flyers[2].image),
  createData(upcomingEvents[3], flyers[3].image),
  ];

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
            style={{ "padding-top": "40px" }}
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
					<div align="center">
              <h1>Upcoming Events</h1>
            </div>
          </Grid>
					

					<TableContainer component={Paper} align="center">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" width="45%"><h2></h2></TableCell>
            <TableCell align="center" width="55%"><h2></h2></TableCell>
          </TableRow>
		    </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.event.name}>
      <TableCell component="th" scope="row" align="center">
			  <br/>
				<h4>{row.event.name}</h4>
				<ListSubheader>{row.event.date}</ListSubheader>
				{row.event.description != '' ?
				(<div><h5 align="left">{row.event.description}</h5><br /> </div>) : null }
				{row.event.link != '' && row.event.link != null
				? (<div>
				<Button href={row.event.link} align="center" variant="contained" color="primary" position="relative" zIndex="-3000">Join Meeting</Button>
				<br/>
				<br/>
				</div>)
				: null
				}
			</TableCell>
			  <TableCell component="th" scope="row" align="center">
			  {row.flyer != '' ?
				(<img src={row.flyer} width="60%" />) : null }
        </TableCell>
        </TableRow>
          ))}
        </TableBody>
      </Table>

			</TableContainer> 
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(events);
