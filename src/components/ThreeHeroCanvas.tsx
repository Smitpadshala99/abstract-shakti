import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroCanvasProps {
  className?: string;
  mousePos: { x: number; y: number };
}

// Generates high-dynamic-range soft bokeh particle texture
function createBokehTexture(colorHex: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.2, colorHex);
    gradient.addColorStop(0.55, colorHex);
    gradient.addColorStop(0.85, 'rgba(0,0,0,0.3)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({
  className = '',
  mousePos,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const scrollVelocityRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    mouseTargetRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - lastScrollYRef.current);
      lastScrollYRef.current = currentScroll;
      scrollVelocityRef.current = Math.min(scrollVelocityRef.current + delta * 0.0035, 1.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04060d, 0.022);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 19);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const goldTex = createBokehTexture('#f59e0b');
    const cyanTex = createBokehTexture('#06b6d4');

    // ── 1. CLEAN, UNCLUTTERED PARTICLE FIELD (REFINED DENSITY) ─────────────
    // Balanced count to avoid visual clutter behind the central Rangoli
    const count = 420;

    // Buffer arrays for golden left stream (traditional side)
    const goldGeo = new THREE.BufferGeometry();
    const goldPos = new Float32Array(count * 3);
    const goldHome = new Float32Array(count * 3);
    const goldVel = new Float32Array(count * 3);
    const goldSizes = new Float32Array(count);
    const goldPhases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Distributed predominantly towards the left lateral space to leave center clean
      const x = -Math.random() * 14 - 2.8;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 16;

      goldPos[idx] = x;
      goldPos[idx + 1] = y;
      goldPos[idx + 2] = z;

      goldHome[idx] = x;
      goldHome[idx + 1] = y;
      goldHome[idx + 2] = z;

      goldVel[idx] = Math.random() * 0.012 + 0.005;
      goldVel[idx + 1] = (Math.random() - 0.5) * 0.008;
      goldVel[idx + 2] = (Math.random() - 0.5) * 0.008;

      goldPhases[i] = Math.random() * Math.PI * 2;

      const distFromFocus = Math.abs(z);
      goldSizes[i] = THREE.MathUtils.lerp(0.25, 0.75, distFromFocus / 8.0);
    }

    goldGeo.setAttribute('position', new THREE.BufferAttribute(goldPos, 3));
    goldGeo.setAttribute('size', new THREE.BufferAttribute(goldSizes, 1));

    const goldMat = new THREE.PointsMaterial({
      color: 0xffb703,
      size: 0.42,
      map: goldTex,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const goldPoints = new THREE.Points(goldGeo, goldMat);
    scene.add(goldPoints);

    // Buffer arrays for cyan right stream (technological side)
    const cyanGeo = new THREE.BufferGeometry();
    const cyanPos = new Float32Array(count * 3);
    const cyanHome = new Float32Array(count * 3);
    const cyanVel = new Float32Array(count * 3);
    const cyanSizes = new Float32Array(count);
    const cyanPhases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Distributed predominantly towards the right lateral space to leave center clean
      const x = Math.random() * 14 + 2.8;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 16;

      cyanPos[idx] = x;
      cyanPos[idx + 1] = y;
      cyanPos[idx + 2] = z;

      cyanHome[idx] = x;
      cyanHome[idx + 1] = y;
      cyanHome[idx + 2] = z;

      cyanVel[idx] = -(Math.random() * 0.012 + 0.005);
      cyanVel[idx + 1] = (Math.random() - 0.5) * 0.008;
      cyanVel[idx + 2] = (Math.random() - 0.5) * 0.008;

      cyanPhases[i] = Math.random() * Math.PI * 2;

      const distFromFocus = Math.abs(z);
      cyanSizes[i] = THREE.MathUtils.lerp(0.25, 0.75, distFromFocus / 8.0);
    }

    cyanGeo.setAttribute('position', new THREE.BufferAttribute(cyanPos, 3));
    cyanGeo.setAttribute('size', new THREE.BufferAttribute(cyanSizes, 1));

    const cyanMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.42,
      map: cyanTex,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cyanPoints = new THREE.Points(cyanGeo, cyanMat);
    scene.add(cyanPoints);

    // ── 2. ANIMATION & PHYSICS TICK ──────────────────────────────────────────
    let frameId: number;
    const clock = new THREE.Clock();
    const camTarget = new THREE.Vector3(0, 0, 0);

    const mouseWorld = new THREE.Vector3(0, 0, 0);
    const repulsionRadius = 4.2;
    const repulsionStrength = 0.08;

    const tick = () => {
      frameId = requestAnimationFrame(tick);
      const time = clock.getElapsedTime();

      // Decay scroll velocity smoothly
      scrollVelocityRef.current *= 0.94;
      const scrollBoost = scrollVelocityRef.current;

      // Smooth camera mouse parallax
      const targetCamX = mouseTargetRef.current.x * 2.8;
      const targetCamY = mouseTargetRef.current.y * 1.8;
      camera.position.x += (targetCamX - camera.position.x) * 0.045;
      camera.position.y += (-targetCamY - camera.position.y) * 0.045;
      camera.lookAt(camTarget);

      // Compute mouse 3D world position for repulsion physics
      mouseWorld.set(mouseTargetRef.current.x * 10.0, -mouseTargetRef.current.y * 7.0, 0);

      // ── Physics update: Gold Particles ──
      const gPos = goldGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;

        goldHome[idx] += goldVel[idx] * (1.0 + scrollBoost * 1.5);
        if (goldHome[idx] > -1.0) {
          goldHome[idx] = -16;
          goldHome[idx + 1] = (Math.random() - 0.5) * 20;
          goldHome[idx + 2] = (Math.random() - 0.5) * 16;
          gPos[idx] = goldHome[idx];
          gPos[idx + 1] = goldHome[idx + 1];
          gPos[idx + 2] = goldHome[idx + 2];
        }

        // Mouse Repulsion
        const dx = gPos[idx] - mouseWorld.x;
        const dy = gPos[idx + 1] - mouseWorld.y;
        const dz = gPos[idx + 2] - mouseWorld.z;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < repulsionRadius * repulsionRadius && distSq > 0.01) {
          const dist = Math.sqrt(distSq);
          const force = (1.0 - dist / repulsionRadius) * repulsionStrength;
          gPos[idx] += (dx / dist) * force;
          gPos[idx + 1] += (dy / dist) * force;
          gPos[idx + 2] += (dz / dist) * force * 0.5;
        }

        // Gentle spring restoration back to natural orbit
        gPos[idx] += (goldHome[idx] - gPos[idx]) * 0.04;
        gPos[idx + 1] += (goldHome[idx + 1] + Math.sin(time * 1.2 + goldPhases[i]) * 0.01 - gPos[idx + 1]) * 0.04;
        gPos[idx + 2] += (goldHome[idx + 2] - gPos[idx + 2]) * 0.04;
      }
      goldGeo.attributes.position.needsUpdate = true;

      // ── Physics update: Cyan Particles ──
      const cPos = cyanGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;

        cyanHome[idx] += cyanVel[idx] * (1.0 + scrollBoost * 1.5);
        if (cyanHome[idx] < 1.0) {
          cyanHome[idx] = 16;
          cyanHome[idx + 1] = (Math.random() - 0.5) * 20;
          cyanHome[idx + 2] = (Math.random() - 0.5) * 16;
          cPos[idx] = cyanHome[idx];
          cPos[idx + 1] = cyanHome[idx + 1];
          cPos[idx + 2] = cyanHome[idx + 2];
        }

        // Mouse Repulsion
        const dx = cPos[idx] - mouseWorld.x;
        const dy = cPos[idx + 1] - mouseWorld.y;
        const dz = cPos[idx + 2] - mouseWorld.z;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < repulsionRadius * repulsionRadius && distSq > 0.01) {
          const dist = Math.sqrt(distSq);
          const force = (1.0 - dist / repulsionRadius) * repulsionStrength;
          cPos[idx] += (dx / dist) * force;
          cPos[idx + 1] += (dy / dist) * force;
          cPos[idx + 2] += (dz / dist) * force * 0.5;
        }

        // Gentle spring restoration
        cPos[idx] += (cyanHome[idx] - cPos[idx]) * 0.04;
        cPos[idx + 1] += (cyanHome[idx + 1] + Math.cos(time * 1.2 + cyanPhases[i]) * 0.01 - cPos[idx + 1]) * 0.04;
        cPos[idx + 2] += (cyanHome[idx + 2] - cPos[idx + 2]) * 0.04;
      }
      cyanGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    tick();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      goldGeo.dispose();
      goldMat.dispose();
      cyanGeo.dispose();
      cyanMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
    />
  );
};
