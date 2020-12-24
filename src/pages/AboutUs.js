import React from 'react';
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Faq from "../components/Faq";




const AboutUs=()=>{
    return(
    <div className="aboutus">
         <AboutSection/>
         <Services/>
         <Faq/>
    </div>
    )
}

export default AboutUs;