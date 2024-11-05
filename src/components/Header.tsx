import { cvData } from "../main";
export const Header = () => {
  return (
    <header className="cv-header">
      <h1>
        CV - {cvData.name} {cvData.lastname}
      </h1>
    </header>
  );
};
