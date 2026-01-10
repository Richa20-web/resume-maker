import React from "react";
import "./ResumePreview.css";

function ResumePreview({ data }) {
  return (
    <div className="resume">
      {/* HEADER */}
      <div className="resume-header">
        <h1>{data.name || "Your Name"}</h1>
        <p>
          {data.email || "email@example.com"} | {data.phone || "1234567890"}
        </p>
      </div>

      {/* SECTION */}
      <section>
        <h2>Professional Summary</h2>
        <p>{data.summary || "Brief professional summary"}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills-list">
          {data.skills ? (
            data.skills
              .split(",")
              .map((skill, index) => <li key={index}>{skill.trim()}</li>)
          ) : (
            <li>HTML</li>
          )}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p>{data.education || "Your education details"}</p>
      </section>

      <section>
        <h2>Experience</h2>
        <p>{data.experience || "Fresher / Internship details"}</p>
      </section>
    </div>
  );
}

export default ResumePreview;
