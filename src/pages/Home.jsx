import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import TechnologyCards from "../components/TechnologyCards";

const Home = () => {
  return (
    <div>
      <Header />
      <TechnologyCards />
      <ContactMe />
      <Experience/>
    </div>
  );
};

export default Home;