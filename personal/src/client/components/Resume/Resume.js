import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {

  

  render() {
    //   var go = {color: 'orange', textDecoration: 'none'}
      var gators = {color: 'blue', textDecoration: 'none'};
      var tiny = {fontSize: "12px"};
      var tinyButBig = {fontSize: "11px", textTransform: 'uppercase'}

      var courses_formatted = this.props.relevant_courses.map(function(course){
        return <li>{course.title} <b style={tinyButBig}>{course.lang}</b></li>;
      })

      var exp_formatted = this.props.experience.map(function(exp){
        return <li>{exp.title} <b style={tinyButBig}>{exp.desc}</b></li>;
      })
      var involve_formatted = this.props.involvement.map(function(volv){
        return <li>{volv.title} <b style={tinyButBig}>{volv.desc}</b></li>;
      })
      var projects_formatted = this.props.projects.map(function(project){
        return <li>{project.title} <b style={tinyButBig}>{project.lang}</b></li>;
      })
      var tech_formatted = this.props.technology.map(function(tec){
        return <li>{tec.name} <i style={tinyButBig}> {tec.lvl}</i> </li>;
      })


    return (
      <div className="res-wrapper">
        <div className="res-block">
            {/* <h1>Resume</h1> */}

            {/* EDUCATION */}
            <h2>Education</h2>
            {this.props.year} Year Computer Science Student <span style = {tiny}> with a minor in {this.props.minor}</span> at the <a href="http://www.ufl.edu/" target="_blank" style={gators}> University of Florida </a>


            {/* COURSEWORK */}
            <h2>Relevant Coursework</h2>
            <ul>
                {courses_formatted}
            </ul>


            {/* EXPERIENCE  */}
            <h2>Experience</h2>
            <ul>
                {exp_formatted}
            </ul>


            {/* INVOLVEMENT  */}
            <h2>Involvement</h2>
            <ul>
               {involve_formatted}
                
            </ul>

            {/* PROJECTS  */}
            <h2>Projects</h2>
            <ul>
              {projects_formatted} 
            </ul>

            {/* TECHNOLOGIES  */}
            <h2>Technologies</h2>
            <ul>
              {tech_formatted} 
            </ul>
        </div>


      </div>
    );
  }


}



 export default Resume;
