import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email, Whatsapp } from "./ContactElements";
import "./Contact.css";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="contactinfo">
          <div className="contactinfoTop">
        <div className="cardContact">
          <h3>Mail</h3>
          <p className="contact_description">faheemashraf5180@gmail.com</p>

          <a href="mailto:faheemashraf5180@gmail.com">
            <span type="button" className="btn btn--outline">
              Email me
            </span>
          </a>
        </div>
        <div className="cardContact" >
          <h3>Whatsapp</h3>
          <p className="contact_description">+923366545180</p>

          <a href="mailto:faheemashraf5180@gmail.com">
            <span type="button" className="btn btn--outline">
              Chat me
            </span>
          </a>
        </div>
          </div>
          <div className="contactinfoBottom">
 <div className="cardContact">
  <h3>LinkedIn</h3>
  <p className="contact_description">linkedin.com/in/faheemashraf</p>

  <a
    href="https://www.linkedin.com/in/faheemashraf"  // replace with your actual LinkedIn URL
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="btn btn--outline">
      Visit LinkedIn Profile
    </span>
  </a>
</div>

          </div>

          </div>
        {/* <div className="BigCard"> */}
        {/* <Email>
            <span>faheemashraf5180@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:your_email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email> */}
        {/* <Whatsapp>
            <span>+923366545180</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:your_email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Me on WhatsApp
            </a>
          </Whatsapp> */}
        {/* </div> */}
        <SocialIcon />
      </div>
    </ContactWrapper>
    //     <div className='project'>
    //   <h3>Mail</h3>

    //   <p className='project__description'>faheemashraf5180@gmail.com</p>
    //     <a href="mailto:faheemashraf5180@gmail.com"
    //       aria-label='source code'
    //       className='link link--icon'
    //     >
    //       email me
    //       {/* <GitHubIcon /> */}
    //     </a>

    // </div>
  );
}

export default Contact;
