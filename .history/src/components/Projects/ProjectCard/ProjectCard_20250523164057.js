import React from "react";
import { motion } from "framer-motion"; // ✅ Correct
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
import "./Project.css";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          {/* <div className={`cardAnimation${index}`}> */}
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer" >
                <motion.span
                  className="btn btn--outline cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo ➜
                </motion.span>
              </a>
            </BtnGroup>
          </CardRight>
          {/* </div> */}
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
