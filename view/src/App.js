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
              <PropsRoute exact path="/match2" eventHeading="Sign in to the SWE Match event" eventPoints={0} eventName = "Match Night 2" eventDate = "10/20/2020" secretWord = "competition" component={meetingform}/>
              <PropsRoute exact path="/match3" eventHeading="Sign in to the SWE Match event" eventPoints={0} eventName = "Match Night 3" eventDate = "10/27/2020" secretWord = "competition" component={meetingform}/>
              <PropsRoute exact path="/match4" eventHeading="Sign in to the SWE Match event" eventPoints={0} eventName = "Match Night 4" eventDate = "11/03/2020" secretWord = "competition" component={meetingform}/>
              <PropsRoute exact path="/match5" eventHeading="Sign in to the SWE Match event" eventPoints={0} eventName = "Match Night 5" eventDate = "11/10/2020" secretWord = "competition" component={meetingform}/>
              <PropsRoute exact path="/match6" eventHeading="Sign in to the SWE Match event" eventPoints={0} eventName = "Match Night 6" eventDate = "11/17/2020" secretWord = "competition" component={meetingform}/>
              <PropsRoute exact path="/usaa" eventHeading="Sign in to the USAA Tech Talk" eventPoints={1} eventName = "USAA Tech Talk" eventDate = "11/5/2020" secretWord = "finance" component={meetingform}/>
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
