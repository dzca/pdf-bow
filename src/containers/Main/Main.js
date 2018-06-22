import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import './Main.css';

import Header from '../../components/Header/Header';

import Home from './Home/Home';
import About from './About/About';

class Main extends Component {
    render () {
        return (
            <div className="Main">
                <Header />
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/About' component={About}/>
                </Switch>
            </div>
        )
    }
}

export default Main;
