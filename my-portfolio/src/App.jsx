import { Menu, ArrowRight, Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Facebook, Share2, School } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import mee from "src/images/me.jpg";
import view from "src/images/stock-tracker.png";
import manage from "src/images/task.png";
import book from "src/images/books.png";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import meal from "/src/images/foodie.png"
import company from "/src/images/qnb.png"
import off from "/src/images/shop.png"
import chat from "/src/images/wether app.png"
import chatt from "/src/images/chat-bot.png"
import Schoolweb from "/src/images/school.png"

// Particle background component
const Particles = () => {
const particles = Array(30).fill(0);


return (
  <div className="particles-container">
    {particles.map((_, i) => (
      <motion.div
        key={i}
        className="particle"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.7, 0],
          x: [0, Math.random() * 200 - 100],
          y: [0, Math.random() * 200 - 100],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: Math.random() * 5
        }}
      />
    ))}
  </div>
);
};

// Share component
const ShareProject = ({ url, title }) => {
const [isOpen, setIsOpen] = useState(false);
const [isCopied, setIsCopied] = useState(false);


const shareOptions = [
  {
    name: 'Twitter',
    icon: <Twitter size={16} />,
    url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`Check out this project: ${title}`)}`
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={16} />,
    url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  },
  {
    name: 'Facebook',
    icon: <Facebook size={16} />,
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  }
];

const copyToClipboard = () => {
  navigator.clipboard.writeText(url);
  setIsCopied(true);
  setTimeout(() => setIsCopied(false), 2000);
};

return (
  <div className="share-container">
    <motion.button
      className="share-button"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Share2 size={16} />
      <span>Share</span>
    </motion.button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="share-dropdown"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {shareOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="share-option"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {option.icon}
              <span>{option.name}</span>
            </motion.a>
          ))}
          <motion.button
            className="share-option"
            onClick={copyToClipboard}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>{isCopied ? 'Copied!' : 'Copy Link'}</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
};

// Project Card Component
const ProjectCard = ({ project }) => {
const [isHovered, setIsHovered] = useState(false);


return (
  <motion.div 
    className="project-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.03 }}
    onHoverStart={() => setIsHovered(true)}
    onHoverEnd={() => setIsHovered(false)}
  >
    <div className="project-image-container">
      <motion.img 
        src={project.image} 
        alt={project.title}
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="project-overlay"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </motion.div>
    </div>
    
    <div className="project-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className="project-actions">
        <motion.a 
          href={project.url} 
          target="_blank"
          rel="noopener noreferrer"
          className="view-button"
          whileHover={{ x: 5 }}
        >
          <span>View Project</span>
          <ArrowRight size={14} />
        </motion.a>
        
        <ShareProject 
          url={project.url} 
          title={project.title} 
        />
      </div>
    </div>
  </motion.div>
);
};

function App() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const controls = useAnimation();
const [ref, inView] = useInView({ threshold: 0.1 });


useEffect(() => {
  if (inView) {
    controls.start("visible");
  }
}, [controls, inView]);

// Projects data
const projects = [
  {
    title: "Stock Tracker",
    description: "A stock tracker that monitors real-time stock market data, helping users stay updated on price changes, trends, and market performance.",
    image: view,
    url: "https://crypto-stock-tracker.onrender.com",
    tech: ["React", "API", "Chart.js","css"]
  },
  {
    title: "Task Manager",
    description: "A task management website that helps users organize, track, and prioritize tasks efficiently with features like search and categorization.",
    image: manage,
    url: "https://task-app-oinc.onrender.com",
    tech: ["React", "Firebase", "Tailwind","bootstrap"]
  },
  {
    title: "Book Store",
    description: "An online bookstore with curated collections and easy browsing to help users find their next favorite read.",
    image: book,
    url: "https://books-store-lemon.vercel.app",
    tech: ["React", "Vite", "CSS","bootstrap"]
  },
  {
    title: "Big Foodie",
    description: "A lively spot serving bold flavors and big portions, Big Foodie satisfies every comfort food craving.",
    image: meal,
    url: "https://bigfoodie.onrender.com",
    tech: ["React", "Vite", "CSS","boostrap"]
  },
  {
    title: "Q..N.B company",
    description: "A reliable shipping company, QNB delivers fast, secure, and seamless logistics for businesses and individuals worldwide.",
    image: company,
    url: "https://qnb-6udy.onrender.com",
    tech: ["React", "Vite", "CSS","Render","Javascript","bootstrap"]
  },
  {
    title: "Shop Off",
    description: "A beauty haven, Shop Off offers top cosmetic brands at unbeatable prices, making glam accessible for everyone.",
    image: off,
    url: "https://shop-off.onrender.com",
    tech: ["React", "Vite", "CSS","render","Javascripit","bootstrap"]
  },
 {
  title: "WeatherPro",
  description: "WeatherPro is a sleek, real-time weather application that delivers accurate forecasts with an intuitive interface. Get instant updates on temperature, precipitation, wind, and severe weather alerts for any location.",
  image: chat,
  url: "https://my-wether-app-qvjd.onrender.com",
  tech: ["React", "CSS", "OpenWeather API", "Vite", "JavaScript", "Geolocation API"]
},
  {
    title: "LexiAi",
    description: "LexiAI is an intelligent chatbot that delivers quick, thoughtful, and human-like responses to simplify your digital interactions.",
    image: chatt,
    url: "https://chat-bot-ldvh.onrender.com",
    tech: ["React", "Vite", "CSS","render","Javascripit","Api","Typescript","bootstrap"]
  },
  {
    title: "Dehills international academy",
    description: "Where academic excellence meets character development.A nurturing environment that inspires curiosity and confidence.Preparing visionary leaders through innovative education.",
    image: Schoolweb,
    url: "https://school-3ki2.onrender.com",
    tech: ["Html", "CSS","render","Javascripit",]
  },
];
document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.className = 'matrix-rain';
  document.body.appendChild(container);
  
  // Common coding variables and symbols
  const chars = ['x', 'y', 'z', 'i', 'j', 'k', 'n', 'count', 'total', 'sum', 
                'const', 'let', 'var', 'function', '=>', '{}', '[]', '()', 
                'true', 'false', 'null', 'undefined', 'if', 'else', 'for', 
                'while', 'return', '0', '1', '$', '_', '=>', '...'];
  
  // Create columns of falling characters
  for (let i = 0; i < 20; i++) {
    const col = document.createElement('div');
    col.className = 'matrix-column';
    col.style.animationDelay = `${Math.random() * 5}s`;
    
    // Create 30 characters per column
    for (let j = 0; j < 30; j++) {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.animationDuration = `${5 + Math.random() * 15}s`;
      char.style.animationDelay = `${Math.random() * 5}s`;
      col.appendChild(char);
    }
    
    container.appendChild(col);
  }
});
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      type: "spring", 
      stiffness: 100 
    }
  }
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
};

const tapEffect = {
  scale: 0.95
};

const floatingAnimation = {
  y: [0, -15],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const rainContainer = document.createElement('div');
  rainContainer.className = 'rain';
  document.body.appendChild(rainContainer);
  
  function createDrop() {
    const drop = document.createElement('div');
    drop.className = 'drop';
    
    // Random positioning
    const leftPos = Math.random() * 100;
    drop.style.left = `${leftPos}vw`;
    drop.style.top = `${Math.random() * -100}px`;
    
    // Random size
    drop.style.width = `${0.5 + Math.random() * 1.5}px`;
    drop.style.height = `${20 + Math.random() * 30}px`;
    
    // Random opacity
    drop.style.opacity = 0.2 + Math.random() * 0.5;
    
    // Random animation duration
    const duration = 0.5 + Math.random() * 1.5;
    drop.style.animationDuration = `${duration}s`;
    
    // Create splash when animation ends
    drop.addEventListener('animationend', function() {
      const splash = document.createElement('div');
      splash.className = 'splash';
      splash.style.left = `${leftPos}vw`;
      splash.style.bottom = '0';
      rainContainer.appendChild(splash);
      
      // Remove splash after animation
      setTimeout(() => splash.remove(), 500);
      
      // Recreate drop for continuous rain
      this.remove();
      createDrop();
    });
    
    rainContainer.appendChild(drop);
  }
  
  // Create initial raindrops
  for (let i = 0; i < 50; i++) {
    createDrop();
  }
});


const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const textGlow = {
  hidden: { textShadow: "0 0 0px rgba(0, 123, 255, 0)" },
  visible: { 
    textShadow: [
      "0 0 0px rgba(0, 123, 255, 0)",
      "0 0 10px rgba(0, 123, 255, 0.8)",
      "0 0 0px rgba(0, 123, 255, 0)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity
    }
  }
};

return (
  <div className="portfolio-container">
    {/* Animated background particles */}
    <Particles />

    {/* Header with advanced animations */}
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container">
        <div className="row align-items-center">
          <motion.div 
            className="col-6 col-md-3 col-lg-4 mt-3 header-section"
            whileHover={hoverEffect}
            whileTap={tapEffect}
          >
            <motion.h2 
              className="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={textGlow}
            >
              Emmanuel
            </motion.h2>
          </motion.div>

          <motion.div
            className="col-md-5 mt-4 d-none d-md-block"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.ul className="nav-list">
              {["ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: "#007bff",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={tapEffect}
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="col-md-3 btn text-end d-none d-md-block"
            whileHover={hoverEffect}
            whileTap={tapEffect}
          >
            <motion.button
              animate={pulseAnimation}
            >
              Hire me
            </motion.button>
          </motion.div>

          <motion.div 
            className="col-6 text-end d-md-none"
            whileHover={hoverEffect}
            whileTap={tapEffect}
          >
            <button className="btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu size={28} style={{color:'white'}}/>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.header>

    {/* Mobile Menu with AnimatePresence */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-menu mt-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="nav-list">
            {["ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Hero Section with floating animation */}
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.div 
          className="row"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="col-12 col-lg-4 details" 
            id='about'
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <motion.h6
              animate={textGlow}
            >
              I am
            </motion.h6>
            <motion.h3
              animate={floatingAnimation}
            >
              A FRONTEND DEVELOPER WITH DIFFERENT SKILLS.
            </motion.h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>

    {/* About Section with image parallax effect */}
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      <div className="container">
        <div className="row">
          <motion.div 
            className="col-12 col-lg-6"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8 }
              }
            }}
          >
            <motion.div 
              className="image-boder"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.img 
                id='my-image' 
                src={mee} 
                alt=""
                animate={floatingAnimation}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="col-12 col-lg-6 about-me"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, delay: 0.3 }
              }
            }}
          >
            <motion.h2 
              variants={textGlow}
            >
              ABOUT ME
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              "I'm a passionate web developer with a keen eye for design and a love for crafting seamless digital experiences. I specialize in building responsive, user-friendly websites using modern technologies. Whether it's bringing creative ideas to life or solving complex problems, I thrive on turning concepts into clean, functional code. I'm always eager to learn new tools and techniques to stay ahead in the ever-evolving tech landscape. Let's build something amazing together!"
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Projects Section with Grid Layout */}
    <motion.section 
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div 
          className="section-header"
          animate={textGlow}
        >
          <h2>My Projects</h2>
          <p>Here are some of my recent works</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.section>

    {/* Services Section with card animations */}
    <motion.section 
      className="container text-center my-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2
        className="mb-4 serve"
        variants={textGlow}
      >
        Services
      </motion.h2>

      <div className="row g-4">
        {[
          {
            title: "Video Editing",
            text: "Transform raw footage into stunning visual stories with expert video editing techniques.",
          },
          {
            title: "Desktop App Development",
            text: "Create powerful desktop applications with seamless functionality and sleek designs.",
          },
          {
            title: "Programming Languages",
            text: "Master coding with expertise in various programming languages like HTML, CSS, JavaScript, and React.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="col-md-6 col-lg-4"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(0, 140, 255, 0.8)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="card p-3"
              animate={floatingAnimation}
            >
              <h5>{service.title}</h5>
              <p>{service.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Experience Section with tech icons */}
    <motion.section 
      className="container text-center my-5" 
      id='skills'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 
        className="mb-4 exp"
        variants={textGlow}
      >
        Experience
      </motion.h2>

      <motion.div 
        className="row justify-content-center"
        variants={staggerContainer}
      >
        {/* React */}
        <motion.div 
          className="col-6 col-md-3 mb-4" 
          variants={cardVariants}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="card p-3"
            animate={floatingAnimation}
          >
            <i className="fa-brands fa-react fa-3x mb-2" style={{ color: '#61DAFB' }}></i>
            <h5>React</h5>
          </motion.div>
        </motion.div>

        {/* HTML5 */}
        <motion.div 
          className="col-6 col-md-3 mb-4" 
          variants={cardVariants}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="card p-3"
            animate={floatingAnimation}
          >
            <i className="fa-brands fa-html5 fa-3x mb-2" style={{ color: '#E34F26' }}></i>
            <h5>HTML5</h5>
          </motion.div>
        </motion.div>

        {/* CSS3 */}
        <motion.div 
          className="col-6 col-md-3 mb-4" 
          variants={cardVariants}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="card p-3"
            animate={floatingAnimation}
          >
            <i className="fa-brands fa-css3-alt fa-3x mb-2" style={{ color: '#1572B6' }}></i>
            <h5>CSS3</h5>
          </motion.div>
        </motion.div>

        {/* JavaScript */}
        <motion.div 
          className="col-6 col-md-3 mb-4" 
          variants={cardVariants}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="card p-3"
            animate={floatingAnimation}
          >
            <i className="fa-brands fa-js fa-3x mb-2" style={{ color: '#F7DF1E' }}></i>
            <h5>JavaScript</h5>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>

    {/* Additional Skills Section */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container">
        <motion.div 
          className="row"
          variants={staggerContainer}
        >
          {/* Vite */}
          <motion.div 
            className="col-6 col-md-3 mb-4 text-center" 
            variants={cardVariants}
            whileHover={{ scale: 1.1 }}
            style={{height:'170px'}}
          >
            <motion.div 
              className="card p-3"
              animate={floatingAnimation}
            >
              <img id='vit' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" style={{height:'70px'}}/>
              <h5>Vite</h5>
            </motion.div>
          </motion.div>

          {/* GitHub */}
          <motion.div 
            className="col-6 col-md-3 mb-4 text-center" 
            variants={cardVariants}
            whileHover={{ scale: 1.1 }}
            style={{height:'170px'}}
          >
            <motion.div 
              className="card p-3"
              animate={floatingAnimation}
            >
              <img id='git' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="GitHub" style={{height:'70px'}}/>
              <h5>GitHub</h5>
            </motion.div>
          </motion.div>

          {/* Netlify */}
          <motion.div 
            className="col-6 col-md-3 mb-4 text-center" 
            variants={cardVariants}
            whileHover={{ scale: 1.1 }}
            style={{height:'170px'}}
          >
            <motion.div 
              className="card p-3"
              animate={floatingAnimation}
            >
              <img id='net' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg" alt="Netlify" style={{height:'70px'}}/>
              <h5>Netlify</h5>
            </motion.div>
          </motion.div>

          {/* Firebase */}
          <motion.div 
            className="col-6 col-md-3 mb-4 text-center" 
            variants={cardVariants}
            whileHover={{ scale: 1.1 }}
            style={{height:'170px'}}
          >
            <motion.div 
              className="card p-3"
              animate={floatingAnimation}
            >
              <img id='fire' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" style={{height:'70px'}}/>
              <h5>Firebase</h5>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>

    {/* Contact Section with form animations */}
    <motion.section 
      className="container py-5 mt-5" 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-center mb-4"
        animate={textGlow}
      >
        Contact Me
      </motion.h2>
      <div className="row justify-content-center">
        {/* Contact Info */}
        <motion.div 
          className="col-md-5 mb-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="cardd shadow-lg p-4"
            whileHover={{ scale: 1.02 }}
          >
            <h4>Get in Touch</h4>
            <p className="text">Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="d-flex align-items-center mb-3">
              <Mail className="me-2" /> <span>emmanuelazubuogu24@gmail.com</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Phone className="me-2" /> <span>+234-9134857341 or +234-8105823784</span>
            </div>
            <div className="d-flex align-items-center">
              <MapPin className="me-2" /> <span>Aba ariria, Nigeria</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          className="col-md-7"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="cardd shadow-lg p-4"
            whileHover={{ scale: 1.02 }}
          >
            <h4>Send Me a Message</h4>
            <form>
              <motion.div 
                className="mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your Name" required />
              </motion.div>
              <motion.div 
                className="mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Your Email" required />
              </motion.div>
              <motion.div 
                className="mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="4" className="form-control" placeholder="Your Message" required></textarea>
              </motion.div>
              <motion.button 
                type="submit" 
                className="btn btn-primary w-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>

    {/* Footer with wave animation */}
    <motion.footer 
      className="bg-dark text-white py-4 mt-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container text-center">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Contact Info */}
          <motion.div 
            className="text mb-4 mb-md-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h5>Contact Me</h5>
            <div className="d-flex flex-column gap-2 align-items-center align-items-md-start">
              <div className="d-flex align-items-center gap-2">
                <Mail size={16} /> <span>emmanuelazubuogu24@gmail.com</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={16} /> <span>+234-9134857341 or +234-8105823784</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <MapPin size={16} /> <span>Aba ariria, Nigeria</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h5>Follow Me</h5>
            <div className="d-flex gap-3 justify-content-center">
              <motion.a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
                whileHover={{ scale: 1.2, color: "#007bff" }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://x.com/Emmanuelwizspa?t=EV7-7mtxg9-oKI6QlYNFyg&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
                whileHover={{ scale: 1.2, color: "#007bff" }}
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/azubuogu-emmanuel-639491357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
                whileHover={{ scale: 1.2, color: "#007bff" }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/emmanuel_wizspark?igsh=MTR6dDIwNHEwODRkMA==&utm_source=ig_contact_invite" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
                whileHover={{ scale: 1.2, color: "#007bff" }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61574836145600" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
                whileHover={{ scale: 1.2, color: "#007bff" }}
              >
                <Facebook size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.hr 
          className="border-light"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.p 
          className="mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} EmmanuelAzubuogu. All Rights Reserved.
        </motion.p>
      </div>
    </motion.footer>
  </div>
);
}

export default App;