// events.js

// page displaying event flyers

import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import { Card, CardContent, Grid } from '@material-ui/core'
import kickoff from '../assets/EventFlyers/kickoff.png'

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
							<Grid item md={4} xs={12} className={classes.gridItem}>
									<Card style={{width:'100%'}} className="movingItem" variant="outlined">
										<CardContent align="center" fullWidth>
											<a href="#">
											<img src={kickoff} verticalAlign="center" width = "100%"/>
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