import React from "react";
import { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import About from "../../components/About/about";
import Skills from "../../components/Skills/skills";
import Resume from "../../components/Resume/resume";
import Loader from "../../components/Loader/loader";
import Contact from "../../components/Contact/contact";
import Project from "../../components/Projects/project";

const Home = ()=>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
        setTimeout(() => {
        setLoading(false);
        }, 1000); 
  }, []);
    return(
<>
{loading ? (
        <Loader/>
      ) : (
        <>
      
        <Header/>
        <div style={{background:' linear-gradient(124deg, #000000  30%,#f5540a  70%)'}}>
        <About/>
        </div>
        <Skills/>
        <div style={{background:' linear-gradient(124deg, #000000  30%,#f5540a  70%)'}}>
        
        <Resume/>
       
       
        
        <Project/>
        </div>
        <Contact/>
       
        </>
         )}
        </>
    )
}

export default Home;