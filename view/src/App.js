import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import login from './pages/login';
import home from './pages/home';
import portal from './pages/portal';
import about from './pages/about'
import officers from './pages/officers'
import swestars from './pages/swestars'
import events from './pages/events'
import swematch from './pages/swematch'
import weconference from './pages/weconference'
import contact from './pages/contact'
import join from './pages/join'
import calendar from './pages/calendar'
import meetingform from './pages/meetingform'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#DBC554', // swe gold
			main: '#5A5377',  // swe purple
			dark: '#A9A8A9',  // swe gray
			contrastText: '#fff'
    },
    background: {
      default: "#5A5377"
    }
	}
});

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
          <Switch>
              <Route exact path="/login" component={login}/>
              <Route exact path="/" component={home}/>
              <Route exact path="/portal" component={portal}/>
              <Route exact path="/about" component={about}/>
              <Route exact path="/officers" component={officers}/>
              <Route exact path="/swestars" component={swestars}/>
              <Route exact path="/events" component={events}/>
              <Route exact path="/swematch" component={swematch}/>
              <Route exact path="/weconference" component={weconference}/>
              <Route exact path="/join" component={join}/>
              <Route exact path="/contact" component={contact}/>
              <Route exact path="/calendar" component={calendar}/>
              <PropsRoute exact path="/cbre" eventHeading="Sign in to the CBRE event" eventPoints={1} eventName = "CBRE Info Session" eventDate = "9/15/2020" secretWord = "interview" component={meetingform}/>
              <PropsRoute exact path="/att" eventHeading="Sign in to the AT&T event" eventPoints={1} eventName = "AT&T Info Session" eventDate = "9/16/2020" secretWord = "intern" component={meetingform}/>
              <PropsRoute exact path="/bell" eventHeading="Sign in to the Bell event" eventPoints={1} eventName = "Bell Info Session" eventDate = "9/16/2020" secretWord = "info" component={meetingform}/>
              <PropsRoute exact path="/fanniemae" eventHeading="Sign in to the Fannie Mae event" eventPoints={1} eventName = "Fannie Mae Info Session" eventDate = "9/17/2020" secretWord = "work" component={meetingform}/>
              <PropsRoute exact path="/credera" eventHeading="Sign in to the Credera event" eventPoints={1} eventName = "Credera Info Session" eventDate = "9/17/2020" secretWord = "network" component={meetingform}/>
              <PropsRoute exact path="/match" eventHeading="Sign in to the Match event" eventPoints={1} eventName = "Match Info Session" eventDate = "9/17/2020" secretWord = "resume" component={meetingform}/>
              <PropsRoute exact path="/feminism" eventHeading="Sign in to the talk" eventPoints={1} eventName = "UTD Gender Center, Dallas SWE Feminism Talk" eventDate = "9/17/2020" secretWord = "ally" component={meetingform}/>
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
