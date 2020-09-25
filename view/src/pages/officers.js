// officers.js

// page containing officer photos and information

import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import { Card, CardActions, CardContent, CssBaseline, Container, Divider, Button, Box, Grid, TextField, Typography } from '@material-ui/core';
import NavBar from '../components/navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Officer photos
import AarushiPandey from '../assets/OfficerPhotos/AarushiPandey.jpg'
import AayushiChoudhary from '../assets/OfficerPhotos/AayushiChoudhary.png'
import AfridaTasnim from '../assets/OfficerPhotos/AfridaTasnim.jpg'
import AngelleNazareno from '../assets/OfficerPhotos/AngelleNazareno.jpg'
import AnkitaBantey from '../assets/OfficerPhotos/AnkitaBantey.jpg'
import AreebaQazi from '../assets/OfficerPhotos/AreebaQazi.jpg'
import ArushiAgrawal from '../assets/OfficerPhotos/ArushiAgrawal.jpg'
import CadyBaltz from '../assets/OfficerPhotos/CadyBaltz.jpg'
import CaitlinTibbetts from '../assets/OfficerPhotos/CaitlinTibbetts.jpg'
import DeeshaKumbham from '../assets/OfficerPhotos/DeeshaKumbham.jpg'
import HansikaSundaresan from '../assets/OfficerPhotos/HansikaSundaresan.jpg'
import JanroseSamson from '../assets/OfficerPhotos/JanroseSamson.jpg'
import JeshnaGupta from '../assets/OfficerPhotos/JeshnaGupta.jpg'
import MaahaSakia from '../assets/OfficerPhotos/MaahaSakia.jpg'
import ManshaFatima from '../assets/OfficerPhotos/ManshaFatima.heic'
import MedhaAiyah from '../assets/OfficerPhotos/MedhaAiyah.jpg'
import MichaelaPerez from '../assets/OfficerPhotos/MichaelaPerez.jpg'
import NivethaNarayana from '../assets/OfficerPhotos/NivethaNarayana.jpg'
import PallaviVayalali from '../assets/OfficerPhotos/PallaviVayalali.png'
import ReshmiRanjith from '../assets/OfficerPhotos/ReshmiRanjith.jpg'
import ShivaniGandhi from '../assets/OfficerPhotos/ShivaniGandhi.jpg'
import ShreyaChauk from '../assets/OfficerPhotos/ShreyaChauk.jpg'
import SindhuBoppudi from '../assets/OfficerPhotos/SindhuBoppudi.jpg'
import VamikaChatlani from '../assets/OfficerPhotos/VamikaChatlani.heic'
import ZainebAhmad from '../assets/OfficerPhotos/ZainebAhmad.png'
import PushpaKumar from '../assets/OfficerPhotos/PushpaKumar.png'
import JerryAlexander from '../assets/OfficerPhotos/JerryAlexander.jpg'

const officerList = [
	{
		name: 'Medha Aiyah',
		image: MedhaAiyah,
		position: "President",
		linkedin: "https://www.linkedin.com/in/medha-aiyah/" 
	},
	{
		name: 'Maaha Sakia',
		image: MaahaSakia,
		position: "Vice President of External Affairs",
		linkedin: "https://www.linkedin.com/in/maaha-sakhia-183298196/"
	},
	{
		name: 'Cady Baltz',
		image: CadyBaltz,
		position: "Vice President of Internal Affairs",
		linkedin: "https://www.linkedin.com/in/cadybaltz/"
	},
	{
		name: 'Arushi Agrawal',
		image: ArushiAgrawal,
		position: "Secretary",
		linkedin: "https://www.linkedin.com/in/agrawal-arushi/"
	},
	{
		name: 'Ankita Bantey',
		image: AnkitaBantey,
		position: "Vice President",
		linkedin: "https://www.linkedin.com/in/ankita-bantey/"
	},
	{
		name: 'Shivani Gandhi',
		image: ShivaniGandhi,
		position: "Marketing Chair",
		linkedin: "https://www.linkedin.com/in/shivanirgandhi/"
	},
	{
		name: 'Angelle Nazareno',
		image: AngelleNazareno,
		position: "Design Chair"
	},
	{
		name: 'Janrose Samson',
		image: JanroseSamson,
		position: "Community Outreach Chair",
		linkedin: "https://www.linkedin.com/in/janrosesamson/"
	},
	{
		name: 'Sindhu Boppudi',
		image: SindhuBoppudi,
		position: "Industry Chair",
		linkedin: "https://www.linkedin.com/in/sindhuraboppudi/"

	},
	{
		name: 'Deesha Kumbham',
		image: DeeshaKumbham,
		position: "Conference Committee Chair",
		linkedin: "https://www.linkedin.com/in/deesha-kumbham-86b4b6196/"
	},
	{
		name: 'Michaela Perez',
		image: MichaelaPerez,
		position: "Operations Chair",
		linkedin: "https://www.linkedin.com/in/michaela-perez/"
	},
	{
		name: 'Caitlin Tibbetts',
		image: CaitlinTibbetts,
		position: "Competition Chair",
		linkedin: "https://www.linkedin.com/in/caitlin-tibbetts/"
	},
	{
		name: 'Afrida Tasnim',
		image: AfridaTasnim,
		position: "WEHack Assistant Director",
		linkedin: "https://www.linkedin.com/in/afrida-tasnim/"
	},
	{
		name: 'Zaineb Ahmad',
		image: ZainebAhmad,
		position: "SWE UTD Section Counselor"
	},
	{
		name: 'Aarushi Pandey',
		image: AarushiPandey,
		position: "Website Development Committee Member",
		linkedin: "https://www.linkedin.com/in/aarushi-s-pandey/" 
	},
	{
		name: 'Aayushi Choudhary',
		image: AayushiChoudhary,
		position: "Website Development Committee Member",
		linkedin: "https://www.linkedin.com/in/aarushi-s-pandey/" 
	},
	{
		name: 'Dr. Pushpa Kumar',
		image: PushpaKumar,
		position: 'Faculty Advisor',
	},
	{
		name: 'Jerry Alexander',
		image: JerryAlexander,
		position: "ECS Assistant Dean for Student Development"
	}
];



const styles = (theme) => ({
	gridItem: {
		display: 'flex',
		justifyContent: 'center'
	},
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column'
	},
	image: {
		width: '80%',
		borderRadius: '50%'
	}
});

class officers extends Component {
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
		            <p className="heading">Meet Our Officers</p>
                </div>
				<Container className={classes.container}>
					<Grid container
					spacing={5}
					height="100%"
					width="100%"
					alignItems="stretch"
					justify="space-evenly"
					>
						{officerList.map((officer) => (
							<Grid className={classes.gridItem} item xs="6" sm="3">
								<Card className={classes.card} className="movingItem" variant="outlined">
									<CardContent align="center">
										<img src={officer.image} className={classes.image} />
										<br />
										<br />
										<Divider />
										<br />
										<h6>{officer.name}</h6>
										<h6>{officer.position}</h6>
										<a href={officer.linkedin}>
											{officer.linkedin &&
												<FontAwesomeIcon icon={faLinkedin} className="imageLink" size="lg" style={{ color: '#5A5377' }}/>
											}
										</a>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(officers);