import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 9999;
  background: transparent;
  pointer-events: none;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #c026d3);
  box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  transition: width 0.08s linear;
`;

const PageProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (window.scrollY / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ProgressBar role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin="0" aria-valuemax="100">
      <ProgressFill $progress={progress} />
    </ProgressBar>
  );
};

export default PageProgress;
