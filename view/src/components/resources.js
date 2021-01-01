// resources.js

// component for displaying exclusive resources for SWEsters

import React, { Component } from "react";
import Faq from 'react-faq-component';

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import { authMiddleWare } from "../util/auth";

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  details: {
    display: "flex",
  },
  locationText: {
    paddingLeft: "15px",
  },
  gridItem: {
    display: "flex",
    width: "100%",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
  buttonProperty: {
    position: "absolute",
    top: "50%",
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  progess: {
    position: "absolute",
  },
  uploadButton: {
    marginLeft: "8px",
    margin: theme.spacing(1),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  submitButton: {
    marginTop: "10px",
  },
});

const generalQuestions = {
  title: "General",
  rows: [
    {
      title: "How do I get more involved in clubs?",
      content: <p><u>Aarushi</u> : Attend events hosted by the clubs you’re interested in! You can get more information about specific clubs’ 
      events by joining their Discords or mailing lists. If you’re super interested in a club and want to be even more involved than being a 
      member, try out to be an officer!<br/>
      <u>Cady</u> : Follow the organization’s social media and mailing list so you are up-to-date on events! If you see an event you want to 
      attend, make sure to put it on your calendar so you don’t forget!</p>
    },
    {
      title: "What are the steps to becoming an officer at SWE?",
      content: <p><u>Aarushi</u> : First, an application should be filled out by those interested to be an officer. Then, those selected to move 
        forward in the application process will be interviewed. After that, it’s just a matter of being selected for the position you want!<br/>
        <u>Cady</u> : Be sure to follow SWE’s social media and newsletter to find out when officer applications open!<br/>
        <u>Medha</u> : Make sure you are an active member. Continually  attend our events and make sure you have an account on our website 
        sweutd.com. Our officer team does take into consideration how active our SWE members are with our organization before interviewing them. 
        Once officer applications are out make sure to apply and write meaningful responses for the long answer sections. From there you will have
         an interview and if you are a right fit for the position you will be selected :).
        </p>
    },
    {
      title: "How do I stand out from other applicants to become an officer?",
      content: <p><u>Aarushi</u> : Attend lots of events hosted by the club, and try to be an active member and participant at events. Try to finish 
        the application as soon as you can!<br/>
        <u>Cady</u> : We love seeing people who are already active members of SWE become officers! Make sure you attend events and collect those SWE points 
      for the best chance of becoming an officer.<br/>
        <u>Sindhu</u> : Try your best to be involved in the org and get to know the various programs and events within before applying! Doing your research 
      is important for any interview, whether it be a job or a student org!
      </p>
    },
    {
      title: "Is it beneficial to have a minor?",
      content: <p><u>Sindhu</u> : As a CS major, I took up a business administration minor and I never regretted it! Considering where your interests 
        and passions lie and taking up a minor which will help you build skills needed to get your ideal job, will be something very useful to 
        set you apart from other job applicants. </p>
    },
    {
      title: "How do I figure out what to do in my life career-wise?",
      content: <p><u>Cady</u> : Internships, research, and clubs are all ways to try out different aspects of your major before you graduate, so take advantage of 
      all of those opportunities! Whenever, you find something you don’t like, cross it off your list of potential career options. Rather than 
      being upset that you wasted time pursuing something you didn’t enjoy, view that experience as a way you were able to refine your career 
      interests. <br/>
      <u>Caitlin</u> : Maya Grossman once came to WEHack to speak, and she gave us a really great exercise to narrow down your career: make a 
        mind map with every career opportunity you've ever taken part in and then connect your responsibilities for those opportunities on the 
        spokes. Then take all of those responsibilities and sort them into three columns: "things I like to do," "things I'll be willing to do 
        in small doses," and "things I hate." Then try and find a job description out in the world that covers as many things in the "like" 
        column as possible, avoiding the other columns if possible. And finally, that's your ideal career! Now you have a path forward for 
        gaining the skills and experience needed for a job that you'll love. This method assumes that you, however, came in with some experience, 
        so another great thing to do is try a lot of diverse jobs, especially during college when it's relatively low-stakes. Then you'll get to 
        learn what you like and what you don't.
      </p>
    },
    {
      title: "What are some other great organizations to be involved in?",
      content: <p><u>Aarushi</u> : ACM (Association of Computing Machinery) is a great one to be involved in! There are tons of events and 
      there’s something for everyone in that organization. Join their Discord today! <br/>
      <u>Cady</u> : WEHack, UTD’s first all-women and non-binary hackathon, is an event that was counded by the Society of Women Engineers and 
        Women Who Compute at UTD. In addition to attending the hackathon, you can also get involved as an organizer!
      <u>Sindhu</u> : Women Mentoring Women in Engineering connects you with working professionals in the tech industry, applications to be a 
        mentee open in the beginning of each semester! <br/>
    </p>
    },
    {
      title: "What is your favorite class so far at UTD?",
      content: <p><u>Aarushi</u> : ECSC 4300 was pretty fun! I got the chance to help and guide freshmen who were taking ECS 1100, there were no exams,
         and grading assignments was fun. It helped that I really liked the instructor! <br/>
         <u>Cady</u> : My favorite class, outside of my required CS classes, was actually the Intro to Chinese class (CHIN 1311) I took for fun! 
      While I really love CS, having a class that is a mental break from STEM is nice as well.
      </p>
    },
    {
      title: "How do I find out more about events happening on campus?",
      content: <p><u>Aarushi</u> : Jerry Alexander sends emails with information about events happening on campus every week. If you want 
        information about events happening at a particular organization, subscribing to their mailing list helps. <br/>
        <u>Cady</u> : Most clubs post their events on social media, so be sure to follow any organizations you are even remotely interested in! 
      If you end up not liking the club, you can always unfollow later.
      </p>
    },
    {
      title: "How do I get recommendation letters?",
      content: <p><u>Cady</u> : Try to have at least one professor who knows you by name! The best way to do this is by attending a professor’s 
        office hours. If a professor has seen you in class and in office hours, they will be much more likely to write you a recommendation letter.
         Typically, they will ask for a copy of your resume in order to write a letter that talks about your achievements as well. Additionally, 
         stay in touch with your manager and co-workers at internships/research on LinkedIn or by email, as they may be able to write you a letter 
         of recommendation as well. <br/>
         <u>Medha</u> : In addition to getting a recommendation letter from a professor, one can also get letters of recommendations from people you have 
      worked/interacted with in a professional setting. Typically at the end of an internship I like to ask whoever is my manager if they would 
      be comfortable ever writing a recommendation for me in the future and for some scholarships that I have applied to, I get a combination 
      of recommendations from professors and employees at certain companies who can vouch for what I bring to the table.
      </p>
    }]
}

const internshipQuestions = {
  title: "Internship",
  rows: [
    {
      title: "What are some tips for landing an internship?",
      content: <p>Apply to every single internship that looks interesting to you! The worst that can happen is you get rejected. Update your 
        resume and have it reviewed! Go to every networking event you can (keeping an eye on your mental health, of course)! Use your network; 
        ask your friends for referrals, go on coffee chats with people in jobs you're interested in and see if they know of any good internships, 
        ask your dad's friend's daughter who works in a company you like if they know how to get a leg up, be creative! <br/>
      <u>Cady</u> : Nowadays, sending out lots of applications is really important. Landing your first internship often comes down to luck. 
      Networking is super important to get referrals, and to learn more about a company before interviewing with them.
      </p>
    },
    {
      title: "What should I do to prepare for a behavioral interview?",
      content: <p>I create 5-10 note cards with outlines for answers to common questions and anecdotes to share for them. These should 
        be bullet points at most to help jog your memory.  This method helps you practice keeping your thoughts coherent when explaining an 
        experience. And, if the interview is over the phone or otherwise virtual, you can have the cards near you if you draw a blank on a question. <br/>
      <u>Cady</u> : I highly recommend following the S.T.A.R. method of interviewing! Read about it here: <a href="https://www.themuse.com/advice/star-interview-method">
        https://www.themuse.com/advice/star-interview-method</a>.
      Following this method really helped me improve my answers to behavioral questions and keep from rambling.</p>
    },
    {
      title: "What should I do to prepare for a technical interview?",
      content: <p>Do lots of different kinds of problems in the week before the interview. HackerRank is great for this because it has problems 
        based on different subjects you could be asked about. Read any and all resources the company sends you and act on what you learn. <br/>
      <u>Cady</u> : For CS majors, I highly recommend Leetcode to learn the types of coding problems asked by companies. I also recommend reading the 
      book Cracking the Coding Interview, especially if you don’t feel very confident with Data Structures. SWE, as well as other student 
      organizations, hold workshops to prepare you for interviews as well! Check out Technical Interviews 101 in the SWE Portal.
      </p>
    },
    {
      title: "How can my resume stand out?",
      content: <p><u>Cady</u> : Remember, a recruiter usually spends less than 10 seconds looking at a resume! Make it concise and easy-to-read. Quantifying 
      your achievements is super important! When scanning a resume, your eyes naturally jump to numbers. Ask your peers to review your resume 
      before sending it out. One way you can do this is by using the #peer-reviews channel on the SWE Discord! <br/>
      <u>Sindhu</u> : Make it easy to read, concise, and quantify all your achievements! Make sure to tailor it to the job you are applying 
        to, especially if it requires any type of specialization. One life hack is to go through the job description and use words from there so 
        your resume shows that you are more suited for that position. 
      </p>
    },
    {
      title: "Should I make a cover letter?",
      content: <p>Yes! The best way to do cover letters is write a large bank of skills and their anecdotes, and then take the ones that 
        match the skills in the job description and compile them into the specific letter for that company. Then write a paragraph about 
        why the company is interesting to you; I try to add 2-3 specific things in this section (the company's website and their Wikipedia 
        can be great resources to learn about what a company does if you don't know). Then thank the recipient for reading the letter! <br/>
      <u>Cady</u> : Personally, I only write cover letters for companies if I have a specific reason for wanting to intern at that company. If I don’t 
      know much about the company, I just apply with a resume. I applied to well over 100 companies this year, so I definitely didn’t have 
      time to write a cover letter for all of them! I did receive interviews and offers from companies without writing a cover letter, 
      and was ghosted from plenty of companies I did write a cover letter for, so I don’t know that it makes a huge difference.
      </p>
    },
    {
      title: "How should I approach networking?",
      content: <p><u>Cady</u> : One of the best ways to expand your network is through joining organizations like SWE. Having something in 
        common makes it much easier to reach out to people on LinkedIn, because you can start off by saying, “Hi, my name is X, and 
        I’m also a SWE UTD member! I see that you’re working in AI, and I am really interested in pursuing AI in the future! Would you ever
         be free for a chat about how to get involved in AI?” <br/>
      One of the best benefits of networking, beyond learning more about your field, is the opportunity to get referrals to companies 
      you want to work at. A referral can often be the reason your resume makes it to a recruiter! In my experience, students are 
      usually willing to give referrals to other students in their student organization, so don’t be afraid to ask (politely, of course)!
      </p>
    },
    {
      title: "How should I negotiate pay?",
      content: <p><u>Cady</u> : Negotiating pay is easiest when you have multiple offers. If you have two offers and one of them pays better, 
        you can tell your recruiter from the other company that you really want to work for them, but have a competing offer that pays 
        $x. Have confidence in yourself, the worst that can happen is that they say no!
      </p>
    },
    {
      title: "Should I accept an offer for an unpaid internship?",
      content: <p><u>Medha</u> : If this is the only internship offer you might get, then I would accept because it is a great way to learn 
        new skills and grow your experience. If you might have both paid and unpaid internship offers, I would take into consideration 
        the type of project you will be assigned and if it aligns with your interests and based on that I would suggest you make your 
        decision. Although the money might be a great perk, the purpose of internships is for you to learn and provide you experience 
        in areas that spark your interest. </p>
    },
    {
      title: "How long do internships usually last?",
      content: <p><u>Cady</u> : Internships are generally 10-12 weeks full-time during the summer. Some companies offer part-time co-op programs that 
        take place during the school semester.</p>
    },
    {
      title: "What are recruiters looking for in potential interns?",
      content: <p><u>Cady</u> : Ultimately, they are looking for future employees who will make a difference at the company! That means they want someone who is 
      knowledgeable about their field, willing to learn, and a good team member. While your technical skills are important, having strong 
      behavioral skills can be even more important.<br/>
        <u>Sindhu</u> : A combination of skill sets, proactiveness, and interest in learning. The perfect intern would be someone who strives 
        to learn as much as possible, can communicate efficiently, and tries to apply preexisiting skills to their job while working on building 
        new ones.
      </p>
    }]
}

const bookRecs = [
  "Invaluable by Maya Grossman" , 
  "Atomic Habits by James Clear"
]

class event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      netid: "",
      classification: "",
      major: "",
      otherMajor: "",
      events: [],
      points: 0,
      previousPoints: [],
      uiLoading: true,
      buttonLoading: false,
      imageError: "",
    };
  }

  // makes sure user is logged in
  componentWillMount = () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .get("https://us-central1-swe-utd-portal.cloudfunctions.net/api/member")
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
          previousPoints: response.data.memberInfo.previousPoints || [],
          uiLoading: false,
        });
      })
      .catch((error) => {
        if (error.response !== undefined) {
          if (error.response.status === 403) {
            this.props.history.push("/login");
          }
        }
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  };

  render() {
    
    const { classes } = this.props;
    if (this.state.uiLoading === true) {
      return (
        <div>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.uiLoading && (
            <CircularProgress size={150} className={classes.uiProgess} />
          )}
        </main>
      </div>
      );
    } else {
      return (
        <div>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <br />
          <Card
            className={classes.details}
            className="movingItem"
            variant="outlined"
          >
            <CardContent>
              <div className={classes.details}>
                <div>
                  <br />
                  <h1>Q/A</h1>
                </div>
              </div>
              <div className={classes.progress} />
            </CardContent>
          </Card>
          <br/>
          <Card
            className={classes.details}
            className="movingItem"
            variant="outlined"
          >
        <CardContent>
          <Faq data={generalQuestions}/>
        </CardContent>
        </Card>
        <br/>
          <Card
            className={classes.details}
            className="movingItem"
            variant="outlined"
          >
        <CardContent>
          <Faq data={internshipQuestions}/>
        </CardContent>
        </Card>
        <br/>
          <Card
            className={classes.details}
            className="movingItem"
            variant="outlined"
          >
        <CardContent style={{ padding: "20px 20px 0 20px" }}>
          <h2>Book Recommendations</h2>
          <Divider/>
          <ol style={{ padding: "10px 10px 0 15px" }}>
      {bookRecs.map((book) => (
        <h6><li>{book}</li></h6>
      ))}
    </ol>
        </CardContent>
        </Card>
        </main>
      </div>
      );
    }
  }
}

export default withStyles(styles)(event);
