import { Canvas } from "@react-three/fiber";
import H from "../../H";
import { OrbitControls } from "@react-three/drei";

const Headphones = () => {
  return (
    <div className="w-[40%] h-screen">
      <Canvas>
        <mesh position={[0, -2, 0]} rotation={[0, Math.PI / -7, 0]}>
          <directionalLight intensity={4} />
          <ambientLight intensity={10} />

          {/* <OrbitControls /> */}
          <H />
        </mesh>
      </Canvas>
    </div>
  );
};
export default Headphones;
