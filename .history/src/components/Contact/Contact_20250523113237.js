import React from "react";
import { motion } from "framer-motion"; // ✅ Correct
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper } from "./ContactElements";


import "./Contact.css";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="contactinfo">
          <div className="contactinfoTop">
             <motion.div
      className="cardContact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
            {/* <div className="cardContact"> */}
              <h3>Mail</h3>
              <p className="contact_description">faheemashraf5180@gmail.com</p>

              <a
                href="mailto:faheemashraf5180@gmail.com"
                aria-label="Send an email to faheemashraf5180@gmail.com"
              >
                {/* <span className="btn btn--outline">Email Me</span> */}
                <motion.span
  className="btn btn--outline"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Email Me
</motion.span>
              </a>
            {/* </div> */}
              </motion.div>
            <div className="cardContact">
              <h3>WhatsApp</h3>
              <p className="contact_description">+92 336 6545180</p>

              <a
                href="https://wa.me/923366545180"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn btn--outline">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="contactinfoBottom">
            <div className="cardContact">
              <h3>LinkedIn</h3>
              <p className="contact_description">
                linkedin.com/in/faheemashraf
              </p>

              <a href="https://www.linkedin.com/in/faheem-ashraf-8a30a1183/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn btn--outline">Visit LinkedIn Profile</span>
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
