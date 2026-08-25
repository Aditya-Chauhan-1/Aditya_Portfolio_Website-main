import React from "react";
import styled from "styled-components";
import { Bio, stats } from "../../data/constants";
import HeroImg from "../../images/HeroImage.jpg";
import SectionHeader from "../SectionHeader";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 48px;
  align-items: center;
  margin-top: 8px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
`;

const PhotoWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Photo = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 12px 40px ${({ theme }) => theme.primary + "40"};

  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Roles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Role = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + "18"};
  border: 1px solid ${({ theme }) => theme.primary + "55"};
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 48px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(255,255,255,0.9)" : "rgba(17, 25, 40, 0.75)"};
  border: 1px solid ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"};
  border-radius: 16px;
  padding: 22px 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.primary + "30"};
  }
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const StatLabel = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const About = () => {
  return (
    <Container id="About">
      <Wrapper>
        <SectionHeader title="About Me" />
        <Grid>
          <PhotoWrap>
            <Photo src={HeroImg} alt={`${Bio.name} portrait`} />
          </PhotoWrap>
          <Content>
            <Roles>
              <Role>Software Engineer</Role>
              <Role>Corporate Trainer</Role>
              <Role>Data Science Trainer</Role>
            </Roles>
          </Content>
        </Grid>
        <Stats>
          {stats.map((item) => (
            <StatCard key={item.label}>
              <StatValue>{item.value}</StatValue>
              <StatLabel>{item.label}</StatLabel>
            </StatCard>
          ))}
        </Stats>
      </Wrapper>
    </Container>
  );
};

export default About;
