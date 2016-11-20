import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classnames from 'classnames';

import SearchBar from '../SearchBar/index.js';
import objectAssign from 'object-assign';
import './style.css';

class App extends Component {
    constructor(props) {
      super(props);
      var selectedIndex;
      var pathname = props.location.pathname;
      if (pathname == '/images') {
        selectedIndex = 1;
      } else if (pathname == '/people') {
        selectedIndex = 2;
      } else if (pathname == '/exhibitions') {
        selectedIndex = 3;
      } else if (pathname == '/places') {
        selectedIndex = 4;
      }

      this.state = {
          selectedIndex: selectedIndex,
          searchValue: ''
      };
    };

    onSearchChange = (searchValue) => {
        this.setState(objectAssign(this.state, {searchValue}));
    };

    select = (selectedIndex) => {
        this.setState(objectAssign(this.state, {selectedIndex}));
    };

    search = () => {
        console.log(this.state.searchValue);
    };

    render() {
        const { className } = this.props;
        return (
            <MuiThemeProvider>
                <div className={classnames('App', className)}>
                    <SearchBar
                        selectedIndex={this.state.selectedIndex}
                        searchValue={this.state.searchValue}
                        onSearchChange={this.onSearchChange}
                        select={this.select}
                        search={this.search}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
