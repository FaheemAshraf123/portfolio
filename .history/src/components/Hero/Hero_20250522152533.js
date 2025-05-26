import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Faheem Ashraf</h1>
            <h5>Frontend Developer</h5>
            <p>
              👨‍💻 I build modern, responsive, and user-focused web interfaces
              with clean code and creative design. With a strong foundation in
              HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue,
              I turn ideas into seamless digital experiences. I'm passionate
              about performance, accessibility, and creating intuitive UIs that
              work across all devices. <br></br>
              Whether it's building SPAs, optimizing UX, or collaborating with
              teams to bring designs to life, I strive to create efficient and
              maintainable code using best practices. My portfolio showcases
              real-world projects, challenges, and creative solutions.<br></br>
              Let’s build something great together.{" "}
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://i.ibb.co/k1xdY1f/Whats-App-Image-2023-09-26-at-07-11-35-removebg-preview.png"
              alt="man_png"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
