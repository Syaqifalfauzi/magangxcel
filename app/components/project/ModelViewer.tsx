"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Suspense } from "react";

function Model({ url }: { url: string }) {
  const obj = useLoader(OBJLoader, url);
  return <primitive object={obj} scale={1} />;
}

export default function ModelViewer({ src }: { src: string }) {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />

        <Suspense fallback={null}>
          <Model url={src} />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
