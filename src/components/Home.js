import React from 'react';
import { Header } from 'Components/common'

import { 
  Section1, 
  Section2, 
  Section3, 
  Section4, 
  Section5, 
  Section6, 
  Section7 
} from 'Containers/homeSections'

const Home = () => {
  return (
    <div>
      <Header />
      <Section1  />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default Home;