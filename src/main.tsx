import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import { Layout } from "./components/Layout";

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

export interface CVData {
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

export const cvData: CVData = {
  photo: "https://placehold.co/400x400?text=JD",
  name: "John",
  lastname: "Doe",
  email: "JohnDoe@gmail.com",
  phone: "222 333 432",
  position: "Sofware Engineer",
  skills: [
    { name: "JavaScript", level: 8 },
    { name: "React", level: 7 },
    { name: "Node.js", level: 6 },
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
    <Layout />
  </React.StrictMode>
);
