// calendar.js

// calendar page

import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import NavBar from '../components/navbar'

const styles = (theme) => ({

});

class calendar extends Component {
    constructor(props) {
        super(props);
        this.state = { headerReady: false, events: [] };
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
				<div className={classNames('header', { 'ready': headerReady })}>
          <p className="heading">Calendar</p>
        </div>
        <Container width="80%" className="movingItem">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%235a5377&amp;ctz=America%2FChicago&amp;src=c3dldXRkQGdtYWlsLmNvbQ&amp;src=NjlnbmszOThiZnUyNGZhc3NrNTQ2cWdtYzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ODU1NTZvN2Q1YnZrdmlsZXNuNjU5bWVra2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cW80cm1zZ2tzYzZwZTNiZmE5c3NvNGY0MnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=c2phOXJiYmxjMGgzdG9jM2xkYmRudXFibjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%238E24AA&amp;color=%23039BE5&amp;color=%239E69AF&amp;color=%233F51B5&amp;color=%23D81B60&amp;showTabs=0&amp;showPrint=0&amp;showTitle=0&amp;showDate=0" style="border:solid 1px #777" style={{border: "0", width:"100%", height:"100vh", frameborder:"0", scrolling:"no"}}></iframe>
        </Container>
			</div>
		);
	}
}
export default withStyles(styles)(calendar);