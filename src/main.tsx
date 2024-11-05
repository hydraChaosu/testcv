import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  company: string;
}

interface Education {
  university: string;
  startDate: string;
  endDate: string;
  degree: string;
}

interface CVData {
  photo: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  position: string;
  skills: Skill[];
  experience: Experience[];
  educations: Education[];
}

const cvData: CVData = {
  photo: "https://placehold.co/400x400?text=JD",
  name: "John",
  lastname: "Doe",
  email: "JohnDoe@gmail.com",
  phone: "222 333 432",
  position: "Sofware Engineer",
  skills: [
    { name: "JavaScript", level: 5 },
    { name: "React", level: 4 },
    { name: "Node.js", level: 3 },
  ],
  experience: [
    {
      position: "Junior Developer",
      startDate: "2019",
      endDate: "2020",
      description: "Working as a junior developer",
      company: "Google",
    },
    {
      position: "Mid Developer",
      startDate: "2020",
      endDate: "2025",
      description: "Working as a mid developer",
      company: "Facebook",
    },
  ],
  educations: [
    {
      university: "MIT",
      startDate: "2010",
      endDate: "2015",
      degree: "Bachelor",
    },
    {
      university: "Harvard",
      startDate: "2015",
      endDate: "2019",
      degree: "Master",
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="cv-main">
      <header className="cv-header">
        <h1>
          CV - {cvData.name} {cvData.lastname}
        </h1>
      </header>
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
      <section className="cv-details">
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
        <h2>Skills</h2>
        <ul>
          {cvData.skills.map((skill) => (
            <li key={skill.name}>
              <p>{skill.name}</p>
              <progress value={skill.level} max={10} />
            </li>
          ))}
        </ul>
      </section>
      <footer className="cv-footer">
        <h2>Contact</h2>
        <p>{cvData.email}</p>
        <p>{cvData.phone}</p>
      </footer>
    </main>
  </React.StrictMode>
);
