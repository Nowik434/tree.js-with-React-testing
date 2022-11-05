import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./components/Model";

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
