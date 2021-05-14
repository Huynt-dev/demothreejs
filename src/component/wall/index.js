import React from "react";

const Wall = ({ width, height, depth, x, z, rotation }) => {
      return (
            <mesh position={[x, height / 2, z]} rotation={rotation} castShadow receiveShadow>
                  <boxGeometry attach="geometry" args={[width, height, depth]} />
                  <meshStandardMaterial attach="material" />
            </mesh>
      );
};

export default Wall;
