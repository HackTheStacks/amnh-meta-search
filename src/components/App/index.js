import React, { PropTypes, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classnames from 'classnames';

import SearchBar from '../SearchBar/index.js';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  state = {
      selectedIndex: 0,
      searchValue: ''
  };

  render() {
    const { className, ...props } = this.props;
    return (
      <MuiThemeProvider>
          <div className={classnames('App', className)} {...props}>
              <div>{this.state.searchValue}</div>
              <SearchBar
                selectedIndex={this.state.selectedIndex}
                searchValue={this.state.searchValue}
              />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
