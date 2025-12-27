import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";
import ProgressBar from "./ProgressBar";

function StepNavigator({ steps, currentStep, setCurrentStep, onComplete }) {
  const isLast = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLast) onComplete();
    else setCurrentStep(currentStep + 1);
  };

  return (
    <div style={styles.card}>
      <ProgressBar current={currentStep + 1} total={steps.length} />

      <div style={styles.contentArea}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <span style={styles.stepIndicator}>Step {currentStep + 1} of {steps.length}</span>
            <p style={styles.instruction}>{steps[currentStep]}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={styles.footer}>
        <button
          style={{ ...styles.backBtn, opacity: currentStep === 0 ? 0 : 1 }}
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          style={{ ...styles.nextBtn, backgroundColor: isLast ? "#28a745" : "#007bff" }}
          onClick={handleNext}
        >
          {isLast ? "I Have Arrived!" : "Next Step"}
          {isLast ? <CheckCircle size={20} style={{marginLeft: 8}} /> : <ChevronRight size={20} style={{marginLeft: 8}} />}
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column"
  },
  contentArea: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" },
  stepIndicator: { color: "#007bff", fontWeight: "700", fontSize: "0.8rem", textTransform: "uppercase" },
  instruction: { fontSize: "1.4rem", fontWeight: "600", color: "#1a1a1a", lineHeight: "1.4", marginTop: "12px" },
  footer: { display: "flex", gap: "15px", marginTop: "30px" },
  backBtn: { padding: "12px", borderRadius: "15px", border: "1px solid #eee", background: "#fff", cursor: "pointer" },
  nextBtn: { 
    flex: 1, 
    padding: "16px", 
    borderRadius: "15px", 
    border: "none", 
    color: "#fff", 
    fontSize: "1rem", 
    fontWeight: "700", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  }
};

export default StepNavigator;