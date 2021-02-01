// officers.js

// page containing officer photos and information

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardContent,
  Container,
  Divider,
  Button,
  ButtonGroup,
  Grid,
} from "@material-ui/core";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Officer photos
import SWElogo from "../assets/OfficerPhotos/SWElogo.png";
import AarushiPandey from "../assets/OfficerPhotos/AarushiPandey.jpg";
import AayushiChoudhary from "../assets/OfficerPhotos/AayushiChoudhary.png";
import AfridaTasnim from "../assets/OfficerPhotos/AfridaTasnim.jpg";
import AngelleNazareno from "../assets/OfficerPhotos/AngelleNazareno.jpg";
import AreebaQazi from "../assets/OfficerPhotos/AreebaQazi.jpg";
import ArushiAgrawal from "../assets/OfficerPhotos/ArushiAgrawal.jpg";
import CadyBaltz from "../assets/OfficerPhotos/CadyBaltz.jpg";
import CaitlinTibbetts from "../assets/OfficerPhotos/CaitlinTibbetts.jpg";
import DeeshaKumbham from "../assets/OfficerPhotos/DeeshaKumbham.jpg";
import GabrielleDuncan from "../assets/OfficerPhotos/GabrielleDuncan.jpg";
import HansikaSundaresan from "../assets/OfficerPhotos/HansikaSundaresan.jpg";
import IfritMaruf from "../assets/OfficerPhotos/IfritMaruf.jpg";
import IshaniChowdhury from "../assets/OfficerPhotos/IshaniChowdhury.JPG";
import JeshnaGupta from "../assets/OfficerPhotos/JeshnaGupta.jpg";
import LaineyRogers from "../assets/OfficerPhotos/LaineyRogers.jpeg";
import MaahaSakia from "../assets/OfficerPhotos/MaahaSakia.jpg";
import ManshaFatima from "../assets/OfficerPhotos/ManshaFatima.jpg";
import MedhaAiyah from "../assets/OfficerPhotos/MedhaAiyah.jpg";
import MrunmayiSathaye from "../assets/OfficerPhotos/MrunmayiSathaye.jpg";
import NivethaNarayanan from "../assets/OfficerPhotos/NivethaNarayanan.jpg";
import NehaSapre from "../assets/OfficerPhotos/NehaSapre.jpg";
import NithilaIllangovan from "../assets/OfficerPhotos/NithilaIllangovan.jpg";
import NuhaSiddiqui from "../assets/OfficerPhotos/NuhaSiddiqui.jpg";
import PallaviVayalali from "../assets/OfficerPhotos/PallaviVayalali.png";
import PriyankaGanesan from "../assets/OfficerPhotos/PriyankaGanesan.jpeg";
import ReshmiRanjith from "../assets/OfficerPhotos/ReshmiRanjith.jpg";
import ShivaniGandhi from "../assets/OfficerPhotos/ShivaniGandhi.jpg";
import ShreyaChauk from "../assets/OfficerPhotos/ShreyaChauk.jpg";
import SreyaNagumalla from "../assets/OfficerPhotos/SreyaNagumalla.jpg";
import VamikaChatlani from "../assets/OfficerPhotos/VamikaChatlani.jpg";
import ZainebAhmad from "../assets/OfficerPhotos/ZainebAhmad.png";
import PushpaKumar from "../assets/OfficerPhotos/PushpaKumar.png";
import JerryAlexander from "../assets/OfficerPhotos/JerryAlexander.jpg";

const officerList = [
  {
    name: "Medha Aiyah",
    image: MedhaAiyah,
    position: "President",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/medha-aiyah/",
  },
  {
    name: "Maaha Sakia",
    image: MaahaSakia,
    position: "Vice President of External Affairs",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/maaha-sakhia-183298196/",
  },
  {
    name: "Cady Baltz",
    image: CadyBaltz,
    position: "Vice President of Internal Affairs",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/cadybaltz/",
  },
  {
    name: "Arushi Agrawal",
    image: ArushiAgrawal,
    position: "Secretary, Public Relations Committee Member",
    committee: "Board, Public Relations",
    linkedin: "https://www.linkedin.com/in/agrawal-arushi/",
  },
  {
    name: "Nivetha Narayanan",
    image: NivethaNarayanan,
    position: "Treasurer",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/nivetha-narayanan-751ab8167/",
  },
  {
    name: "Afrida Tasnim",
    image: AfridaTasnim,
    position: "WEHack Co-Director",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/afrida-tasnim/",
  },
  {
    name: "Angelle Nazareno",
    image: AngelleNazareno,
    committee: "Board, Design",
    position: "Design Chair",
  },
  {
    name: "Shivani Gandhi",
    image: ShivaniGandhi,
    position: "Marketing Chair",
    committee: "Board, Marketing",
    linkedin: "https://www.linkedin.com/in/shivanirgandhi/",
  },
  {
    name: "Deesha Kumbham",
    image: DeeshaKumbham,
    position: "Conference Committee Chair",
    committee: "Board, Conference Committee",
    linkedin: "https://www.linkedin.com/in/deesha-kumbham-86b4b6196/",
  },
  {
    name: "Jeshna Gupta",
    image: JeshnaGupta,
    position: "Industry Chair",
    committee: "Board, Industry",
    linkedin: "https://www.linkedin.com/in/jeshna-gupta/",
  },
  {
    name: "Gabrielle Duncan",
    image: GabrielleDuncan,
    position: "Community Outreach Chair",
    committee: "Board, SWErves",
    linkedin: "https://www.linkedin.com/in/gabrielle-duncan-085822185/",
  },
  {
  name: "Shreya Chauk",
    image: ShreyaChauk,
    position: "Public Relations Chair",
    committee: "Board, Public Relations",
    linkedin: "https://www.linkedin.com/in/shreyachauk/",
  },
  {
    name: "Caitlin Tibbetts",
    image: CaitlinTibbetts,
    position: "Competition Chair",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/caitlin-tibbetts/",
  },
  {
    name: "Madison King",
    image: SWElogo,
    position: "Membership Chair",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/mbaileyking/",
  },
  {
    name: "Areeba Qazi",
    image: AreebaQazi,
    position: "Webmaster Chair",
    committee: "Board, Website Development",
    linkedin: "https://www.linkedin.com/in/areebaqazi/",
  },
  {
    name: "Pallavi Vayalali",
    image: PallaviVayalali,
    position: "Conference Committee Member",
    committee: "Conference",
    linkedin: "https://www.linkedin.com/in/pallavi-vayalali/",
  },
  {
    name: "Hansika Sundaresan",
    image: HansikaSundaresan,
    position: "Conference Committee Member",
    committee: "Conference",
    linkedin: "https://www.linkedin.com/in/hansika-sundaresan/",
  },
  {
    name: "Lainey Rogers",
    image: LaineyRogers,
    position: "Industry Committee Member",
    committee: "Industry",
  },
  {
    name: "Aayushi Choudhary",
    image: AayushiChoudhary,
    position: "Marketing Committee Member",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/aayushitech/",
  },
  {
    name: "Mrunmayi Sathaye",
    image: MrunmayiSathaye,
    position: "Marketing Committee Member",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/mrunmayi-sathaye/",
  },
  {
    name: "Vamika Chatlani",
    image: VamikaChatlani,
    position: "Marketing Committee Member",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/vamika-chatlani-b844aa16b/",
  },
  {
    name: "Ifrit Maruf",
    image: IfritMaruf,
    position: "Public Relations Committee Member",
    committee: "Public Relations",
    linkedin: "https://www.linkedin.com/in/ifrit-maruf/",
  },
  {
    name: "Priyanka Ganesan",
    image: PriyankaGanesan,
    position: "Public Relations Committee Member",
    committee: "Public Relations",
    linkedin: "https://www.linkedin.com/in/priyanka-ganesan/",
  },
  {
    name: "Reshmi Ranjith",
    image: ReshmiRanjith,
    position: "Website Development Committee Member",
    committee: "Website Development",
    linkedin: "https://www.linkedin.com/in/reshmi-ranjith/",
  },
  {
    name: "Aarushi Pandey",
    image: AarushiPandey,
    position: "Website Development Committee Member",
    committee: "Website Development",
    linkedin: "https://www.linkedin.com/in/aarushi-s-pandey/",
  },
  {
    name: "Mansha Fatima",
    image: ManshaFatima,
    position: "Website Development Committee Member",
    committee: "Website Development",
    linkedin: "https://www.linkedin.com/in/mansha-fatima-2a485412b/",
  },
  {
    name: "Neha Sapre",
    image: NehaSapre,
    position: "SWErves Committee Member",
    committee: "SWErves",
    linkedin: "https://www.linkedin.com/in/nehasapre/",
  },
  {
    name: "Nuha Siddiqui",
    image: NuhaSiddiqui,
    position: "SWErves Committee Member",
    committee: "SWErves",
    linkedin: "https://www.linkedin.com/in/nuha-siddiqui/",
  },
  {
    name: "Ishani Chowdhury",
    image: IshaniChowdhury,
    position: "Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/ishani-chowdhury/",
  },
  {
    name: "Nithila Illangovan",
    image: NithilaIllangovan,
    position: "Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/nithila-ilangovan-5678471a7/",
  },
  {
    name: "Sreya Nagumalla",
    image: SreyaNagumalla,
    position: "Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/sreya-nagumalla-135404168/",
  },
  {
    name: "Dr. Pushpa Kumar",
    image: PushpaKumar,
    position: "Faculty Advisor",
    committee: "Faculty Advisors",
  },
  {
    name: "Zaineb Ahmad",
    image: ZainebAhmad,
    position: "SWE UTD Section Counselor",
    committee: "Faculty Advisors",
  },
  {
    name: "Jerry Alexander",
    image: JerryAlexander,
    position: "ECS Assistant Dean for Student Development",
    committee: "Faculty Advisors",
    linkedin: "https://www.linkedin.com/in/internguy/",
  },
];

const styles = (theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  image: {
    width: "80%",
    borderRadius: "50%",
  },
  officerHeading: {},
});

class officers extends Component {
  constructor(props) {
    super(props);
    this.state = { headerReady: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ headerReady: true, committeeSelection: "ALL" });
    }, 0);
  }

  render() {
    const { headerReady, committeeSelection } = this.state;
    const { classes } = this.props;
    const boards = [
      "ALL",
      ...new Set(
        officerList
          .filter((item) => !item.committee.includes(",")) // if on multiple commitees, don't want to show it as a seperate choice
          .map((item) => item.committee)
      ),
    ];

    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">Meet Our Officers</p>
        </div>
        <Container className={classes.container}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
            fullWidth="true"
            orientation={window.innerWidth < 900 ? "vertical" : "horizontal"}
          >
            {boards.map((committeeName) => (
              <Button
                variant={
                  committeeName === committeeSelection
                    ? "contained"
                    : "outlined"
                }
                onClick={() =>
                  this.setState({
                    ...this.state,
                    committeeSelection: committeeName,
                  })
                }
              >
                {committeeName}
              </Button>
            ))}
          </ButtonGroup>
          <div
            className="officerHeading"
            style={({ height: "50px" }, { padding: "20px" })}
          >
            <h2>
              <center>{committeeSelection}</center>
            </h2>
          </div>
          <Grid
            container
            spacing={5}
            alignItems="stretch"
            justify="space-evenly"
          >
            {officerList
              .filter((person) => {
                if (committeeSelection == "ALL") return person;
                else return person.committee.includes(committeeSelection);
              })
              .map((officer) => (
                <Grid className={classes.gridItem} item xs="6" sm="3">
                  <Card
                    className={classes.card}
                    className="movingItem"
                    variant="outlined"
                  >
                    <CardContent align="center">
                      <img src={officer.image} className={classes.image} />
                      <br />
                      <br />
                      <Divider />
                      <br />
                      <h6>{officer.name}</h6>
                      <h6>{officer.position}</h6>
                      <a href={officer.linkedin} target="_blank">
                        {officer.linkedin && (
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="imageLink"
                            size="lg"
                            style={{ color: "#5A5377" }}
                          />
                        )}
                      </a>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
        <br />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(officers);
