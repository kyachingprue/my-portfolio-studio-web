import React from 'react';
import Banner from '../components/Banner';
import Projects from '../components/Projects';
import AdvancedFeatures from '../components/AdvancedFeatures';
import ProgrammingLanguagesShowcase from '../components/ProgrammingLanguagesShowcase';

const MyProject = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <AdvancedFeatures />
      <ProgrammingLanguagesShowcase/>
    </div>
  );
};

export default MyProject;