import "./ResumeForm.css";

const ResumeForm = ({ formData, setFormData }) => {
  return (
    <div className="form-container">
      <h2 className="form-title">✨ Build Your Resume</h2>

      <div className="form-section">
        <h3>👤 Personal Details</h3>

        <input
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div className="form-section">
        <h3>📝 Professional Summary</h3>
        <textarea
          value={formData.summary}
          onChange={(e) =>
            setFormData({ ...formData, summary: e.target.value })
          }
        />
      </div>

      <div className="form-section">
        <h3>🎓 Skills</h3>
        <textarea
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
        />
      </div>

      <div className="form-section">
        <h3>🎓 Education</h3>
        <textarea
          value={formData.education}
          onChange={(e) =>
            setFormData({ ...formData, education: e.target.value })
          }
        />
      </div>

      <div className="form-section">
        <h3>💼 Experience</h3>
        <textarea
          value={formData.experience}
          onChange={(e) =>
            setFormData({ ...formData, experience: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default ResumeForm;
