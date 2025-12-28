import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, MapPin, Zap } from "lucide-react";
import navData from "./data/navigation.json";
import BackgroundEffect from "./components/BackgroundEffect";
import ProgressCircle from "./components/ProgressCircle";
import NavigationCard from "./components/NavigationCard";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [started, setStarted] = useState(false);

  const handleComplete = () => {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#00f2ff", "#7000ff", "#ffffff"],
    });
  };

  return (
    <div style={styles.container}>
      <BackgroundEffect />
      
      <AnimatePresence mode="wait">
        {!started ? (
          /* --- WELCOME / INITIALIZATION SCREEN --- */
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-card"
            style={styles.welcomeCard}
          >
            <div style={styles.statusBadge}>
              <Zap size={10} fill="#00f2ff" /> SYSTEMS_ACTIVE
            </div>
            
            <h1 style={styles.title}>
              CAMPUS<br />
              <span className="neon-text" style={styles.neonTitle}>QUEST</span>
            </h1>
            
            <p style={styles.subtitle}>TACTICAL NAVIGATION INTERFACE</p>

            <div style={styles.infoBox}>
              <div style={styles.infoLine}>
                <Timer size={16} color="#00f2ff" />
                <div>
                  <span style={styles.infoLabel}>EST_TIME</span>
                  <div style={styles.infoValue}>{navData.estTime}</div>
                </div>
              </div>
              <div style={styles.infoLine}>
                <MapPin size={16} color="#00f2ff" />
                <div>
                  <span style={styles.infoLabel}>DESTINATION</span>
                  <div style={styles.infoValue}>{navData.destination}</div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={styles.startBtn}
              onClick={() => setStarted(true)}
            >
              INITIALIZE HUD
            </motion.button>
          </motion.div>
        ) : (
          /* --- ACTIVE NAVIGATION HUD --- */
          <motion.div
            key="nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={styles.navInterface}
          >
            <header style={styles.topNav}>
              <ProgressCircle 
                current={currentStep + 1} 
                total={navData.steps.length} 
              />
              <div style={styles.routeInfo}>
                <p style={styles.routeDest}>TRACKING_TARGET</p>
                <h3 style={styles.routeMain}>{navData.destination}</h3>
              </div>
            </header>

            <NavigationCard
              steps={navData.steps}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              onComplete={handleComplete}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "450px",
    margin: "0 auto",
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Keeps content centered vertically on entry
    position: "relative",
  },
  welcomeCard: {
    padding: "50px 30px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  statusBadge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.6rem",
    color: "#00f2ff",
    border: "1px solid rgba(0, 242, 255, 0.3)",
    padding: "5px 12px",
    borderRadius: "20px",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  title: {
    fontFamily: "'Syncopate', sans-serif",
    fontSize: "2rem",
    margin: 0,
    lineHeight: "1.1",
    letterSpacing: "-1px",
  },
  neonTitle: {
    color: "#00f2ff",
    fontSize: "2.4rem",
  },
  subtitle: {
    fontSize: "0.65rem",
    letterSpacing: "4px",
    color: "rgba(255,255,255,0.4)",
    margin: "10px 0 0 0",
  },
  infoBox: {
    width: "100%",
    margin: "35px 0",
    textAlign: "left",
    background: "rgba(255,255,255,0.03)",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  infoLine: {
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
  },
  infoLabel: {
    fontSize: "0.55rem",
    color: "rgba(255,255,255,0.4)",
    display: "block",
    letterSpacing: "1px",
  },
  infoValue: {
    fontSize: "0.9rem",
    color: "#fff",
    fontWeight: "600",
    marginTop: "2px",
  },
  startBtn: {
    width: "100%",
    padding: "22px",
    borderRadius: "15px",
    border: "none",
    background: "linear-gradient(135deg, #00f2ff 0%, #0072ff 100%)",
    color: "#000",
    fontWeight: "900",
    cursor: "pointer",
    fontFamily: "'Syncopate', sans-serif",
    fontSize: "0.8rem",
    boxShadow: "0 10px 20px rgba(0, 242, 255, 0.2)",
  },
  /* Navigation Layout */
  navInterface: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    width: "100%",
    marginTop: "20px",
  },
  topNav: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "10px 5px",
  },
  routeInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  routeDest: {
    fontSize: "0.6rem",
    letterSpacing: "2px",
    color: "rgba(0, 242, 255, 0.7)",
    margin: 0,
    textTransform: "uppercase",
  },
  routeMain: {
    fontSize: "1.1rem",
    margin: "2px 0 0 0",
    fontWeight: "700",
    fontFamily: "'Inter', sans-serif",
  },
};

export default App;