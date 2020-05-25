import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, CardActions, CardContent, Divider, Button, Grid, TextField } from '@material-ui/core';

import clsx from 'clsx';

import axios from 'axios';
import { authMiddleWare } from '../util/auth';

const styles = (theme) => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	toolbar: theme.mixins.toolbar,
	root: {},
	details: {
		display: 'flex'
	},
	avatar: {
		height: 110,
		width: 100,
		flexShrink: 0,
		flexGrow: 0
	},
	locationText: {
		paddingLeft: '15px'
	},
	buttonProperty: {
		position: 'absolute',
		top: '50%'
	},
	uiProgess: {
		position: 'fixed',
		zIndex: '1000',
		height: '31px',
		width: '31px',
		left: '50%',
		top: '35%'
	},
	progess: {
		position: 'absolute'
	},
	uploadButton: {
		marginLeft: '8px',
		margin: theme.spacing(1)
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10
	},
	submitButton: {
		marginTop: '10px'
	}
});

class event extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			netid: '',
			classification: '',
			major: '',
			otherMajor: '',
			events: [],
			points: 0,
			uiLoading: true,
			buttonLoading: false,
			imageError: ''
		};
	}

	componentWillMount = () => {
		authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('/member')
			.then((response) => {
				console.log(response.data);
				this.setState({
					firstName: response.data.memberInfo.firstName,
					lastName: response.data.memberInfo.lastName,
					email: response.data.memberInfo.email,
					phoneNumber: response.data.memberInfo.phoneNumber,
					classification: response.data.memberInfo.classification,
					major: response.data.memberInfo.major,
					otherMajor: response.data.memberInfo.otherMajor,
					netid: response.data.memberInfo.netid,
					events: response.data.memberInfo.events,
					points: response.data.memberInfo.points,
					uiLoading: false
				});
			})
			.catch((error) => {
				if(error.response != undefined)
				{
					if (error.response.status === 403) {
						this.props.history.push('/login');
					}
				}
				console.log(error);
				this.setState({ errorMsg: 'Error in retrieving the data' });
			});
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleImageChange = (event) => {
		this.setState({
			image: event.target.files[0]
		});
	};

	updateFormValues = (event) => {
		event.preventDefault();
		this.setState({ buttonLoading: true });
		authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		if(this.state.major != "Other")
			this.state.otherMajor = "";
		const formRequest = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			classification: this.state.classification,
			major: this.state.major,
			otherMajor: this.state.otherMajor,
			phoneNumber: this.state.phoneNumber,
			events: this.state.events,
			points: this.state.points
		};
		
		axios
			.post('/member', formRequest)
			.then(() => {
				this.setState({ buttonLoading: false });
			})
			.catch((error) => {
				if (error.response.status === 403) {
					this.props.history.push('/login');
				}
				console.log(error);
				this.setState({
					buttonLoading: false
				});
			});
	};

	render() {
		const { classes, ...rest } = this.props;
		const eventHistory = this.state.events.map((item, key) =>
			<div>
			<p>{item.eventName}</p>
			<Divider />
			</div>
		);

		if (this.state.uiLoading === true) {
			return (
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.state.uiLoading && <CircularProgress size={150} className={classes.uiProgess} />}
				</main>
			);
		} else {
			return (
				<main className={classes.content}>
				<div className={classes.toolbar} />
				<Card {...rest} className={clsx(classes.root, classes)}>
						<CardContent>
							<div className={classes.details}>
								<div>
									<Typography className={classes.locationText} gutterBottom variant="h4">
										You have {this.state.points} SWE points.
									</Typography>
								</div>
							</div>
							<div className={classes.progress} />
						</CardContent>
				</Card>
				<br />
				<Card {...rest} className={clsx(classes.root, classes)}>
						<CardContent>
							<div className={classes.details}>
								<div>
									<Typography className={classes.locationText} gutterBottom variant="h4">
										Events History
									</Typography>
									{eventHistory}
								</div>
							</div>
							<div className={classes.progress} />
						</CardContent>
				</Card>
				
				</main>
			);
		}
	}
}

export default withStyles(styles)(event);