import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export const Details = () => {
  return (
    <section className="cv-details">
      <Experience />
      <Education />
      <Skills />
    </section>
  );
};
