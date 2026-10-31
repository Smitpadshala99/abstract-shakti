import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeConvergenceCanvasProps {
  className?: string;
  intensity?: number;
}

// Generates soft luminous glowing particle texture
function createParticleTexture(colorHex: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.25, colorHex);
    gradient.addColorStop(0.65, colorHex);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export const ThreeConvergenceCanvas: React.FC<ThreeConvergenceCanvasProps> = ({
  className = '',
  intensity = 1.0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intensityRef = useRef(intensity);

  useEffect(() => {
    intensityRef.current = intensity;
  }, [intensity]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04060d, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 15);

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
    const cyanTex = createParticleTexture('#06b6d4');
    const sparkTex = createParticleTexture('#ffffff');

    // ── 1. CUSTOM SHADER MATERIAL: ELECTRIC-AURORA PLASMA BEAM ──────────────
    // A shimmering vertical plasma sheet where tradition (vermillion/gold) meets technology (cyan/cobalt)
    const beamGeo = new THREE.PlaneGeometry(1.6, 16.0, 32, 64);
    const beamShaderMat = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0.0 },
        uIntensity: { value: 1.0 },
        uColorGold: { value: new THREE.Color(0xf59e0b) },
        uColorCyan: { value: new THREE.Color(0x06b6d4) },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uIntensity;
        varying vec2 vUv;
        varying float vDisplacement;

        void main() {
          vUv = uv;

          vec3 pos = position;

          // Harmonic high-frequency electric plasma displacement along vertical axis
          float wave1 = sin(pos.y * 2.5 + uTime * 4.2) * 0.18;
          float wave2 = cos(pos.y * 5.0 - uTime * 6.0) * 0.09;
          float disp = (wave1 + wave2) * uIntensity;
          pos.x += disp;
          pos.z += sin(pos.y * 3.0 + uTime * 3.5) * 0.12 * uIntensity;

          vDisplacement = disp;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uIntensity;
        uniform vec3 uColorGold;
        uniform vec3 uColorCyan;
        varying vec2 vUv;
        varying float vDisplacement;

        void main() {
          // Horizontal distance from exact center seam (vUv.x = 0.5)
          float distFromCenter = abs(vUv.x - 0.5);

          // Electric spark arc noise
          float arcNoise = sin(vUv.y * 40.0 + uTime * 14.0) * cos(vUv.y * 20.0 - uTime * 10.0) * 0.06;
          float coreDist = abs(vUv.x - 0.5 + arcNoise);

          // Blinding white electric core
          float coreGlow = 1.0 / (coreDist * 55.0 + 1.0);

          // Bilateral color gradient: Gold on left, Cyan on right
          vec3 edgeColor = mix(uColorGold, uColorCyan, smoothstep(0.35, 0.65, vUv.x));

          // Shimmering aurora plasma waves
          float aurora = sin(vUv.y * 8.0 - uTime * 3.0) * 0.5 + 0.5;
          vec3 finalColor = mix(edgeColor, vec3(1.0, 1.0, 1.0), coreGlow * 0.85);
          finalColor += edgeColor * aurora * 0.35;

          // Soft vertical edge falloff
          float vAlpha = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.88, vUv.y);
          // Horizontal beam confinement
          float hAlpha = exp(-distFromCenter * 6.0);

          float totalAlpha = (coreGlow * 0.9 + hAlpha * 0.4) * vAlpha * uIntensity;

          gl_FragColor = vec4(finalColor, totalAlpha);
        }
      `,
    });

    const plasmaBeam = new THREE.Mesh(beamGeo, beamShaderMat);
    plasmaBeam.position.set(0, 0, 0);
    scene.add(plasmaBeam);

    // Secondary perpendicular glow ribbon for 3D cross-volume
    const crossBeam = new THREE.Mesh(beamGeo, beamShaderMat);
    crossBeam.rotation.y = Math.PI * 0.5;
    scene.add(crossBeam);

    // ── 2. GOLDEN & CYAN PARTICLE STREAMS CONVERGING TO SEAM ────────────────
    const count = 1100;

    // Golden stream (Left → Center)
    const goldGeo = new THREE.BufferGeometry();
    const goldPos = new Float32Array(count * 3);
    const goldVel = new Float32Array(count);
    const goldOrigY = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      goldPos[idx] = -Math.random() * 11 - 0.3;
      goldPos[idx + 1] = (Math.random() - 0.5) * 8.5;
      goldPos[idx + 2] = (Math.random() - 0.5) * 4.5;
      goldOrigY[i] = goldPos[idx + 1];
      goldVel[i] = Math.random() * 0.045 + 0.018;
    }
    goldGeo.setAttribute('position', new THREE.BufferAttribute(goldPos, 3));

    const goldMat = new THREE.PointsMaterial({
      color: 0xffb703,
      size: 0.48,
      map: goldTex,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const goldStream = new THREE.Points(goldGeo, goldMat);
    scene.add(goldStream);

    // Cyan stream (Right → Center)
    const cyanGeo = new THREE.BufferGeometry();
    const cyanPos = new Float32Array(count * 3);
    const cyanVel = new Float32Array(count);
    const cyanOrigY = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      cyanPos[idx] = Math.random() * 11 + 0.3;
      cyanPos[idx + 1] = (Math.random() - 0.5) * 8.5;
      cyanPos[idx + 2] = (Math.random() - 0.5) * 4.5;
      cyanOrigY[i] = cyanPos[idx + 1];
      cyanVel[i] = Math.random() * 0.045 + 0.018;
    }
    cyanGeo.setAttribute('position', new THREE.BufferAttribute(cyanPos, 3));

    const cyanMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.48,
      map: cyanTex,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cyanStream = new THREE.Points(cyanGeo, cyanMat);
    scene.add(cyanStream);

    // ── 3. TWIN INTERTWINED RISING HELICES (DNA & KUNDALINI CONVERGENCE) ────
    const helixPts = 200;
    const goldHelixPts: THREE.Vector3[] = [];
    const cyanHelixPts: THREE.Vector3[] = [];
    for (let i = 0; i < helixPts; i++) {
      const t = (i / helixPts) * Math.PI * 10;
      const y = (i / helixPts) * 14 - 7;
      goldHelixPts.push(new THREE.Vector3(Math.cos(t) * 1.1, y, Math.sin(t) * 1.1));
      cyanHelixPts.push(
        new THREE.Vector3(Math.cos(t + Math.PI) * 1.1, y, Math.sin(t + Math.PI) * 1.1)
      );
    }
    const gHGeo = new THREE.BufferGeometry().setFromPoints(goldHelixPts);
    const cHGeo = new THREE.BufferGeometry().setFromPoints(cyanHelixPts);
    const helixGold = new THREE.Line(
      gHGeo,
      new THREE.LineBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.6, linewidth: 2 })
    );
    const helixCyan = new THREE.Line(
      cHGeo,
      new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.6, linewidth: 2 })
    );
    scene.add(helixGold);
    scene.add(helixCyan);

    // ── 4. DYNAMIC INTERFACE BURST SPARKS ───────────────────────────────────
    const sparkCount = 90;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    const sparkVel = new Float32Array(sparkCount * 3);
    const sparkLife = new Float32Array(sparkCount);

    for (let i = 0; i < sparkCount; i++) {
      const idx = i * 3;
      sparkPos[idx] = (Math.random() - 0.5) * 0.4;
      sparkPos[idx + 1] = (Math.random() - 0.5) * 8.0;
      sparkPos[idx + 2] = (Math.random() - 0.5) * 0.4;
      sparkVel[idx] = (Math.random() - 0.5) * 0.06;
      sparkVel[idx + 1] = Math.random() * 0.08 + 0.02;
      sparkVel[idx + 2] = (Math.random() - 0.5) * 0.06;
      sparkLife[i] = Math.random();
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));

    const sparkMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.6,
      map: sparkTex,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sparkPoints = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparkPoints);

    // ── 5. ANIMATION TICK ────────────────────────────────────────────────────
    let frameId: number;
    const clock = new THREE.Clock();

    const tick = () => {
      frameId = requestAnimationFrame(tick);
      const time = clock.getElapsedTime();
      const mult = intensityRef.current;

      // Update Plasma Shader Beam Uniforms
      beamShaderMat.uniforms.uTime.value = time;
      beamShaderMat.uniforms.uIntensity.value = mult;

      // Rotate Helices
      helixGold.rotation.y = time * 0.6 * mult;
      helixCyan.rotation.y = time * 0.6 * mult;

      // Gold stream physics
      const gPos = goldGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        gPos[idx] += goldVel[i] * mult;
        const dist = Math.abs(gPos[idx]);
        if (dist < 2.0) {
          // Converge towards centerline
          gPos[idx + 1] += (0 - gPos[idx + 1]) * 0.06;
          gPos[idx + 2] += (0 - gPos[idx + 2]) * 0.06;
        }
        if (gPos[idx] >= 0) {
          // Reset back to left
          gPos[idx] = -11.5 - Math.random() * 2.0;
          gPos[idx + 1] = goldOrigY[i];
          gPos[idx + 2] = (Math.random() - 0.5) * 4.5;
        }
      }
      goldGeo.attributes.position.needsUpdate = true;

      // Cyan stream physics
      const cPos = cyanGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        cPos[idx] -= cyanVel[i] * mult;
        const dist = Math.abs(cPos[idx]);
        if (dist < 2.0) {
          cPos[idx + 1] += (0 - cPos[idx + 1]) * 0.06;
          cPos[idx + 2] += (0 - cPos[idx + 2]) * 0.06;
        }
        if (cPos[idx] <= 0) {
          // Reset back to right
          cPos[idx] = 11.5 + Math.random() * 2.0;
          cPos[idx + 1] = cyanOrigY[i];
          cPos[idx + 2] = (Math.random() - 0.5) * 4.5;
        }
      }
      cyanGeo.attributes.position.needsUpdate = true;

      // Dynamic sparks bursting along seam
      const sPos = sparkGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < sparkCount; i++) {
        const idx = i * 3;
        sPos[idx] += sparkVel[idx] * mult;
        sPos[idx + 1] += sparkVel[idx + 1] * mult;
        sPos[idx + 2] += sparkVel[idx + 2] * mult;
        sparkLife[i] -= 0.015 * mult;

        if (sparkLife[i] <= 0) {
          sparkLife[i] = 1.0;
          sPos[idx] = (Math.random() - 0.5) * 0.3;
          sPos[idx + 1] = (Math.random() - 0.5) * 7.5;
          sPos[idx + 2] = (Math.random() - 0.5) * 0.3;
        }
      }
      sparkGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    tick();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 550;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      beamGeo.dispose();
      beamShaderMat.dispose();
      goldGeo.dispose();
      goldMat.dispose();
      cyanGeo.dispose();
      cyanMat.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      gHGeo.dispose();
      cHGeo.dispose();
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
