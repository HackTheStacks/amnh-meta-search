import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classnames from 'classnames';

import SearchBar from '../SearchBar/index.js';
import objectAssign from 'object-assign';
import './style.css';

class App extends Component {
    state = {
        selectedIndex: 'all',
        searchValue: ''
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
