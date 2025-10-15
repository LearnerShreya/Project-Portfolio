'use client';

import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <div className="card-front">
        <motion.div
          className="image-container"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={project.image} alt={project.title} className="project-img" />
        </motion.div>
        <h3>{project.title}</h3>
        <motion.a 
          href="#" 
          className="learn-more-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </div>
      <div className="card-back">
        <p>{project.description}</p>
      </div>
    </motion.div>
  );
}
