import React from "react";
// import { BackSide } from "three";
import { Plane as PlaneA } from "@react-three/drei";
const Plane = () => {
      return (
            <mesh>
                  <PlaneA
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, 0, 0]}
                        args={[100, 100]}
                        receiveShadow
                  >
                        <meshStandardMaterial attach="material" color="green" />
                  </PlaneA>

                  {/* <shadowMaterial transparent opacity={0.4} /> */}
                  {/* <meshBasicMaterial attach="material" color="green" side={BackSide} /> */}
            </mesh>
      );
};

export default Plane;



