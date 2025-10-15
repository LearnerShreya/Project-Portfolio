'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'enabled') setIsDarkMode(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Text-to-ISL Translator",
      image: "/image1.png",
      description: "A prototype developed for Smart India Hackathon, translating text into Indian Sign Language (ISL) using Python and OpenCV. This real-time translation system helps bridge communication gaps for the deaf community, promoting inclusivity and accessibility in everyday interactions and education."
    },
    {
      id: 2,
      title: "Interactive Solar System",
      image: "/image2.png",
      description: "An interactive web project that lets users explore the solar system through animated planetary orbits. Built with HTML, CSS, and JavaScript, it features dynamic tooltips for learning about planets and moons, making astronomy fun and accessible for all ages."
    },
    {
      id: 3,
      title: "Health Index Dashboard",
      image: "/image3.png",
      description: "A health monitoring tool displaying a holistic view of physical, mental, emotional, and financial well-being. With real-time data visualization using D3.js, this project helps users track and manage their health metrics effectively for a balanced lifestyle."
    },
    {
      id: 4,
      title: "Portfolio Website",
      image: "/image4.png",
      description: "This responsive personal portfolio website highlights my skills, projects, and achievements with an engaging, user-friendly design. Featuring smooth scrolling and dynamic animations, it serves as a digital resume for potential employers and collaborators."
    },
    {
      id: 5,
      title: "AI Chatbot",
      image: "/image5.png",
      description: "Built using Python and NLP techniques, this AI-powered chatbot assists users in various domains like customer support and general inquiries. Deployed with Flask, it offers personalized responses and learns over time to enhance user experience."
    }
  ];

  const skills = [
    { name: "C", level: 85, icon: "fas fa-code" },
    { name: "Python", level: 85, icon: "fab fa-python" },
    { name: "R", level: 80, icon: "fas fa-chart-line" },
    { name: "C++", level: 80, icon: "fas fa-code" },
    { name: "Numpy", level: 80, icon: "fas fa-calculator" },
    { name: "Statistics", level: 80, icon: "fas fa-chart-bar" },
    { name: "MySQL", level: 75, icon: "fas fa-database" },
    { name: "Pandas", level: 75, icon: "fas fa-table" },
    { name: "Problem Solving", level: 70, icon: "fas fa-lightbulb" },
    { name: "Machine Learning", level: 70, icon: "fas fa-brain" },
    { name: "Matplotlib", level: 70, icon: "fas fa-chart-pie" },
    { name: "HTML", level: 65, icon: "fab fa-html5" },
    { name: "CSS", level: 65, icon: "fab fa-css3-alt" },
    { name: "Artificial Intelligence", level: 65, icon: "fas fa-robot" }
  ];

  const services = [
    {
      title: "Frontend Development",
      description: "Create visually appealing and responsive user interfaces using HTML and CSS, focusing on clean, semantic code to deliver seamless web experiences across all devices.",
      icon: "/image3.png"
    },
    {
      title: "Data Analysis",
      description: "Analyze and interpret complex datasets using tools like Python, SQL, and Power BI to extract meaningful insights, helping businesses make data-driven decisions.",
      icon: "/image4.png"
    },
    {
      title: "AI & ML Development",
      description: "Design and implement machine learning models and AI algorithms to address real-world challenges, providing innovative solutions for scalable and efficient systems.",
      icon: "/image5.png"
    }
  ];

  return (
    <div className="portfolio-container">
      <Navbar isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      <Hero />

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About Me</h2>
            <p>
              Hi, I&apos;m Shreya Singh, a passionate and driven 2nd-year B.Tech student specializing in Data Science. I enjoy transforming raw data into actionable insights and building practical solutions.
            </p>
            <p>
              My expertise includes Python, R, and libraries like Pandas, NumPy, and TensorFlow. I also have experience in data visualization tools such as Matplotlib, Seaborn, and Tableau, along with efficient data management using SQL.
            </p>
            <p>
              Recently, I have explored web development with HTML and CSS, which allows me to merge creativity with technical skills. I am always excited to solve challenges and innovate with data-driven strategies.
            </p>
            <p>
              Outside of academics, I enjoy working on real-world projects, exploring new technologies, and inspiring others in their data journey. Let&apos;s connect and create impactful solutions together!
            </p>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src="/pic shreya.png" alt="Shreya Singh" width={400} height={400} />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Take a look at some of my best works and innovative solutions!</p>
        </motion.div>
        <div className="project-gallery">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          MY SERVICES
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I offer expertise across various domains, focusing on creating seamless solutions.
        </motion.p>
        <div className="services-container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <Image src={service.icon} alt={`${service.title} Icon`} width={80} height={80} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#skills" className="learn-more">Learn More</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          If you&apos;d like to collaborate or have any questions, feel free to send me a message below!
        </motion.p>
        
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your message here" 
              required 
            ></textarea>
          </div>
          
          {submitStatus === 'success' && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}
            >
              ✅ Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: 'white',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}
            >
              ❌ Something went wrong. Please try again.
            </motion.div>
          )}
          
          <button 
            type="submit" 
            className="btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>
                <i className="fas fa-spinner fa-spin"></i> Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </motion.form>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Or connect with me on:</p>
          <a href="https://github.com/LearnerShreya" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/shreya-singh-561a591a5" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/shreya2singh25" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/shreya.singh.official.360" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:shreya.official.2.25@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <p>Connect with me on:</p>
          <a href="https://github.com/LearnerShreya" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/shreya-singh-561a591a5" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/shreya2singh25" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/shreya.singh.official.360" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:shreya.official.2.25@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>© 2024 Developed with ❤️ by Shreya Singh.</p>
      </footer>
    </div>
  );
}