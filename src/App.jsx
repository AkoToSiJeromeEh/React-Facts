import Navbar from "./contents/Navbar";
import MainContent from "./contents/MainContent";
import Footer from "./contents/Footer";
import React , {useState} from 'react'
function AllContents() {
   
   const [isDark , setDark]  = useState(false);
    
   function setDarkMode() {
     
    setDark(preval => !preval)
   }
  return (
    <>
      <Navbar
       isDark={isDark}
       toggleDarkmode={setDarkMode}
      />
      <MainContent
       isDark={isDark}
      />
      <Footer/>
    </>
  )
}

export default AllContents
