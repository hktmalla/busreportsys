import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import { userClick } from '../actions/user-click';

import '../App.css';

class BusData extends Component{
    displayData(){
    	return this.props.data.map((data1, index)=>{
    		return(
    			    <div className = "container" onClick={()=>this.props.userClick(data1)}>
    			        			       <center>
    			    	    			        <h3>{data1.organisation}</h3>
    			    	    			        <h3>{data1.date}</h3>
    			        			        </center>
    			        			     </div>
    			        			);
    	});
    }
	render(){
		return(
			   <div>
			       {this.displayData()}
			   </div>
			);
	}
}

function mapStateToProps(state){
	return {
		data : state.data
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		userClick : userClick
	}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(BusData);