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
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
          <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ amount: 0.2 }} 
  >
        <Card key={index}>
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
        </Card>
        </motion.div>
      ))}
    </>
  );
}

export default ProjectCard;
