import React, { Component } from 'react';

class Bio extends Component {
  

  render() {
    var wrapperBase = "bio-wrapper"
    var blockBase = "bio-section"
    var wrapper = "";
    var block = ""

    if(this.props.theme){
      wrapper = wrapperBase+ '-light'
      block = blockBase+ '-light'
    }
    else{
      wrapper = wrapperBase+ '-dark'
      block = blockBase+ '-dark'
    }

    return (

      
      <div className={wrapper}>
        <h3 style={this.props.style}> </h3>     
        <div className={block}>
        <h3> {this.props.title} </h3>     
          {this.props.content}
        </div>


      </div>
    );
  }


}



 export default Bio;
