import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
import portal from './pages/portal';
import about from './pages/about'
import officers from './pages/officers'
import events from './pages/events'
import contact from './pages/contact'
import join from './pages/join'

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
      <Router>
        <div>
          <Switch>
              <Route exact path="/login" component={login}/>
              <Route exact path="/" component={home}/>
              <Route exact path="/portal" component={portal}/>
              <Route exact path="/about" component={about}/>
              <Route exact path="/officers" component={officers}/>
              <Route exact path="/events" component={events}/>
              <Route exact path="/join" component={join}/>
              <Route exact path="/contact" component={contact}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;