// contact.js

// contact page

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import axios from 'axios'
import NavBar from '../components/navbar'

const styles = (theme) => ({
	
});

class contact extends Component {
	// needed for header animation
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
				<Container width="50%">
					<div>			
						<Grid container
							spacing={10}
							height="100%"
							width="80%"
							alignItems="stretch"
							justify="space-evenly"
						>
							<Grid item sm={6} xs={12}>
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
										disabled={contactLoading || !this.state.email || !this.state.name || !this.state.subject || !this.state.message}
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
						</Grid>
					</div>

				</Container>
			</div>
		);
	}
}
export default withStyles(styles)(contact);