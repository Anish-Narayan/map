import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Timer, MapPin } from "lucide-react";
import navData from "./data/navigation.json";
import BackgroundEffect from "./components/BackgroundEffect";
import ProgressCircle from "./components/ProgressCircle";
import NavigationCard from "./components/NavigationCard";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [started, setStarted] = useState(false);

  const handleComplete = () => {
    confetti({ particleCount: 200, spread: 80, origin: { y: 0.7 }, colors: ["#00f2ff", "#7000ff"] });
  };

  if (!started) {
    return (
      <div style={styles.container}>
        <BackgroundEffect />
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass-card" style={styles.welcomeCard}>
          <div style={styles.statusBadge}>SYSTEMS_ONLINE</div>
          <h1 style={styles.title}>CAMPUS<br/><span className="neon-text" style={{color: "#00f2ff"}}>QUEST</span></h1>
          <p style={styles.subtitle}>TACTICAL NAVIGATION INTERFACE</p>
          
          <div style={styles.infoBox}>
            <div style={styles.infoLine}><Timer size={14} color="#00f2ff"/> EST_TIME: {navData.estTime}</div>
            <div style={styles.infoLine}><MapPin size={14} color="#00f2ff"/> DEST: {navData.destination}</div>
          </div>

          <button style={styles.startBtn} onClick={() => setStarted(true)}>INITIALIZE HUD</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <BackgroundEffect />
      
      <div style={styles.topNav}>
        <ProgressCircle current={currentStep + 1} total={navData.steps.length} />
        <div style={styles.routeInfo}>
          <p style={styles.routeDest}>TRACKING_TARGET</p>
          <h3 style={styles.routeMain}>{navData.destination}</h3>
        </div>
      </div>

      <NavigationCard 
        steps={navData.steps} 
        currentStep={currentStep} 
        setCurrentStep={setCurrentStep}
        onComplete={handleComplete}
      />
    </div>
  );
}

const styles = {
  container: { maxWidth: "450px", margin: "0 auto", padding: "20px", minHeight: "100vh", display: "flex", flexDirection: "column", gap: "20px" },
  welcomeCard: { padding: "40px 25px", textAlign: "center" },
  statusBadge: { fontSize: "0.5rem", color: "#00f2ff", border: "1px solid #00f2ff", padding: "4px 10px", borderRadius: "20px", width: "fit-content", margin: "0 auto 20px" },
  title: { fontFamily: "'Syncopate', sans-serif", fontSize: "1.8rem", margin: 0 },
  subtitle: { fontSize: "0.6rem", letterSpacing: "3px", color: "rgba(255,255,255,0.5)", marginTop: "10px" },
  infoBox: { margin: "30px 0", textAlign: "left", background: "rgba(255,255,255,0.03)", padding: "15px", borderRadius: "12px" },
  infoLine: { display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#fff", marginBottom: "8px" },
  startBtn: { width: "100%", padding: "20px", borderRadius: "12px", border: "none", background: "#00f2ff", color: "#000", fontWeight: "900", cursor: "pointer", fontFamily: "'Syncopate', sans-serif" },
  topNav: { display: "flex", alignItems: "center", gap: "20px", marginTop: "10px" },
  routeInfo: { display: "flex", flexDirection: "column" },
  routeDest: { fontSize: "0.6rem", letterSpacing: "2px", color: "#00f2ff", margin: 0 },
  routeMain: { fontSize: "1rem", margin: 0, fontWeight: "700" }
};

export default App;