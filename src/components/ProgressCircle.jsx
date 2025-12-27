import React from "react";
import { motion } from "framer-motion";

const ProgressCircle = ({ current, total }) => {
  const percentage = (current / total) * 100;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={styles.container}>
      <svg width="100" height="100">
        <circle cx="50" cy="50" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="transparent" />
        <motion.circle
          cx="50" cy="50" r={radius} stroke="#00f2ff" strokeWidth="6" fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <div style={styles.label}>
        <span style={styles.percent}>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};

const styles = {
  container: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center" },
  label: { position: "absolute", display: "flex", flexDirection: "column", alignItems: "center" },
  percent: { fontSize: "1.2rem", fontWeight: "bold", color: "#00f2ff", fontFamily: "'Syncopate', sans-serif" }
};

export default ProgressCircle;