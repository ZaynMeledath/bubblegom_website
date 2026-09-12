import * as THREE from "three";

const PINK = new THREE.Color("#ff1893");
const MAGENTA = new THREE.Color("#c817f5");
const VIOLET = new THREE.Color("#6820f4");
const BLUE = new THREE.Color("#0560ff");
const CYAN = new THREE.Color("#00e5ff");

function gradientAt(t: number, zNorm: number) {
  const normalized = THREE.MathUtils.clamp(t, 0, 1);
  let base: THREE.Color;
  if (normalized < 0.28) {
    base = BLUE.clone().lerp(CYAN, normalized / 0.28);
  } else if (normalized < 0.58) {
    base = VIOLET.clone().lerp(BLUE, (normalized - 0.28) / 0.3);
  } else if (normalized < 0.85) {
    base = MAGENTA.clone().lerp(VIOLET, (normalized - 0.58) / 0.27);
  } else {
    base = PINK.clone().lerp(MAGENTA, (1 - normalized) / 0.15);
  }

  // Subtle highlight on forward-facing bevels
  if (zNorm > 0.65) {
    base.lerp(new THREE.Color("#ffffff"), (zNorm - 0.65) * 0.22);
  }
  return base;
}

export function createBubblegomGeometry(detail = 56) {
  const shape = new THREE.Shape();
  // Plump, inflated lowercase 'b' mark
  shape.moveTo(-1.22, -1.75);
  shape.bezierCurveTo(-1.35, -0.9, -1.32, 0.2, -1.32, 1.05);
  shape.lineTo(-1.32, 2.18);
  shape.bezierCurveTo(-1.32, 2.96, -0.8, 3.42, -0.1, 3.42);
  shape.bezierCurveTo(0.68, 3.42, 1.22, 2.82, 1.22, 2.12);
  shape.bezierCurveTo(1.22, 1.62, 0.94, 1.24, 0.54, 1.0);
  shape.bezierCurveTo(0.38, 0.9, 0.32, 0.7, 0.4, 0.52);
  shape.bezierCurveTo(0.5, 0.32, 0.78, 0.26, 1.02, 0.32);
  shape.bezierCurveTo(2.2, 0.66, 3.24, 0.04, 3.54, -1.02);
  shape.bezierCurveTo(3.9, -2.36, 3.06, -3.48, 1.68, -3.72);
  shape.bezierCurveTo(0.24, -3.98, -1.02, -3.12, -1.22, -1.75);

  const counter = new THREE.Path();
  counter.absellipse(1.2, -1.45, 0.9, 0.94, 0, Math.PI * 2, true, 0);
  shape.holes.push(counter);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.65,
    bevelEnabled: true,
    bevelSegments: detail > 40 ? 12 : 6,
    steps: 1,
    bevelSize: 0.26,
    bevelThickness: 0.26,
    curveSegments: detail,
  });
  geometry.center();
  geometry.computeVertexNormals();

  const positions = geometry.getAttribute("position");
  geometry.computeBoundingBox();
  const bounds = geometry.boundingBox;
  const colors: number[] = [];
  const minY = bounds?.min.y ?? -3.8;
  const maxY = bounds?.max.y ?? 3.8;
  const minZ = bounds?.min.z ?? -0.6;
  const maxZ = bounds?.max.z ?? 0.6;

  for (let index = 0; index < positions.count; index += 1) {
    const y = positions.getY(index);
    const z = positions.getZ(index);
    const yNorm = (y - minY) / Math.max(maxY - minY, 0.001);
    const zNorm = (z - minZ) / Math.max(maxZ - minZ, 0.001);
    const color = gradientAt(yNorm, zNorm);
    colors.push(color.r, color.g, color.b);
  }
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  return geometry;
}
