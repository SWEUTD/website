// events.js

// page displaying event flyers

import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Divider, Grid, List, ListItem, ListSubheader } from '@material-ui/core'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { CenterFocusStrong } from '@material-ui/icons';

const upcomingEvents = [
	{
		name: 'Samsung Collab with ACM + IEEE',
		date: '10/14/2020 - 6:00 PM',
		link: ''
	},
	{
		name: 'Netflix Party/Game Night with other SWE Sections',
		date: '10/17/2020 - 5:00 PM',
		link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D31843dcf19%26e%3D09a746bd56&data=02%7C01%7CAarushi.Pandey%40UTDallas.edu%7C2d1a50e8db9b4879c2c708d86952f74a%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637375152384018565&sdata=uFt6YJSuzWBhoWHFnCoRHt0aV8RCOsQgdhUmFL613ew%3D&reserved=0'
	},
	{
		name: 'Hacktoberfest',
		date: '10/17/2020 - All day',
		link: ''
	},
	{
		name: 'AutoCAD with ASME',
		date: '10/22/2020 - 7:00 PM',
		link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D3c18722279%26e%3D09a746bd56&data=02%7C01%7CAarushi.Pandey%40UTDallas.edu%7C75d7ba8d505c432aa84808d86ed08538%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637381189184646320&sdata=2KPbtx6Jf%2FoQwDdZhtnlXx3NM5fQX1NCwUBicfbdHrc%3D&reserved=0'
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
					<Footer />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(events);
