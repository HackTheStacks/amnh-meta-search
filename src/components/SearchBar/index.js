import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import './style.css';

const makeIcon = (name) => {
    return (<FontIcon className="material-icons">{name}</FontIcon>);
}
const allIcon = makeIcon('all_inclusive');
const peopleIcon = makeIcon('perm_identity');
const imagesIcon = makeIcon('filter');
const exhibitionsIcon = makeIcon('rowing');

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
                <Tabs selectedIndex={this.state.selectedIndex}>
                    <Tab
                      icon={allIcon}
                      label="ALL"
                      onTouchTap={() => this.select(0)}
                    />
                    <Tab
                      icon={imagesIcon}
                      label="IMAGES"
                      onTouchTap={() => this.select(1)}
                    />
                    <Tab
                      icon={peopleIcon}
                      label="PEOPLE"
                      onTouchTap={() => this.select(2)}
                    />
                    <Tab
                      icon={exhibitionsIcon}
                      label="EXHIBITIONS"
                      onTouchTap={() => this.select(3)}
                    />
                </Tabs>
            </div>
        );
    }
}