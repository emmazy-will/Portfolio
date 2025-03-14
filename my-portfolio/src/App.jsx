import { Menu } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import me from "./images/king.jpg"
import view from "./images/row.png"
import manage from "./images/task.png"
import { ArrowRight } from 'lucide-react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } },
  };
  const fadeInRight = {
    hidden: { 
      opacity: 0, 
      x: 50 // Starts 50px to the right
    },
    visible: { 
      opacity: 1, 
      x: 0, // Moves to its original position
      transition: { 
        duration: 0.6, 
        delay: 5 
      } 
    },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 }, // Starts from right side
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6, 
        delay: 6 // Adjust the delay if needed
      } 
    },
  };
  const fadeInDown = {
    hidden: { opacity: 0, y: -50 }, // Starts from top
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: 1 // Adjust delay if needed
      } 
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each card animation
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Cards start lower
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay:4 },
    },
  };
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.9, ease: "easeOut" },
    },
  };
  
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  
  
  
  
  
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  
  return (
    <div>
     <div className="container">
      <div className="row align-items-center">
        {/* Logo Section */}
        <div className="col-6 col-md-3 col-lg-4 mt-3 header-section">
          <h2 className="logo">Emmanuel</h2>
        </div>

        <motion.div
          className="col-md-5 mt-4 d-none d-md-block"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.ul className="nav-list">
            {["ABOUT", "SKILLS", "PROJECT", "CONTACT"].map((item, index) => (
              <motion.li
                key={index}
                variants={navItemVariants}
                whileHover={{
                  scale: 1.1,
                  color: "#007bff",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Desktop Hire Me Button */}
        <div className="col-md-3  btn text-end d-none d-md-block">
          <button>Hire me</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="col-6 text-end d-md-none">
          <button className="btn" onClick={toggleMobileMenu}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div  className="mobile-menu mt-2">
          <ul className="nav-list">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#project">PROJECT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </motion.div>
      )}
    </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 details" id='about'>
              <h6>I am</h6>
              <h3>A FRONTEND DEVELOPER WITH DIFFERENT SKILLS.</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="image-boder">
                <img id='my-image' src={me} alt="" />
              </div>
            </div>
            <motion.div   variants={staggerContainer} 
              initial="hidden" 
              animate="visible" className="col-12 col-lg-6 about-me">
              <motion.h2 variants={fadeInUp}>ABOUT ME</motion.h2>
              <motion.p variants={fadeInUp}>"I’m a passionate web developer with a keen eye for design and a love for crafting seamless digital experiences. I specialize in building responsive, user-friendly websites using modern technologies. Whether it’s bringing creative ideas to life or solving complex problems, I thrive on turning concepts into clean, functional code. I’m always eager to learn new tools and techniques to stay ahead in the ever-evolving tech landscape. Let’s build something amazing together!"</motion.p>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="my-project">
          <h4>My Projects</h4>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <motion.div 
              variants={fadeInDown} 
              initial="hidden" 
              animate="visible" 
              className="col-12 col-lg-6"id='project'
            >
              <div className="mt-5" id='card-one'>
                <h6>Project-1</h6>
                <p>"A stock tracker is a tool that monitors real-time stock market data, helping users stay updated on price changes, trends, and market performance. It allows you to track specific stocks, view historical data, and analyze key metrics. With intuitive charts and alerts, it makes following the market simple and accessible. Whether you’re an investor or just curious, a stock tracker keeps you informed at a glance."</p>
                <a href="https://track-dashboard-t7iy.onrender.com/" className="text-primary d-flex align-items-center">
                  <span className="me-2">View More</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
              <motion.div 
              variants={fadeInRight} 
              initial="hidden" 
              animate="visible" 
              className="one-pr"
            >
              <img id='pro-one' src={view} alt="" />
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
          <motion.div 
            variants={fadeInLeft} 
            initial="hidden" 
            animate="visible" 
            className="col-12 col-lg-6 order-2 order-md-1 text-end"
          >
            <div className="one-pro">
              <img id='pro-two' src={manage} alt="" />
            </div>
          </motion.div>
          <div className="col-12 col-lg-6 order-1 order-md-2">
              <div className="card-two mt-5">
                <motion.h6 
                  variants={fadeInUp} 
                  initial="hidden" 
                  animate="visible"
                >
                  Project-2
                </motion.h6>
                <motion.p 
                  variants={fadeInUp} 
                  initial="hidden" 
                  animate="visible"
                >
                  A task management website helps users organize, track, and prioritize tasks efficiently. It offers features like task creation, search, and categorization, ensuring seamless productivity. The responsive design adapts to any device, enhancing accessibility and ease of use.
                </motion.p>
                <a href="https://task-app-oinc.onrender.com" className="text-primary d-flex align-items-center">
                  <span className="me-2">View More</span>
                  <ArrowRight size={12}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container text-center my-5">
      {/* Section Heading */}
      <motion.h2
        className="mb-4 serve"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Services
      </motion.h2>

      {/* Cards Container */}
      <div className="row g-4">
        {/* Service Cards */}
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(0, 140, 255, 0.8)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="card p-3">
              <h5>{service.title}</h5>
              <p>{service.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
      {/* Experience Section */}

      <section className="container text-center my-5" id='skills'>
        <motion.h2 
          className="mb-4 exp"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <motion.div 
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* React */}
          <motion.div className="col-6 col-md-3 mb-4" variants={cardVariants}>
            <div className="card p-3">
              <i className="fa-brands fa-react fa-3x mb-2" style={{ color: '#61DAFB' }}></i>
              <h5>React</h5>
            </div>
          </motion.div>

          {/* HTML5 */}
          <motion.div className="col-6 col-md-3 mb-4" variants={cardVariants}>
            <div className="card p-3">
              <i className="fa-brands fa-html5 fa-3x mb-2" style={{ color: '#E34F26' }}></i>
              <h5>HTML5</h5>
            </div>
          </motion.div>

          {/* CSS3 */}
          <motion.div className="col-6 col-md-3 mb-4" variants={cardVariants}>
            <div className="card p-3">
              <i className="fa-brands fa-css3-alt fa-3x mb-2" style={{ color: '#1572B6' }}></i>
              <h5>CSS3</h5>
            </div>
          </motion.div>

          {/* JavaScript */}
          <motion.div className="col-6 col-md-3 mb-4" variants={cardVariants}>
            <div className="card p-3">
              <i className="fa-brands fa-js fa-3x mb-2" style={{ color: '#F7DF1E' }}></i>
              <h5>JavaScript</h5>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section>
        <div className="container">
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Vite */}
            <motion.div className="col-6 col-md-3 mb-4 text-center" variants={cardVariants}>
              <div className="card p-3">
                <img id='vit' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                <h5>Vite</h5>
              </div>
            </motion.div>

            {/* GitHub */}
            <motion.div className="col-6 col-md-3 mb-4 text-center" variants={cardVariants}>
              <div className="card p-3">
                <img id='git' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
                <h5>GitHub</h5>
              </div>
            </motion.div>

            {/* Netlify */}
            <motion.div className="col-6 col-md-3 mb-4 text-center" variants={cardVariants}>
              <div className="card p-3">
                <img id='net' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg" />
                <h5>Netlify</h5>
              </div>
            </motion.div>

            {/* Firebase */}
            <motion.div className="col-6 col-md-3 mb-4 text-center" variants={cardVariants}>
              <div className="card p-3">
                <img id='fire' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" />
                <h5>Firebase</h5>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
      <section className="container py-5 mt-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        {/* Contact Info */}
        <div className="col-md-5 mb-4">
          <div className="cardd shadow-lg p-4">
            <h4>Get in Touch</h4>
            <p className="text">Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="d-flex align-items-center mb-3">
              <Mail className="me-2" /> <span>youremail@example.com</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Phone className="me-2" /> <span>+123 456 7890</span>
            </div>
            <div className="d-flex align-items-center">
              <MapPin className="me-2" /> <span>Your City, Country</span>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="col-md-7">
          <div className="cardd shadow-lg p-4">
            <h4>Send Me a Message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="4" className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            {/* Contact Info */}
            <div className="text mb-4 mb-md-0">
              <h5>Contact Me</h5>
              <div className="d-flex flex-column gap-2 align-items-center align-items-md-start">
                <div className="d-flex align-items-center gap-2">
                  <Mail size={16} /> <span>youremail@example.com</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Phone size={16} /> <span>+123 456 7890</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <MapPin size={16} /> <span>Your City, Country</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5>Follow Me</h5>
              <div className="d-flex gap-3 justify-content-center">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <hr className="border-light" />
          <p className="mb-0">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
