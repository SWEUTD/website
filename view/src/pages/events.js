// events.js

// page displaying event flyers

import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Divider, Grid, List, ListItem, ListSubheader } from '@material-ui/core'
import flyer1 from '../assets/EventFlyers/1.png'
import flyer2 from '../assets/EventFlyers/2.png'
import flyer3 from '../assets/EventFlyers/3.png'
import flyer4 from '../assets/EventFlyers/4.png'
import flyer5 from '../assets/EventFlyers/5.png'
import NavBar from '../components/navbar'

const upcomingEvents = [
	{
		name: 'Allen High School Panel - Robotics',
		date: '9/29/2020 - 5:00 PM',
		link: ''
	},
	{
		name: 'SWE Match Applications Close',
		date: '10/2/2020',
		link: ''
	},
	{
		name: 'Fall Social',
		date: '10/3/2020 - 5:30 PM',
		link: 'https://teams.microsoft.com/l/meetup-join/19%3aa4a313ea39474a2eaa091d3f16cb192c%40thread.tacv2/1600739448176?context=%7b%22Tid%22%3a%228d281d1d-9c4d-4bf7-b16e-032d15de9f6c%22%2c%22Oid%22%3a%22aa5e36e9-8e5b-4f97-8e0b-58e79a137a07%22%7d'
	},
	{
		name: 'Git It Together Workshop',
		date: '10/5/2020 - 6:00 PM',
		link: ''
	},
	{
		name: 'Tech Demo Night',
		date: '10/9/2020 - 5:00 PM',
		link: ''
	},
	{
		name: 'WEHack',
		date: '10/10/2020 - 10/11/2020',
		link: ''
	}
];

const flyers = [

];

const styles = (theme) => ({
	gridItem: {
		display: 'flex'
	},
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		width: '100%'
	}
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
				<div className={classNames('header', { 'ready': headerReady })}>
		            <p className="heading">Events</p>
                </div>
				<div className="fullscreen">
					<Grid container
						spacing={2}
						height="100%"
						width="100%"
						alignItems="stretch"
						justify="space-evenly"
						className={classes.gridItem}
						style={{padding:'40px'}}
					>
						{/* <Grid container
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
						</Grid> */}
						<Grid item md={3} xs={12} className={classes.gridItem}>
							<div align="center">
								<h1>Upcoming Events</h1>
								<br/>
								{upcomingEvents.map((event) => (
								<List alignItems="center">
									<h4>{event.name}</h4>
									<ListSubheader>{event.date}</ListSubheader>
									{event.link != '' && event.link != null
										? (<div>
												<Button href={event.link} align="center" variant="contained" color="primary">Join Meeting</Button>
												<br/>
												<br/>
											</div>)
										: null
									}
									<Divider/>
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
