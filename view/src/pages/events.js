// events.js

// page displaying event flyers

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Divider, Grid, List, ListSubheader } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import NavBar from "../components/navbar";
import LadiesInTech from "../assets/LadiesInTech.png"
import SWE21ConferenceScholarship from "../assets/SWE21ConferenceScholarship.png"
import CapitalOne from "../assets/CapitalOne.jpg"
import kickoff_flyer2 from "../assets/kickoff_flyer2.png"

// import SWE_Match_Presentation from "../assets/EventFlyers/SWE_Match_Presentation.png"

const upcomingEvents = [
  {
    name: "Paycom's Career Fair Prep",
    date: 'Thursday, September 2, 2021. 12:00 PM  CST',
    location: '', 
    description: "Wanting to put your best foot forward at your Career Fair this fall? Come and hear Career Fair best practices from a Technical College Recruiter at Paycom!",
    link: '',
    meetingbutton: 'https://paycom.zoom.us/j/99375664633?pwd=UGxpcFA2bmNvWExOQkREWU42NGtwZz09#success',
    meetinginfo: 'Meeting ID: 993 7566 4633 | Password: 743422'
  },

  {
    name: "Capital One Tech Coffee Chats",
    date: '9/03, 9/16, 9/24. 9:00 AM - 11:00 AM CST',
    description: "This one-on-one chat is a great opportunity to ask questions about our intern and rotation programs with a current (or recent grad) of the Technology Development Program. You can also learn more about #LifeatCapitalOne, our culture, project areas, and more." ,
    link: 'https://www.signupgenius.com/go/8050e48a4a72ca2fe3-virtual23'
  },
  {
    name: "Capital One Technical Case Interview Workshops",
    date: '9/02, 9/10, 9/17, 9/24. 1:00 PM CST',
    description: "During these workshops, you will have the opportunity to be able to be walked through practice interview questions and a case with Capital One professionals trained in our interview process. A recruiter will also be on the call to answer any questions you may have.",
    link: '',
    link02: 'https://capitalone.eightfold.ai/events/candidate/landing?plannedEventId=GWpKbeP9',
    link10: 'https://capitalone.eightfold.ai/events/candidate/landing?plannedEventId=2PBpov7Q',
    link17: 'https://capitalone.eightfold.ai/events/candidate/landing?plannedEventId=QP1pgvzj', 
    link24: 'https://capitalone.eightfold.ai/events/candidate/landing?plannedEventId=o7jAeyWb'
  },
  {
    name: "Diversity in Tech at Capital One",
    date: 'Thursday, September 16, 2021. 5:00 PM - 6:00 PM CST',
    description: "Join us for a live event to hear about how Capital One fosters a culture of diversity, inclusion, and belonging! We will also feature a panel of tech associates from our Business Resource Groups who will discuss #LifeAtCapitalOne and highlight what they are currently working on. Come prepared with any questions you may have! The first five people to register and attend this event will receive a Grubhub gift card. We look forward to seeing you there! ",
    link: '',
    link16: 'https://capitalone.eightfold.ai/events/candidate/landing?plannedEventId=2zQQoRzK'
  },
  {
    name: "Ladies in Tech Mentoring Program ",
    date: 'Application closed on September 6, 2021',
    description: "The Ladies in Tech Mentoring Program, run by officers of SWE and WWC, has opened up mentee applications! The program aims to help freshmen majoring in STEM-related fields feel connected to the university, their major, and other women in tech. The Ladies in Tech Mentoring Program has officially opened its Mentee Applications for the 2021-2022 school year! If you're interested in becoming a mentee, please fill out the 2021-2022 Mentee Application by 11:59 PM on September 6, 2021. We only have around 25 spots for mentees this year, so be sure to check out the application if you are interested! Mentees will have access to professional, personal, and academic development events and create lasting relationships with other women in tech. Mentees will also have the opportunity to create an end-to-end technical project with the support of their mentors and the LIT officer team.",
    link: '',
    apply1: 'https://docs.google.com/forms/d/e/1FAIpQLSe70r5ViHZeL9RSnPN6uwNcpu5onJjWHgnekMEeku2MnGSh5Q/viewform'
  },
  {
    name: "SWE 21 Conference: Scholarship Application",
    date: 'Application closed on September 10, 2021.',
    description: "Join us at the Crossroads of America this October for WE21—the top destination for women engineers and technologists! WE21 is the largest and most prestigious conference for women in engineering and technology. This year’s theme is Aspire to Inspire. We promise that the strong, diverse women you meet and learn from will leave you feeling personally inspired and reinvigorated to take on the world. The SWE Conference is a great place for recruiting and networking. If you are interested in attending this conference, please fill out the SWE Conference '21 Scholarship Application for a chance to be picked to get a full ride (excluding food) to the conference this fall.",
    link: '',
    apply2: 'https://docs.google.com/forms/d/e/1FAIpQLSf23hjgnpacApewlzyJZYpOKWDz63g0gtX5IDVfAejB0hbmSg/viewform'
  }

];

const flyers = [
  {
    image: '',
    link: ''
  },
  {
    image: CapitalOne,
    link: ''
  },
  {
    image: '',
    link: ''
  },
  {
    image: '',
    link: ''
  },
  
  {
    image: LadiesInTech,
    link: ''
  },
  {
    image: SWE21ConferenceScholarship,
    link: ''
  }
];


const styles = (theme) => ({
  gridItem: {
    display: "flex",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
  table: {
    minWidth: "50%",
    maxWidth: "70%",
  },
  imgResponsive: {
    width: "200 px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

function createData(event, flyer) {
  return { event, flyer };
}


const rows = [
  createData(upcomingEvents[0], flyers[0].image),
  createData(upcomingEvents[1], flyers[1].image),
  createData(upcomingEvents[2], flyers[2].image),
  createData(upcomingEvents[3], flyers[3].image),
  createData(upcomingEvents[4], flyers[4].image),
  createData(upcomingEvents[5], flyers[5].image),
];

class events extends Component {
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
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">Events</p>
        </div>
        <div className="fullscreen">
          <Grid
            container
            spacing={2}
            height="100%"
            width="100%"
            alignItems="stretch"
            justify="space-evenly"
            className={classes.gridItem}
            style={{ "padding-top": "40px" }}
          >
            {/*
					 <Grid container
						item md={8} xs={12}
							spacing={2}
							height="100%"
							width="100%"
							alignItems="stretch"
							justify="space-evenly"
							className={classes.gridItem}
							style={{padding:'40px'}}
						>
							{flyers.map((flyer) => (
							<Grid item md={4} xs={12} className={classes.gridItem}>
								<div>
									<br/>
									<a href={flyer.link}>
										<img className="movingItem"  src={flyer.image} verticalAlign="center" width = "100%"/>
									</a>
								</div>
							</Grid>
							))}
						</Grid> 
              */}
					<div align="center">
              <h1>Upcoming Events</h1>
              
            </div>
          </Grid>
					

					<TableContainer component={Paper} align="center">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell align="center" width="45%"><h2></h2></TableCell>
            <TableCell align="center" width="55%"><h2></h2></TableCell>
          </TableRow>
		    </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.event.name}>
      <TableCell component="th" scope="row" align="center">
			  <br/>
				<h4><strong>{row.event.name}</strong></h4>
				<ListSubheader><strong>{row.event.date}</strong></ListSubheader>
        <ListSubheader><strong>{row.event.location}</strong></ListSubheader>
				{row.event.description != '' ?
				(<div><h5 align="left" >{row.event.description}</h5><br /> </div>) : null }
				{row.event.link != '' && row.event.link != null
				? (<div>
				<a href={row.event.link}><strong>Tech Coffee Chat - Register Here!</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.link02 != '' && row.event.link02 != null
				? (<div>
				<a href={row.event.link02}><strong>9/02 Workshop - Register Here!</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.link10 != '' && row.event.link10 != null
				? (<div>
				<a href={row.event.link10}><strong>9/10 Workshop - Register Here!</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.link17 != '' && row.event.link17 != null
				? (<div>
				<a href={row.event.link17}><strong>9/17 Workshop - Register Here!</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.link16 != '' && row.event.link16 != null
				? (<div>
				<a href={row.event.link16}><strong>Register Here!</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.link24 != '' && row.event.link24 != null
				? (<div>
				<a href={row.event.link24}><strong>9/24 Workshop - Register Here!</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
         {row.event.meetinginfo != '' && row.event.meetinginfo != null 
        ? (<div>
          <ListSubheader><strong>{row.event.meetinginfo}</strong></ListSubheader>
          <br/>
          <br/>
        </div>)
        : null
        }
        {row.event.meetingbutton != '' && row.event.meetingbutton != null 
        ? (<div>
          <Button href={row.event.meetingbutton} align="center" variant="contained" color="primary" position="relative" zIndex="-3000">Attend Here!</Button>
          <br/>
          <br/>
        </div>)
        : null
        }
        {row.event.apply1 != '' && row.event.apply1 != null
				? (<div>
				<a href={row.event.apply1}><strong>2021-2022 Mentee Application</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
        {row.event.apply2 != '' && row.event.apply2 != null
				? (<div>
				<a href={row.event.apply2}><strong>SWE Conference 21' Scholarship Application</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}

			</TableCell>
			  <TableCell component="th" scope="row" align="center">
			  {row.flyer != '' ?
				(<img src={row.flyer} width="60%" />) : null }
        </TableCell>
        </TableRow>
          ))}
        </TableBody>
      </Table>

			</TableContainer> 
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(events);