import React from "react";

const ConsultancyPage = () => {
  return (
    <div style={styles.container}>
      <h1>Consultancy Page</h1>
      <p>🚧 This page is under maintenance. Check back soon.</p>
    </div>
  );
};

const styles = {
  container: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "18px",
  },
};

export default ConsultancyPage;