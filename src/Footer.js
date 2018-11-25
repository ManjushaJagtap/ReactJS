import React, { Component } from 'react';
import './App.css';
import paw from './paw.jpg';

class Footer extends Component {
  render() {
    return (
			<div style={{border:'1px purple solid',backgroundImage:"url("+ paw +")", height:'60px', width:'100%', position: 'relative',clear:"both"}}> 
			<h1 style ={{textAlign:"center",fontSize:20,fontFamily:"Comic Sans MS"}}> @Copyright Manjusha !!</h1>  
			</div>
	
    );
  }
}

export default Footer;
