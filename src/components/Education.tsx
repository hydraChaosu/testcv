import { cvData } from "../main";

export const Education = () => {
  return (
    <>
      {" "}
      <h2>Education</h2>
      <ul>
        {cvData.educations.map((edu, index) => (
          <li key={index}>
            <h3>{edu.university}</h3>
            <p>
              {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.degree}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
