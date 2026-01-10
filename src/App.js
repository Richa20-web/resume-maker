import React, { useState, useRef } from "react";
import "./App.css";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import html2pdf from "html2pdf.js";

function App() {
  const pdfRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
  });

  const handleDownload = () => {
    if (!pdfRef.current) {
      alert("Resume content not found");
      return;
    }

    const opt = {
      margin: 10,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#fff" },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(pdfRef.current).save();
  };

  return (
    <div className="container">
      <ResumeForm formData={formData} setFormData={setFormData} />
      <button onClick={handleDownload}>Download Resume PDF</button>

      <div ref={pdfRef} className="pdf-only">
        <ResumePreview data={formData} />
      </div>
    </div>
  );
}

export default App;
