import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ChevronLeft, ChevronRight, Close, Style } from "@mui/icons-material";
import { certificates } from "../../data/constants";
import SectionHeader from "../SectionHeader";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.button`
  position: relative;
  border: none;
  background: ${({ theme }) => (theme.bg === "#FFFFFF" ? "#fff" : theme.card)};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) =>
    theme.bg === "#FFFFFF"
      ? "0 6px 18px rgba(15, 23, 42, 0.08)"
      : "0 8px 22px rgba(0, 0, 0, 0.35)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: ${({ theme }) =>
      theme.bg === "#FFFFFF"
        ? "0 14px 32px rgba(15, 23, 42, 0.14)"
        : "0 14px 32px rgba(0, 0, 0, 0.5)"};
  }

  &:hover img {
    transform: scale(1.12);
  }
`;

const Preview = styled.div`
  height: 228px;
  padding: 14px 14px 8px;
  background: ${({ theme }) => (theme.bg === "#FFFFFF" ? "#fff" : theme.card)};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
    transform: scale(1);
    transition: transform 0.35s ease;
  }
`;

const Badge = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5a524;
  color: #fff;
  pointer-events: none;

  svg {
    font-size: 16px;
  }
`;

const CardTitle = styled.div`
  min-height: 62px;
  padding: 8px 40px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.35;
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
  width: min(860px, 100%);
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
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
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);

  img {
    width: 100%;
    max-height: 62vh;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const Caption = styled.div`
  margin-top: 18px;
  text-align: center;
  color: #fff;
  max-width: 720px;
`;

const CaptionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const CaptionMeta = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 8px;
`;

const Counter = styled.p`
  font-size: 14px;
  opacity: 0.9;
`;

const Certificates = () => {
  const [active, setActive] = useState(null);

  const close = () => setActive(null);
  const show = (index) => setActive(index);

  const next = () => {
    setActive((i) => (i + 1) % certificates.length);
  };

  const prev = () => {
    setActive((i) => (i === 0 ? certificates.length - 1 : i - 1));
  };

  useEffect(() => {
    if (active === null) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const current = active !== null ? certificates[active] : null;

  return (
    <Container id="Certificates">
      <Wrapper>
        <SectionHeader
          title="Certificates"
          description="Verified credentials in software engineering, data, and AI — from HackerRank, Coursera, IBM, and more."
        />

        <Grid>
          {certificates.map((cert, index) => (
            <Card key={cert.id} type="button" onClick={() => show(index)}>
              <Preview>
                <img src={cert.image} alt={cert.title} />
              </Preview>
              <CardTitle>{cert.title}</CardTitle>
              <Badge>
                <Style />
              </Badge>
            </Card>
          ))}
        </Grid>
      </Wrapper>

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
              <NavBtn $side="left" type="button" onClick={prev} aria-label="Previous certificate">
                <ChevronLeft />
              </NavBtn>
              <NavBtn $side="right" type="button" onClick={next} aria-label="Next certificate">
                <ChevronRight />
              </NavBtn>
              <Caption>
                <CaptionTitle>{current.title}</CaptionTitle>
                {current.description && <CaptionMeta>{current.description}</CaptionMeta>}
                <Counter>
                  {active + 1} / {certificates.length}
                </Counter>
              </Caption>
            </Stage>
          </Overlay>,
          document.body
        )}
    </Container>
  );
};

export default Certificates;
