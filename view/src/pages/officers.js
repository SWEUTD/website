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
//import SWElogo from "../assets/OfficerPhotos/SWElogo.png";
import AarushiPandey from "../assets/OfficerPhotos2021/AarushiPandey.jpg";
import AayushiChoudhary from "../assets/OfficerPhotos2021/AayushiChoudhary.png";
import AfridaTasnim from "../assets/OfficerPhotos2021/AfridaTasnim.jpg";
import AnhNguyen from "../assets/OfficerPhotos2021/AnhNguyen.jpg";
import AreebaQazi from "../assets/OfficerPhotos2021/AreebaQazi.jpg";
import ArushiAgrawal from "../assets/OfficerPhotos2021/ArushiAgrawal.jpg";
import DeeshaKumbham from "../assets/OfficerPhotos2021/DeeshaKumbham.JPG";
import EshaBansal from "../assets/OfficerPhotos2021/EshaBansal.jpg";
import IfritMaruf from "../assets/OfficerPhotos2021/IfritMaruf.jpg";
import IshaniChowdhury from "../assets/OfficerPhotos2021/IshaniChowdhury.jpg";
import JeshnaGupta from "../assets/OfficerPhotos2021/JeshnaGupta.JPG";
import JennaKrueger from "../assets/logo.png";
import JessicaTruong from "../assets/OfficerPhotos2021/JessicaTruong.JPG";
import LaineyRogers from "../assets/OfficerPhotos2021/LaineyRogers.JPG";
import LenaMubarak from "../assets/OfficerPhotos2021/LenaMubarak.jpg";
import MaahaSakia from "../assets/OfficerPhotos2021/MaahaSakhia.jpg";
import MadisonKing from "../assets/OfficerPhotos2021/MadisonKing.jpg";
import ManshaFatima from "../assets/OfficerPhotos2021/ManshaFatima.jpg";
import NivethaNarayanan from "../assets/OfficerPhotos2021/NivethaNarayanan.jpg";
import NehaSapre from "../assets/OfficerPhotos2021/NehaSapre.jpg";
import NithyaJaisankar from "../assets/logo.png";
import NithyaSree from "../assets/logo.png";
import NithilaIllangovan from "../assets/logo.png";
import NuhaSiddiqui from "../assets/OfficerPhotos2021/NuhaSiddiqui.jpg";
import ReshmiRanjith from "../assets/OfficerPhotos2021/ReshmiRanjith.JPG";
import ShreyaChauk from "../assets/OfficerPhotos2021/ShreyaChauk.jpg";
import SabaShaikh from "../assets/OfficerPhotos2021/SabaShaikh.jpg";
import SamridhiGanguly from "../assets/OfficerPhotos2021/SamriddhiGanguly";
import SreyaNagumalla from "../assets/OfficerPhotos2021/SreyaNagumalla.JPG";
import VamikaChatlani from "../assets/OfficerPhotos2021/VamikaChatlani.jpg";
import ZainebAhmad from "../assets/OfficerPhotos2021/ZainebAhmad.png";
import PushpaKumar from "../assets/OfficerPhotos2021/PushpaKumar.png";
import JerryAlexander from "../assets/OfficerPhotos2021/JerryAlexander.jpg";

const officerList = [
  {
    name: "Maaha Sakhia",
    image: MaahaSakia,
    position: "President",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/maaha-sakhia-183298196/",
  },
  {
    name: "Areeba Qazi",
    image: AreebaQazi,
    position: "Vice President of Internal Affairs",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/areebaqazi/",
  },
  {
    name: "Shreya Chauk",
    image: ShreyaChauk,
    position: "Vice President of External Affairs",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/shreyachauk/",
  },
  {
    name: "Nuha Siddiqui",
    image: NuhaSiddiqui,
    position: "Secretary",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/nuha-siddiqui/",
  },
  {
    name: "Arushi Agarwal",
    image: ArushiAgrawal,
    position: "Treasurer",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/agrawal-arushi/",
  },
  {
    name: "Afrida Tasnim",
    image: AfridaTasnim,
    position: "WEHack Director",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/afrida-tasnim/",
  },
  {
    name: "Ishani Chowdhury",
    image: IshaniChowdhury,
    committee: "Board, Design",
    position: "Design Chair",
  },
  {
    name: "Vamika Chatlani",
    image: VamikaChatlani,
    position: "Marketing Chair",
    committee: "Board, Marketing",
    linkedin: "https://www.linkedin.com/in/vamika-chatlani-b844aa16b/",
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
    name: "Neha Sapre",
    image: NehaSapre,
    position: "Outreach- SWErve Chair",
    committee: "Board, SWErves",
    linkedin: "https://www.linkedin.com/in/nehasapre/",
  },
  {
    name: "Ifrit Maruf",
    image: IfritMaruf,
    position: "Public Relations Chair",
    committee: "Board, Public Relations",
    linkedin: "https://www.linkedin.com/in/ifrit-maruf/",
  },
  {
    name: "Jenna Krueger",
    image: JennaKrueger,
    position: "Competition Chair",
    committee: "Board",
    linkedin: "",
  },
  {
    name: "Aarushi Pandey",
    image: AarushiPandey,
    position: "Webmaster Chair",
    committee: "Board, Website Development",
    linkedin: "https://www.linkedin.com/in/aarushi-s-pandey/",
  },
  {
    name: "Saba Shaikh",
    image: SabaShaikh,
    position: "Conference Committee Member",
    committee: "Conference",
    linkedin: "https://www.linkedin.com/in/saba-shaikh-3a1a27172/",
  },
  {
    name: "Nithya Jaisankar",
    image: NithyaJaisankar,
    position: "Conference Committee Member",
    committee: "Conference",
    linkedin: "https://www.linkedin.com/in/nithya-jaisankar/",
  },
  {
    name: "Lainey Rogers",
    image: LaineyRogers,
    position: "Industry Committee Member",
    committee: "Industry",
  },
  {
    name: "Samridhi Ganguly",
    image: SamridhiGanguly,
    position: "Public Relations Committee Member",
    committee: "Public Relations",
    linkedin: "https://www.linkedin.com/in/samridhi-ganguly-1304b2203/",
  },
  {
    name: "Jessica Truong",
    image: JessicaTruong,
    position: "Public Relations Committee Member",
    committee: "Public Relations",
    linkedin: "https://www.linkedin.com/in/truongjessica-tx/",
  },
  {
    name: "Lena Mubarak",
    image: LenaMubarak,
    position: "Marketing Committee Member",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/lenamubarak/",
  },
  {
    name: "Esha Bansal",
    image: EshaBansal,
    position: "Marketing Committee Member",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/esha-bansal-a587811aa/",
  },
  {
    name: "Aayushi Choudhary",
    image: AayushiChoudhary,
    position: "Marketing Committee Member",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/aayushitech/",
  },
  {
    name: "Reshmi Ranjith",
    image: ReshmiRanjith,
    position: "Website Development Committee Member",
    committee: "Website Development",
    linkedin: "https://www.linkedin.com/in/reshmi-ranjith/",
  },
  {
    name: "Mansha Fatima",
    image: ManshaFatima,
    position: "Website Development Committee Member",
    committee: "Website Development",
    linkedin: "https://www.linkedin.com/in/mansha-fatima-2a485412b/",
  },
  {
    name: "Anh Nguyen",
    image: AnhNguyen,
    position: "Website Development Committee Member",
    committee: "Website Development"
  },
  {
    name: "Nithya Sree",
    image: NithyaSree,
    position: "Videographer, Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/mansha-fatima-2a485412b/",
  },
  {
    name: "Nivetha Narayanan",
    image: NivethaNarayanan,
    position: "Graphic Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/ishani-chowdhury/",
  },
  {
    name: "Nithila Illangovan",
    image: NithilaIllangovan,
    position: "Graphic Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/nithila-ilangovan-5678471a7/",
  },
  {
    name: "Sreya Nagumalla",
    image: SreyaNagumalla,
    position: "Graphic Design Committee Member",
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
  }  
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
