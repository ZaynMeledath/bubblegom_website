import { describe, expect, it } from "vitest";
import { createBubblegomGeometry } from "./bubblegom-geometry";

describe("createBubblegomGeometry", () => {
  it("should create a valid 3D ExtrudeGeometry", () => {
    const geometry = createBubblegomGeometry(16);
    expect(geometry).toBeDefined();
    expect(geometry.type).toBe("ExtrudeGeometry");
  });

  it("should calculate vertex positions and normals", () => {
    const geometry = createBubblegomGeometry(16);
    const positionAttr = geometry.getAttribute("position");
    const normalAttr = geometry.getAttribute("normal");

    expect(positionAttr).toBeDefined();
    expect(positionAttr.count).toBeGreaterThan(0);
    expect(normalAttr).toBeDefined();
    expect(normalAttr.count).toBe(positionAttr.count);
  });

  it("should compute vertex gradient colors", () => {
    const geometry = createBubblegomGeometry(16);
    const colorAttr = geometry.getAttribute("color");

    expect(colorAttr).toBeDefined();
    expect(colorAttr.itemSize).toBe(3); // RGB
    expect(colorAttr.count).toBe(geometry.getAttribute("position").count);

    // Ensure colors are in [0, 1] range
    for (let i = 0; i < Math.min(colorAttr.count, 50); i++) {
      expect(colorAttr.getX(i)).toBeGreaterThanOrEqual(0);
      expect(colorAttr.getX(i)).toBeLessThanOrEqual(1.1);
      expect(colorAttr.getY(i)).toBeGreaterThanOrEqual(0);
      expect(colorAttr.getY(i)).toBeLessThanOrEqual(1.1);
      expect(colorAttr.getZ(i)).toBeGreaterThanOrEqual(0);
      expect(colorAttr.getZ(i)).toBeLessThanOrEqual(1.1);
    }
  });
});
