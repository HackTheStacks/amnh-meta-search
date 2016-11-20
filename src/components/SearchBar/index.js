import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import './style.css';

const personIcon = <FontIcon className="material-icons">perm_identity</FontIcon>;
const imagesIcon = <FontIcon className="material-icons">filter</FontIcon>;
const exhibitionsIcon = <FontIcon className="material-icons">rowing</FontIcon>;

const style = {
    margin: 12
};

export default class SearchBar extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('SearchBar', className)} {...props}>
                <TextField
                    hintText="Search Here"
                />
                <RaisedButton
                    label="Search"
                    primary={true}
                    style={style} 
                />
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Images"
                        icon={imagesIcon}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Person"
                        icon={personIcon}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Exhibitions"
                        icon={exhibitionsIcon}
                        onTouchTap={() => this.select(2)}
                  />
                </BottomNavigation>
            </div>
        );
    }
}