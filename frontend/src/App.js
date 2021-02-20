import logo from './logo.svg';
import React, { Component, useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ListGroup, ListGroupItem, Navbar, NavItem } from 'reactstrap';
import './components/Chart';
import * as ReactBootStrap from "react-bootstrap";
import Chart from './components/Chart';
import CList from './components/CList';

const App = () => {
  
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <ReactBootStrap.Navbar className = "wr">
      
        <Link to= "/">
        Home
        </Link>
        
        <Link to= "/charts" margin-left = "2.5px">
        <ReactBootStrap.Nav.Link href="#charts">Charts</ReactBootStrap.Nav.Link>
        </Link>
        <Link to= "/coinlist" margin-left = "2.5px">
        <ReactBootStrap.Nav.Link href="#coinlist">CoinList</ReactBootStrap.Nav.Link>
        </Link>
        
        </ReactBootStrap.Navbar> 
        <header className="App-header">
        <Switch>
          <Route path="/charts">
            <Chart/>
          </Route>
          <Route path="/coinlist">
            <CList/>
          </Route>
          <Route path="/">
            <h4>Site still under maintenance</h4>
                        
          </Route>
          
        </Switch>
        </header>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
