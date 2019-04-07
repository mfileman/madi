import React, { Component } from 'react';
import './App.css';
import Nav from "../../components/Nav";
import Resume from "../../components/Resume";
import Bio from "../../components/Bio";

class App extends Component {
  
  render() {
    let courses =[{title: "Intro to Software Engineering", lang: "MEAN Stack"}, 
                  {title: "Information and Database Systems", lang: "mariadb + MySQL"},
                  {title: "Data Structures and Algorithms", lang: "C++"}, 
                  {title: "Intro to Computer Organization", lang: "ARM Assembly"},
                  {title:"Elementary Differential Equations", lang: null}, 
                  {title: "Applications of Discrete Structures", lang: null}, 
                  {title: "Programming Fundamentals 1-2", lang: "Java + C++"}
                ];

    let exp = [{title: "Undergraduate TA", desc:"Java + C++"}, 
               {title: "Ultimate Software SWE Intern", desc: "Summer 2019"}
              ];

    let volv = [{title: "Association of Computer Engineers (ACE) Member", desc: null},
                {title: "ACM Software Engineering Team", desc: null},
                {title: "Harn Museum of Art M.U.S.E.", desc: null},
                {title: "Theatre Strike Force", desc: null}
              ];

    let proj = [{title: "Petree's Prints", lang: "MERN STACK", desc: "none rn"},
                {title: "Bachelor Twitter Analysis", lang: "PYTHON + TWEEPY + (eventually) BEAUTIFULSOUP", desc: "none rn"},
                {title: "Personal  'site", lang: "HTML + CSS + REACT", desc: "none rn"},
                {title: "Galaga", lang: "PROCESSING", desc: "none rn"}
              ];

    let tech = [
                {name: "Java", lvl: "proficient"},
                {name: "Python", lvl: "proficient"},
                {name: "C++", lvl: "proficient"},
                {name: "Git", lvl: "proficient"},
                {name: "MySQL", lvl: 'intermediate'},
                {name: "MongoDB", lvl: "intermediate"},
                {name: "Express", lvl: "intermediate"},
                {name: "Node.js", lvl: "intermediate"},
                {name: "AngularJS", lvl: "novice"},
                {name: "Photoshop CS6", lvl: "industry certified"},
                {name: "Microsoft Office", lvl: "industry certified"},
                {name: "Atom", lvl:null },
                {name: "VSCode", lvl: null},

            ];
    
    return (
      <div className="App">
        <Nav/>
        <Bio/>
        <Resume year="2nd" 
                relevant_courses= {courses}
                experience = {exp} 
                involvement = {volv}
                projects = {proj}
                technology = {tech}
                minor = "Statistics"
                />
        
      </div>
    );
  }
}

export default App;