import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../styles/timeline-mobile.css";
import ExperienceCard from "../cards/ExperienceCard";
import SectionHeader from "../SectionHeader";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 16px;
  
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

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <SectionHeader
          title="Experience"
          description="My professional journey as a software developer, trainer, and engineer across companies and projects."
        />

        <VerticalTimeline
          lineColor="rgba(133, 76, 230, 0.3)"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
