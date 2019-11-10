import React, { Component } from 'react';
 import '../../components/style.scss';
import Nav from "../../components/Nav";
import Resume from "../../components/Resume";
import Update from "../../components/Update";
import Bio from "../../components/Bio";


class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      theme: 'True'
    }
  }


  _handleStyleChange= (css) =>{
    this.setState((state, props) => ({
      theme : !state.theme
      })
    );
    console.log(this.state.theme, "state in class");
  }
  
  
  render() {


    var top = {
      marginTop: '180px',
    };
    var one = {
      
    };

    var bio = {
      
    };

    let courses =[
                  {title: "Operating Systems", lang: "C, C++, Reptilian (Android / Linux Hybrid)"}, 
                  {title: "Regression Analysis", lang: "R"}, 
                  {title: "Algorithm Design", lang: null}, 
                  {title: "Intro to Software Engineering", lang: "MEAN Stack"}, 
                  {title: "Information and Database Systems", lang: "mariadb + MySQL"},
                  {title: "Data Structures and Algorithms", lang: "C++"}, 
                  {title: "Intro to Computer Organization", lang: "ARM Assembly"},
                  {title:"Elementary Differential Equations", lang: null}, 
                  {title: "Applications of Discrete Structures", lang: null}, 
                  {title: "Programming Fundamentals 1-2", lang: "Java + C++"}
                ];

    let exp = [
                {title: "Ultimate Software SWE Intern", desc: "Summer 2019"},
                {title: "Undergraduate TA", desc:"Java + C++"}
               
              ];

    let volv = [
                
                {title: "Association of Computer Engineers (ACE) Mentor", desc: null},
                {title: "PACE Center for Girls", desc: "volunteer"},
                {title: "ACM Software Engineering Team", desc: null},
                {title: "Data Science & Informatics (DSI) Member", desc: null},
                {title: "Harn Museum of Art M.U.S.E.", desc: "volunteer"},
              ];

    let proj = [
                {title: "MorsEmoji", lang: "swift", desc: null},
                {title: "Fearlessly Girl", lang: "React Native", desc: null },
                {title: "Petree's Prints", lang: "MERN STACK", desc: "http://petree-prints.herokuapp.com"},
                {title: "Personal  'site", lang: "REACT + SASS", desc: null},
                // {title: "PartySpot", lang: "REACT + GRAPHQL + SPOTIFY API (WIP)", desc: null},
                {title: "Bachelor Twitter Analysis", lang: "PYTHON + TWEEPY + (eventually) Pandas/spaCy (WIP)", desc: null},
                {title: "Galaga", lang: "PROCESSING", desc: null}
              ];

    let tech = [
                {name: "Java", lvl: "proficient"},
                {name: "C++", lvl: "proficient"},
                {name: "React", lvl: "proficient"},
                {name: "Git", lvl: "proficient"},
                {name: "Python", lvl: "intermidiate"},
                {name: "MySQL", lvl: 'intermediate'},
                {name: "MongoDB", lvl: "intermediate"},
                {name: "Express", lvl: "novice"},
                {name: "Node.js", lvl: "novice"},
                {name: "AngularJS", lvl: "novice"},
                {name: "Photoshop CS6", lvl: "industry certified"},
                {name: "Microsoft Office", lvl: "industry certified"},
                {name: "Atom", lvl:null },
                {name: "VSCode", lvl: null},
                {name: "CLion", lvl: null},
                {name: "IntelliJ", lvl: null},
                {name: "XCode", lvl: null},

            ];
    
    return (
      
      <div className="App">
        <Nav    theme = {this.state.theme}
                func = {this._handleStyleChange}/>


        <Bio theme = {this.state.theme}
        style = {top}
        title = "Hello!"
        content = {<div>Hello! My name is Madison & I am a 3rd year Computer Science student at the University of Florida graduating in May 2021. 
          I have previously interned at Ultimate Software (Weston, FL) for Summer 2019. <b>I am currently seeking another 
          internship opportunity for Summer of 2020. </b> If you have an opportunity please feel free to email me at madisonfileman@gmail.com 
          or msg me on <a href="https://www.linkedin.com/in/madison-fileman/">linkedin</a>. </div>}
        />

        <Bio 
          theme = {this.state.theme}
          title = "About me..."
          content = {<div> I am interested in software and data engineering and I am extremely passionate about tech's capability to serve those who are disadvantaged at any level.
            I am extremely hardworking and invested in my work, and I just so happen to be a really fun intern :)
            At the end of the day, I want to work on something meaningful that puts any form of good into the world (and hopefully that has a cool tech stack!).
            Below you'll be able to see / download my most recent resume that I hope to expound upon in the near future.</div>}
        />

        <Resume 
          theme = {this.state.theme}
          year="3rd" 
          relevant_courses= {courses}
          experience = {exp} 
          involvement = {volv}
          projects = {proj}
          technology = {tech}
          minor = "Statistics"       
        />
        
        <Update 
          theme = {this.state.theme}
          content1="My resume as of November 2019" 
          content2={<a target="_blank" href='https://docs.google.com/document/d/1JsXdI5q6zJF1N8h1vMu_yH-wQRndr1BzR78cUpHTak8/edit?usp=sharing' download>dwnld here.</a>}
          content3=
            {<iframe src="https://docs.google.com/document/d/e/2PACX-1vSIRcmrHaZQtEMLh1rRDWE4WAdbr_aXmRQJP4JYarDMheB87dSeL9sp3NvUzrAo9VM5HCO9UKutplwT/pub?embedded=true"
            style={{width: '85%', height: '1030px'}}>my current resume as of November 9th 2019</iframe>}
        ></Update>

        </div>
    );
  }
}

export default App;