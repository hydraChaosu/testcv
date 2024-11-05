import { cvData } from "../main";

export const Experience = () => {
  return (
    <>
      <h2>Experience</h2>
      <ul>
        {cvData.experience.map((exp) => (
          <li key={exp.startDate}>
            <h3>{exp.position}</h3>
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.description}</p>
            <p>{exp.company}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
