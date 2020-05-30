import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import NavBar from '../components/navbar'

const styles = (theme) => ({
	root:  {
		flexGrow: 1
	},
	gridItem: {
		display: 'flex',
	},
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		width: '100%'
	}
});

class join extends Component {
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
		            <p className="heading">Become a Member</p>
                </div>
				<Container>
					<Grid container
						spacing={2}
						height="100%"
						width="100%"
						alignItems="stretch"
						justify="space-evenly"
					>
						<Grid item xs={12}>
								<Card className="movingItem" variant="outlined" fullWidth>
									<CardContent align="center" fullWidth>
										<h1>UTD Membership</h1>	
									<br/>
									<Divider/>
									<br/>
									<h5>Visit the <a href="swe.org/join">member portal</a> to create an account with UTD SWE and join our mailing listenerCount.</h5>
									</CardContent>
								</Card>
						</Grid>
						<Grid item xs={12}>
								<Card className="movingItem" variant="outlined" fullWidth>
									<CardContent align="center" fullWidth>
										<h1>National Membership</h1>	

								<br/>
								<Divider/>
								<br/>
										<h5>Click <a href="swe.org/join">here</a> to become a member of the National SWE Organization</h5>
									</CardContent>
								</Card>
						</Grid>

							<Grid className={classes.gridItem} item md={6} xs={12}>
								<Card className={classes.card} className="movingItem" variant="outlined" fullWidth>
									<CardContent align="center" fullWidth>
										<h5 align="left">Membership Benefits:</h5>
											<List dense="true" align="center">
												<ListItem>Eligibility for scholarships</ListItem>
												<ListItem>Access to the SWE Career Center</ListItem>
												<ListItem>Networking opportunities with practicing women engineers and other collegiates</ListItem>
												<ListItem>A support system of peer groups, mentors, advisors, and industry leaders</ListItem>
												<ListItem>An opportunity to develop your leadership and management skills</ListItem>
												<ListItem>SWE Annual and Regional Conferences</ListItem>
												<ListItem>Annual subscription to the award-winning SWE Magazine</ListItem>
											</List>
									</CardContent>
								</Card>
							</Grid>
							<Grid align="right" className={classes.gridItem} item md={6} xs={12}>
								<Card className={classes.card} align="right" className="movingItem" variant="outlined" fullWidth>
									<CardContent align="center" fullWidth>
										<h5 align="left">Membership Costs:</h5>
										<List dense="true" align="center">
											<ListItem>$20 for yearlong membership</ListItem>
											<ListItem>$50 for five-year membership with the the Collegiate to Career option</ListItem>
										</List>
									</CardContent>
								</Card>

						</Grid>
						</Grid>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(join);
