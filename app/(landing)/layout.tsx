// app/(landing)/layout.tsx
import React from 'react';
import SideMenu from '../_components/SideMenu';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      
      {children}
    </section>
  );
};

export default LandingLayout;