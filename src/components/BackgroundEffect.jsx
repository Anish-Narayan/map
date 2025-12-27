import React from "react";

const BackgroundEffect = () => (
  <div style={styles.container}>
    <div style={styles.grid} />
    <div style={styles.glow} />
    <div style={styles.vignette} />
  </div>
);

const styles = {
  container: { position: "fixed", inset: 0, zIndex: -1, background: "#08090a", overflow: "hidden" },
  grid: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(0, 242, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 0.05) 1px, transparent 1px)`, backgroundSize: "40px 40px" },
  glow: { position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", width: "100vw", height: "100vw", background: "radial-gradient(circle, rgba(0, 242, 255, 0.07) 0%, transparent 70%)" },
  vignette: { position: "absolute", inset: 0, background: "radial-gradient(circle, transparent 20%, #08090a 100%)" }
};

export default BackgroundEffect;