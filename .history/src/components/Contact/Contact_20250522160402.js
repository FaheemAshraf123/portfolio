import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email, Whatsapp } from "./ContactElements";
import './Contact.css'
function Contact() {
  return (
    // <ContactWrapper id="contact">
    //   <div className="Container">
    //     <div className="SectionTitle">Get In Touch</div>
    //     <div className="BigCard">
    //       <Email>
    //         <span>faheemashraf5180@gmail.com</span>
    //         <a
    //           className="btn PrimaryBtn"
    //           href="mailto:your_email@gmail.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Send Mail
    //         </a>
    //       </Email>
    //       <Whatsapp>
    //         <span>+923366545180</span>
    //         <a
    //           className="btn PrimaryBtn"
    //           href="mailto:your_email@gmail.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Message Me on WhatsApp
    //         </a>
    //       </Whatsapp>
    //     </div>
    //     <SocialIcon />
    //   </div>
    // </ContactWrapper>
      <div className='project'>
    <h3>Mail</h3>

    <p className='project__description'>faheemashraf5180@gmail.com</p>
      <a
       
        aria-label='source code'
        className='link link--icon'
      >
        email me
        {/* <GitHubIcon /> */}
      </a>

   
  </div>
  )
}

export default Contact;
