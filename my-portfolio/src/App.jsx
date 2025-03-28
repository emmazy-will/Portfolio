import { Menu, ArrowRight, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Update your imports to use the new aliases
import mee from "src/images/me.jpg";
import view from "src/images/row.png";
import manage from "src/images/task.png";
import book from "src/images/books.png";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
                {["ABOUT", "SKILLS", "PROJECT", "CONTACT"].map((item, index) => (
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
                <Menu size={28} />
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
              {["ABOUT", "SKILLS", "PROJECT", "CONTACT"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
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

      {/* Projects Section with 3D tilt effect */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="my-project"
          animate={textGlow}
        >
          <h4>My Projects</h4>
        </motion.div>
      </motion.section>

      {/* Project 1 with advanced animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row">
            <motion.div 
              className="col-12 col-lg-6"
              id='project'
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.4
                  }
                }
              }}
            >
              <motion.div 
                className="mt-5" 
                id='card-one'
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 123, 255, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.h6
                  animate={textGlow}
                >
                  Project-1
                </motion.h6>
                <motion.p>
                  "A stock tracker is a tool that monitors real-time stock market data, helping users stay updated on price changes, trends, and market performance. It allows you to track specific stocks, view historical data, and analyze key metrics. With intuitive charts and alerts, it makes following the market simple and accessible. Whether you're an investor or just curious, a stock tracker keeps you informed at a glance."
                </motion.p>
                <motion.a 
                  href="https://track-dashboard-t7iy.onrender.com/" 
                  className="text-primary d-flex align-items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="me-2">View More</span>
                  <ArrowRight size={12} />
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="one-pr"
              variants={{
                hidden: { opacity: 0, x: 100, rotate: 15 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  rotate: 0,
                  transition: { 
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.4,
                    delay: 0.2
                  }
                }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img 
                id='pro-one' 
                src={view} 
                alt=""
                animate={floatingAnimation}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project 2 with different animation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row">
            <motion.div 
              className="col-12 col-lg-6 order-2 order-md-1 text-end"
              variants={{
                hidden: { opacity: 0, x: -100, rotate: -15 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  rotate: 0,
                  transition: { 
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.4,
                    delay: 0.2
                  }
                }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="one-pro">
                <motion.img 
                  id='pro-two' 
                  src={manage} 
                  alt=""
                  animate={floatingAnimation}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="col-12 col-lg-6 order-1 order-md-2"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.4
                  }
                }
              }}
            >
              <motion.div 
                className="card-two mt-5"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 123, 255, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.h6
                  animate={textGlow}
                >
                  Project-2
                </motion.h6>
                <motion.p>
                  A task management website helps users organize, track, and prioritize tasks efficiently. It offers features like task creation, search, and categorization, ensuring seamless productivity. The responsive design adapts to any device, enhancing accessibility and ease of use.
                </motion.p>
                <motion.a 
                  href="https://task-app-oinc.onrender.com" 
                  className="text-primary d-flex align-items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="me-2">View More</span>
                  <ArrowRight size={12}/>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Project 2 with different animation */}
        {/* Project 3 - Foodie Website */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={staggerContainer}
>
  <div className="container">
    <div className="row">
      {/* Text content */}
      <motion.div 
        className="col-12 col-lg-6 order-2 order-md-2"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }
          }
        }}
      >
        <motion.div 
          className="card-two mt-5"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px rgba(0, 123, 255, 0.2)"
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.h6 animate={textGlow}>
            Project-3
          </motion.h6>
          <motion.p>
          "Page Turner is your gateway to endless stories and knowledge treasures. 📖💎
          Browse curated collections, find your next favorite read, and get lost in wonderful worlds. 🌈📚
          Expand your horizons—one book at a time! ✨🧠"
          </motion.p>
          <motion.a 
            href="https://books-store-lemon.vercel.app" 
            className="text-primary d-flex align-items-center"
            whileHover={{ x: 5 }}
          >
            <span className="me-2">View More</span>
            <ArrowRight size={12}/>
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Image */}
      <motion.div 
        className="col-12 col-lg-6 order-3 order-md-3 text-end"
        variants={{
          hidden: { opacity: 0, x: 100, rotate: 15 },
          visible: { 
            opacity: 1, 
            x: 0, 
            rotate: 0,
            transition: { 
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
              delay: 0.2
            }
          }
        }}
        whileHover={{ scale: 1.05 }}
      >
       <div className="one-pro text-center"> {/* Added text-center for alignment */}
  <motion.img 
    id='pro-four'
    src={book}
    className="project-image" // Custom class
    alt="Foodie application screenshot"
    animate={floatingAnimation}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = "/placeholder-food.png"
    }}
  />
</div>
      </motion.div>
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
            >
              <motion.div 
                className="card p-3"
                animate={floatingAnimation}
              >
                <img id='vit' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                <h5>Vite</h5>
              </motion.div>
            </motion.div>

            {/* GitHub */}
            <motion.div 
              className="col-6 col-md-3 mb-4 text-center" 
              variants={cardVariants}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="card p-3"
                animate={floatingAnimation}
              >
                <img id='git' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
                <h5>GitHub</h5>
              </motion.div>
            </motion.div>

            {/* Netlify */}
            <motion.div 
              className="col-6 col-md-3 mb-4 text-center" 
              variants={cardVariants}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="card p-3"
                animate={floatingAnimation}
              >
                <img id='net' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg" />
                <h5>Netlify</h5>
              </motion.div>
            </motion.div>

            {/* Firebase */}
            <motion.div 
              className="col-6 col-md-3 mb-4 text-center" 
              variants={cardVariants}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="card p-3"
                animate={floatingAnimation}
              >
                <img id='fire' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" />
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
                <Mail className="me-2" /> <span>youremail@example.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Phone className="me-2" /> <span>+123 456 7890</span>
              </div>
              <div className="d-flex align-items-center">
                <MapPin className="me-2" /> <span>Your City, Country</span>
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
                  <Phone size={16} /> <span>=234-9134857341 or +234-8105823784</span>
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
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white"
                  whileHover={{ scale: 1.2, color: "#007bff" }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white"
                  whileHover={{ scale: 1.2, color: "#007bff" }}
                >
                  <Twitter size={24} />
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