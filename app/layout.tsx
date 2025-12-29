// app/layout.tsx
import React from "react";
import './globals.css';
import Footer from "./_components/Footer";
import SideMenu from "./_components/SideMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen">
         
          <SideMenu />

          <div className="flex flex-col flex-1 w-full">
            <main className="flex-1">
              {children}
            </main>
       
            
          </div> 
        </div>
        <Footer />
      </body>
    </html>
  );
}