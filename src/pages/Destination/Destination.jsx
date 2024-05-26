import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../../data.json';
import moonImage from '../../assets/destination/image-moon.webp';
import marsImage from '../../assets/destination/image-mars.webp';
import europaImage from '../../assets/destination/image-europa.webp';
import titanImage from '../../assets/destination/image-titan.webp';

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(data.destinations[0]);

  let selectedImage;
  switch (selectedDestination.name) {
    case 'Moon':
      selectedImage = moonImage;
      break;
    case 'Mars':
      selectedImage = marsImage;
      break;
    case 'Europa':
      selectedImage = europaImage;
      break;
    case 'Titan':
      selectedImage = titanImage;
      break;
    default:
      selectedImage = moonImage; // Fallback image
  }

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <div style={styles.leftContainer}>
          <div style={styles.headerContainer}>
            <h2 style={styles.header}>
              <span style={styles.headerSpan}>01</span> Pick your destination
            </h2>
          </div>
          <div style={styles.imageContainer}>
            <AnimatePresence mode='wait'>
              <motion.img
                style={styles.image}
                src={selectedImage}
                alt='planet image'
                key={selectedDestination ? selectedDestination.name : 'empty'}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 0, opacity: 0.1 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div style={styles.rightContainer}>
          <nav>
            <ul style={styles.navList}>
              {data.destinations.map((destination) => (
                <li
                  key={destination.name}
                  style={destination === selectedDestination ? { ...styles.navItem, ...styles.navItemActive } : styles.navItem}
                  onClick={() => setSelectedDestination(destination)}
                >
                  {destination.name}
                  {destination === selectedDestination && (
                    <motion.div style={styles.underline} layoutId='underline' />
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div style={styles.detailsContainer}>
            <div style={styles.textContainer}>
              <AnimatePresence mode='wait'>
                <motion.h2
                  style={styles.title}
                  key={selectedDestination ? selectedDestination.name : 'empty'}
                  initial={{ x: 0, opacity: 0.3 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 0, opacity: 0.6 }}
                  transition={{ duration: 0.1 }}
                >
                  {selectedDestination ? selectedDestination.name : null}
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.p
                  style={styles.description}
                  key={selectedDestination ? selectedDestination.name : 'empty'}
                  initial={{ x: 0, opacity: 0.3 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 0, opacity: 0.6 }}
                  transition={{ duration: 0.1 }}
                >
                  {selectedDestination.description}
                </motion.p>
              </AnimatePresence>
            </div>
            <div style={styles.statsContainer}>
              <AnimatePresence mode='wait'>
                <motion.div
                  style={styles.statItem}
                  key={selectedDestination ? selectedDestination.name : 'empty'}
                  initial={{ y: 0, opacity: 0.1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ y: 0, opacity: 0.1 }}
                  transition={{ duration: 0.1 }}
                >
                  <span style={styles.statLabel}>Avg. Distance</span>
                  <p style={styles.statValue}>{selectedDestination.distance}</p>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.div
                  style={styles.statItem}
                  key={selectedDestination ? selectedDestination.name : 'empty'}
                  initial={{ y: 0, opacity: 0.1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ y: 0, opacity: 0.1 }}
                  transition={{ duration: 0.1 }}
                >
                  <span style={styles.statLabel}>Est. travel time</span>
                  <p style={styles.statValue}>{selectedDestination.travel}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const styles = {
  main: {
    padding: '20px',
    background: 'url("../assets/destination/bg-destination-mobile.jpg") no-repeat center center/cover',
    minHeight: '100vh',
    width: '100%'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px'
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '40px',
    marginTop: '20px'
  },
  headerContainer: {
    marginBottom: '14px',
  },
  header: {
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: '20px',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '2.7px',
  },
  headerSpan: {
    paddingRight: '18px',
    color: 'rgba(255, 255, 255, 0.25)',
    fontWeight: 'bold',
  },

  rightContainer: {
    marginTop: '60px',
    padding: "50px"
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0,
    gap: '20px',
  },
  navItem: {
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: '14px',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '2.7px',
    cursor: 'pointer',
    position: 'relative',
  },
  navItemActive: {
    fontWeight: 'bold',
  },
  underline: {
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    right: 0,
    height: '3px',
    background: 'white',
  },
  detailsContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  textContainer: {
    textAlign: 'center',
    color: 'white',
    padding: '20px'
  },
  title: {
    fontSize: '100px',
    letterSpacing: '20px',
    textTransform: 'uppercase'
  },
  description: {
    fontSize: '15px',
    color: '#d0d6f9',
    letterSpacing: '2px',
    lineHeight: '2',
    width: '100%',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '20px',
  },
  statItem: {
    textAlign: 'center',
  },
  statLabel: {
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: '14px',
    color: '#d0d6f9',
    textTransform: 'uppercase',
  },
  statValue: {
    fontFamily: '"Bellefair", serif',
    fontSize: '20px',
    color: 'white',
    textTransform: 'uppercase',
  },
};

export default Destination;
