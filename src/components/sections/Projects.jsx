import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../SectionHeader";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 0 12px;
  }
  
  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 0 8px;
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  overflow: hidden;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 16px 0;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    margin: 12px 0;
    width: 100%;
    justify-content: center;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    border-radius: 4px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 10px;
  }
  
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    color: ${theme.primary};
    font-weight: 600;
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  padding: 0 16px;
  
  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 12px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
    padding: 0 8px;
  }
`;

const EmptyState = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 48px 32px;
  text-align: center;
  border-radius: 16px;
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF"
      ? "rgba(255, 255, 255, 0.9)"
      : "rgba(17, 25, 40, 0.6)"};
  border: 1px dashed ${({ theme }) => theme.primary + "60"};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  line-height: 1.6;

  @media (max-width: 480px) {
    padding: 32px 20px;
    font-size: 14px;
  }
`;

const PROJECT_CATEGORIES = [
  { key: "all", label: "ALL" },
  { key: "web app", label: "WEB APPS" },
  { key: "machine learning", label: "MACHINE LEARNING" },
  { key: "android app", label: "ANDROID APPS" },
];

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const filteredProjects = useMemo(() => {
    if (toggle === "all") return projects;
    return projects.filter((item) => item.category === toggle);
  }, [toggle]);

  const visibleCategories = PROJECT_CATEGORIES.filter(
    (category) =>
      category.key === "all" ||
      projects.some((project) => project.category === category.key)
  );

  return (
    <Container id="Projects">
      <Wrapper>
        <SectionHeader
          title="Projects"
          description="A collection of web applications and machine learning tools I've built — from client platforms to model studios."
        />
        {visibleCategories.length > 1 && (
          <ToggleButtonGroup>
            {visibleCategories.map((category, index) => (
              <React.Fragment key={category.key}>
                {index > 0 && <Divider />}
                <ToggleButton
                  active={toggle === category.key}
                  onClick={() => setToggle(category.key)}
                >
                  {category.label}
                </ToggleButton>
              </React.Fragment>
            ))}
          </ToggleButtonGroup>
        )}
        <CardContainer>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={`project-${project.id}-${index}`}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                index={index}
              />
            ))
          ) : (
            <EmptyState>
              No projects in this category yet. Check back soon!
            </EmptyState>
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
