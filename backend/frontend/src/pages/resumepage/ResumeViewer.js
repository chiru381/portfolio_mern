import React from "react";

const ResumeViewer = () => {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#1a1a1a", // Dark background
        padding: "20px",
      }}
    >
      <div 
        style={{
          width: "100%",
          maxWidth: "900px", // Adjust width for large screens
          backgroundColor: "#222", // Dark card background
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)", // Soft glowing effect
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "15px" }}>
          Resume Preview
        </h2>

        <div 
          style={{
            width: "100%",
            overflow: "hidden",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <iframe
            title="Resume Document"
            src={`${process.env.PUBLIC_URL}/Chiranjeevi_3.8Y_Resume.pdf`}
            style={{
              width: "100%",
              height: "80vh", // Adjusts dynamically
              border: "none",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
