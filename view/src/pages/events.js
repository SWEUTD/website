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
import CapitalOne from "../assets/CapitalOne.jpg"


// import SWE_Match_Presentation from "../assets/EventFlyers/SWE_Match_Presentation.png"

const upcomingEvents = [
  
 
  {
    name: "Insight to Capgemini’s RISE Program",
    date: 'Date: 2/16/22. Time: 6:00PM - 7:00PM CST',
    /*location: 'TBD',*/
    description: "Want some quick tips and tricks on how to stand out to recruiters? Come to this event with SWE and WWC! We have panelists ready to answer your questions!",
    link: 'https://tinyurl.com/swexcapgemini',
  },


];

const flyers = [
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
				<h4><strong>{row.event.name}</strong></h4>
				<ListSubheader><strong>{row.event.date}</strong></ListSubheader>
        <ListSubheader><strong>{row.event.location}</strong></ListSubheader>
				{row.event.description != '' ?
				(<div><h5 align="left" >{row.event.description}</h5><br /> </div>) : null }
				{row.event.link != '' && row.event.link != null
				? (<div>
				<a href={row.event.link}><strong>Attend Here!</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.step1 != '' && row.event.step1 != null 
        ? (<div>
          <ListSubheader><strong>{row.event.step1}</strong></ListSubheader>
          <br/>
          <br/>
        </div>)
        : null
        }
        {row.event.link1 != '' && row.event.link1 != null
				? (<div>
				<a href={row.event.link1}><strong>WWtechapp!</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.step2 != '' && row.event.step2 != null 
        ? (<div>
          <ListSubheader><strong>{row.event.step2}</strong></ListSubheader>
          <br/>
          <br/>
        </div>)
        : null
        }
        {row.event.link2 != '' && row.event.link2 != null
				? (<div>
				<a href={row.event.link2}><strong>JPMC2022Intern</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.link3 != '' && row.event.link3 != null
				? (<div>
				<a href={row.event.link3}><strong>JPMC2022Fulltime</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.step3 != '' && row.event.step3 != null 
        ? (<div>
          <ListSubheader><strong>{row.event.step3}</strong></ListSubheader>
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