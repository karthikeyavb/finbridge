import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import { FaGlobeAmericas } from 'react-icons/fa';

const Header = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="header-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-content">
        <div className="header-title">
          <FaGlobeAmericas className="logo-icon" />
          <span>FinBridge</span>
        </div>
        <motion.p
          className="header-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Empowering Global Communities with Financial Literacy
        </motion.p>
        <div className="header-buttons">
          {/* <select className="language-toggle">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="hi">हिन्दी</option>
          </select> */}
          <button className="learn-more-btn" onClick={scrollToContent}>Learn More</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;