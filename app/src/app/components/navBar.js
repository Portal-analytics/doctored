/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class NavBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

}