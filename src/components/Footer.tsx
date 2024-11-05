import { cvData } from "../main";

export const Footer = () => {
  return (
    <footer className="cv-footer">
      <h2>Contact</h2>
      <p>{cvData.email}</p>
      <p>{cvData.phone}</p>
    </footer>
  );
};
