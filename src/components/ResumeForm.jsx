const ResumeForm = ({ formData, setFormData }) => {
  return (
    <div className="form">
      <h2>Fill Your Details</h2>
      <input
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <textarea
        placeholder="Professional Summary"
        value={formData.summary}
        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
      />
      <textarea
        placeholder="Education"
        value={formData.education}
        onChange={(e) =>
          setFormData({ ...formData, experience: e.target.value })
        }
      />
      <textarea
        placeholder="Experience"
        value={formData.experience}
        onChange={(e) =>
          setFormData({ ...formData, experience: e.target.value })
        }
      />
    </div>
  );
};

export default ResumeForm;
