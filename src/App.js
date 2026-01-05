import React, { useState } from "react";

import "./App.css";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import html2pdf from "html2pdf.js";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
  });

  const downloadPDF = () => {
    const element = document.getElementById("resume");
    html2pdf().from(element).save("Resume.pdf");
  };

  return (
    <div className="container">
      <ResumeForm formData={formData} setFormData={setFormData} />

      <ResumePreview data={formData} />

      <button onClick={downloadPDF}>Download Resume PDF</button>
    </div>
  );
}

export default App;
