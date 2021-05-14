import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Table(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../scene.gltf')
  return (
    <group receiveShadow ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 1.3, -0.5]} scale={[2, 2, 2]}>
            <mesh geometry={nodes.mesh_0.geometry} material={materials.qita} />
            <mesh geometry={nodes.mesh_1.geometry} material={materials.lvzhi} />
            <mesh geometry={nodes.mesh_2.geometry} material={materials.zhuoyi} />
            <mesh geometry={nodes.mesh_3.geometry} material={materials.material} />
            <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
            <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
            <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
            <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../scene.gltf')
