import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path='/' component={App} />
        <Route path='/images' component={App} />
        <Route path='/people' component={App} />
        <Route path='/exhibitions' component={App} />
        <Route path='/places' component={App} />
        <Route path='/about' component={About} />
        <Route path='*' component={NotFound} />
    </Router>
);

export default Routes;