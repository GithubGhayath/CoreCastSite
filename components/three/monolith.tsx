"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Environment, Float, Lightformer, Resize, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

/**
 * The CORECAST monolith — the brand logo cast in brushed metal, suspended
 * in a dark architectural void. Warm light sweeps across it, dust drifts,
 * and scroll slowly orbits the camera as the form "takes shape".
 * Stands in for (and layers under) the Seedance hero clip.
 */

const LOGO_URL = "/CoreCastSite/corecast-logo.glb";

/**
 * The logo GLB ships as an extruded SVG with a flat black material, which
 * reads as a silhouette against the void — so we swap in brushed metal that
 * catches the sweeping key light.
 */
function LogoModel() {
  const { scene } = useGLTF(LOGO_URL);

  const model = useMemo(() => scene.clone(true), [scene]);

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#2b2536",
        metalness: 0.95,
        roughness: 0.22,
        clearcoat: 1,
        clearcoatRoughness: 0.25,
      }),
    []
  );

  useEffect(() => {
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = material;
        child.castShadow = true;
      }
    });
  }, [model, material]);

  useEffect(() => () => material.dispose(), [material]);

  // The GLB exports Z-up, so the logo lands lying flat in the XZ plane —
  // the X rotation stands it up facing the camera. Center + Resize measure
  // the rotated bounds, so framing holds whatever units the GLB was authored in.
  return (
    <Center>
      <Resize scale={3.6}>
        <primitive object={model} rotation={[Math.PI / 2, 0, 0]} />
      </Resize>
    </Center>
  );
}

useGLTF.preload(LOGO_URL);

function MonolithForm({ progress }: { progress: MotionValue<number> }) {
  const group = useRef<THREE.Group>(null);
  const shardA = useRef<THREE.Mesh>(null);
  const shardB = useRef<THREE.Mesh>(null);
  const key = useRef<THREE.SpotLight>(null);
  // hover glow — a pink light that tracks the pointer across the surface
  const glow = useRef<THREE.PointLight>(null);
  const [hovered, setHovered] = useState(false);
  const glowTarget = useRef(new THREE.Vector3(0, 0, 2));
  const glowLocal = useRef(new THREE.Vector3());

  useFrame(({ clock, camera, pointer }) => {
    const t = clock.getElapsedTime();
    const p = progress.get();

    // ease the glow toward the last hovered point and fade with hover state
    if (glow.current) {
      glowLocal.current.copy(glowTarget.current);
      glow.current.parent?.worldToLocal(glowLocal.current);
      glow.current.position.lerp(glowLocal.current, 0.18);
      const targetIntensity = hovered ? 110 : 0;
      glow.current.intensity += (targetIntensity - glow.current.intensity) * 0.12;
    }

    if (group.current) {
      // scroll drives the slow orbit; time adds breathing
      group.current.rotation.y = p * Math.PI * 1.2 + t * 0.06;
      group.current.rotation.x = Math.sin(t * 0.18) * 0.03 + p * 0.18;
      group.current.position.y = Math.sin(t * 0.4) * 0.08 - p * 0.3;
    }
    // shards drift apart as creativity "takes shape"
    const spread = 0.55 + Math.sin(t * 0.3) * 0.06 + p * 0.9;
    if (shardA.current) {
      shardA.current.position.x = spread;
      shardA.current.position.y = 0.7 + p * 0.5;
      shardA.current.rotation.z = 0.35 + t * 0.05;
    }
    if (shardB.current) {
      shardB.current.position.x = -spread * 0.8;
      shardB.current.position.y = -0.9 - p * 0.4;
      shardB.current.rotation.z = -0.3 - t * 0.04;
    }
    // warm key light sweeps like a moving practical
    if (key.current) {
      key.current.position.x = Math.sin(t * 0.35) * 6;
      key.current.position.z = Math.cos(t * 0.35) * 6 + 2;
      key.current.intensity = 90 + Math.sin(t * 0.7) * 35;
    }
    // gentle pointer parallax
    camera.position.x += (pointer.x * 0.5 - camera.position.x) * 0.03;
    camera.position.y += (0.2 + pointer.y * 0.3 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <spotLight
        ref={key}
        position={[5, 4, 4]}
        angle={0.5}
        penumbra={1}
        color="#f38d90"
        intensity={100}
        distance={30}
      />
      <spotLight
        position={[-6, -2, 3]}
        angle={0.6}
        penumbra={1}
        color="#65489b"
        intensity={38}
        distance={25}
      />
      {/* hover glow — tracks the pointer, fades in only while over the form */}
      <pointLight ref={glow} color="#e663a5" intensity={0} distance={9} decay={2} />

      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.35}>
        <group
          ref={group}
          onPointerMove={(e) => {
            e.stopPropagation();
            glowTarget.current.copy(e.point);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={() => setHovered(false)}
        >
          {/* the CORECAST logo, cast in brushed metal */}
          <Suspense fallback={null}>
            <LogoModel />
          </Suspense>
          {/* orbiting shards */}

        </group>
      </Float>
    </>
  );
}

/** Shrinks the set on narrow viewports so the monolith frames, not fills. */
function ResponsiveStage({ children }: { children: React.ReactNode }) {
  const { viewport } = useThree();
  const scale = Math.min(1, Math.max(0.58, viewport.width / 7));
  return <group scale={scale}>{children}</group>;
}

function Dust() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(420 * 3);
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 14;
      arr[i + 1] = (Math.random() - 0.5) * 9;
      arr[i + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.015;
    ref.current.position.y = Math.sin(t * 0.2) * 0.25;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#e58fb8"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function MonolithScene({
  progress,
  fogColor = "#1d1c29",
}: {
  progress: MotionValue<number>;
  fogColor?: string;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 8.5], fov: 32 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <fog attach="fog" args={[fogColor, 8, 20]} />
      <ambientLight intensity={0.12} />
      <ResponsiveStage>
        <MonolithForm progress={progress} />
      </ResponsiveStage>
      <Dust />
      {/* local lightformer environment — no network HDRIs */}
      <Environment resolution={256}>
        <Lightformer
          position={[4, 3, 2]}
          scale={[8, 1.6, 1]}
          color="#f79e83"
          intensity={2.2}
        />
        <Lightformer
          position={[-5, -1, 3]}
          scale={[6, 1, 1]}
          color="#5f4196"
          intensity={1.3}
        />
        <Lightformer
          position={[0, 5, -4]}
          scale={[10, 2, 1]}
          color="#d863a5"
          intensity={0.7}
        />
      </Environment>
    </Canvas>
  );
}
