import React, {Component} from 'react';
import '../App.css';
import Table from './Table'
import Table2 from './Table2';

var jsonData = require('../data/json-data.json');

class BusData extends Component{
	constructor(props){
		super(props);
		this.state = {
			isHidden : false,
			isHidden1 : false
		}
		this.hadleClick = this.hadleClick.bind(this);
		this.hadleClick1 = this.hadleClick1.bind(this);
	}
    /* this is used to handle  div click */
	hadleClick(){
		this.setState({isHidden: !this.state.isHidden});
	}
	hadleClick1(){//this event is for the for display table 
		this.setState({isHidden1 : !this.state.isHidden1});
	}

	render(){
		return(

				<div>
				       <center>
					       <div className="header">
					            Bus Reports
				           </div>
				        </center>
				       <div onClick={this.hadleClick}>
				       <center>
				          <div className="clickheader">
					           {jsonData.data[0].organisation}
				          </div>
				        </center>
				       </div>
				   {this.state.isHidden ? <Table2 /> : null} 
				   <div onClick={this.hadleClick1}>
				       <center>
				          <div className="clickheader">
					           {jsonData.data[1].organisation}
				          </div>
				        </center>
				       </div>
				   {this.state.isHidden1 ? <Table /> : null}
				</div> 
			);
	}
}

export default BusData;