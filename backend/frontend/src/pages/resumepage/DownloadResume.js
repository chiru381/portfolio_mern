import React from "react";

const DownloadResume = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/Chiranjeevi_3.8Y_Resume.pdf";
          link.download = "Chiranjeevi_3.8Y_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          width: "90%",
          maxWidth: "250px", // Limits size for larger screens
        }}
      >
        Download Resume
      </button>
    </div>
  );
};

export default DownloadResume;
