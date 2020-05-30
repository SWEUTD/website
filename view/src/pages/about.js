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

class about extends Component {
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
		            <p className="heading">About the UT-Dallas Society of Women Engineers</p>
                </div>
				<Container className={classes.content}>
				<div className={classes.toolbar} />

				<Grid container
					spacing={2}
					height="100%"
					width="100%"
					alignItems="stretch"
					justify="space-evenly"
				>
					<Grid className={classes.gridItem} item md={6} xs={12}>
							<Card className="movingItem" variant="outlined" fullWidth>
								<CardContent align="center" fullWidth>
									<p>The Society of Women Engineers (SWE) stimulates women to achieve full potential in careers as engineers and leaders, expand the image of the engineering profession as a positive force in improving the quality of life, and demonstrate the value of diversity.</p>
								</CardContent>
							</Card>
					</Grid>

					<Grid className={classes.gridItem} item md={6} xs={12}>
						<Card height="100%" className="movingItem" variant="outlined">
							<CardContent height="100%" align="center" fullWidth>				
								<p>So what does SWE at UTD do? SWE at UTD values service, professional development, and networking. Consequently, we host various development and recruitment events with companies in the Dallas/ Fort Worth area, identify relevant volunteer opportunities, and provide members with an opportunity to be sponsored to attend the SWE annual conference.
</p>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(about);