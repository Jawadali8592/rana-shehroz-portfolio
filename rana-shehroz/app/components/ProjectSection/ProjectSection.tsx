"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "How to Use OCR for Efficient Document Conversion?",
    description: "Project 1 description",
    image: "/assests/project1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.socialmedianotes.com/how-to-use-ocr/",
    previewUrl: "https://www.socialmedianotes.com/how-to-use-ocr/",
  },
  {
    id: 2,
    title: "Las 5 mejores herramientas online para ayudar a los escritores españoles",
    description: "Project 2 description",
    image: "/assests/project2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://frasesdelavida.com/mejores-herramientas-online-para-ayudar-a-los-escritores-espanoles/",
    previewUrl: "https://frasesdelavida.com/mejores-herramientas-online-para-ayudar-a-los-escritores-espanoles/",
  },
  {
    id: 3,
    title: "Generadores de Videos con Inteligencia Artificial Gratuitos: Explorando Opciones y Limitaciones",
    description: "Project 3 description",
    image: "/assests/project3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://portalinnova.cl/generadores-de-videos-con-inteligencia-artificial-gratuitos-explorando-opciones-y-limitaciones/",
    previewUrl: "https://portalinnova.cl/generadores-de-videos-con-inteligencia-artificial-gratuitos-explorando-opciones-y-limitaciones/",
  },
  {
    id: 4,
    title: "Generador de Videos: Simplificando la Creación Audiovisual",
    description: "Project 4 description",
    image: "/assests/project4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://alexborras.com/generador-de-videos-simplificando-la-creacion-audiovisual/",
    previewUrl: "https://alexborras.com/generador-de-videos-simplificando-la-creacion-audiovisual/",
  },
  {
    id: 5,
    title: "De 300 pages à 3 paragraphes : résumer des livres comme un pro",
    description: "Authentication and CRUD operations",
    image: "/assests/project5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.litteratur.fr/de-300-pages-a-3-paragraphes-resumer-des-livres-comme-un-pro/",
    previewUrl: "https://www.litteratur.fr/de-300-pages-a-3-paragraphes-resumer-des-livres-comme-un-pro/",
  },
  {
    id: 6,
    title: "The Beginner’s Guide to Writing an Essay: Steps & Examples",
    description: "Project 5 description",
    image: "/assests/project6.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://englishinsane.com/beginners-guide-to-writing-an-essay-steps-examples/",
    previewUrl: "https://englishinsane.com/beginners-guide-to-writing-an-essay-steps-examples/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-6xl font-bold text-white mt-4 mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;