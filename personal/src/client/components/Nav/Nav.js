import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {

  constructor(props){
    super(props)
    this.state={
      linksOpen: 'False'
    }
  }

  openNav = () =>{
    this.setState({
      linksOpen: 'True'
    });
    // console.log("in");
  }

  closeNav = () =>{

    this.setState({
      linksOpen: 'False'
    });
    // console.log("out");
    
  }


  render() {
    return (
      <div className="nav-wrapper">
        <h1>Madison Fileman</h1>
        

        <div className="nav-menu">
          {/* <button className="nav-btn" onMouseOver={this.openNav} onMouseOut={this.closeNav}>☰</button> */}
        </div>
      </div>
    );
  }


}



 export default Nav;
