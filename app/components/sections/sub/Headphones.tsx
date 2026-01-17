"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import H from "../../H";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import { easeOut, motion } from "framer-motion";

const HeadphonesModel = () => {
  const ref = useRef<THREE.Group>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [targetRotation, setTargetRotation] = useState(0);

  useFrame((_, delta) => {
    if (!ref.current) return;

    if (!isUserInteracting) {
      ref.current.rotation.y += delta * 0.3;
      setTargetRotation(ref.current.rotation.y);
    } else {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        targetRotation,
        0.05
      );
    }
  });

  return (
    <group ref={ref} scale={1.08}>
      <H />
    </group>
  );
};

export default function Headphones() {
  const controlsRef = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);

  const width = useWindowWidth();

  const scale =
    width >= 768 && width <= 990
      ? 0.7
      : width < 768
      ? 1.2
      : width >= 1024 && width <= 1280
      ? 0.9
      : 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: easeOut, delay: 2 }}
      className="w-[100%] lg:w-[40%] md:h-[700px] h-[350px] mt-10 lg:mt-0 overflow-hidden md:mr-5"
    >
      <Canvas className="!w-full !h-full">
        <directionalLight
          intensity={1.8}
          position={[2, 6, 4]}
          color="#ffffff"
        />
        <directionalLight
          intensity={0.5}
          position={[-3, 1.5, -2]}
          color="#4a4d60"
        />
        <spotLight
          intensity={0.3}
          position={[0, 5, 2]}
          angle={0.45}
          penumbra={1}
          color="#FDD90B"
        />
        <spotLight
          intensity={0.25}
          position={[0, 8, 0]}
          angle={0.6}
          penumbra={1}
          color="#ffffff"
        />
        <spotLight
          intensity={0.12}
          position={[0, -3, 0]}
          angle={1}
          penumbra={1}
          color="#FDD90B"
        />
        <spotLight
          intensity={0.6}
          position={[0, 5, 3]}
          angle={0.35}
          penumbra={0.8}
          color="#ffffff"
          castShadow
        />
        <ambientLight intensity={0.6} />
        <Environment preset="city" />
        <mesh
          position={
            scale == 0.7
              ? [0, -1.5, 0]
              : scale == 1.2
              ? [0, -2.6, 0]
              : [0, -2.3, 0]
          }
          rotation={[0, Math.PI / -8, 0]}
          scale={scale}
        >
          <HeadphonesModel />
        </mesh>

        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          onStart={() => setIsDragging(true)}
          onEnd={() => setIsDragging(false)}
        />
      </Canvas>
    </motion.div>
  );
}
