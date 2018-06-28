import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import './Main.css';

import Header from '../../components/Header/Header';

import Home from './Home/Home';
import About from './About/About';
import DisplayPdf from './DisplayPdf/DisplayPdf';
import Upload from './Upload/Upload';

class Main extends Component {
	render() {
		return(
			<div className="Main">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/display' component={DisplayPdf}/>
					<Route path='/upload' component={Upload}/>
        </Switch>
      </div>
		)
	}
}

export default Main;
