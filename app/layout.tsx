// app/layout.tsx
import React from "react";
import "./globals.css";
import Footer from "@/app/_components/Footer";
import SideMenu from "@/app/_components/SideMenu";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <div className="relative flex min-h-screen">
            <SideMenu />

            <div className="flex flex-col flex-1 w-full">
              <main className="flex-1">{children}</main>
            </div>
          </div>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
