import React, { Component } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";



class Nav extends Component {

  render() {
    var wrapBase = "nav-wrapper"
    var wrapper = "";
    if(this.props.theme){
      wrapper = wrapBase+ '-light'
    }
    else{
      wrapper = wrapBase+ '-dark'
    }
    return (
      <div className={wrapper}>
        <h1 onClick={() => { (this.props.func()) }}>Madison Fileman</h1>


        {/* <div className="nav-bar">
        <a>...</a>
          {/* <a href = "https://docs.google.com/document/d/1JsXdI5q6zJF1N8h1vMu_yH-wQRndr1BzR78cUpHTak8/edit?usp=sharing"></a>
          {/* <a href="mailto:madisonfileman@gmail.com"> contact</a>
          {/* <a href="mailto:madisonfileman@gmail.com"> :) me</a>
        </div> 
        */}

      </div>
    );
  }


}



 export default Nav;
