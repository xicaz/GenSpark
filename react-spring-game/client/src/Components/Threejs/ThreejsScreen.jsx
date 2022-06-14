import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useIntersect, Image, ScrollControls, Scroll } from "@react-three/drei";

function Item({ url, scale, ...props }) {
  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    );
  });
  return (
    <group {...props}>
      <Image ref={ref} scale={scale} url={url} />
    </group>
  );
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/c73/c73ab7fe15aeefc812509a255602e08a.jpg"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 6, 0, 0]}
      />
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/507/507556b240b4911313f28608bff75685.jpg"
        scale={[2, w / 3, 1]}
        position={[w / 30, -h, 0]}
      />
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 1, 0]}
      />
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/bb9/bb9e9ca5cbe6b94d1b3965f557446481.jpg"
        scale={[w / 5, w / 5, 1]}
        position={[w / 4, -h * 1.2, 0]}
      />
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/be1/be1592620c31d8eedce6744dbfa088c2.jpg"
        scale={[w / 5, w / 5, 1]}
        position={[w / 10, -h * 1.75, 0]}
      />
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/532/532116fd079b1d9126f938c2b2f34ff8.jpg"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 4, -h * 2, 0]}
      />
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/797/7976cd46c437ec13f7f8e70c1f1dbee8.jpg"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 2.6, 0]}
      />
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/719/7195a085686a3acf881768cb5c62c8ed.jpg"
        scale={[w / 2, w / 2, 1]}
        position={[w / 4, -h * 3.1, 0]}
      />
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/7e2/7e2053efaed369b133dd574095294719.jpg"
        scale={[w / 2.5, w / 2, 1]}
        position={[-w / 6, -h * 4.1, 0]}
      />
      <Item
        url="https://media.rawg.io/media/resize/1920/-/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
        scale={[w / 2.5, w / 2, 1]}
        position={[-w / 6, -h * 4.1, 0]}
      />
    </Scroll>
  );
}

export default function ThreejsScreen() {
  // const classBg = "bg-gradient-to-r from-white to-red-300";

  return (
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={[""]} />
      <ScrollControls damping={6} pages={5}>
        <Items />
        <Scroll html style={{ width: "100%" }}>
          <h1
            style={{
              fontFamily: "ABC Camera Black",
              lineHeight: "100px",
              fontWeight: "700",
              position: "absolute",
              top: `100vh`,
              right: "20vw",
              fontSize: "130px",
              transform: `translate3d(0,-137%,0)`,
              color: "black",
            }}
          >
            a game
            <br />
            about games
          </h1>
          <h1
            style={{
              fontFamily: "ABC Camera Black",
              position: "absolute",
              top: "180vh",
              left: "10vw",
              fontSize: "10em",
              color: "black",
            }}
          >
            about games
          </h1>
          <h1
            style={{
              fontFamily: "ABC Camera Black",
              position: "absolute",
              top: "260vh",
              right: "10vw",
              fontSize: "10em",
              color: "black",
            }}
          >
            with
          </h1>
          <h1
            style={{
              fontFamily: "ABC Camera Black",
              position: "absolute",
              top: "350vh",
              left: "10vw",
              fontSize: "10em",
              color: "black",
            }}
          >
            more
          </h1>
          <h1
            style={{
              fontFamily: "ABC Camera Black",
              position: "absolute",
              top: "450vh",
              right: "10vw",
              fontSize: "10em",
              color: "black",
            }}
          >
            games
            <br />
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
