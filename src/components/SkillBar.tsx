'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15,
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Skill Icon */}
      <motion.div
        className="skill-icon"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <i className={skill.icon}></i>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {skill.name}
      </motion.h3>
      
      <div className="skill-bar">
        <motion.div
          className="skill-level"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: `${skill.level}%`, opacity: 1 }}
          transition={{ 
            duration: 2.5, 
            delay: index * 0.1 + 0.5,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          data-percent={`${skill.level}%`}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 2.5 }}
            viewport={{ once: true }}
          >
            {skill.level}%
          </motion.span>
        </motion.div>
      </div>
      
      {/* Skill level indicator */}
      <motion.div
        className="skill-percentage"
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: '700',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
          opacity: 0,
          transform: 'scale(0.8)'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1 + 1,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
      >
        {skill.level}%
      </motion.div>
    </motion.div>
  );
}
