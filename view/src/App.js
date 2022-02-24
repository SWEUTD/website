import React from "react";
import Slider from "./components/slider";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import {createTheme} from "@material-ui/core";
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
import EventForm from "./pages/eventForm";

const theme = createTheme({
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
          <Route exact path="/checkin/:eventId" component={EventForm} /> 
          <Route exact path="/calendar" component={calendar} /> 
          <PropsRoute exact path="/capgemini" eventHeading="Sign in to Insight to Capgemini’s RISE Program event" eventPoints={1} eventName = "Insight to Capgemini’s RISE Program" eventDate = "2/6/2021" secretWord = "fall" component={meetingform}/>
          <PropsRoute exact path="/galentines" eventHeading="Sign in to Galentines Bingo social" eventPoints={1} eventName="Galentines Bingo Social" eventDate="2/15/2021" secretWord="numbers" component={meetingform}/>
          <PropsRoute exact path="/crafts" eventHeading="Sign in to Hope's Door Crafts Kits volunteering" eventPoints={1} eventName="Hope's Door Crafts Kits Volunteering" eventDate="2/21/2021" secretWord="art" component={meetingform}/>
          <PropsRoute exact path="/TI" eventHeading="Sign in to TI's industry event" eventPoints={1} eventName="Ti's Industry event" eventDate="2/23/2021" secretWord="industry" component={meetingform}/>
          <PropsRoute exact path="/collab" eventHeading="Sign in to SWE x WWC Speed Networking collab" eventPoints={1} eventName="SWE x WWC Speed Networking" eventDate="2/24/2021" secretWord="meeting" component={meetingform}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
