import React from "react";
import { MapPin, Flag } from "lucide-react";

function RouteInfo({ start, destination }) {
  return (
    <div style={styles.box}>
      <div style={styles.row}>
        <MapPin size={16} color="#007bff" />
        <span style={styles.text}><strong>From:</strong> {start}</span>
      </div>
      <div style={styles.divider} />
      <div style={styles.row}>
        <Flag size={16} color="#28a745" />
        <span style={styles.text}><strong>To:</strong> {destination}</span>
      </div>
    </div>
  );
}

const styles = {
  box: {
    background: "#fff",
    padding: "16px",
    borderRadius: "16px",
    marginBottom: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
    border: "1px solid #f0f0f0"
  },
  row: { display: "flex", alignItems: "center", gap: "10px" },
  text: { fontSize: "0.85rem", color: "#555" },
  divider: { height: "1px", background: "#f0f0f0", margin: "10px 0" }
};

export default RouteInfo;