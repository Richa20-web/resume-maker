const ResumePreview = ({ data }) => {
  return (
    <div id="resume" className="resume">
      <h1>{data.name}</h1>
      <p>
        {data.email} | {data.phone}
      </p>

      <hr />

      <h2>Professional Summary</h2>
      <p>{data.summary}</p>

      <h2>Skills</h2>
      <ul>
        {data.skills.split(",").map((skill, i) => (
          <li key={i}>{skill.trim()}</li>
        ))}
      </ul>

      <h2>Education</h2>
      <p>{data.experience}</p>
    </div>
  );
};

export default ResumePreview;
