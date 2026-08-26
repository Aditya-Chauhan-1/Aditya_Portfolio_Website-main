import { useState, useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Achievements from "../components/sections/Achievements";
import Certificates from "../components/sections/Certificates";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const ProjectDetails = lazy(() => import("../components/Dialog/ProjectDetails"));

const Wrapper = styled.div`
  padding-bottom: 100px;
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
    padding-bottom: 60px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 99%, 0 100%);
  }

  @media (max-width: 480px) {
    padding-bottom: 40px;
  }
`;

const Home = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;
    const timer = setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <AnimatePresence>
      <div>
        <Hero />
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
        <Footer />

        {openModal.state && (
          <Suspense fallback={<LoadingSpinner />}>
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          </Suspense>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Home;
