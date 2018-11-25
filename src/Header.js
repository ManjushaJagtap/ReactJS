import React, { Component } from 'react';
import paw from './paw.jpg';
class Header extends Component {
  render() {
    return (
        <div style={{border:'1px purple solid',backgroundImage:"url("+ paw +")", height:"150px", width:'100%', position: 'relative'}}> 
            <h1 style ={{textAlign:"center",fontSize:60,fontFamily:"Comic Sans MS"}}> DOGGOO !!</h1>  
        </div>
           
        );
  }
}

export default Header;
