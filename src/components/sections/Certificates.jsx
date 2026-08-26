import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ChevronLeft, ChevronRight, Close, Style } from "@mui/icons-material";
import { certificates } from "../../data/constants";
import SectionHeader from "../SectionHeader";

const ACCENT = "#f5a524";
const DOT_WINDOW = 9;

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
  background: rgba(8, 10, 14, 0.82);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 72px 20px 32px;
  overflow: hidden;

  @media (max-width: 700px) {
    padding: max(56px, env(safe-area-inset-top)) 14px max(18px, env(safe-area-inset-bottom));
  }
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 18px;
  right: 18px;
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px !important;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  background: rgba(18, 18, 24, 0.72);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6001;

  @media (max-width: 700px) {
    top: max(12px, env(safe-area-inset-top));
    right: max(12px, env(safe-area-inset-right));
    width: 38px;
    height: 38px;
    min-width: 38px;
    min-height: 38px !important;
  }
`;

const Stage = styled.div`
  position: relative;
  width: min(920px, 100%);
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr) 56px;
  grid-template-areas:
    "prev viewer next"
    ". caption ."
    ". dots .";
  column-gap: 8px;
  row-gap: 14px;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
    grid-template-columns: 52px minmax(0, 1fr) 52px;
    grid-template-areas:
      "viewer viewer viewer"
      "caption caption caption"
      "prev . next"
      "dots dots dots";
    column-gap: 10px;
    row-gap: 10px;
    touch-action: pan-y;
  }
`;

const Viewer = styled.div`
  grid-area: viewer;
  width: 100%;
  min-width: 0;
`;

const NavBtn = styled.button`
  grid-area: ${({ $side }) => ($side === "left" ? "prev" : "next")};
  justify-self: center;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px !important;
  border: none;
  border-radius: 50%;
  background: ${ACCENT};
  color: #111;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  z-index: 2;

  svg {
    font-size: 28px;
  }

  @media (max-width: 700px) {
    width: 52px;
    height: 52px;
    min-width: 52px;
    min-height: 52px !important;
  }
`;

const Frame = styled.div`
  width: 100%;
  height: min(62vh, 560px);
  background: #fff;
  border-radius: 18px;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }

  @media (max-width: 700px) {
    height: 52vh;
    min-height: 52vh;
    border-radius: 22px;
    padding: 8px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);

    img {
      border-radius: 16px;
    }
  }
`;

const Caption = styled.div`
  grid-area: caption;
  margin-top: 4px;
  text-align: center;
  color: #fff;
  max-width: 720px;
  justify-self: center;

  @media (max-width: 700px) {
    margin-top: 2px;
    padding: 0 8px;
  }
`;

const CaptionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 1.3;
  }
`;

const CaptionMeta = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 8px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Counter = styled.p`
  font-size: 14px;
  opacity: 0.9;
`;

const Dots = styled.div`
  grid-area: dots;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-top: 0;
  max-width: 100%;
  justify-self: center;

  @media (max-width: 700px) {
    margin-top: 2px;
  }
`;

const Dot = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: ${({ $active }) => ($active ? "22px" : "8px")};
  height: 8px;
  min-width: ${({ $active }) => ($active ? "22px" : "8px")};
  min-height: 8px !important;
  border-radius: 99px;
  background: ${({ $active }) => ($active ? ACCENT : "rgba(255, 255, 255, 0.38)")};
  transition: width 0.2s ease, background 0.2s ease;
`;

const Certificates = () => {
  const [active, setActive] = useState(null);
  const touchStartX = useRef(null);

  const close = () => setActive(null);
  const show = (index) => {
    const preload = new Image();
    preload.src = certificates[index].image;
    setActive(index);
  };

  const next = () => {
    setActive((i) => (i + 1) % certificates.length);
  };

  const prev = () => {
    setActive((i) => (i === 0 ? certificates.length - 1 : i - 1));
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchStartX.current = null;
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

    const neighbors = [
      certificates[(active + 1) % certificates.length],
      certificates[active === 0 ? certificates.length - 1 : active - 1],
    ];
    neighbors.forEach((cert) => {
      const img = new Image();
      img.src = cert.image;
    });

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const current = active !== null ? certificates[active] : null;
  const total = certificates.length;
  const dotStart =
    active === null || total <= DOT_WINDOW
      ? 0
      : Math.max(0, Math.min(active - Math.floor(DOT_WINDOW / 2), total - DOT_WINDOW));
  const dotIndices =
    active === null
      ? []
      : Array.from({ length: Math.min(DOT_WINDOW, total) }, (_, i) => dotStart + i);

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
                <img src={cert.image} alt={cert.title} loading="eager" decoding="async" />
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
            <Stage
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Viewer>
                <Frame>
                  <img
                    src={current.image}
                    alt={current.title}
                    loading="eager"
                    decoding="async"
                  />
                </Frame>
              </Viewer>
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
                  {active + 1} / {total}
                </Counter>
              </Caption>
              <Dots>
                {dotIndices.map((index) => (
                  <Dot
                    key={index}
                    type="button"
                    $active={index === active}
                    aria-label={`Show certificate ${index + 1}`}
                    onClick={() => setActive(index)}
                  />
                ))}
              </Dots>
            </Stage>
          </Overlay>,
          document.body
        )}
    </Container>
  );
};

export default Certificates;
