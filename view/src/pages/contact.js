// contact.js

// contact page

import React, { Component } from 'react';
import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import axios from 'axios'
import NavBar from '../components/navbar'
import Mailchimp from '../components/mailchimp'
import Footer from '../components/footer'

const styles = (theme) => ({

});

class contact extends Component {
    constructor(props) {
        super(props);
		this.state = { headerReady: false };
		this.state = {
			errors: [],
			contactLoading: false,
			name: "",
			email: "",
			subject: "",
			message: ""
		};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({ headerReady: true });
        }, 0);
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

	handleSubmit = (event) => {
		this.setState({ contactLoading: true });
		event.preventDefault();
		const formData = {
			name: this.state.name,
			email: this.state.email,
			subject: this.state.subject,
			message: this.state.message
		};
		// POST request for sending email to SWE gmail
		axios.post('https://us-central1-swe-utd-portal.cloudfunctions.net/submit', formData)
			.then(() => {
				this.setState({ 
					contactLoading: false,
					name: '',
					email: '',
					subject: '',
					message: ''
				});		
			})
			.catch((error) => {
			  console.log(error)
			  this.setState({
				contactLoading: false,
				name: '',
				email: '',
				subject: '',
				message: ''
			});
		})
	  }
	 
    render() {
		const { headerReady } = this.state;
		const { errors, contactLoading } = this.state;
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<NavBar />
				<div className={classNames('header', { 'ready': headerReady })}>
		            <p className="heading">Contact Us</p>
                </div>
				<Container>
					<div>			
						<Grid container
							spacing={10}
							height="100%"
							width="80%"
							alignItems="stretch"
							justify="space-evenly"
						>
							<Grid item sm={6} xs={12}>
								<h4 align="center">Send us an email!</h4>	
								<form className={classes.form} noValidate>	
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="name"
										label="Name"
										name="name"
										autoComplete="name"
										autoFocus
										helperText={errors.name}
										error={errors.name ? true : false}
										onChange={this.handleChange}
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										name="email"
										label="Email"
										type="email"
										id="email"
										autoComplete="email"
										helperText={errors.email}
										error={errors.email ? true : false}
										onChange={this.handleChange}
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										name="subject"
										label="Subject"
										type="subject"
										id="subject"
										autoComplete="subject"
										helperText={errors.subject}
										error={errors.subject ? true : false}
										onChange={this.handleChange}
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										multiline
										rows={6}
										name="message"
										label="Message"
										type="message"
										id="message"
										autoComplete="message"
										helperText={errors.message}
										error={errors.message ? true : false}
										onChange={this.handleChange}
									/>
									<br/>
									<br/>
									<Button
										type="contact"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.contact}
										onClick={this.handleSubmit}
										
									>
										Send
										{contactLoading && <CircularProgress size={30} className={classes.progess} />}
									</Button>
									{errors.general && (
										<Typography variant="body2" className={classes.customError}>
											{errors.general}
										</Typography>
									)}
								</form>	
							</Grid>
							<Grid item sm={6} xs={12} align="center">
								<h4>Subscribe to our mailing list</h4>
								<Mailchimp
								action='https://facebook.us19.list-manage.com/subscribe/post?u=ada9150cb4cf2450b2870f9b7&amp;id=ae471c90b0'
								fields={[
								{
									name: 'EMAIL',
									placeholder: 'Email',
									type: 'email',
									required: true
								}
								]}
								className='mailchimp'
								/>
							</Grid>
						</Grid>
					</div>
					<br/>
				</Container>
				<Footer />
			</div>
		);
	}
}
export default withStyles(styles)(contact);