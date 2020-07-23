import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import Summer2020 from '../assets/Summer2020.png'
import Fall2020 from '../assets/SlideshowImages/WE.jpg'
import gamenight from '../assets/gamenight.png'

import NavBar from '../components/navbar'

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
	// needed for header animation
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
							<Grid item md={5} xs={12} className={classes.gridItem}>
									<Card style={{width:'100%'}} className="movingItem" variant="outlined">
										<CardContent align="center" fullWidth>
											<a href="https://www.badgelist.com/SWE-UTD-Summer-2020#">
											<img src={Summer2020} verticalAlign="center" width = "100%"/>
											</a>	
										</CardContent>
									</Card>
							</Grid>

							{/* <Grid item item md={6} xs={12} align="center" className={classes.gridItem}>
									<Card style={{width:'100%'}} className="movingItem" variant="outlined">
										<CardContent align="center" fullWidth>
											<br/>
											<h1>Stay connected with SWE this summer!</h1>
											<br/>
											<Divider/>
											<br/>
											<h4>Click <a href="https://www.badgelist.com/SWE-UTD-Summer-2020#">here</a> to participate in #SWEUTDSummer2020 challenges</h4>
											<br/>
											<h4>Be sure to visit our new <a href="/portal">member portal</a> to keep up with your SWE points</h4>
											<br/>
										</CardContent>
									</Card>
							</Grid> */}

							<Grid item md={5} xs={12} className={classes.gridItem}>
									<Card style={{width:'100%'}} className="movingItem" variant="outlined">
										<CardContent align="center" fullWidth>
											<a href="https://bit.ly/SWEGameNight">
											<img src={gamenight} verticalAlign="center" width = "100%"/>
											</a>	
										</CardContent>
									</Card>
							</Grid>
							
						</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(events);