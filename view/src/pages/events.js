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

import Xilinx_Resume from "../assets/EventFlyers/Xilinx_Resume.jpg"

const upcomingEvents = [
  {
    name: 'Xilinx - Resume + Pitching Yourself',
    date: '2/3/2021 - 6:00 PM',
    description: "Come join us for an exciting event with our sponsor, Xilinx, where you can learn more about the company, meet with two female engineers, get your resume critiqued, and be entered for a chance to win a swag bag containing a pair of AirPods! The panelists are Prithvi Mattur Ravindra: CS & MS in PM - Sales Infrastructure, Kusuma Bathala: Sr Technical Program Manager, and Mike Hanna: Technical Recruiter. Registration link: https://careerevents.xilinx.com/jobs/6198932-university-of-texas-at-dallas-society-of-women-engineers?application_canceled=true",
    link: 'https://xilinx.zoom.us/j/2792764728?pwd=ekpwcWpOY25FTWlSb3g2U3RBa1lMdz09'
  },
  {
    name: 'Honeywell - Finding your Niche + Exploring Careers',
    date: '2/11/2021 - 5:00 PM',
    description: "Having trouble finding your niche and choosing a career path? Come join us for an exciting event with Honeywell, where you can learn more about the company and meet with two female engineers: Judith (Director of Quality Engineering) and Amanda (Director of Offering Management). You don't want to miss this event!",
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D0277c6b43d%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7Cb2442e418575475212eb08d8c6df7555%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637478010356676449%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=aOo7VGelk%2FqOzWKla9Ut522V8uhBIMxExez7YyYbSok%3D&reserved=0'
  },
  {
    name: '8th Annual Digital Divas CS Event',
    date: '2/13/2021 - 10:50 AM',
    description: "This 2-week virtual program teaches girls—trans and cis—and non-binary students the computer science skills they need to make an impact in their community while preparing for a career in tech. Participants will get exposure to tech jobs, meet women in tech careers, and join a supportive sisterhood of girls in tech: From the perspective for a college freshman, junior, and senior, SWE UTD speakers will provide advice and insider information regarding college and scholarship applications, extra curricular activities, leadership and volunteering, online school, and job hunting/internships.",
    link: ''
  }
];

const flyers = [
	{
    image: Xilinx_Resume,
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
  createData(upcomingEvents[2], flyers[2].image)
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
