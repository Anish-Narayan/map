import React from "react";
import { Compass } from "lucide-react";

function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.logoBox}>
        <Compass color="#fff" size={28} />
      </div>
      <h2 style={styles.title}>CampusQuest</h2>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "24px",
    marginTop: "10px"
  },
  logoBox: {
    background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
    padding: "12px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
    marginBottom: "10px"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#1a1a1a",
    margin: 0,
    letterSpacing: "-0.5px"
  }
};

export default Header;