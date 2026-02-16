import React from "react";

const ResumeViewer = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "90%", maxWidth: "800px" }}> {/* Limits width for large screens */}
        <h2 style={{ textAlign: "center" }}>Resume Preview</h2>
        <iframe
          title="Resume Document"
          src={`${process.env.PUBLIC_URL}/Chiranjeevi_4Y_Resume.pdf`}
          style={{
            width: "100%",
            height: "75vh", // Adjusts height based on screen size
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default ResumeViewer;
