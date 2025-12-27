import React from "react";
import { motion } from "framer-motion";

function ProgressBar({ current, total }) {
  const percent = (current / total) * 100;

  return (
    <div style={styles.wrapper}>
      <div style={styles.track}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          style={styles.bar} 
        />
      </div>
      <div style={styles.labelRow}>
        <span style={styles.label}>Route Progress</span>
        <span style={styles.label}>{Math.round(percent)}%</span>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { marginBottom: "20px" },
  track: { height: "8px", background: "#e9ecef", borderRadius: "10px", overflow: "hidden" },
  bar: { height: "100%", background: "linear-gradient(90deg, #007bff, #00d4ff)", borderRadius: "10px" },
  labelRow: { display: "flex", justifyContent: "space-between", marginTop: "8px" },
  label: { fontSize: "0.7rem", fontWeight: "700", color: "#999", textTransform: "uppercase" }
};

export default ProgressBar;