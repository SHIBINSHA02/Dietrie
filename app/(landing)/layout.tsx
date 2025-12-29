// app/(landing)/layout.tsx
import React from 'react';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      
      {children}
    </section>
  );
};

export default LandingLayout;