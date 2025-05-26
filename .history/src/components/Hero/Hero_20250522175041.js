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
  👨‍💻 I craft responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and frameworks like React and Angular. 
  I focus on clean code, performance, and accessibility to deliver seamless digital experiences across all devices. Let's build something impactful together.
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
