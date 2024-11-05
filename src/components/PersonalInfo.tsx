import { cvData } from "../main";

export const PersonalInfo = () => {
  return (
    <aside className="cv-personal">
      <h2>Personal data</h2>
      <img
        className="cv-photo"
        src={cvData.photo}
        alt={`${cvData.name} ${cvData.lastname} profile pic`}
      />
      <p>
        {cvData.name} {cvData.lastname}
      </p>
      <small>{cvData.position}</small>
    </aside>
  );
};
