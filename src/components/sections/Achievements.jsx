import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DescriptionIcon from "@mui/icons-material/Description";
import { ChevronLeft, ChevronRight, Close } from "@mui/icons-material";
import { goldMedalHonour } from "../../data/constants";
import goldMedal from "../../images/education/gold-medal.png";

const GOLD = "#f5d76e";

const glow = keyframes`
  0%, 100% { opacity: 0.45; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.08); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const surface = css`
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(255,255,255,0.95)" : "rgba(17, 25, 40, 0.83)"};
  border: 1px solid ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.12)"};
`;

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

const Banner = styled.section`
  position: relative;
  overflow: hidden;
  padding: 24px 24px 40px;
  text-align: center;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(245, 215, 110, 0.18), transparent 52%),
    radial-gradient(ellipse at 50% 80%, rgba(133, 76, 230, 0.22), transparent 48%);

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${GOLD}, ${({ theme }) => theme.primary}, transparent);
  }
`;

const BannerInner = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MedalWrap = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  margin-bottom: 22px;
  animation: ${float} 4s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(245, 215, 110, 0.45), transparent 70%);
    animation: ${glow} 3.6s ease-in-out infinite;
    filter: blur(10px);
  }
`;

const Medal = styled.img`
  position: relative;
  width: 168px;
  height: 168px;
  object-fit: contain;
  filter: drop-shadow(0 16px 32px rgba(245, 215, 110, 0.38));
  z-index: 1;
`;

const BannerCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${GOLD};
  background: rgba(245, 215, 110, 0.1);
  border: 1px solid rgba(245, 215, 110, 0.35);
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 46px;
  font-weight: 800;
  line-height: 1.15;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;

  span {
    background: linear-gradient(90deg, ${GOLD}, #ffe9a3, ${GOLD});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Sub = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 640px;
  margin: 0 auto;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 26px;
  width: 100%;
  max-width: 560px;

  @media (max-width: 560px) {
    max-width: 100%;
  }
`;

const Stat = styled.div`
  padding: 14px 12px;
  border-radius: 14px;
  text-align: center;
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(255,255,255,0.8)" : "rgba(17, 25, 40, 0.7)"};
  border: 1px solid rgba(245, 215, 110, 0.2);
`;

const StatValue = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${GOLD};
`;

const StatLabel = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Content = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 36px 20px 40px;
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 32px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const PhotoCard = styled.div`
  ${surface}
  border-color: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(0,0,0,0.08)" : "rgba(245, 215, 110, 0.18)"};
  border-radius: 22px;
  padding: 14px;
  box-shadow: 0 18px 50px rgba(133, 76, 230, 0.18);
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  object-fit: contain;
  background: #0b0d16;
`;

const Caption = styled.p`
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 12px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  ${surface}
  border-radius: 18px;
  padding: 24px;
`;

const Heading = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${GOLD};
  }
`;

const Meta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Label = styled.span`
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`;

const Value = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;
`;

const Story = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
`;

const Highlights = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
`;

const Highlight = styled.li`
  position: relative;
  padding-left: 18px;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_primary};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${GOLD};
  }
`;

const Docs = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px 48px;
`;

const DocsHead = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${GOLD};
  }
`;

const DocsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DocCard = styled.button`
  ${surface}
  width: 100%;
  font-family: inherit;
  border-color: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(0,0,0,0.08)" : "rgba(245, 215, 110, 0.22)"};
  border-radius: 18px;
  padding: 12px 12px 16px;
  cursor: pointer;
  text-align: left;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 36px rgba(133, 76, 230, 0.2);
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

const DocFrame = styled.div`
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "#f6f3ea" : "#0b0d16"};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.35s ease;
  }
`;

const DocTitle = styled.div`
  margin-top: 12px;
  padding: 0 6px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const DocMeta = styled.div`
  margin-top: 4px;
  padding: 0 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 6000;
  background: rgba(5, 6, 16, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 72px 20px 32px;
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 18px;
  right: 18px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6001;
`;

const Stage = styled.div`
  position: relative;
  width: min(720px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === "left" ? "left: -18px;" : "right: -18px;")}
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
    ${({ $side }) => ($side === "left" ? "left: 6px;" : "right: 6px;")}
  }
`;

const Frame = styled.div`
  width: 100%;
  background: ${({ theme }) => (theme.bg === "#FFFFFF" ? "#fff" : "#12121c")};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);

  img {
    width: 100%;
    max-height: 72vh;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const LightboxCaption = styled.div`
  margin-top: 16px;
  text-align: center;
  color: #fff;
`;

const LightboxTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const LightboxMeta = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.72);
`;

const Achievements = () => {
  const [activeDoc, setActiveDoc] = useState(null);
  const documents = goldMedalHonour.documents;
  const current = activeDoc !== null ? documents[activeDoc] : null;

  const close = () => setActiveDoc(null);
  const next = () => setActiveDoc((i) => (i + 1) % documents.length);
  const prev = () =>
    setActiveDoc((i) => (i === 0 ? documents.length - 1 : i - 1));

  useEffect(() => {
    if (activeDoc === null) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") setActiveDoc(null);
      if (e.key === "ArrowRight") {
        setActiveDoc((i) => (i + 1) % documents.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveDoc((i) => (i === 0 ? documents.length - 1 : i - 1));
      }
    };

    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [activeDoc, documents.length]);

  return (
    <Container id="Achievements">
      <Banner>
        <BannerInner>
          <MedalWrap>
            <Medal src={goldMedal} alt="University gold medal" />
          </MedalWrap>
          <BannerCopy>
            <Eyebrow>
              <MilitaryTechIcon fontSize="small" /> {goldMedalHonour.eyebrow}
            </Eyebrow>
            <Title>
              {goldMedalHonour.title} <span>{goldMedalHonour.titleAccent}</span>
            </Title>
            <Sub>{goldMedalHonour.subtitle}</Sub>
            <Stats>
              {goldMedalHonour.stats.map((stat) => (
                <Stat key={stat.label}>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </Stat>
              ))}
            </Stats>
          </BannerCopy>
        </BannerInner>
      </Banner>

      <Content>
        <PhotoCard>
          <Photo src={goldMedalHonour.photo} alt={goldMedalHonour.photoAlt} />
          <Caption>{goldMedalHonour.photoCaption}</Caption>
        </PhotoCard>

        <Details>
          <Card>
            <Heading>
              <SchoolIcon /> Academic Honour
            </Heading>
            <Meta>
              {goldMedalHonour.honour.map((item) => (
                <Row key={item.label}>
                  <Label>{item.label}</Label>
                  <Value>{item.value}</Value>
                </Row>
              ))}
            </Meta>
          </Card>

          <Card>
            <Heading>
              <WorkspacePremiumIcon /> Why this medal matters
            </Heading>
            <Story>{goldMedalHonour.story}</Story>
            <Highlights>
              {goldMedalHonour.highlights.map((item) => (
                <Highlight key={item}>{item}</Highlight>
              ))}
            </Highlights>
          </Card>

          <Card>
            <Heading>
              <AutoStoriesIcon /> From classroom to career
            </Heading>
            <Story>{goldMedalHonour.career}</Story>
          </Card>
        </Details>
      </Content>

      <Docs>
        <DocsHead>
          <DescriptionIcon /> Official documents
        </DocsHead>
        <DocsGrid>
          {documents.map((doc, index) => (
            <DocCard
              key={doc.title}
              type="button"
              onClick={() => setActiveDoc(index)}
            >
              <DocFrame>
                <img src={doc.image} alt={doc.title} />
              </DocFrame>
              <DocTitle>{doc.title}</DocTitle>
              <DocMeta>{doc.description}</DocMeta>
            </DocCard>
          ))}
        </DocsGrid>
      </Docs>

      {current &&
        createPortal(
          <Overlay onClick={close}>
            <CloseBtn type="button" onClick={close} aria-label="Close">
              <Close />
            </CloseBtn>
            <Stage onClick={(e) => e.stopPropagation()}>
              <Frame>
                <img src={current.image} alt={current.title} />
              </Frame>
              <NavBtn $side="left" type="button" onClick={prev} aria-label="Previous document">
                <ChevronLeft />
              </NavBtn>
              <NavBtn $side="right" type="button" onClick={next} aria-label="Next document">
                <ChevronRight />
              </NavBtn>
              <LightboxCaption>
                <LightboxTitle>{current.title}</LightboxTitle>
                <LightboxMeta>{current.description}</LightboxMeta>
              </LightboxCaption>
            </Stage>
          </Overlay>,
          document.body
        )}
    </Container>
  );
};

export default Achievements;
