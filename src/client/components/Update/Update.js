import React, { Component } from 'react';
// import '../light.scss';

class Update extends Component {
  render() {

    var wrapperBase = "update-wrapper"
    var sectionBase = "update-section"
    var wrapper = "";
    var section = ""
    
    if(this.props.theme){
      wrapper = wrapperBase+ '-light'
      section = sectionBase+ '-light'
    }
    else{
      wrapper = wrapperBase+ '-dark'
      section = sectionBase+ '-dark'
    }

    return (
      <div className={wrapper}>
        <h3>{this.props.title}</h3>

        <div  className={section}>
          <p><b>{this.props.date}</b></p>
          <p>{this.props.content1}</p>

          <p>{this.props.content2}</p>

          <p>{this.props.content3}</p>  
        </div>      
      </div>
    );
  }
}
 export default Update;
