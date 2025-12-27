import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, Navigation, Info } from "lucide-react";
import VisualHUD from "./VisualHUD";

function NavigationCard({ steps, currentStep, setCurrentStep, onComplete }) {
  const isLast = currentStep === steps.length - 1;
  const stepData = steps[currentStep];

  return (
    <div className="glass-card" style={styles.card}>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <Navigation size={14} color="#00f2ff" />
          <span style={styles.stepTitle}>OBJECTIVE {currentStep + 1}</span>
        </div>
        <Info size={14} color="rgba(255,255,255,0.4)" />
      </div>

      <div style={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            style={{ width: "100%" }}
          >
            {/* Visual Guide Integration */}
            <VisualHUD imageUrl={stepData.image} stepType={stepData.type} />
            
            <h2 style={styles.instruction}>{stepData.text}</h2>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        style={{...styles.button, background: isLast ? "linear-gradient(90deg, #00f2ff, #0066ff)" : "rgba(255,255,255,0.05)"}}
        onClick={() => isLast ? onComplete() : setCurrentStep(currentStep + 1)}
      >
        <span style={styles.btnText}>{isLast ? "TERMINATE MISSION" : "CONFIRM LOCATION"}</span>
        {isLast ? <CheckCircle size={18} /> : <ChevronRight size={18} />}
      </motion.button>
    </div>
  );
}

const styles = {
  card: { padding: "20px", display: "flex", flexDirection: "column", gap: "15px" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  headerLeft: { display: "flex", alignItems: "center", gap: "8px" },
  stepTitle: { fontSize: "0.6rem", fontWeight: "bold", letterSpacing: "2px", color: "#00f2ff", fontFamily: "'Syncopate', sans-serif" },
  instruction: { fontSize: "1.3rem", fontWeight: "700", lineHeight: "1.4", margin: 0, color: "#fff", padding: "0 5px" },
  button: { 
    width: "100%", padding: "18px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.1)",
    color: "white", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",
    marginTop: "10px"
  },
  btnText: { fontWeight: "bold", letterSpacing: "1px", fontSize: "0.8rem", fontFamily: "'Syncopate', sans-serif" }
};

export default NavigationCard;