import React, { Component, useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const fillField = (count, spread, depth) => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    arr[i3] = (Math.random() - 0.5) * spread * 2;
    arr[i3 + 1] = (Math.random() - 0.5) * spread * 2;
    arr[i3 + 2] = -Math.random() * depth - 0.4;
  }
  return arr;
};

const StarField = ({ count, spread, depth, speed, size, color, opacity = 0.85 }) => {
  const ref = useRef();
  const positions = useMemo(
    () => fillField(count, spread, depth),
    [count, spread, depth]
  );

  useFrame((_, delta) => {
    const points = ref.current;
    if (!points) return;
    const arr = points.geometry.attributes.position.array;
    const step = speed * Math.min(delta, 0.05);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3 + 2] += step;
      if (arr[i3 + 2] > 1.6) {
        arr[i3] = (Math.random() - 0.5) * spread * 2;
        arr[i3 + 1] = (Math.random() - 0.5) * spread * 2;
        arr[i3 + 2] = -depth;
      }
    }
    points.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={opacity}
      />
    </Points>
  );
};

const Stars = () => {
  const isMobile =
    typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const farCount = isMobile ? 1400 : 2800;
  const nearCount = isMobile ? 500 : 900;
  const farSpeed = reduce ? 0.02 : 0.09;
  const nearSpeed = reduce ? 0.03 : 0.16;

  return (
    <>
      <StarField
        count={farCount}
        spread={10}
        depth={24}
        speed={farSpeed}
        size={0.01}
        color="#f4e9ff"
        opacity={0.7}
      />
      <StarField
        count={nearCount}
        spread={5.5}
        depth={16}
        speed={nearSpeed}
        size={0.018}
        color="#f272c8"
        opacity={0.9}
      />
    </>
  );
};

class CanvasGuard extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <CanvasGuard>
        <Canvas
          camera={{ position: [0, 0, 0], fov: 68, near: 0.01, far: 40 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true }}
        >
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </CanvasGuard>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
