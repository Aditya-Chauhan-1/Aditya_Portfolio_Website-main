import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../styles/timeline-mobile.css";
import SectionHeader from "../SectionHeader";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content-center;
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

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <SectionHeader
          title="Education"
          description="My academic background in Computer Science — from diploma to Bachelor's degree."
        />

        <VerticalTimeline
          lineColor="rgba(133, 76, 230, 0.3)"
        >
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} index={index} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Education;
