import React from 'react'
import Navbar from './Components/navbar'
import Myself from './Components/Me/Myself'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'

import Contact from './Components/Contact/Contact'




const App = () => {
  return (
    <div>
        <Navbar/>
        <Myself/>
        <About/>
    <Services/>
    <MyWork/>
    <Contact/>

   
        
     
    </div>
  )
}

export default App