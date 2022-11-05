import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model() {
  const gltf = useLoader(GLTFLoader, "/award/scene.gltf");
  //   const gltf2 = useLoader(GLTFLoader, "/puppy/scene.gltf");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
      {/* <primitive object={gltf2.scene} /> */}
    </Suspense>
  );
}
