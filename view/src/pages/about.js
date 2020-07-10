// about.js

// about page

import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import NavBar from '../components/navbar'

//images
import Statistics from '../assets/statistics.png'
import Sponsor from '../assets/AT&T.png'

// video
import WhySWE from '../assets/WhySWE.mp4'
import ReactPlayer from 'react-player'

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
		padding: '30px'
	},
	image: {
		width: '80%',
		borderRadius: '50%'
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
				<Grid container
					height="100%"
					width="100%"
					alignItems="stretch"
					justify="space-evenly"
					className="movingItem"
				>	
					<Grid className={classes.gridItem} style={{backgroundColor:"#A9A8A9", color: "white"}} item xs={12}>
						<ReactPlayer url={WhySWE} playing={true} controls={true} />
					</Grid>
					<Grid className={classes.gridItem} style={{backgroundColor:"white", color: "white", padding:'50px'}} item md={6} xs={12}>
						<img src={Statistics} width="100%"/>
					</Grid>
					<Grid className={classes.gridItem} style={{backgroundColor:"white",textAlign:"center", padding:'50px'}} item md={6} xs={12}>
						<div className={classes.card}>
							<h4>The Society of Women Engineers (SWE) stimulates women to achieve full potential in careers as engineers and leaders, expand the image of the engineering profession as a positive force in improving the quality of life, and demonstrate the value of diversity.</h4>
							<br/>
							<h4>SWE at UTD values service, professional development, and networking. Consequently, we host various development and recruitment events with companies in the Dallas/ Fort Worth area, identify relevant volunteer opportunities, and provide members with an opportunity to be sponsored to attend the SWE annual conference.</h4>
						</div>
					</Grid>
					<Grid className={classes.gridItem} style={{backgroundColor:"#DBC554"}} item xs={12}>
						<div align="center">
							<br/>
							<h1>Our Sponsor</h1>
							<h2>We give special thanks to our sponsor, AT&amp;T</h2>
							<img src={Sponsor} width="50%"/>
							<h4>Interested in sponsoring the UT-Dallas section of SWE? <a href="/contact">Let us know!</a></h4>
							<br/>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}
export default withStyles(styles)(about);