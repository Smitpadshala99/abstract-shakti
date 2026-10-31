import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeArtworkDepthMeshProps {
  imageSrc: string;
  className?: string;
  onClick?: () => void;
}

export const ThreeArtworkDepthMesh: React.FC<ThreeArtworkDepthMeshProps> = ({
  imageSrc,
  className = '',
  onClick,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });
  const isInteractingRef = useRef(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 400;

    const scene = new THREE.Scene();

    // Camera positioned so the plane fills the viewport cleanly
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    // Optimized for mobile GPUs: clamp to 1.5 to prevent overheating and frame drops
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // Texture loading
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageSrc, () => {
      renderer.render(scene, camera);
    });
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;

    // Plane geometry sized to fit the camera frustum with zero border gap
    const geometry = new THREE.PlaneGeometry(6.46, 6.46, 128, 128);

    // Refined Custom Shader: Delicate sculptural relief with pulverized mineral powder sparkle
    const customMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTexture: { value: texture },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uIntensity: { value: 0.0 },
        uTime: { value: 0.0 },
      },
      vertexShader: `
        uniform sampler2D uTexture;
        uniform vec2 uPointer;
        uniform float uIntensity;
        uniform float uTime;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying float vElevation;

        void main() {
          vUv = uv;

          // Sample luminance to calculate micro-relief
          vec4 col = texture2D(uTexture, uv);
          float luma = dot(col.rgb, vec3(0.299, 0.587, 0.114));

          // Give subtle, pristine physical relief to the gold Mukut, jewels, tilak & circuit lines
          // Keeps the sacred faces smooth and noble (clamped to 0.08 max elevation)
          float relief = (luma * 0.7 + col.r * 0.3) * 0.08;

          // Gentle ambient breathing wave
          float breath = sin(uTime * 1.5 + uv.y * 3.0) * 0.012;

          float elevation = relief + breath;
          vElevation = elevation;

          vec3 transformed = position + vec3(0.0, 0.0, elevation);
          vNormal = normalize(normalMatrix * normal);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec2 uPointer;
        uniform float uIntensity;
        uniform float uTime;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying float vElevation;

        void main() {
          vec4 texColor = texture2D(uTexture, vUv);

          // Specular luster that follows touch / mouse pointer
          vec2 lightPos = uPointer * 0.45 + 0.5;
          float lightDist = distance(vUv, lightPos);
          float spot = exp(-lightDist * 3.6) * (0.2 + 0.3 * uIntensity);

          // Authentic pulverized mineral powder crystalline micro-shimmer
          float sparkleNoise = fract(sin(dot(vUv * 920.0, vec2(12.9898, 78.233))) * 43758.5453);
          float powderGlitter = pow(sparkleNoise, 30.0) * (0.28 + 0.35 * uIntensity);

          // Warm golden luster on Durga side, vibrant cyber cyan on Digital Shakti side
          vec3 warmGold = vec3(1.0, 0.82, 0.35);
          vec3 coolCyan = vec3(0.15, 0.88, 1.0);
          vec3 sideGlow = mix(warmGold, coolCyan, smoothstep(0.48, 0.52, vUv.x));

          vec3 finalColor = texColor.rgb + sideGlow * (spot + powderGlitter) * (1.0 + vElevation * 2.5);

          // Central Meridian micro-gleam
          float seamDist = abs(vUv.x - 0.495);
          float seamGlow = exp(-seamDist * 85.0) * (0.12 + 0.08 * sin(uTime * 2.8));
          finalColor += vec3(1.0, 0.95, 0.8) * seamGlow;

          gl_FragColor = vec4(finalColor, texColor.a);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, customMaterial);
    scene.add(mesh);

    // Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const ptr = mouseRef.current;

      // Smooth spring damping for mobile touch & mouse tilt
      ptr.x += (ptr.targetX - ptr.x) * 0.08;
      ptr.y += (ptr.targetY - ptr.y) * 0.08;

      // Subtle autonomic gyroscopic breathing oscillation when idle
      const idleTiltX = !isInteractingRef.current ? Math.sin(time * 0.8) * 0.06 : 0;
      const idleTiltY = !isInteractingRef.current ? Math.cos(time * 0.6) * 0.05 : 0;

      // Gyroscopic tilt
      mesh.rotation.y = (ptr.x + idleTiltX) * 0.16;
      mesh.rotation.x = -(ptr.y + idleTiltY) * 0.16;

      // Update uniforms
      customMaterial.uniforms.uTime.value = time;
      customMaterial.uniforms.uPointer.value.set(ptr.x, ptr.y);
      customMaterial.uniforms.uIntensity.value +=
        ((isInteractingRef.current ? 1.0 : 0.0) - customMaterial.uniforms.uIntensity.value) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseRef.current.targetX = THREE.MathUtils.clamp(normX, -1, 1);
      mouseRef.current.targetY = THREE.MathUtils.clamp(-normY, -1, 1);
    };

    const handleMouseEnter = () => {
      isInteractingRef.current = true;
    };

    const handleMouseLeave = () => {
      isInteractingRef.current = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    // Mobile touch handlers (Touch-first support)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = mount.getBoundingClientRect();
        const normX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = ((touch.clientY - rect.top) / rect.height) * 2 - 1;
        mouseRef.current.targetX = THREE.MathUtils.clamp(normX, -1, 1);
        mouseRef.current.targetY = THREE.MathUtils.clamp(-normY, -1, 1);
        isInteractingRef.current = true;
      }
    };

    const handleTouchEnd = () => {
      isInteractingRef.current = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    mount.addEventListener('mousemove', handleMouseMove);
    mount.addEventListener('mouseenter', handleMouseEnter);
    mount.addEventListener('mouseleave', handleMouseLeave);
    mount.addEventListener('touchmove', handleTouchMove, { passive: true });
    mount.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      mount.removeEventListener('mousemove', handleMouseMove);
      mount.removeEventListener('mouseenter', handleMouseEnter);
      mount.removeEventListener('mouseleave', handleMouseLeave);
      mount.removeEventListener('touchmove', handleTouchMove);
      mount.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      customMaterial.dispose();
      texture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [imageSrc]);

  return (
    <div
      ref={mountRef}
      onClick={onClick}
      className={`relative w-full h-full cursor-grab active:cursor-grabbing select-none overflow-hidden rounded-lg ${className}`}
      title="Interactive 3D Masterpiece (Touch / move cursor to tilt and illuminate)"
    />
  );
};
