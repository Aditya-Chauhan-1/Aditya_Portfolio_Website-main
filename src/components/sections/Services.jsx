import React from "react";
import styled from "styled-components";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SchoolIcon from "@mui/icons-material/School";
import InsightsIcon from "@mui/icons-material/Insights";
import { services } from "../../data/constants";
import SectionHeader from "../SectionHeader";

const ICONS = {
  code: CodeIcon,
  design: DesignServicesIcon,
  ai: AutoAwesomeIcon,
  teach: SchoolIcon,
  science: InsightsIcon,
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.article`
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(255,255,255,0.95)" : "rgba(17, 25, 40, 0.83)"};
  border: 1px solid ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.12)"};
  border-radius: 18px;
  padding: 28px 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 12px 32px ${({ theme }) => theme.primary + "28"};
  }
`;

const IconBox = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.primary + "22"};
  color: ${({ theme }) => theme.primary};

  svg {
    font-size: 26px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
`;

const Services = () => {
  return (
    <Container id="Services">
      <Wrapper>
        <SectionHeader
          title="Services"
          description="How I can help — product engineering, corporate training, and Data Science mentoring for teams."
        />
        <Grid>
          {services.map((service) => {
            const Icon = ICONS[service.icon] || CodeIcon;
            return (
              <Card key={service.title}>
                <IconBox>
                  <Icon />
                </IconBox>
                <Title>{service.title}</Title>
                <Desc>{service.desc}</Desc>
              </Card>
            );
          })}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Services;
