import React , { Component } from 'react';

class Status2 extends Component{
	constructor(props){
		super(props);
		this.state = {
			time : 200
		}
	}
	earlyDisplay =()=>{
           if(this.props.status > this.state.time){
              return (
                    <div>
                    Early
                    </div>
                );
           }
  }
  lateDisplay =()=>{
           if(this.props.status < this.state.time){
              return (
                    <div>
                    Late
                    </div>
                );
           }
  }
  onTimeDisplay =()=>{
           if(this.props.status === this.state.time){
              return (
                    <div>
                    On Time
                    </div>
                );
           }
  }

	render(){
    var earlyObj = {
      color : '#004d00'
    }
     var lateObj = {
      color : '#cc2900'
    }
     var onTimeObj = {
      color : '#66ff66'
    }
			return (
      <div>
               <div style={earlyObj}>{this.earlyDisplay()}</div>
               <div style={lateObj}>{this.lateDisplay()}</div>
               <div style={onTimeObj}>{this.onTimeDisplay()}</div>
      </div>
			);
	}
}

export default Status2;