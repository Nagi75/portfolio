import { JSX, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

// Define proper types for the GLTF structure
type GLTFResult = {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

export function Room(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb") as unknown as GLTFResult;

  const screensRef = useRef<THREE.Mesh>(null);
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const curtainMaterial = new THREE.MeshPhongMaterial({ color: "#d90429" });
  const bodyMaterial = new THREE.MeshPhongMaterial({ map: matcapTexture });
  const tableMaterial = new THREE.MeshPhongMaterial({ color: "#582f0e" });
  const radiatorMaterial = new THREE.MeshPhongMaterial({ color: "#fff" });
  const compMaterial = new THREE.MeshStandardMaterial({ color: "#fff" });
  const pillowMaterial = new THREE.MeshPhongMaterial({ color: "#8338ec" });
  const chairMaterial = new THREE.MeshPhongMaterial({ color: "#000" });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef.current ?? undefined}
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      {/* Example: curtain mesh */}
      <mesh
        geometry={nodes["_________6_blinn1_0"].geometry}
        material={curtainMaterial}
      />

      {/* Bloom-enabled screen mesh */}
      <mesh
        ref={screensRef}
        geometry={nodes["emis_lambert1_0"].geometry}
        material={materials["lambert1"]}
      />

      {/* You can add more meshes below similarly and assign the materials accordingly */}
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
