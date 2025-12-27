import React from "react";
import { motion } from "framer-motion";

function VisualHUD({ imageUrl, stepType }) {
  return (
    <div style={styles.hudContainer}>
      {/* The Actual Guide Image */}
      <motion.img 
        key={imageUrl}
        initial={{ scale: 1.2, filter: "brightness(0)" }}
        animate={{ scale: 1, filter: "brightness(1)" }}
        src={imageUrl} 
        style={styles.image} 
      />

      {/* Cyberpunk HUD Overlays */}
      <div style={styles.scanline} />
      <div style={styles.cornerTL} />
      <div style={styles.cornerBR} />
      
      <div style={styles.tag}>
        <div style={styles.dot} />
        LIVE_VISUAL // {stepType}
      </div>

      <div style={styles.coordinates}>
        X: 12.9716° N <br/>
        Y: 77.5946° E
      </div>
    </div>
  );
}

const styles = {
  hudContainer: {
    position: "relative",
    width: "100%",
    height: "180px",
    borderRadius: "15px",
    overflow: "hidden",
    border: "1px solid rgba(0, 242, 255, 0.3)",
    marginBottom: "20px"
  },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  scanline: {
    position: "absolute", top: 0, left: 0, width: "100%", height: "2px",
    background: "rgba(0, 242, 255, 0.5)",
    boxShadow: "0 0 10px #00f2ff",
    animation: "scan 3s linear infinite"
  },
  tag: {
    position: "absolute", top: "10px", left: "10px", background: "rgba(0,0,0,0.7)",
    padding: "4px 8px", borderRadius: "4px", fontSize: "0.6rem", color: "#00f2ff",
    fontFamily: "'Syncopate', sans-serif", display: "flex", alignItems: "center", gap: "5px"
  },
  dot: { width: "5px", height: "5px", borderRadius: "50%", background: "#ff4d4d" },
  coordinates: {
    position: "absolute", bottom: "10px", right: "10px", textAlign: "right",
    fontSize: "0.5rem", color: "rgba(255,255,255,0.7)", fontFamily: "monospace"
  },
  // Corner accents
  cornerTL: { position: "absolute", top: 0, left: 0, width: "15px", height: "15px", borderLeft: "2px solid #00f2ff", borderTop: "2px solid #00f2ff" },
  cornerBR: { position: "absolute", bottom: 0, right: 0, width: "15px", height: "15px", borderRight: "2px solid #00f2ff", borderBottom: "2px solid #00f2ff" }
};

export default VisualHUD;