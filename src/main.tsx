import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";

//zmien educations
//dodaj skila
//footer contact
//zmien na komponenty
//ciemne style

interface Experience {
  position: string;
  startDate: string;
  endDate: string;
  description: string;
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
  skills: string[];
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
  skills: [],
  experience: [
    {
      year: 2021,
      description: "Software Engineer at Companyt",
    },
    {
      year: 2024,
      description: "Software Engineer at Companyt",
    },
  ],
  educations: [
    "Computer Science at University of California",
    "Warsaw University of Technology",
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
            <li key={exp.year}>
              <strong>{exp.year}</strong>- {exp.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {cvData.educations.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </section>
    </main>
  </React.StrictMode>
);
