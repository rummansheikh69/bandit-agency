import Footer from "@/components/Bar/Footer";
import Navbar from "@/components/Bar/Navbar";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
