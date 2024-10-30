import React from 'react'
import './Myself.css'
// import profile_img from '../../assets/Me.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Myself = () => {
  return (
    <div id="home" className='myself'>
      {/* <img src={profile_img} alt=''/> */}
      
<h1>Hello, <span>I'm Muneer Sadhik</span></h1>
<p>
I am a self-taught web developer and MCA graduate with a passion for creating beautiful and functional websites. I have hands-on experience in designing and developing web applications, and I am always eager to learn new techniques and technologies to enhance my skills.
</p>
<div className="myself-action">
  <div className="myself-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

</div>
    </div>
  )
}

export default Myself