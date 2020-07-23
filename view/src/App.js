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
import samplemeeting from './pages/sample-meeting-signinpage'
import gamenight from './pages/gamenight-signinpage'

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
              <Route exact path="/samplemeeting" component={samplemeeting}/>
              <Route exact path="/gamenight" component={gamenight}/>
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;