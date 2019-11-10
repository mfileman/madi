import React, { Component } from 'react';

class Resume extends Component {
  

  render() {
      var gators = {color: 'RoyalBlue', textDecoration: 'none'};
      var tiny = {fontSize: "12px"};
      var tinyButBig = {fontSize: "11px", textTransform: 'uppercase'}

      var courses_formatted = this.props.relevant_courses.map(function(course){
        return <li key = {course.title}>{course.title} <b style={tinyButBig}>{course.lang}</b></li>;
      })

      var exp_formatted = this.props.experience.map(function(exp){
        return <li key = {exp.title}>{exp.title} <b style={tinyButBig}>{exp.desc}</b></li>;
      })
      var involve_formatted = this.props.involvement.map(function(volv){
        return <li key = {volv.title}>{volv.title} <b style={tinyButBig}>{volv.desc}</b></li>;
      })
      var projects_formatted = this.props.projects.map(function(project){
        return <li key ={project.title}><a href={project.desc}>{project.title}</a> <b style={tinyButBig}>{project.lang}</b></li>;
      })
      var tech_formatted = this.props.technology.map(function(tec){
        return <li key = {tec.name} >{tec.name} <i style={tinyButBig}> {tec.lvl}</i> </li>;
      })


    var wrapperBase = "res-wrapper"
    var blockBase = "res-block"
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
        <h3> CV </h3>

      

        <div className={block}>
          {/* EDUCATION */}
          <h3>Education</h3>
          {this.props.year} Year Computer Science Student <span style = {tiny}> with a minor in {this.props.minor}</span> at the <a href="http://www.ufl.edu/" rel="noopener noreferrer" target="_blank" style={gators}> University of Florida </a>


          {/* COURSEWORK */}
          <h3>Relevant Coursework</h3>
          <ul>
              {courses_formatted}
          </ul>


          {/* EXPERIENCE  */}
          <h3>Experience</h3>
          <ul>
              {exp_formatted}
          </ul>


          {/* INVOLVEMENT  */}
          <h3>Involvement</h3>
          <ul>
              {involve_formatted}
              
          </ul>

          {/* PROJECTS  */}
          <h3>Projects</h3>
          <ul>
            {projects_formatted} 
          </ul>

          {/* TECHNOLOGIES  */}
          <h3>Technologies</h3>
          <ul>
            {tech_formatted} 
          </ul>
          
        </div>


      </div>
    );
  }


}



 export default Resume;
