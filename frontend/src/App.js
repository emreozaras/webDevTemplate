import logo from './logo.svg';
import React, { Component, useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Link, Route, Switch, useParams } from "react-router-dom";
import { ListGroup, ListGroupItem, Navbar, NavItem } from 'reactstrap';
import './components/Chart';
import * as ReactBootStrap from "react-bootstrap";
import Chart from './components/Chart';
import CList from './components/CList';
import CoinPage from './components/CoinPage';

const App = () => {
  
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <ReactBootStrap.Navbar className = "wr">
        
        <a href = "/" class = "w"> Home</a>
        <a href = "/charts" class = "w"> Charts</a>
        <a href = "/coinlist" class = "w"> Coinlist</a>
        
      </ReactBootStrap.Navbar>

        <header className="App-header">
        <Switch>
          <Route path="/charts">
            <Chart/>
          </Route>

          <Route path="/coinlist">
            <CList/>
          </Route>
          
          <Route path="/coins/:id" children={<Child/>}/>
            
          <Route path="/">
            <h4>Site still under maintenance</h4>
          </Route>
          
          
        </Switch>
        </header>
      </BrowserRouter>
      
      
    </div>
  );
}
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <CoinPage coin= {id}/>
    
    
  );
};

export default App;
