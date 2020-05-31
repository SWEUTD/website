import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Officers from '../assets/SlideshowImages/Officers.jpg'
import Fall2020 from '../assets/SlideshowImages/WE.jpg'

import NavBar from '../components/navbar'

const styles = (theme) => ({
	gridItem: {
		display: 'flex',
		justifyContent: 'center'
	},
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		width: '100%',
		padding: '30px',
		backgroundColor: 'rgba(255,255,255,0.5)'
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
				<div className="fullscreen">
				<Grid container
					height="100%"
					width="100%"
					alignItems="stretch"
					justify="space-evenly"
					className="movingItem"
				>
					<Grid className={classes.gridItem} style={{backgroundColor:"#DBC554", padding:'50px'}} item md={6} xs={12}>
					<Card className={classes.card}>
						<h2 className="verticalElement">The Society of Women Engineers (SWE) stimulates women to achieve full potential in careers as engineers and leaders, expand the image of the engineering profession as a positive force in improving the quality of life, and demonstrate the value of diversity.</h2>
					</Card>
					</Grid>
					<Grid className={classes.gridItem} style={{backgroundColor:"#DBC554"}} item md={6} xs={12}>
						<img src={Fall2020} width="100%"/>
					</Grid>
					<Grid className={classes.gridItem} style={{backgroundColor:"#A9A8A9"}} item md={6} xs={12}>
						<img src={Officers} width="100%"/>
					</Grid>
					<Grid className={classes.gridItem} style={{backgroundColor:"#A9A8A9", padding:'50px'}} item md={6} xs={12}>
					<Card className={classes.card}>
						<h2>So what does SWE at UTD do?</h2>
						<br/>
						<h3>SWE at UTD values service, professional development, and networking. Consequently, we host various development and recruitment events with companies in the Dallas/ Fort Worth area, identify relevant volunteer opportunities, and provide members with an opportunity to be sponsored to attend the SWE annual conference.</h3>
					</Card>
					</Grid>
				</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(about);