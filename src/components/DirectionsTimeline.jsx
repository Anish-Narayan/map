import React from "react";
import { motion } from "framer-motion";

function DirectionsTimeline({ steps }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={styles.container}>
      <h3 style={styles.title}>Route Overview</h3>
      {steps.map((step, index) => (
        <div key={index} style={styles.stepRow}>
          <div style={styles.dotContainer}>
            <div style={styles.dot} />
            {index !== steps.length - 1 && <div style={styles.line} />}
          </div>
          <div style={styles.textContainer}>
            <p style={styles.stepText}>{step}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

const styles = {
  container: { background: "#fff", padding: "24px", borderRadius: "24px" },
  title: { fontSize: "1.1rem", marginBottom: "20px" },
  stepRow: { display: "flex", gap: "15px", minHeight: "60px" },
  dotContainer: { display: "flex", flexDirection: "column", alignItems: "center" },
  dot: { width: "12px", height: "12px", borderRadius: "50%", background: "#007bff", border: "3px solid #e7f1ff" },
  line: { width: "2px", flex: 1, background: "#e7f1ff", margin: "4px 0" },
  stepText: { fontSize: "0.95rem", color: "#444", marginTop: "-3px" }
};

export default DirectionsTimeline;