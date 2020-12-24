import React from 'react';
import style from "styled-components";
import {About} from "../styles"


const Faq=()=>{
    return(
        <Faqstyled>
            <h2>Any questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do i start?</h4>
                <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quod?</p>
            </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quod?</p>
            </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Where do i register</h4>
                <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quod?</p>
            </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quod?</p>
            </div>
            </div>
            <div className="faq-line"></div>
            
        </Faqstyled>
    )
}


const Faqstyled=style(About)`
display:block;

span {
display:block;
}

h2{
    padding-bottom:2rem;
    font-weight:lighter;
}

.faq-line{
    background:#cccccc;
    height:0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}

.answer{
    padding: 2rem 0rem;
    p{
        padding:1rem 0rem;
    }
}

`

export default Faq;