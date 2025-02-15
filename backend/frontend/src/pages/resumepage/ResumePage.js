import React from "react";
import ResumeViewer from "./ResumeViewer";
import DownloadResume from "./DownloadResume";

function ResumePage() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <ResumeViewer />
      <DownloadResume />
    </div>
  );
}

export default ResumePage;
