import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows, PerspectiveCamera, Html } from "@react-three/drei";

import { Wall, Plane, Table } from './component'
softShadows()

// function Table() {
//   const { nodes } = useGLTF("/scene.gltf");

//   return (

//     <mesh geometry={nodes.Default.geometry}>
//       <meshStandardMaterial
//         attach="material"
//         // color="green"
//         roughness={0.3}
//         metalness={0.3}
//       />
//     </mesh>

//   );
// }


const App = () => {
  return (
    <Canvas shadows style={{ height: "100vh", width: "100vw" }}>

      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <ambientLight intensity={0.4} />

      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <PerspectiveCamera position={[20, 20, 20]} fov={40} near={10} far={1000} makeDefault />

      <Suspense fallback={<Html>loading..</Html>}>
        <Table />
      </Suspense>

      <Wall width='10' height='4' depth='0.2' position={[0, 2, 3]} />
      <Wall width='6' height='4' depth='0.2' position={[-5, 2, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Wall width='5' height='4' depth='0.2' position={[5, 2, 0.6]} rotation={[0, -Math.PI / 2, 0]} />
      <Wall width='10' height='4' depth='0.2' position={[2.5, 2, -6.2]} rotation={[0, -Math.PI / 3, 0]} />
      <Wall width='10' height='4' depth='0.2' position={[-5, 2, -10.5]} rotation={[0, -Math.PI / 1, 0]} />
      <Wall width='7.6' height='4' depth='0.2' position={[-10, 2, -6.7]} rotation={[0, -Math.PI / 2, 0]} />
      <Wall width='5' height='4' depth='0.2' position={[-7.5, 2, -3]} rotation={[0, -Math.PI / 1, 0]} />
      <Plane />

      <OrbitControls />
    </Canvas>
  )
}

export default App;
