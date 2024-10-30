import React from 'react'
import './About.css'
// import profile from '../../assets/logo.png'
const About = () => {
  return (
    <div id="about" classname="about">
  <div className="about-title">
    <h1>About Me</h1>
  </div>
  <div className="about-sections">
    <div classname="about-left">
        {/* <img src={profile} alt=""/> */}
    </div>
    <div className="about-right">
        <div className="about-para">
<p>
Hello! I’m Muneer Sadhik, a self-taught web developer and MCA graduate with a strong passion for creating beautiful and functional websites.
My journey into web development has been driven by a desire to blend creativity with technology, allowing me to bring ideas to life through engaging web applications.I have hands-on experience in designing and developing projects using a variety of technologies, including HTML, CSS, PHP, JavaScript, React, and MySQL.My goal is to craft websites that are not only visually appealing but also user-friendly and efficient.
</p>
<div className="about-skills">
    <div className="about-skill">
        <p>HTML</p><hr style={{width:"700px"}}/>
    </div>
    <div className="about-skill">
        <p>CSS</p><hr style={{width:"650px"}}/>
    </div>
    <div className="about-skill">
        <p>PHP</p><hr style={{width:"600px"}}/>
    </div>
    <div className="about-skill">
        <p>JAVA</p><hr style={{width:"500px"}}/>
    </div>
    <div className="about-skill">
        <p>JAVASCRIPT</p><hr style={{width:"550px"}}/>
    </div>
    <div className="about-skill">
        <p>REACT</p><hr style={{width:"500px"}}/>
    </div>
    <div className="about-skill">
        <p>MYSQL</p><hr style={{width:"600px"}}/>
    </div>

</div>

        </div>
        

    </div>
  </div>

    </div>
  )
}

export default About