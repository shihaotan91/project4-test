import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import {BrowserRouter, Match, Miss} from 'react-router'

import Home from './Home';
import Programmer from './Programmer'
import NotFound from './NotFound'
//
const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/resume/programmer" component={Programmer} />
        <Miss  component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render( <Routes />, document.getElementById('root') );
