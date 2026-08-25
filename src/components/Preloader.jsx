import React from "react";
import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.02); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  background: ${({ theme }) => theme.bg};
  animation: ${fadeOut} 0.5s ease 2s forwards;
  pointer-events: none;
`;

const Spinner = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.primary + "28"};
  border-top-color: ${({ theme }) => theme.primary};
  border-right-color: #c026d3;
  animation: ${spin} 0.9s linear infinite;
  box-shadow: 0 0 28px ${({ theme }) => theme.primary + "55"};

  @media (max-width: 480px) {
    width: 88px;
    height: 88px;
    border-width: 7px;
  }
`;

const Mark = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.25;
  animation: ${pulse} 1.4s ease-in-out infinite;
  padding: 0 16px;

  @media (max-width: 640px) {
    font-size: 26px;
  }

  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

const Preloader = () => (
  <Overlay aria-hidden="true">
    <Spinner />
    <Mark>&lt;Aditya Chauhan /&gt;</Mark>
  </Overlay>
);

export default Preloader;
