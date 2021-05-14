import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows, Html, PerspectiveCamera } from "@react-three/drei";
import "./styles.css";

import { Wall, Plane, Table } from './component'
softShadows()

const App = () => {
  return (
    <Canvas shadows colorManagement camera={{ position: [5, 10, 10], fov: 90 }} >
      {/* <PerspectiveCamera position={[20, 30, 20]} fov={40} near={1} far={1000} makeDefault /> */}
      <fog attach="fog" args={["white", 0, 60]} />
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[0, 10, 6]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={150}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* <sphereGeometry attach="geometry" args={[1, 16, 16]} /> */}

      <Suspense fallback={<Html>loading..</Html>}>
        <Table />
      </Suspense>

      <Wall width='10' height='5' depth='0.2' x='0' z='3' rotation={[0, 0, 0]} />
      <Wall width='2' height='50' depth='2' x='0' z='-5' rotation={[0, 0, 0]} />
      <Wall width='6' height='4' depth='0.2' x='-5' z='0' rotation={[0, -Math.PI / 2, 0]} />
      <Wall width='5' height='6' depth='0.2' x='5' z='0.6' rotation={[0, -Math.PI / 2, 0]} />
      <Wall width='10' height='7' depth='0.2' x='2.5' z='-6.2' rotation={[0, -Math.PI / 3, 0]} />
      <Wall width='10' height='3' depth='0.2' x='-5' z='-10.5' rotation={[0, -Math.PI / 1, 0]} />
      <Wall width='7.6' height='5' depth='0.2' x='-10' z='-6.7' rotation={[0, -Math.PI / 2, 0]} />
      <Wall width='5' height='8' depth='0.2' x='-7.5' z='-3' rotation={[0, -Math.PI / 1, 0]} />
      <Plane />

      <OrbitControls />
    </Canvas>
  )
}

export default App;
