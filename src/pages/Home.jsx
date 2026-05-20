import AboutMe from "@/components/AboutMe";
import AdvancedHomeFeature from "../components/AdvancedHomeFeature";
import Experience from "../components/Experience";
import Header from "../components/Header";
import TechnologyCards from "../components/TechnologyCards";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe/>
      <TechnologyCards />
      <Experience />
      <AdvancedHomeFeature/>
    </div>
  );
};

export default Home;
