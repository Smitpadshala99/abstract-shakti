import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Generate circular radial soft-glow bokeh texture
function createParticleTexture(colorHex: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.2, colorHex);
    gradient.addColorStop(0.6, colorHex);
    gradient.addColorStop(0.85, 'rgba(0,0,0,0.3)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export const ThreeMasterpieceCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 700;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04060d, 0.024);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 17);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const goldTex = createParticleTexture('#f59e0b');

    const count = 1400;
    const colorGold = new THREE.Color(0xf59e0b);
    const colorCyan = new THREE.Color(0x06b6d4);

    // ── Layer 1: Outer Celestial Orbital Cloud with Repulsion Physics ────────
    const outerGeo = new THREE.BufferGeometry();
    const outerPos = new Float32Array(count * 3);
    const outerHome = new Float32Array(count * 3);
    const outerColors = new Float32Array(count * 3);
    const outerAngles = new Float32Array(count);
    const outerRadii = new Float32Array(count);
    const outerSpeeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 7.5 + 4.5;
      outerAngles[i] = angle;
      outerRadii[i] = radius;
      outerSpeeds[i] = (Math.random() * 0.12 + 0.04) * (Math.random() > 0.5 ? 1 : -1);

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.75;
      const z = (Math.random() - 0.5) * 10 - 2;

      outerPos[idx] = x;
      outerPos[idx + 1] = y;
      outerPos[idx + 2] = z;

      outerHome[idx] = x;
      outerHome[idx + 1] = y;
      outerHome[idx + 2] = z;

      const t = THREE.MathUtils.clamp((x + 7) / 14, 0, 1);
      const c = colorGold.clone().lerp(colorCyan, t);
      outerColors[idx] = c.r;
      outerColors[idx + 1] = c.g;
      outerColors[idx + 2] = c.b;
    }
    outerGeo.setAttribute('position', new THREE.BufferAttribute(outerPos, 3));
    outerGeo.setAttribute('color', new THREE.BufferAttribute(outerColors, 3));

    const outerMat = new THREE.PointsMaterial({
      size: 0.44,
      vertexColors: true,
      map: goldTex,
      transparent: true,
      opacity: 0.78,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const outerCloud = new THREE.Points(outerGeo, outerMat);
    scene.add(outerCloud);

    // ── Layer 2: Mid Concentric Aura Ring ───────────────────────────────────
    const midCount = 600;
    const midGeo = new THREE.BufferGeometry();
    const midPos = new Float32Array(midCount * 3);
    const midColors = new Float32Array(midCount * 3);
    const midAngles = new Float32Array(midCount);
    const midRadii = new Float32Array(midCount);

    for (let i = 0; i < midCount; i++) {
      const idx = i * 3;
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 3.0 + 3.0;
      midAngles[i] = angle;
      midRadii[i] = radius;

      midPos[idx] = Math.cos(angle) * radius;
      midPos[idx + 1] = Math.sin(angle) * radius * 0.72;
      midPos[idx + 2] = (Math.random() - 0.5) * 4;

      const t = THREE.MathUtils.clamp((midPos[idx] + 4) / 8, 0, 1);
      const c = colorGold.clone().lerp(colorCyan, t);
      midColors[idx] = c.r;
      midColors[idx + 1] = c.g;
      midColors[idx + 2] = c.b;
    }
    midGeo.setAttribute('position', new THREE.BufferAttribute(midPos, 3));
    midGeo.setAttribute('color', new THREE.BufferAttribute(midColors, 3));

    const midMat = new THREE.PointsMaterial({
      size: 0.36,
      vertexColors: true,
      map: goldTex,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const midRing = new THREE.Points(midGeo, midMat);
    scene.add(midRing);

    // ── Animation Loop with Dynamic Repulsion ────────────────────────────────
    let frameId: number;
    const clock = new THREE.Clock();
    const mouseWorld = new THREE.Vector3(0, 0, 0);

    const tick = () => {
      frameId = requestAnimationFrame(tick);
      const time = clock.getElapsedTime();

      // Camera gentle drift
      camera.position.x = Math.sin(time * 0.2) * 0.8 + mouseRef.current.x * 1.5;
      camera.position.y = Math.cos(time * 0.25) * 0.5 + mouseRef.current.y * 1.2;
      camera.lookAt(0, 0, 0);

      mouseWorld.set(mouseRef.current.x * 9.0, mouseRef.current.y * 7.0, 0);

      // Rotate outer orbital particles and apply mouse repulsion
      const oPos = outerGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        outerAngles[i] += outerSpeeds[i] * 0.012;
        const rad = outerRadii[i];

        outerHome[idx] = Math.cos(outerAngles[i]) * rad;
        outerHome[idx + 1] = Math.sin(outerAngles[i]) * rad * 0.75;

        // Repulsion
        const dx = oPos[idx] - mouseWorld.x;
        const dy = oPos[idx + 1] - mouseWorld.y;
        const dz = oPos[idx + 2] - mouseWorld.z;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < 16.0 && distSq > 0.01) {
          const dist = Math.sqrt(distSq);
          const force = (1.0 - dist / 4.0) * 0.06;
          oPos[idx] += (dx / dist) * force;
          oPos[idx + 1] += (dy / dist) * force;
          oPos[idx + 2] += (dz / dist) * force * 0.5;
        }

        // Spring restoration
        oPos[idx] += (outerHome[idx] - oPos[idx]) * 0.05;
        oPos[idx + 1] += (outerHome[idx + 1] - oPos[idx + 1]) * 0.05;
        oPos[idx + 2] += (outerHome[idx + 2] - oPos[idx + 2]) * 0.05;
      }
      outerGeo.attributes.position.needsUpdate = true;

      // Rotate mid ring
      midRing.rotation.z = -time * 0.06;

      renderer.render(scene, camera);
    };

    tick();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 700;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      outerGeo.dispose();
      outerMat.dispose();
      midGeo.dispose();
      midMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
};
