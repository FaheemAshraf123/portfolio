// import React from "react";
// import { useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import { motion } from "framer-motion"; // ✅ Correct
// import SocialIcon from "../SocialIcon/SocialIcon";
// import { ContactWrapper } from "./ContactElements";

// import "./Contact.css";
// function Contact() {
//   return (
//     <ContactWrapper id="contact">
//       <div className="Container">
//         <div className="SectionTitle">Get In Touch</div>
//         <div className="contactinfo">
//           <div className="contactinfoTop">
//             <div className="cardContact">
//               <h3>Mail</h3>
//               <p className="contact_description">faheemashraf5180@gmail.com</p>

//               <a
//                 href="mailto:faheemashraf5180@gmail.com"
//                 aria-label="Send an email to faheemashraf5180@gmail.com"
//               >
//                 <motion.span
//                   className="btn btn--outline"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Email Me
//                 </motion.span>
//               </a>
//             </div>
//             <div className="cardContact">
//               <h3>WhatsApp</h3>
//               <p className="contact_description">+92 336 6545180</p>

//               <a
//                 href="https://wa.me/923366545180"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <motion.span
//                   className="btn btn--outline"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Chat on WhatsApp
//                 </motion.span>
//               </a>
//             </div>
//           </div>
//           <div className="contactinfoBottom">
//             <div className="cardContact">
//               <h3>LinkedIn</h3>
//               <p className="contact_description">
//                 linkedin.com/in/faheemashraf
//               </p>

//               <a
//                 href="https://www.linkedin.com/in/faheem-ashraf-8a30a1183/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <motion.span
//                   className="btn btn--outline"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Visit LinkedIn Profile
//                 </motion.span>
//               </a>
//             </div>
//           </div>
//         </div>

//         <SocialIcon />
//       </div>
//     </ContactWrapper>
//   );
// }

// export default Contact;
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper } from "./ContactElements";
import "./Contact.css";

function AnimatedCardContact({ title, description, link, label }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="cardContact"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <h3>{title}</h3>
      <p className="contact_description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <motion.span
          className="btn btn--outline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
        </motion.span>
      </a>
    </motion.div>
  );
}

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="contactinfo">
          <div className="contactinfoTop">
            <AnimatedCardContact
              title="Mail"
              description="faheemashraf5180@gmail.com"
              link="mailto:faheemashraf5180@gmail.com"
              label="Email Me"
            />
            <AnimatedCardContact
              title="WhatsApp"
              description="+92 336 6545180"
              link="https://wa.me/923366545180"
              label="Chat on WhatsApp"
            />
          </div>
          <div className="contactinfoBottom">
            <AnimatedCardContact
              title="LinkedIn"
              description="linkedin.com/in/faheemashraf"
              link="https://www.linkedin.com/in/faheem-ashraf-8a30a1183/"
              label="Visit LinkedIn Profile"
            />
          </div>
        </div>

        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
