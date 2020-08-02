import React, { Component } from 'react';
import { Button, Select, MenuItem, Grid, Container, TextField, CircularProgress, FormControl, InputLabel } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

import NavBar from '../components/navbar'
import axios from 'axios';

const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	signin: {
		margin: theme.spacing(3, 0, 2)
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10
	},
	progess: {
		position: 'absolute'
	}
});

class meetingform extends Component {
	constructor(props) {
		super(props);

		this.state = { headerReady: false };

		this.state = {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			classification: '',
			major: '',
			netid: '',
			email: '',
			errors: [],
			signinLoading: false,
			secretWord: ''
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.UI != undefined)
		{
			if(nextProps.UI.errors) {
			this.setState({
				errors: nextProps.UI.errors
				});
			}
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSignin = (event) => {
		event.preventDefault();
		this.setState({ signinLoading: true });
		if(this.state.major != "Other")
			this.state.otherMajor = "";
		const newMemberData = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			phoneNumber: this.state.phoneNumber,
			classification: this.state.classification,
			major: this.state.major,
			otherMajor: this.state.otherMajor,
			netid: this.state.netid.toLowerCase(),
			email: this.state.email.toLowerCase(),
            eventPoints: this.props.eventPoints,
            eventName: this.props.eventName,
			eventDate: this.props.eventDate,
		};
		if(this.state.secretWord.toLowerCase() === this.props.secretWord)
		{
			axios
				.post('https://us-central1-swe-utd-portal.cloudfunctions.net/api/newEvent', newMemberData)
				.then(() => {
					this.props.history.push('/');
				})
				.catch((error) => {
					this.setState({
						errors: error.response.data,
						signinLoading: false
					});
				});
		}
		else {
			this.state.errors.secretWord = "This secret word is invalid"
			this.setState({
				signinLoading: false
			});
		}
	}
	// needed for header animation
      componentDidMount() {
        setTimeout(() => {
          this.setState({ headerReady: true });
        }, 0);
    }
    render() {
        const { headerReady } = this.state;
		const { classes } = this.props;
		const { errors, signinLoading } = this.state;
		return (
			<div>
				<NavBar />
				<div className={classNames('header', { 'ready': headerReady })}>
					<p className="heading">{this.props.eventHeading}</p>
				</div>
				<Container width="75%">
					<Grid container
						spacing={10}
						height="100%"
						width="80%"
						alignItems="stretch"
						justify="space-evenly"
					>
						<Grid item sm={6} xs={12}>
							<div className={classes.paper}>
								<form className={classes.form} noValidate>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="secretWord"
												label="Secret Word (given out during meeting)"
												name="secretWord"
												autoComplete="secretWord"
												helperText={errors.secretWord}
												error={errors.secretWord ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="firstName"
												label="First Name"
												name="firstName"
												autoComplete="firstName"
												helperText={errors.firstName}
												error={errors.firstName ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="lastName"
												label="Last Name"
												name="lastName"
												autoComplete="lastName"
												helperText={errors.lastName}
												error={errors.lastName ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<FormControl 
												fullWidth 
												variant="outlined"
												required
											>
											<InputLabel>Classification</InputLabel>
												<Select
													id="classification"
													label="Classification"
													name="classification"
													autoComplete="classification"
													helperText={errors.classification}
													error={errors.classification ? true : false}
													onChange={this.handleChange}
													>
														<MenuItem selected value="Freshman">Freshman</MenuItem>
														<MenuItem value="Sophomore">Sophomore</MenuItem>
														<MenuItem value="Junior">Junior</MenuItem>
														<MenuItem value="Senior">Senior</MenuItem>
														<MenuItem value="Graduate Student">Graduate Student</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="netid"
												label="NetID"
												name="netid"
												autoComplete="netid"
												helperText={errors.netid}
												error={errors.netid ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm = {6}>
											<FormControl 
												fullWidth 
												variant="outlined"
												required
											>
											<InputLabel>Major</InputLabel>
												<Select
													id="major"
													label="Major"
													name="major"
													autoComplete="major"
													helperText={errors.major}
													error={errors.major ? true : false}
													onChange={this.handleChange}
													>
														<MenuItem selected value="Biomedical Engineering">Biomedical Engineering</MenuItem>
														<MenuItem value="Computer Engineering">Computer Engineering</MenuItem>
														<MenuItem value="Computer Science">Computer Science</MenuItem>
														<MenuItem value="Electrical Engineering">Electrical Engineering</MenuItem>
														<MenuItem value="Mechanical Engineering">Mechanical Engineering</MenuItem>
														<MenuItem value="Software Engineering">Software Engineering</MenuItem>
														<MenuItem value="Other">Other</MenuItem>
														
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={12} sm = {6}>
											<TextField
												variant="outlined"
												fullWidth
												id="otherMajor"
												label="Other Major"
												name="otherMajor"
												autoComplete="otherMajor"
												helperText={errors.otherMajor}
												error={errors.otherMajor ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="phoneNumber"
												label="Phone Number"
												name="phoneNumber"
												autoComplete="phoneNumber"
												helperText={errors.phoneNumber}
												error={errors.phoneNumber ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="email"
												label="Email Address"
												name="email"
												autoComplete="email"
												helperText={errors.email}
												error={errors.email ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
									</Grid>
									<Button
										type="signin"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.signin}
										onClick={this.handleSignin}
										disabled={signinLoading || 
											!this.state.secretWord ||
											!this.state.email || 
											!this.state.firstName || 
											!this.state.lastName ||
											!this.state.classification || 
											!this.state.major || 
											!this.state.netid || 
											!this.state.phoneNumber}
									>
										Sign In
										{signinLoading && <CircularProgress size={30} className={classes.progess} />}
									</Button>
								</form>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(meetingform);