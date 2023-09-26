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
            <h1>Hi, I'm Nnaji Benjamin</h1>
            <h5>Frontend Developer</h5>
            <p>
            👨‍💻 I specialize in turning design concepts into interactive web applications using a powerful stack of technologies.            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://i.ibb.co/Tqgyx7w/Whats-App-Image-2023-09-26-at-07-11-35-removebg-preview.png"
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
