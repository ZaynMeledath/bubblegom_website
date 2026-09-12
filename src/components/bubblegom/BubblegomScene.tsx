import { createBubblegomGeometry } from "@/lib/bubblegom-geometry";
import {
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const SCENE = {
  dark: "#050508",
  pink: "#ff1893",
  magenta: "#d912f0",
  purple: "#731bf4",
  blue: "#065ef8",
  cyan: "#00e8ff",
  white: "#ffffff",
};

// Subtle ambient particle dust floating in 3D
function AmbientDust({ count = 90 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color(SCENE.pink),
      new THREE.Color(SCENE.cyan),
      new THREE.Color(SCENE.purple),
      new THREE.Color(SCENE.white),
    ];

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      pos[idx] = (Math.random() - 0.5) * 14;
      pos[idx + 1] = (Math.random() - 0.5) * 12;
      pos[idx + 2] = (Math.random() - 0.5) * 8 - 1;

      const c = palette[Math.floor(Math.random() * palette.length)]!;
      col[idx] = c.r;
      col[idx + 1] = c.g;
      col[idx + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.elapsedTime * 0.15;
    pointsRef.current.rotation.y = t * 0.3;
    pointsRef.current.rotation.x = Math.sin(t * 0.4) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

function BubbleMark({
  reduced,
  compact,
}: {
  reduced: boolean;
  compact: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const bubble = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const geometry = useMemo(
    () => createBubblegomGeometry(compact ? 36 : 60),
    [compact],
  );

  const { viewport, size } = useThree();

  // Responsive stacked mode on mobile/narrow viewports
  const isStacked =
    !compact &&
    (viewport.width < 9.5 || viewport.aspect < 1.15 || size.width < 900);

  // Responsive scale to guarantee breathing room and prevent clipping
  const baseScale = useMemo(() => {
    if (compact) {
      return Math.min(0.58, (viewport.width / 7.5) * 0.58);
    }
    if (isStacked) {
      const scaleByWidth = (viewport.width / 5.8) * 0.68;
      const scaleByHeight = (viewport.height / 7.6) * 0.44;
      return Math.min(
        0.5,
        Math.max(0.34, Math.min(scaleByWidth, scaleByHeight)),
      );
    }
    // Desktop mode: slightly larger prominent presence with ample vertical clearance
    const scaleByHeight = (viewport.height / 7.57) * 0.74;
    const scaleByWidth = (viewport.width / 9.0) * 0.74;
    return Math.min(
      0.76,
      Math.max(0.56, Math.min(scaleByHeight, scaleByWidth)),
    );
  }, [compact, isStacked, viewport.width, viewport.height]);

  // Target coordinates for full-viewport positioning
  const { targetPosX, targetPosY } = useMemo(() => {
    if (compact) {
      return { targetPosX: 0, targetPosY: 0 };
    }
    if (isStacked) {
      // Clean vertically stacked composition: centered horizontally in the upper hero visual stage
      const topY = Math.min(viewport.height * 0.2, 1.55);
      return { targetPosX: 0, targetPosY: topY };
    }
    // Desktop: the component container extends beyond the right edge,
    // and a subtle right offset ensures it is prominently right-aligned
    return { targetPosX: 0.25, targetPosY: 0.15 };
  }, [compact, isStacked, viewport.height]);

  // Orbiting satellite spread adjustment for narrower viewports
  const satelliteSpread = useMemo(() => {
    if (compact) return 1;
    if (isStacked) {
      return Math.min(1, Math.max(0.65, viewport.width / 5.0));
    }
    return 1;
  }, [compact, isStacked, viewport.width]);

  useEffect(() => {
    if (reduced) return;
    const move = (event: PointerEvent) => {
      pointer.current.targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduced]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame(({ clock }, rawDelta) => {
    if (!group.current) return;
    const delta = Math.min(rawDelta, 0.05);
    const time = clock.elapsedTime;
    const scroll =
      typeof window === "undefined"
        ? 0
        : window.scrollY / Math.max(window.innerHeight, 1);

    // Smooth cursor interpolation
    pointer.current.x = THREE.MathUtils.damp(
      pointer.current.x,
      pointer.current.targetX,
      4,
      delta,
    );
    pointer.current.y = THREE.MathUtils.damp(
      pointer.current.y,
      pointer.current.targetY,
      4,
      delta,
    );

    const rotX = reduced
      ? -0.06
      : pointer.current.y * 0.1 - 0.06 + Math.min(scroll, 1) * 0.08;
    const rotY = reduced
      ? -0.18
      : pointer.current.x * 0.14 - 0.18 + Math.min(scroll, 1) * 0.2;
    const damping = 1 - Math.exp(-4.2 * delta);

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      rotX,
      damping,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      rotY,
      damping,
    );

    if (!reduced) {
      const floatY = Math.sin(time * 0.6) * 0.08 - Math.min(scroll, 1) * 0.25;
      group.current.position.y = targetPosY + floatY;
      group.current.position.x = targetPosX;
      group.current.rotation.z = Math.sin(time * 0.4) * 0.03;
      const breath = 1 + Math.sin(time * 0.8) * 0.008;
      group.current.scale.set(
        baseScale * breath,
        baseScale / breath,
        baseScale,
      );
    } else {
      group.current.position.set(targetPosX, targetPosY, 0);
      group.current.scale.set(baseScale, baseScale, baseScale);
    }

    if (bubble.current && !reduced) {
      bubble.current.position.y = 2.22 + Math.sin(time * 0.85) * 0.09;
      bubble.current.position.x = 1.95 + Math.cos(time * 0.65) * 0.04;
    }
  });

  return (
    <group
      ref={group}
      position={[targetPosX, targetPosY, 0]}
      scale={baseScale}
      rotation={[-0.06, -0.18, 0]}
    >
      {/* Primary Inflatable 'b' Mark */}
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          vertexColors
          metalness={0.06}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.03}
          reflectivity={0.95}
          ior={1.48}
          envMapIntensity={2.8}
        />
      </mesh>

      {/* Floating Accent Bubble Crown */}
      <mesh ref={bubble} position={[1.95, 2.22, 0.1]} castShadow>
        <sphereGeometry args={[0.48, compact ? 32 : 56, compact ? 24 : 44]} />
        <meshPhysicalMaterial
          color={SCENE.pink}
          metalness={0.04}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.02}
          reflectivity={1}
          envMapIntensity={3.2}
          emissive={SCENE.pink}
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Floating Surrounding Satellites */}
      {!compact && (
        <>
          <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.8}>
            <mesh
              position={[-2.4 * satelliteSpread, 1.85 * satelliteSpread, -0.8]}
            >
              <sphereGeometry args={[0.16, 24, 24]} />
              <MeshTransmissionMaterial
                color={SCENE.purple}
                transmission={1}
                thickness={0.9}
                roughness={0.04}
                ior={1.35}
                chromaticAberration={0.05}
              />
            </mesh>
          </Float>


          <Float speed={0.7} rotationIntensity={0.3} floatIntensity={0.5}>
            <mesh
              position={[3.1 * satelliteSpread, 1.3 * satelliteSpread, -1.1]}
            >
              <sphereGeometry args={[0.1, 20, 20]} />
              <meshStandardMaterial
                color={SCENE.pink}
                emissive={SCENE.pink}
                emissiveIntensity={1.4}
                roughness={0.2}
              />
            </mesh>
          </Float>

          <Float speed={0.95} rotationIntensity={0.35} floatIntensity={0.7}>
            <mesh
              position={[-1.8 * satelliteSpread, -2.6 * satelliteSpread, -0.9]}
            >
              <sphereGeometry args={[0.14, 20, 20]} />
              <MeshTransmissionMaterial
                color={SCENE.blue}
                transmission={1}
                thickness={0.8}
                roughness={0.04}
              />
            </mesh>
          </Float>
        </>
      )}
    </group>
  );
}

function Scene({ reduced, compact }: { reduced: boolean; compact: boolean }) {
  return (
    <>
      <ambientLight intensity={0.7} />
      {/* Specular Key Light */}
      <directionalLight
        position={[-3, 6, 7]}
        intensity={2.5}
        color={SCENE.white}
      />
      {/* Colored Rim Lights */}
      <pointLight
        position={[-5, 2, 4]}
        intensity={36}
        color={SCENE.pink}
        distance={12}
      />
      <pointLight
        position={[5, -2, 5]}
        intensity={38}
        color={SCENE.cyan}
        distance={12}
      />
      <pointLight
        position={[0, -5, 3]}
        intensity={18}
        color={SCENE.purple}
        distance={10}
      />

      <Suspense fallback={null}>
        {!compact && !reduced && <AmbientDust count={65} />}
        <BubbleMark reduced={reduced} compact={compact} />
        <Environment resolution={compact ? 64 : 128}>
          <Lightformer
            intensity={3.2}
            color={SCENE.white}
            position={[-2, 6, 4]}
            scale={[4, 1.2, 1]}
          />
          <Lightformer
            intensity={2.5}
            color={SCENE.pink}
            position={[-6, 0, 1]}
            rotation-y={Math.PI / 2}
            scale={[6, 1.5, 1]}
          />
          <Lightformer
            intensity={2.8}
            color={SCENE.cyan}
            position={[6, -1, 0]}
            rotation-y={-Math.PI / 2}
            scale={[6, 1.5, 1]}
          />
          <Lightformer
            intensity={1.8}
            color={SCENE.purple}
            position={[0, -5, 2]}
            scale={[5, 1, 1]}
          />
        </Environment>
      </Suspense>
    </>
  );
}

function FallbackMark() {
  return (
    <div className="fallback-mark" aria-hidden="true">
      <span className="fallback-counter" />
      <span className="fallback-bubble" />
    </div>
  );
}

export function BubblegomScene({ compact = false }: { compact?: boolean }) {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = Boolean(
        canvas.getContext("webgl2") || canvas.getContext("webgl"),
      );
      setAvailable(gl);
    } catch {
      setAvailable(false);
    }
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  if (available === false) return <FallbackMark />;
  if (available === null)
    return <div className="scene-loading" aria-hidden="true" />;

  return (
    <div
      className="h-full w-full select-none"
      role="img"
      aria-label="Interactive 3D glossy Bubblegom emblem"
    >
      <Canvas
        dpr={compact ? 1 : [1, 1.5]}
        camera={{
          position: [0, 0, compact ? 11.4 : 11.0],
          fov: compact ? 40 : 38,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: compact ? "low-power" : "high-performance",
        }}
      >
        <Scene reduced={reduced} compact={compact} />
      </Canvas>
    </div>
  );
}
