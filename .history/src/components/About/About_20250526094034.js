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
👋 Hi, I'm Faheem Ashraf — a passionate Frontend Developer dedicated to crafting modern, responsive, and user-centric web experiences.

💡 I specialize in transforming creative design concepts into fully functional and interactive web applications using a robust stack of technologies. From sleek websites to complex web apps, I thrive on building solutions that are not just visually appealing, but also intuitive and high-performing.

🚀 My mission is to deliver digital experiences that go beyond expectations—clean, efficient code paired with thoughtful UI/UX design. I love taking on new challenges and continuously expanding my skillset to stay ahead in the ever-evolving world of frontend development.

📬 Whether you're looking for a standout website, a dynamic user interface, or just want to chat about frontend trends, feel free to connect with me on LinkedIn or drop me a message via Gmail. Let’s collaborate and create something extraordinary together! 👨‍💻✨


            {/* 👋 Hi, My name is <strong>Faheem Ashraf</strong>, a passionate
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
                href="https://www.linkedin.com/in/faheem-ashraf-8a30a1183/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </strong>{" "}
            to discuss your next project or just chat about all things frontend
            development. Let's build something extraordinary! 👨‍💻✨ */}
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
