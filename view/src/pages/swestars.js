import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Tiers from '../assets/Tiers.png'


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
		width: '100%'
	}
});

class swestars extends Component {
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
		            <p className="heading">Our SWE Stars</p>
                </div>
				<div className="fullscreen">
				<Grid container
						height="100%"
						width="100%"
						alignItems="stretch"
						justify="space-evenly"
						className="movingItem"
				>
					<Grid style={{padding:'50px'}} className={classes.gridItem} md={3} xs={12}>
						<div>
							<h1 align="center">Become a SWE Star</h1>
							<Divider/>
							<List dense="true">
								<ListSubheader>Earn SWE Points by:</ListSubheader>
								<ListItem>Participating in events</ListItem>
								<ListItem>Volunteering</ListItem>
								<ListItem>Emailing us helpful homework suggestions</ListItem>
							</List>
							<br/>
							<h1 align="center">Rewards:</h1>
							<Divider/>
							<br/>
							<img src={Tiers} width="100%"/>
						</div>
					</Grid>
					<Grid container
						height="100%"
						width="100%"
						alignItems="stretch"
						justify="space-evenly"
						className="movingItem"
						md={9} xs={12}
					>
						<Grid className={classes.gridItem} style={{backgroundColor:"#DBC554", padding:'50px'}} item xs={12}>
							<div>
								<h1 align="center">Gold Members</h1>
								<br/>
								<Divider/>
								<br/>
								<p align="center">We have no gold members yet, become our first!</p>
							</div>
						</Grid>
						<Grid className={classes.gridItem} style={{backgroundColor:"#A9A8A9", padding:'50px'}} item xs={12}>
							<div>
								<h1 align="center">Silver Members</h1>
								<br/>
								<Divider/>
								<br/>
								<p align="center">We have no gold members yet, become our first!</p>
							</div>
						</Grid>
						<Grid className={classes.gridItem} style={{backgroundColor:"#916f51", padding:'50px'}} item xs={12}>
							<div>
								<h1 align="center">Bronze Members</h1>
								<br/>
								<Divider/>
								<br/>
								<p align="center">We have no gold members yet, become our first!</p>
							</div>
						</Grid>
					</Grid>
				</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(swestars);