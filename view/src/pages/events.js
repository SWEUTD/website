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

import Discord_Study_Social from "../assets/EventFlyers/Discord_Study_Social.png"
import AT_and_T from "../assets/EventFlyers/AT&T.png"

const upcomingEvents = [
  {
    name: "AT&T Panel: Create Your Own Path to Success",
    date: '3/2/2021 - 6:30 PM CST',
    description: "Come join us for an exciting event with our sponsor, AT&T, for a female-focused panel about growing your inner G.I.R.L. and finding your path to success. Hope to see y'all there! ",
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D73ba1de828%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7C0b170c85fac14a2621fa08d8d761f089%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637496162949717894%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=CMdwlffRhalmF1GT51EARQCamw1VfxeXLiitHFwF748%3D&reserved=0'
  },
  {
    name: "Navigating a Virtual Career Fair Panel",
    date: '3/10/2021 - 6:00 PM CST',
    description: "Need some tips on navigating a virtual career fair? Come get advice from our SWE Panelists on internship experiences, networking, and navigating the upcoming virtual career fair! You don't want to miss this event!",
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D936c50b499%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cd8ff6a9a48ae4868868208d8dcd846d8%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637502168750943673%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=UUt0OL%2BOB9ggysm1e0h8P9mQ4dL%2Bl98of1%2FvSUkD1eM%3D&reserved=0'
  },
  {
    name: "Pi Day Social",
    date: '3/12/2021 - 6:00 PM CST',
    description: "Come join us for an exciting social to celebrate Pi day with your fellow SWEsters! We have an icebreaker and some fun activities planned - you definitely don't want to miss out!",
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D422764decf%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cd8ff6a9a48ae4868868208d8dcd846d8%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637502168750943673%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=IXqAVHDK0EmSRs2BG1AKqOuRnz9a94T%2BA3ACI0XHWoE%3D&reserved=0'
  },
];

const flyers = [
  {
    image: AT_and_T,
    link: ''
  },
  {
    image: '',
    link: ''
  },
  {
    image: '',
    link: ''
  }
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