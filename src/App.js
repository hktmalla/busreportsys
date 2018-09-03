import React, { Component } from 'react';
import './App.css';
import BusData from './components/bus-table';
class App extends Component {
  render() {
    return (
		    <div className="page-container">
		         <BusData />
		    </div>
    );
  }
}

export default App;
