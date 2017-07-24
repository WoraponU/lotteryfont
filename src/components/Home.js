import React from 'react';

import { 
  Section1, 
  Section2, 
  Section3, 
  Section4, 
  Section5, 
  Section6, 
  Section7 
} from 'Containers/homeSections'
import { Header } from 'Components/common'
import { Footer } from 'Containers/common'

const Home = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
};

export default Home;