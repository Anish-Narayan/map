import React from "react";
function Directions({ steps }) {
  return (
    <div>
      <h3>🧭 Directions</h3>
      <ol style={styles.list}>
        {steps.map((step, index) => (
          <li key={index} style={styles.item}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

const styles = {
  list: {
    paddingLeft: "1.2rem"
  },
  item: {
    marginBottom: "0.8rem",
    fontSize: "1.05rem"
  }
};

export default Directions;
