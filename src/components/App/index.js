import React, { PropTypes, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classnames from 'classnames';

import SearchBar from '../SearchBar/index.js';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <MuiThemeProvider>
        <div className={classnames('App', className)} {...props}>
            <SearchBar/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
