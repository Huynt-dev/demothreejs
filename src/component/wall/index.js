import React from "react";

const Wall = ({ width, height, depth, position, rotation }) => {
      return (
            <group position={[0, 0, 0]}>
                  <mesh position={position} rotation={rotation} dispose={null} receiveShadow castShadow>
                        <boxBufferGeometry attach="geometry" scale={[14, 2, 3]} args={[width, height, depth]} />
                        <meshStandardMaterial attach="material" />
                  </mesh>
            </group>
      );
};

export default Wall;
