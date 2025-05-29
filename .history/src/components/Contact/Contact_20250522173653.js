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

  <a
    href="mailto:faheemashraf5180@gmail.com"
    aria-label="Send an email to faheemashraf5180@gmail.com"
  >
    <span className="btn btn--outline">
      Email Me
    </span>
  </a>
</div>
       <div className="cardContact">
  <h3>WhatsApp</h3>
  <p className="contact_description">+92 336 6545180</p>

  <a
    href="https://wa.me/923366545180"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="btn btn--outline">
      Chat on WhatsApp
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
      
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
