import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email, Whatsapp } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>faheemashraf5180@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:your_email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
          <Whatsapp>
            <span>faheemashraf5180@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:your_email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Me on WhatsApp
            </a>
          </Whatsapp>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
