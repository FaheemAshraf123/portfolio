import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
  ScrollWrapper
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://i.ibb.co/k1xdY1f/Whats-App-Image-2023-09-26-at-07-11-35-removebg-preview.png"
            alt="man_png"
          />
          <div className="AboutBio" style={{textAlign : "justify"}}>
            👋 Hi, My name is <strong>Faheem Ashraf</strong>, a passionate
            Frontend Developer with a love for crafting engaging and
            user-friendly web experiences. I specialize in turning design
            concepts into interactive web applications using a powerful stack of
            technologies. <br /> 🚀 My goal is to deliver web solutions that not only
            meet but exceed your expectations. I'm always eager to tackle new
            challenges and bring fresh ideas to the table. <br /> 📈 Whether you need a
            stunning website, a web app, or a user-friendly interface, I'm here
            to turn your vision into reality. Let's collaborate and create
            something amazing together! Feel free to reach out to me at{" "}
            <strong>
              <a href="mailto:faheemashraf5180@gmail.com">Gmail</a>
            </strong>{" "}
            or connect with me on {" "}
            <strong>
              <a
                href="https://www.linkedin.com/in/faheem-ashraf-8a30a1183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </strong>{" "}
            to discuss your next project or just chat about all things frontend
            development. Let's build something extraordinary! 👨‍💻✨
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          {/* <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies> */}
          <ScrollWrapper>
  <Technologies>
    {stackList.concat(stackList).map((stack, index) => (
      <Tech key={index} className="tech">
        <TechImg src={stack.img} alt={stack.name} />
        <TechName>{stack.name}</TechName>
      </Tech>
    ))}
  </Technologies>
</ScrollWrapper>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
