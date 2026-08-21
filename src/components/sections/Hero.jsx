import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import DescriptionIcon from "@mui/icons-material/Description";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px 80px;
  z-index: 1;
  min-height: 100vh;
  align-items: center;

  @media (max-width: 960px) {
    padding: 80px 16px 60px;
    min-height: auto;
  }

  @media (max-width: 640px) {
    padding: 60px 16px 40px;
  }
  
  @media (max-width: 480px) {
    padding: 50px 12px 30px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  
  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 98%, 0 100%);
  }
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  align-items: center;
  
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }

  @media (max-width: 640px) {
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  margin-bottom: 12px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
  
  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  margin-bottom: 16px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 32px;
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  max-width: 600px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 32px;
  }
  
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 22px;
  }
`;

const CTARow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: auto;
  min-width: 180px;
  max-width: 300px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 28px;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const ContactButton = styled.a`
  appearance: button;
  text-decoration: none;
  text-align: center;
  min-width: 180px;
  max-width: 300px;
  padding: 16px 28px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary + "20"};
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    padding: 12px 24px;
    font-size: 18px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 28px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.primary + "60"};
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(255,255,255,0.8)" : "rgba(17,25,40,0.6)"};
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  svg {
    font-size: 22px;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-4px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.primary + "40"};
  }

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;

    svg {
      font-size: 20px;
    }
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 30px rgba(133, 76, 230, 0.5);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 960px) {
    max-width: 320px;
    max-height: 320px;
  }
  
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
    border-width: 2px;
  }
  
  @media (max-width: 480px) {
    max-width: 240px;
    max-height: 240px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <CTARow>
                  <ResumeButton
                    href={Bio.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View resume"
                  >
                    <DescriptionIcon style={{ fontSize: 20 }} />
                    Check Resume
                  </ResumeButton>
                  <ContactButton href="#Contact" aria-label="Go to contact section">
                    Contact Me
                  </ContactButton>
                </CTARow>
                <SocialLinks>
                  <SocialButton href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                    <GitHubIcon />
                  </SocialButton>
                  <SocialButton href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <LinkedInIcon />
                  </SocialButton>
                  <SocialButton href={Bio.insta} target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
                    <InstagramIcon />
                  </SocialButton>
                </SocialLinks>
              </motion.div>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img 
                    src={HeroImg} 
                    alt="Aditya Chauhan - Full Stack Developer" 
                    loading="eager"
                    width="400"
                    height="400"
                  />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;


