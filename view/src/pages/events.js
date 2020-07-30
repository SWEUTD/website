import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import Summer2020 from '../assets/EventFlyers/Summer2020.png'
import aws1 from '../assets/EventFlyers/day1.jpg'
import aws2 from '../assets/EventFlyers/day2.jpg'
import aws3 from '../assets/EventFlyers/day3.jpg'
import aws4 from '../assets/EventFlyers/day4.jpg'
import aws5 from '../assets/EventFlyers/day5.jpg'

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
							<Grid item md={4} xs={12} className={classes.gridItem}>
									<Card style={{width:'100%'}} className="movingItem" variant="outlined">
										<CardContent align="center" fullWidth>
											<a href="https://www.badgelist.com/SWE-UTD-Summer-2020#">
											<img src={Summer2020} verticalAlign="center" width = "100%"/>
											</a>	
										</CardContent>
									</Card>
							</Grid>

							<Grid item md={4} xs={12} className={classes.gridItem}>
								<Card style={{width:'100%'}} className="movingItem" variant="outlined">
									<CardContent align="center" fullWidth>
										<a href="https://app.chime.aws/meetings/2842567391">
										<img src={aws1} verticalAlign="center" width = "100%"/>
										</a>	
									</CardContent>
								</Card>
							</Grid>

							<Grid item md={4} xs={12} className={classes.gridItem}>
								<Card style={{width:'100%'}} className="movingItem" variant="outlined">
									<CardContent align="center" fullWidth>
										<a href="https://app.chime.aws/meetings/2842567391">
										<img src={aws2} verticalAlign="center" width = "100%"/>
										</a>	
									</CardContent>
								</Card>
							</Grid>

							<Grid item md={4} xs={12} className={classes.gridItem}>
								<Card style={{width:'100%'}} className="movingItem" variant="outlined">
									<CardContent align="center" fullWidth>
										<a href="https://app.chime.aws/meetings/2842567391">
										<img src={aws3} verticalAlign="center" width = "100%"/>
										</a>	
									</CardContent>
								</Card>
							</Grid>

							<Grid item md={4} xs={12} className={classes.gridItem}>
								<Card style={{width:'100%'}} className="movingItem" variant="outlined">
									<CardContent align="center" fullWidth>
										<a href="https://app.chime.aws/meetings/2842567391">
										<img src={aws4} verticalAlign="center" width = "100%"/>
										</a>	
									</CardContent>
								</Card>
							</Grid>

							<Grid item md={4} xs={12} className={classes.gridItem}>
								<Card style={{width:'100%'}} className="movingItem" variant="outlined">
									<CardContent align="center" fullWidth>
										<a href="https://app.chime.aws/meetings/2842567391">
										<img src={aws5} verticalAlign="center" width = "100%"/>
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