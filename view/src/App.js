import React from "react";
import Slider from "./components/slider";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import login from "./pages/login";
import home from "./pages/home";
import portal from "./pages/portal";
import about from "./pages/about";
import officers from "./pages/officers";
import swestars from "./pages/swestars";
import events from "./pages/events";
import swematch from "./pages/swematch";
import weconference from "./pages/weconference";
import contact from "./pages/contact";
import join from "./pages/join";
import calendar from "./pages/calendar";
import meetingform from "./pages/meetingform";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#DBC554", // swe gold
      main: "#5A5377", // swe purple
      dark: "#A9A8A9", // swe gray
      contrastText: "#fff",
    },
    background: {
      default: "#5A5377",
    },
  },
});

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/" component={home} />
          <Route exact path="/portal" component={portal} />
          <Route exact path="/about" component={about} />
          <Route exact path="/officers" component={officers} />
          <Route exact path="/swestars" component={swestars} />
          <Route exact path="/events" component={events} />
          <Route exact path="/swematch" component={swematch} />
          <Route exact path="/weconference" component={weconference} />
          <Route exact path="/join" component={join} />
          <Route exact path="/contact" component={contact} />
          <Route exact path="/calendar" component={calendar} /> 
          <PropsRoute exact path="/hiringwc1" eventHeading="Sign in to Hiring Season Tips and Tricks with Capital One event" eventPoints={1} eventName = "Hiring Season Tips and Tricks with Capital One" eventDate = "9/15/2021" secretWord = "apply" component={meetingform}/>
          <PropsRoute exact path="/networkd1" eventHeading="Sign in to Networking Session Series: Day 1 -- Shake up the Career Center’s information with JPMC! event" eventPoints={1} eventName = "Networking Session Series: Day 1 -- Shake up the Career Center’s information with JPMC!" eventDate = "9/21/2021" secretWord = "chasing" component={meetingform}/>
          <PropsRoute exact path="/networkd2" eventHeading="Sign in to Networking Session Series: Day 2 -- Learn key communication skills with Credera! event" eventPoints={1} eventName = "Networking Session Series: Day 2 -- Learn key communication skills with Credera!" eventDate = "9/22/2021" secretWord = "social" component={meetingform}/>
          <PropsRoute exact path="/networkd3" eventHeading="Sign in to Networking Session Series: Day 3 -- Texas Instruments Career Prep: A Brand Called You event" eventPoints={1} eventName = "Networking Session Series: Day 3 -- Texas Instruments Career Prep: A Brand Called You" eventDate = "9/23/2021" secretWord = "respond" component={meetingform}/>
          <PropsRoute exact path="/linkedin" eventHeading="Sign in to LinkedIn Profile Workshop event" eventPoints={1} eventName = "LinkedIn Profile Workshop" eventDate = "9/20/2021" secretWord = "standout" component={meetingform}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
