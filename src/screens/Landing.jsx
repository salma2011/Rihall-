import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Skills from "../components/Sections/Skills";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}


