import React , { Component } from 'react';
import Status1 from './Status1';
import '../App.css';

var jsonData = require('../data/json-data.json');

class Table extends Component{
	constructor(props){
    super(props);
    this.state = {
      note : '',
      display : ''
    }
    this.handlChange = this.handlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //this event is used to onChange method to show to changed value 
  handlChange(event){
    this.setState({note : event.target.value});
  }
  //this event is used to submit data in textarea
  handleSubmit(event){
    event.preventDefault();
    this.setState({display : this.state.note});
  }

	render(){
              return (
		    <div>
		        <div className = "container">
		              <center>
	    			        <span id="span1">{jsonData.data[0].organisation}</span>-
	    			        <span id="span2">{jsonData.data[0].date}</span>
    			       </center>
		           </div>
                             <div>
		                       <table>
		                        <thead>
		                           <tr>
		                               <th>Bus Id</th>
		                               <th>Route Variant</th>
		                               <th>Status</th>
		                           </tr>
		                        </thead>
		                        { jsonData.data[1].busData.map((data)=>{
		                        	return (
	                        		        <tbody>
			                            	    <tr>
					                                 <td>{data.busId}</td>
					                                 <td>{data.routeVariant}</td>
					                                 <td><Status1 status={data.deviationFromTimetable}/></td>
		                                        </tr>
                                            </tbody>
		                        		);
		                        })}
                                    
		                       </table>
		                       <p>Note : {this.state.display}</p>
		                       <form onSubmit={this.handleSubmit}>
		                           <textarea  onChange={this.handlChange} placeholder="Enter note here......."/>
		                           <br />
		                           <button type="submit" className="button"> <span>Submit Note</span></button>
		                       </form>
                            </div>		 
			</div>	    

			);	
	}
}

export default Table;