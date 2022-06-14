import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import ModelDuck from "./Model";

export default function Threejs() {
  const ref = useRef();

  return (
    <>
      <div className="w-96 h-96">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={1}
              environment="city"
            >
              {/* <Environment background={true} files={"/Field-Path-4K.hdr"} /> */}
              <ModelDuck />
            </Stage>
          </Suspense>
          <OrbitControls
            ref={ref}
            // autoRotate
          />
        </Canvas>
      </div>
    </>
  );
}
