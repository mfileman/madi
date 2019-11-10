(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),i=n.n(r),o=(n(14),n(1)),s=n(2),c=n(4),m=n(3),u=n(5),p=(n(15),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t="";return t=this.props.theme?"nav-wrapper-light":"nav-wrapper-dark",l.a.createElement("div",{className:t},l.a.createElement("h1",{onClick:function(){e.props.func()}},"Madison Fileman"))}}]),t}(a.Component)),h=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={fontSize:"11px",textTransform:"uppercase"},t=this.props.relevant_courses.map(function(t){return l.a.createElement("li",{key:t.title},t.title," ",l.a.createElement("b",{style:e},t.lang))}),n=this.props.experience.map(function(t){return l.a.createElement("li",{key:t.title},t.title," ",l.a.createElement("b",{style:e},t.desc))}),a=this.props.involvement.map(function(t){return l.a.createElement("li",{key:t.title},t.title," ",l.a.createElement("b",{style:e},t.desc))}),r=this.props.projects.map(function(t){return l.a.createElement("li",{key:t.title},l.a.createElement("a",{href:t.desc},t.title)," ",l.a.createElement("b",{style:e},t.lang))}),i=this.props.technology.map(function(t){return l.a.createElement("li",{key:t.name},t.name," ",l.a.createElement("i",{style:e}," ",t.lvl)," ")}),o="",s="";return this.props.theme?(o="res-wrapper-light",s="res-block-light"):(o="res-wrapper-dark",s="res-block-dark"),l.a.createElement("div",{className:o},l.a.createElement("h3",null," CV "),l.a.createElement("div",{className:s},l.a.createElement("h3",null,"Education"),this.props.year," Year Computer Science Student ",l.a.createElement("span",{style:{fontSize:"12px"}}," with a minor in ",this.props.minor)," at the ",l.a.createElement("a",{href:"http://www.ufl.edu/",rel:"noopener noreferrer",target:"_blank",style:{color:"RoyalBlue",textDecoration:"none"}}," University of Florida "),l.a.createElement("h3",null,"Relevant Coursework"),l.a.createElement("ul",null,t),l.a.createElement("h3",null,"Experience"),l.a.createElement("ul",null,n),l.a.createElement("h3",null,"Involvement"),l.a.createElement("ul",null,a),l.a.createElement("h3",null,"Projects"),l.a.createElement("ul",null,r),l.a.createElement("h3",null,"Technologies"),l.a.createElement("ul",null,i)))}}]),t}(a.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="",t="";return this.props.theme?(e="update-wrapper-light",t="update-section-light"):(e="update-wrapper-dark",t="update-section-dark"),l.a.createElement("div",{className:e},l.a.createElement("h3",null,this.props.title),l.a.createElement("div",{className:t},l.a.createElement("p",null,l.a.createElement("b",null,this.props.date)),l.a.createElement("p",null,this.props.content1),l.a.createElement("p",null,this.props.content2),l.a.createElement("p",null,this.props.content3)))}}]),t}(a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="",t="";return this.props.theme?(e="bio-wrapper-light",t="bio-section-light"):(e="bio-wrapper-dark",t="bio-section-dark"),l.a.createElement("div",{className:e},l.a.createElement("h3",{style:this.props.style}," "),l.a.createElement("div",{className:t},l.a.createElement("h3",null," ",this.props.title," "),this.props.content))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e)))._handleStyleChange=function(e){n.setState(function(e,t){return{theme:!e.theme}}),console.log(n.state.theme,"state in class")},n.state={theme:"True"},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{theme:this.state.theme,func:this._handleStyleChange}),l.a.createElement(f,{theme:this.state.theme,style:{marginTop:"180px"},title:"Hello!",content:l.a.createElement("div",null,"Hello! My name is Madison & I am a 3rd year Computer Science student at the University of Florida graduating in May 2021. I have previously interned at Ultimate Software (Weston, FL) for Summer 2019. ",l.a.createElement("b",null,"I am currently seeking another internship opportunity for Summer of 2020. ")," If you have an opportunity please feel free to email me at madisonfileman@gmail.com or msg me on ",l.a.createElement("a",{href:"https://www.linkedin.com/in/madison-fileman/"},"linkedin"),". ")}),l.a.createElement(f,{theme:this.state.theme,title:"About me...",content:l.a.createElement("div",null," I am interested in software and data engineering and I am extremely passionate about tech's capability to serve those who are disadvantaged at any level. I am extremely hardworking and invested in my work, and I just so happen to be a really fun intern :) At the end of the day, I want to work on something meaningful that puts any form of good into the world (and hopefully that has a cool tech stack!). Below you'll be able to see / download my most recent resume that I hope to expound upon in the near future.")}),l.a.createElement(h,{theme:this.state.theme,year:"3rd",relevant_courses:[{title:"Operating Systems",lang:"C, C++, Reptilian (Android / Linux Hybrid)"},{title:"Regression Analysis",lang:"R"},{title:"Algorithm Design",lang:null},{title:"Intro to Software Engineering",lang:"MEAN Stack"},{title:"Information and Database Systems",lang:"mariadb + MySQL"},{title:"Data Structures and Algorithms",lang:"C++"},{title:"Intro to Computer Organization",lang:"ARM Assembly"},{title:"Elementary Differential Equations",lang:null},{title:"Applications of Discrete Structures",lang:null},{title:"Programming Fundamentals 1-2",lang:"Java + C++"}],experience:[{title:"Ultimate Software SWE Intern",desc:"Summer 2019"},{title:"Undergraduate TA",desc:"Java + C++"}],involvement:[{title:"Association of Computer Engineers (ACE) Mentor",desc:null},{title:"PACE Center for Girls",desc:"volunteer"},{title:"ACM Software Engineering Team",desc:null},{title:"Data Science & Informatics (DSI) Member",desc:null},{title:"Harn Museum of Art M.U.S.E.",desc:"volunteer"}],projects:[{title:"MorsEmoji",lang:"swift",desc:null},{title:"Fearlessly Girl",lang:"React Native",desc:null},{title:"Petree's Prints",lang:"MERN STACK",desc:"http://petree-prints.herokuapp.com"},{title:"Personal  'site",lang:"REACT + SASS",desc:null},{title:"Bachelor Twitter Analysis",lang:"PYTHON + TWEEPY + (eventually) Pandas/spaCy (WIP)",desc:null},{title:"Galaga",lang:"PROCESSING",desc:null}],technology:[{name:"Java",lvl:"proficient"},{name:"C++",lvl:"proficient"},{name:"React",lvl:"proficient"},{name:"Git",lvl:"proficient"},{name:"Python",lvl:"intermidiate"},{name:"MySQL",lvl:"intermediate"},{name:"MongoDB",lvl:"intermediate"},{name:"Express",lvl:"novice"},{name:"Node.js",lvl:"novice"},{name:"AngularJS",lvl:"novice"},{name:"Photoshop CS6",lvl:"industry certified"},{name:"Microsoft Office",lvl:"industry certified"},{name:"Atom",lvl:null},{name:"VSCode",lvl:null},{name:"CLion",lvl:null},{name:"IntelliJ",lvl:null},{name:"XCode",lvl:null}],minor:"Statistics"}),l.a.createElement(d,{theme:this.state.theme,content1:"My resume as of November 9th 2019",content2:l.a.createElement("a",{target:"_blank",href:"https://docs.google.com/document/d/1JsXdI5q6zJF1N8h1vMu_yH-wQRndr1BzR78cUpHTak8/edit?usp=sharing",download:!0},"dwnld here."),content3:l.a.createElement("iframe",{src:"https://docs.google.com/document/d/e/2PACX-1vSIRcmrHaZQtEMLh1rRDWE4WAdbr_aXmRQJP4JYarDMheB87dSeL9sp3NvUzrAo9VM5HCO9UKutplwT/pub?embedded=true",style:{width:"85%",height:"1030px"}},"my current resume as of November 9th 2019")}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.218045c6.chunk.js.map