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

      {/* PROFESSIONAL SUMMARY */}
      <section>
        <h2>Professional Summary</h2>
        <p>{data.summary || "Brief professional summary"}</p>
      </section>

      {/* SKILLS */}
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

      {/* EDUCATION */}
      <section>
        <h2>Education</h2>
        <p>{data.education || "Your education details"}</p>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2>Experience</h2>
        <p>{data.experience || "Fresher / Internship details"}</p>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>

        {data.projects ? (
          data.projects.split("\n").map((proj, index) => {
            const parts = proj.split("-");
            const rawLink = parts[2]?.trim();

            const projectLink =
              rawLink && rawLink.startsWith("http")
                ? rawLink
                : rawLink
                ? `https://${rawLink}`
                : null;

            return (
              <div key={index} style={{ marginBottom: "12px" }}>
                <strong>{parts[0]?.trim()}</strong>
                <p style={{ margin: "4px 0" }}>{parts[1]?.trim()}</p>

                {projectLink && (
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {projectLink}
                  </a>
                )}
              </div>
            );
          })
        ) : (
          <p>Project Name — Description — Project Link</p>
        )}
      </section>
    </div>
  );
}

export default ResumePreview;
