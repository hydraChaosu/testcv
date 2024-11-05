import { Details } from "./Details";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PersonalInfo } from "./PersonalInfo";

export const Layout = () => {
  return (
    <main className="cv-main">
      <Header />
      <PersonalInfo />
      <Details />
      <Footer />
    </main>
  );
};
