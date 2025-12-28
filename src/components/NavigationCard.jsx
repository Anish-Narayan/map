import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle, Navigation, Info, RotateCcw } from "lucide-react";
import VisualHUD from "./VisualHUD";

function NavigationCard({ steps, currentStep, setCurrentStep, onComplete, onReset }) {
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;
  const stepData = steps[currentStep];

  const handleRetrace = () => {
    if (isFirst) {
      onReset(); // Go back to Welcome Screen
    } else {
      setCurrentStep(currentStep - 1); // Go back one step
    }
  };

  return (
    <div className="glass-card" style={styles.card}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <Navigation size={14} color="#00f2ff" />
          <span style={styles.stepTitle}>OBJECTIVE {currentStep + 1}</span>
        </div>
        <div style={styles.headerRight}>
          <span style={styles.stepCount}>{currentStep + 1}/{steps.length}</span>
          <Info size={14} color="rgba(255,255,255,0.4)" />
        </div>
      </div>

      {/* Main Content Area */}
      <div style={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            style={{ width: "100%" }}
          >
            {/* Visual Guide Integration */}
            <VisualHUD imageUrl={stepData.image} stepType={stepData.type} />
            
            <h2 style={styles.instruction}>{stepData.text}</h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Action Footer */}
      <div style={styles.buttonGroup}>
        {/* Retrace Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          style={styles.retraceBtn}
          onClick={handleRetrace}
        >
          {isFirst ? <RotateCcw size={16} /> : <ChevronLeft size={16} />}
          <span style={styles.retraceText}>{isFirst ? "RESET" : "RETRACE"}</span>
        </motion.button>

        {/* Primary Action Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          style={{
            ...styles.button, 
            background: isLast 
              ? "linear-gradient(90deg, #00f2ff, #0066ff)" 
              : "rgba(0, 242, 255, 0.1)"
          }}
          onClick={() => isLast ? onComplete() : setCurrentStep(currentStep + 1)}
        >
          <span style={styles.btnText}>
            {isLast ? "TERMINATE MISSION" : "CONFIRM LOCATION"}
          </span>
          {isLast ? <CheckCircle size={18} /> : <ChevronRight size={18} />}
        </motion.button>
      </div>
    </div>
  );
}

const styles = {
  card: { 
    padding: "20px", 
    display: "flex", 
    flexDirection: "column", 
    gap: "15px",
    position: "relative",
    overflow: "hidden" 
  },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  headerLeft: { display: "flex", alignItems: "center", gap: "8px" },
  headerRight: { display: "flex", alignItems: "center", gap: "12px" },
  stepTitle: { fontSize: "0.6rem", fontWeight: "bold", letterSpacing: "2px", color: "#00f2ff", fontFamily: "'Syncopate', sans-serif" },
  stepCount: { fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Syncopate', sans-serif" },
  
  content: { minHeight: "320px", display: "flex", alignItems: "flex-start" },
  instruction: { fontSize: "1.2rem", fontWeight: "700", lineHeight: "1.4", margin: "20px 0 10px 0", color: "#fff", padding: "0 5px" },
  
  buttonGroup: { 
    display: "flex", 
    gap: "12px", 
    marginTop: "10px",
    width: "100%" 
  },
  button: { 
    flex: 2, // Takes more space than Retrace
    padding: "18px", 
    borderRadius: "14px", 
    border: "1px solid rgba(0, 242, 255, 0.3)",
    color: "white", 
    cursor: "pointer", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: "10px"
  },
  retraceBtn: {
    flex: 1, // Compact secondary button
    padding: "18px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.03)",
    color: "rgba(255,255,255,0.6)",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px"
  },
  btnText: { fontWeight: "bold", letterSpacing: "1px", fontSize: "0.75rem", fontFamily: "'Syncopate', sans-serif" },
  retraceText: { fontWeight: "bold", letterSpacing: "1px", fontSize: "0.65rem", fontFamily: "'Syncopate', sans-serif" }
};

export default NavigationCard;