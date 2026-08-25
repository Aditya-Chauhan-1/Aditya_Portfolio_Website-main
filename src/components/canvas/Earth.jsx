import React, { Component, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
};

class EarthErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback || null;
    return this.props.children;
  }
}

const EarthCanvas = () => {
  const pixelRatio =
    typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

  return (
    <EarthErrorBoundary>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, pixelRatio]}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          maxHeight: "500px",
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enablePan={false}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </EarthErrorBoundary>
  );
};

export default EarthCanvas;
