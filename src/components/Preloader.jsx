import { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import imgOutdoors from "../images/loading-screen/aditya-outdoors.jpeg";
import imgTemple from "../images/loading-screen/aditya-temple.jpeg";
import imgUjjain from "../images/loading-screen/aditya-ujjain.jpeg";
import imgWorkspace from "../images/loading-screen/aditya-workspace.jpeg";
import imgWorkspaceClose from "../images/loading-screen/aditya-workspace-close.jpeg";

const DURATION_MS = 6500;
const EXIT_MS = 700;
const ACCENT = "#6d7bff";

const SLIDES = [
  { src: imgOutdoors, position: "center 18%" },
  { src: imgTemple, position: "center 42%" },
  { src: imgUjjain, position: "center 12%" },
  { src: imgWorkspace, position: "center 28%" },
  { src: imgWorkspaceClose, position: "center 22%" },
];

const pickSlide = () =>
  SLIDES[Math.floor(Math.random() * SLIDES.length)] ?? SLIDES[0];

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const kenBurns = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.08); }
`;

const fadeOut = keyframes`
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const grainShift = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-3%, 4%); }
  50% { transform: translate(4%, -2%); }
  75% { transform: translate(-5%, -3%); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #050308;
  color: #fff;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  animation: ${({ $exiting }) =>
    $exiting
      ? css`
          ${fadeOut} ${EXIT_MS}ms ease forwards
        `
      : "none"};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Ambient = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at center, rgba(28, 12, 48, 0.45) 0%, rgba(5, 3, 8, 1) 70%),
    linear-gradient(180deg, #000 0%, transparent 12%, transparent 88%, #000 100%);
`;

const Grain = styled.div`
  position: absolute;
  inset: -40%;
  width: 180%;
  height: 180%;
  pointer-events: none;
  opacity: 0.09;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  animation: ${grainShift} 0.8s steps(2) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Shell = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  animation: ${fadeIn} 0.65s ease both;
  pointer-events: none;
`;

const BrandTitle = styled.h1`
  margin: 0 0 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;

  @media (max-width: 640px) {
    margin-bottom: 22px;
  }
`;

const TagMark = styled.span`
  color: #854ce6;
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
`;

const NameText = styled.span`
  color: #fff;
  font-size: clamp(24px, 4.4vw, 34px);
  font-weight: 700;
`;

const SlashText = styled.span`
  color: #854ce6;
  font-size: clamp(24px, 4.4vw, 34px);
  font-weight: 700;
  margin: 0 6px;
`;

const Orbital = styled.div`
  position: relative;
  width: min(360px, 82vw);
  height: min(360px, 82vw);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding-top: 12px;

  @media (max-width: 640px) {
    width: min(200px, 58vw, 38vh);
    height: min(200px, 58vw, 38vh);
    margin-top: 6px;
    padding-top: 10px;
  }
`;

const PhotoClip = styled.div`
  width: 74%;
  height: 74%;
  border-radius: 50%;
  overflow: hidden;
  background: #0a0710;
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.4),
    inset 0 0 0 2px rgba(255, 255, 255, 0.08);
`;

const Artwork = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $position }) => $position || "center"};
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
  filter: contrast(1.08) saturate(1.1) brightness(0.94);
  transform-origin: center center;
  will-change: transform;
  transition: opacity 0.45s ease;
  animation: ${({ $ready, $motion }) =>
    $ready && $motion
      ? css`
          ${kenBurns} ${DURATION_MS}ms linear forwards
        `
      : "none"};
`;

const OrbitalSvg = styled.svg`
  position: absolute;
  inset: -6%;
  width: 112%;
  height: 112%;
  overflow: visible;
  pointer-events: none;
`;

const Orbit = styled.g`
  transform-origin: 50px 50px;
  animation: ${({ $duration, $reverse, $reduce }) =>
    $reduce
      ? "none"
      : css`
          ${spin} ${$duration}s linear infinite
        `};
  animation-direction: ${({ $reverse }) => ($reverse ? "reverse" : "normal")};
`;

const Percent = styled.p`
  margin: 0;
  font-family: "Oswald", "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 0.22em;
  color: rgba(255, 255, 255, 0.9);
`;

const Roles = styled.p`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`;

const RoleMark = styled.span`
  color: #854ce6;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 640px) {
    font-size: 13px;
  }
`;

const RoleText = styled.span`
  color: #fff;
  font-size: 13px;
  font-weight: 700;

  @media (max-width: 640px) {
    font-size: 11px;
  }
`;

const RoleSlash = styled.span`
  color: #854ce6;
  font-size: 13px;
  font-weight: 700;
  margin: 0 6px;

  @media (max-width: 640px) {
    font-size: 11px;
    margin: 0 4px;
  }
`;

const Preloader = ({ onComplete }) => {
  const [slide] = useState(pickSlide);
  const [ready, setReady] = useState(false);
  const [exiting, setExiting] = useState(false);
  const motion =
    typeof window === "undefined" ||
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = motion ? DURATION_MS : 1200;
  const exitingRef = useRef(false);
  const startRef = useRef(0);
  const frameRef = useRef(0);
  const percentRef = useRef(null);
  const imgRef = useRef(null);

  const finish = useCallback(() => {
    if (exitingRef.current) return;
    exitingRef.current = true;
    if (percentRef.current) percentRef.current.textContent = "100%";
    setExiting(true);
    window.setTimeout(() => onComplete?.(), EXIT_MS);
  }, [onComplete]);

  useEffect(() => {
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, []);

  useEffect(() => {
    if (imgRef.current?.complete) setReady(true);
  }, [slide]);

  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now) => {
      if (exitingRef.current) return;
      const pct = Math.min(100, ((now - startRef.current) / duration) * 100);
      if (percentRef.current) {
        percentRef.current.textContent = `${Math.round(pct)}%`;
      }
      if (pct >= 100) {
        finish();
        return;
      }
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [duration, finish]);

  useEffect(() => {
    const onKey = (event) => {
      if (["Escape", "Enter", " ", "Spacebar"].includes(event.key)) {
        event.preventDefault();
        finish();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [finish]);

  return (
    <Overlay
      $exiting={exiting}
      onClick={finish}
      role="dialog"
      aria-modal="true"
      aria-label="Loading Aditya Chauhan portfolio"
      aria-busy={!exiting}
    >
      <Ambient />
      <Grain />

      <Shell>
        <BrandTitle>
          <TagMark>&lt;</TagMark>
          <NameText>Aditya</NameText>
          <SlashText>/</SlashText>
          <NameText>Chauhan</NameText>
          <TagMark>&gt;</TagMark>
        </BrandTitle>

        <Orbital>
          <PhotoClip>
            <Artwork
              ref={imgRef}
              src={slide.src}
              alt="Aditya Chauhan"
              draggable="false"
              $position={slide.position}
              $ready={ready}
              $motion={motion}
              onLoad={() => setReady(true)}
              onError={() => setReady(true)}
            />
          </PhotoClip>
          <OrbitalSvg viewBox="0 0 100 100" aria-hidden="true">
            <Orbit $duration={1.15} $reverse={false} $reduce={!motion}>
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke={ACCENT}
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeDasharray="216 73"
              />
            </Orbit>
            <Orbit $duration={1.7} $reverse $reduce={!motion}>
              <circle
                cx="50"
                cy="50"
                r="43.5"
                fill="none"
                stroke={ACCENT}
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeDasharray="90 168"
              />
            </Orbit>
            <Orbit $duration={2.2} $reverse={false} $reduce={!motion}>
              <circle
                cx="50"
                cy="50"
                r="39.5"
                fill="none"
                stroke={ACCENT}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray="58 171"
              />
            </Orbit>
            <Orbit $duration={1.45} $reverse $reduce={!motion}>
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke={ACCENT}
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeDasharray="38 166"
              />
            </Orbit>
          </OrbitalSvg>
        </Orbital>

        <Percent ref={percentRef} aria-live="polite">
          0%
        </Percent>

        <Roles>
          <RoleMark>&lt;</RoleMark>
          <RoleText>Software Engineer</RoleText>
          <RoleSlash>/</RoleSlash>
          <RoleText>Technical Corporate Trainer</RoleText>
          <RoleMark>&gt;</RoleMark>
        </Roles>
      </Shell>
    </Overlay>
  );
};

export default Preloader;
