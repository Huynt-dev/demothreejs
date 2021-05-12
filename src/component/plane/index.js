import React from "react";
// import { BackSide } from "three";
const Plane = () => {
      return (
            <group position={[0, 0, 0]}>
                  <mesh rotation={[-Math.PI / 2, 0, 0]} dispose={null} receiveShadow>
                        <planeBufferGeometry attach="geometry" args={[100, 100]} />

                        <shadowMaterial transparent opacity={0.4} />
                        {/* <meshBasicMaterial attach="material" color="green" side={BackSide} /> */}
                  </mesh>
            </group>
      );
};

export default Plane;



