import { cvData } from "../main";

export const Skills = () => {
  return (
    <>
      <h2>Skills</h2>
      <ul>
        {cvData.skills.map((skill) => (
          <li key={skill.name}>
            <p>{skill.name}</p>
            <progress value={skill.level} max={10} />
          </li>
        ))}
      </ul>
    </>
  );
};
