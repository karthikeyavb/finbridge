import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, desc }) => {
  return (
    <motion.div
    className="card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
  );
};

export default Card;
