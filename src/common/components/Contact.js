import React from 'react';

import { Section7 } from 'Containers/homeSections'
import { MapSection, OurOffice } from 'Containers/contactSections'

const contact = () => {
  return (
    <div>
      <MapSection />
      <OurOffice />
      <Section7 />
    </div>
  );
};

export default contact;