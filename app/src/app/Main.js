/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const styles = {
  container: {
    textAlign: 'center',
    background: '#18BC9C',
    border: 0,
  },
  h1: {
    color: 'white',
    fontSize: 50,
  },
  h2: {
    color: 'white',
  },
  button: {
    position: 'relative',
    fontSize: 22,
    paddingTop: 20,
    paddintRight: 40,
    paddingBottom: 25,
    paddingLeft: 40,
    marginTop: 20,
    textAlign: 'center',
    background: '#3498db',
    border: 0,
  },
  appBar: {
    background: '#2C3E50',
    height: 80,
  },
  appBarBtn: {
    color: 'white',
  },
  navTitle: {
    color: 'white',
    fontSize: 26,
    float: 'left',
    fontWeight: 'bold',
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar
            style={styles.appBar}
            title={<div style={styles.navTitle}>YOU'RE LOSING MONEY, RIGHT NOW.</div>}
            iconElementLeft={<div/>}
            iconElementRight={
              <div>
                <FlatButton 
                  style={styles.appBarBtn} 
                  onTouchTap={console.log('Claim!')} 
                  label="Claim Status"/>
                <FlatButton 
                style={styles.appBarBtn} 
                onTouchTap={console.log('Contact!')} 
                label="Contact"/>
              </div>}
          />
          <h1 style={styles.h1}>GET DOCTORED.</h1>
          <h2 style={styles.h2}>8/10 invoices have serious errors. Is yours one of them?</h2>
          <RaisedButton
            label="Upload your invoice"
            style={styles.button}
            onTouchTap={this.handleTouchTap}
          />
        </div>
       
        
      </MuiThemeProvider>
    );
  }
}

export default Main;
