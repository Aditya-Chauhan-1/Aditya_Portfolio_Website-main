import { useState, useEffect, Suspense, lazy } from "react";
import styled from "styled-components";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Achievements from "../sections/Achievements";
import Certificates from "../sections/Certificates";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import LoadingSpinner from "../LoadingSpinner";

const ProjectDetails = lazy(() => import("../Dialog/ProjectDetails"));

const Wrapper = styled.div`
  padding-bottom: 64px;
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF"
      ? `linear-gradient(
          38.73deg,
          rgba(204, 0, 187, 0.08) 0%,
          rgba(201, 32, 184, 0) 50%
        ),
        linear-gradient(
          141.27deg,
          rgba(0, 70, 209, 0) 50%,
          rgba(0, 70, 209, 0.08) 100%
        )`
      : `linear-gradient(
          38.73deg,
          rgba(204, 0, 187, 0.15) 0%,
          rgba(201, 32, 184, 0) 50%
        ),
        linear-gradient(
          141.27deg,
          rgba(0, 70, 209, 0) 50%,
          rgba(0, 70, 209, 0.15) 100%
        )`};
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);

  @media (max-width: 768px) {
    padding-bottom: 40px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 99%, 0 100%);
  }

  @media (max-width: 480px) {
    padding-bottom: 28px;
  }
`;

const Home = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const timer = setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main id="Home" tabIndex="-1">
        <Hero />
        <About />
        <Services />
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>
        <Projects setOpenModal={setOpenModal} />
        <Wrapper>
          <Education />
          <Achievements />
          <Certificates />
          <Contact />
        </Wrapper>
      </main>
      <Footer />

      {openModal.state && (
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        </Suspense>
      )}
    </>
  );
};

export default Home;
