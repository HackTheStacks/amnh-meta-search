import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import objectAssign from 'object-assign';

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
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.select = this.select.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange = (e) => {
        this.props.onSearchChange(e.target.value);
    };

    select = (index) => {
        this.props.select(index);
    };

    search = () => {
        this.props.search();
    };

    render() {
        const { className, selectedIndex, searchValue, ...props } = this.props;
        return (
            <div className={classnames('SearchBar', className)} {...props}>
                <TextField
                    hintText="Search Here"
                    onChange={this.onSearchChange}
                />
                <RaisedButton
                    label="Search"
                    primary={true}
                    style={style}
                    onTouchTap={this.search}
                />
                <Tabs initialSelectedIndex={selectedIndex}>
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