import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Carousel from 'react-bootstrap/Carousel'
import NavBar from '../components/navbar'

import Image2 from '../assets/WEImages/1.HEIC'
import Image1 from '../assets/WEImages/2.jpg'
import Image3 from '../assets/WEImages/3.jpg'
import Image4 from '../assets/WEImages/4.png'
import Image5 from '../assets/WEImages/5.png'

const styles = (theme) => ({
	
});

class weconference extends Component {
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
		            <p className="heading">WE Conference</p>
                </div>
				<Container className={classes.container}>
				<Grid container
					height="100%"
					width="100%"
					spacing={3}
					alignItems="stretch"
					justify="space-evenly"
					className="movingItem"
				>
					<Grid className={classes.gridItem} item md={6} xs={12}>
						<Carousel className="verticalElement" style={{width:"100%", align:"center"}}>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={Image1}
								alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={Image2}
								alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={Image3}
								alt="Third slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={Image4}
								alt="Fourth slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={Image5}
								alt="Fifth slide"
								/>
							</Carousel.Item>
							</Carousel>
						</Grid>
						<Grid className={classes.gridItem} item md={6} xs={12}>
							<div>
							<h6><b>What is the conference?</b></h6> 
							<p>The world's largest conference for Women in engineering and technology.  WE20 is an opportunity to hear about diligent women making an impact in a field and encouraging other women to become involved in engineering.</p>
							<h6><b>Keynote speakers:</b></h6>
							<p> Laura Maxwell, Senior Vice President, Supply Chain for Frito-Lay North America, Pepsico</p>
							<p>Sundari Mitra, Vice President, General Manager of SEG, Intel Corporation</p>
 							<p>Linda DuCharme, President of Upstream Integrated Solutions, ExxonMobil</p>
							<h6><b>Career fair:</b></h6>
							<p>The conference gives you an opportunity to attend a career fair with many companies recruiting students.</p>
							<h6><b>CLI:</b></h6> 
							<p>Collegiate Leadership Institute gives skills, knowledge, and leadership experience to use in engineering fields and teaches participants how to network with companies.</p>
							<h6><b>When and where?</b></h6>
							<p>New Orleans, Louisiana Nov 5-7th Ernest N. Memorial Convention Center</p>
							<h6><b>When we are recruiting?</b></h6>
							<p>Fill out the application from August 18th until September 10th </p>
							<p>SWE is looking for 6 people who are involved with SWE and have a passion for engineering</p>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}
export default withStyles(styles)(weconference);