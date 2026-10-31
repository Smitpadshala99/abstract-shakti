import React, { useEffect, useRef } from 'react';

/**
 * DualWorldScrollAtmosphere
 * 
 * High-performance, zero-asset procedural canvas overlay rendering:
 * - LEFT GUTTER: Traditional sacred Marigolds (गेंदा), Lotus petals, and brass Diyas (दीप) with dancing flame physics.
 * - RIGHT GUTTER: Active cybernetic data highway featuring multiple parallel PCB bus conduits,
 *   streaming binary matrix cascades (01010011), active node-to-node packet transfers, and pulsing logic gates.
 * 
 * Both realms dynamically accelerate with user scroll velocity and touch, framing the entire exhibition
 * without obscuring core content. Fully responsive and mobile-optimized.
 */
export const DualWorldScrollAtmosphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Scroll tracking
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY);
      lastScrollY = currentY;
      scrollVelocity = Math.min(scrollVelocity + delta * 0.06, 5.0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isMobile = width < 640;

    // ── LEFT: TRADITIONAL VEDIC OBJECTS ──────────────────────────────────────
    interface Diya {
      yFrac: number;
      size: number;
      flickerOffset: number;
    }

    const diyas: Diya[] = [
      { yFrac: 0.12, size: 14, flickerOffset: 0.2 },
      { yFrac: 0.38, size: 16, flickerOffset: 1.7 },
      { yFrac: 0.65, size: 15, flickerOffset: 3.1 },
      { yFrac: 0.88, size: 14, flickerOffset: 4.8 },
    ];

    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      angle: number;
      rotSpeed: number;
      type: 'marigold' | 'lotus';
      color: string;
      petalCount: number;
    }

    const petalCount = isMobile ? 10 : 24;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const isMarigold = Math.random() > 0.45;
      petals.push({
        // Mobile: strictly confined to outer 5-18px margin; Desktop: 14-95px
        x: isMobile ? Math.random() * 12 + 5 : Math.random() * 80 + 14,
        y: Math.random() * height,
        size: isMobile
          ? (isMarigold ? Math.random() * 4 + 4 : Math.random() * 3 + 3)
          : (isMarigold ? Math.random() * 7 + 7 : Math.random() * 6 + 5),
        speedY: Math.random() * 0.6 + 0.4,
        speedX: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.3),
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
        type: isMarigold ? 'marigold' : 'lotus',
        color: isMarigold
          ? Math.random() > 0.5 ? '#f59e0b' : '#ea580c'
          : Math.random() > 0.5 ? '#f43f5e' : '#fb7185',
        petalCount: isMarigold ? 12 : 6,
      });
    }

    // ── RIGHT: CYBERNETIC DATA HIGHWAY & BINARY STREAMS ─────────────────────

    // 1. Multiple Parallel Data Bus Conduits (Tightened to outer edge on mobile)
    const busOffsets = isMobile ? [6, 14] : [24, 52, 80];

    // 2. Logic Nodes & Transceivers placed along buses
    interface LogicNode {
      busIndex: number;
      yFrac: number;
      radius: number;
      pulsePhase: number;
      tag: string;
    }

    const logicNodes: LogicNode[] = [
      { busIndex: 0, yFrac: 0.07, radius: isMobile ? 2.5 : 4, pulsePhase: 0.2, tag: '0x1A' },
      { busIndex: 1, yFrac: 0.18, radius: isMobile ? 3 : 5, pulsePhase: 1.8, tag: 'INFER' },
      { busIndex: isMobile ? 0 : 2, yFrac: 0.32, radius: isMobile ? 2.5 : 4, pulsePhase: 3.4, tag: 'TENSOR' },
      { busIndex: 1, yFrac: 0.48, radius: isMobile ? 3.5 : 6, pulsePhase: 0.9, tag: 'SYNC' },
      { busIndex: 0, yFrac: 0.64, radius: isMobile ? 2.5 : 4, pulsePhase: 4.5, tag: '0xFF' },
      { busIndex: isMobile ? 1 : 2, yFrac: 0.78, radius: isMobile ? 3 : 5, pulsePhase: 2.3, tag: 'RAFT' },
      { busIndex: 1, yFrac: 0.91, radius: isMobile ? 2.5 : 4, pulsePhase: 5.1, tag: 'VOXEL' },
    ];

    // 3. Cascading Binary Matrix Streams (Vertical 0s and 1s)
    interface BinaryStream {
      xOffset: number;
      y: number;
      speedY: number;
      chars: string[];
      length: number;
      fontSize: number;
      nextFlipTime: number;
    }

    const streamCount = isMobile ? 4 : 10;
    const binaryStreams: BinaryStream[] = [];

    for (let i = 0; i < streamCount; i++) {
      const len = Math.floor(Math.random() * (isMobile ? 5 : 8)) + 6;
      const initialChars = Array.from({ length: len }, () => (Math.random() > 0.5 ? '1' : '0'));
      binaryStreams.push({
        // Mobile: strictly confined to outer 5-16px margin from right edge
        xOffset: isMobile ? Math.random() * 9 + 5 : Math.random() * 75 + 16,
        y: Math.random() * height,
        speedY: Math.random() * 1.8 + 1.2,
        chars: initialChars,
        length: len,
        fontSize: isMobile ? 7 : 10,
        nextFlipTime: Math.random() * 2,
      });
    }

    // 4. Horizontal / Diagonal Inter-Bus Data Packet Transfers
    interface ActiveTransfer {
      fromX: number;
      fromY: number;
      toX: number;
      toY: number;
      progress: number;
      speed: number;
      bits: string;
      color: string;
    }

    const transfers: ActiveTransfer[] = [];

    const spawnTransfer = () => {
      if (transfers.length > (isMobile ? 3 : 6)) return;
      const nodeA = logicNodes[Math.floor(Math.random() * logicNodes.length)];
      const nodeB = logicNodes[Math.floor(Math.random() * logicNodes.length)];
      if (nodeA === nodeB) return;

      const fromX = width - (isMobile ? busOffsets[nodeA.busIndex % busOffsets.length] : busOffsets[nodeA.busIndex]);
      const fromY = nodeA.yFrac * height;
      const toX = width - (isMobile ? busOffsets[nodeB.busIndex % busOffsets.length] : busOffsets[nodeB.busIndex]);
      const toY = nodeB.yFrac * height;

      const bitSamples = ['0101', '1011', '1100', '0011', '0x7E', '1001'];
      transfers.push({
        fromX,
        fromY,
        toX,
        toY,
        progress: 0,
        speed: Math.random() * 0.02 + 0.015,
        bits: bitSamples[Math.floor(Math.random() * bitSamples.length)],
        color: Math.random() > 0.4 ? '#22d3ee' : '#38bdf8',
      });
    };

    // ── DRAWING PROCEDURAL ELEMENTS ─────────────────────────────────────────

    // Draw Brass Diya with dancing flame
    const drawDiya = (cx: number, cy: number, size: number, time: number, offset: number) => {
      ctx.save();
      ctx.translate(cx, cy);

      const flicker = Math.sin(time * 12 + offset) * 0.15 + Math.cos(time * 23 + offset) * 0.08;
      const flameScale = 1 + flicker;

      // Ambient Warm Halo
      const haloGrad = ctx.createRadialGradient(0, -size * 0.5, 0, 0, -size * 0.5, size * 2.8);
      haloGrad.addColorStop(0, 'rgba(245, 158, 11, 0.45)');
      haloGrad.addColorStop(0.4, 'rgba(234, 88, 12, 0.18)');
      haloGrad.addColorStop(1, 'rgba(234, 88, 12, 0)');
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(0, -size * 0.5, size * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // Brass Diya Bowl
      ctx.beginPath();
      ctx.moveTo(-size, 0);
      ctx.quadraticCurveTo(-size * 0.7, size * 0.65, 0, size * 0.7);
      ctx.quadraticCurveTo(size * 0.7, size * 0.65, size, 0);
      ctx.quadraticCurveTo(size * 0.5, -size * 0.2, 0, -size * 0.2);
      ctx.quadraticCurveTo(-size * 0.5, -size * 0.2, -size, 0);
      ctx.closePath();

      const bowlGrad = ctx.createLinearGradient(-size, 0, size, size);
      bowlGrad.addColorStop(0, '#78350f');
      bowlGrad.addColorStop(0.35, '#d97706');
      bowlGrad.addColorStop(0.65, '#fef08a');
      bowlGrad.addColorStop(1, '#92400e');
      ctx.fillStyle = bowlGrad;
      ctx.fill();

      ctx.strokeStyle = '#fde68a';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Flame
      ctx.save();
      ctx.scale(flameScale, flameScale);
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.2);
      ctx.bezierCurveTo(-size * 0.4, -size * 0.7, -size * 0.25, -size * 1.5, 0, -size * 1.8);
      ctx.bezierCurveTo(size * 0.25, -size * 1.5, size * 0.4, -size * 0.7, 0, -size * 0.2);
      ctx.closePath();

      const flameGrad = ctx.createRadialGradient(0, -size * 0.7, 0, 0, -size * 0.9, size * 1.1);
      flameGrad.addColorStop(0, '#ffffff');
      flameGrad.addColorStop(0.25, '#fef08a');
      flameGrad.addColorStop(0.6, '#f97316');
      flameGrad.addColorStop(1, 'rgba(225, 29, 72, 0.2)');
      ctx.fillStyle = flameGrad;
      ctx.fill();
      ctx.restore();

      ctx.restore();
    };

    // Draw Sacred Marigold Blossom
    const drawMarigold = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      const r = p.size;
      const count = p.petalCount;

      ctx.fillStyle = p.color;
      for (let i = 0; i < count; i++) {
        const theta = (i * Math.PI * 2) / count;
        const px = Math.cos(theta) * (r * 0.65);
        const py = Math.sin(theta) * (r * 0.65);
        ctx.beginPath();
        ctx.arc(px, py, r * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#fbbf24';
      for (let i = 0; i < count; i++) {
        const theta = (i * Math.PI * 2) / count + 0.2;
        const px = Math.cos(theta) * (r * 0.35);
        const py = Math.sin(theta) * (r * 0.35);
        ctx.beginPath();
        ctx.arc(px, py, r * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Draw Sacred Lotus Petal
    const drawLotusPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      const r = p.size * 1.4;
      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.bezierCurveTo(r * 0.6, -r * 0.3, r * 0.6, r * 0.5, 0, r);
      ctx.bezierCurveTo(-r * 0.6, r * 0.5, -r * 0.6, -r * 0.3, 0, -r);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, -r, 0, r);
      grad.addColorStop(0, '#f43f5e');
      grad.addColorStop(0.5, '#fb7185');
      grad.addColorStop(1, '#fff1f2');
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 0.75;
      ctx.stroke();

      ctx.restore();
    };

    // Draw Right Side Cybernetic Circuit Traces & Bus Highway
    const drawCyberHighway = (time: number, velocity: number) => {
      ctx.save();

      // 1. Render Parallel Vertical Data Buses
      busOffsets.forEach((xOff, idx) => {
        const bx = width - xOff;
        ctx.strokeStyle = idx === 1 ? 'rgba(6, 182, 212, 0.32)' : 'rgba(34, 211, 238, 0.18)';
        ctx.lineWidth = idx === 1 ? 1.5 : 1.0;
        ctx.setLineDash(idx % 2 === 0 ? [5, 4] : [8, 3]);

        ctx.beginPath();
        ctx.moveTo(bx, 0);
        ctx.lineTo(bx, height);
        ctx.stroke();

        // High-velocity glowing light pulses travelling along the bus lines
        const pulseY = ((time * (90 + idx * 40) + velocity * 300) % (height + 100)) - 50;
        const pulseGrad = ctx.createLinearGradient(bx, pulseY - 20, bx, pulseY + 20);
        pulseGrad.addColorStop(0, 'rgba(6, 182, 212, 0)');
        pulseGrad.addColorStop(0.5, '#67e8f9');
        pulseGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');

        ctx.strokeStyle = pulseGrad;
        ctx.lineWidth = 2.5;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(bx, pulseY - 20);
        ctx.lineTo(bx, pulseY + 20);
        ctx.stroke();
      });

      // 2. Render Logic Nodes & Junction Pads
      logicNodes.forEach((node) => {
        const nx = width - (isMobile ? busOffsets[node.busIndex % busOffsets.length] : busOffsets[node.busIndex]);
        const ny = node.yFrac * height;

        const pulse = (Math.sin(time * 3.5 + node.pulsePhase) + 1) * 0.5;

        // Radial glowing halo
        const padGrad = ctx.createRadialGradient(nx, ny, 0, nx, ny, node.radius * 2.8);
        padGrad.addColorStop(0, '#ffffff');
        padGrad.addColorStop(0.4, '#22d3ee');
        padGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');

        ctx.fillStyle = padGrad;
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius * (1 + pulse * 0.35), 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();

        // Node Telemetry Label
        ctx.font = '8px monospace';
        ctx.fillStyle = 'rgba(103, 232, 249, 0.75)';
        ctx.textAlign = 'right';
        ctx.fillText(node.tag, nx - node.radius - 3, ny + 3);
      });

      // 3. Render Active Inter-Bus Packet Transfers
      transfers.forEach((tr, i) => {
        tr.progress += tr.speed * (1 + velocity * 1.2);

        // Curvilinear or 45-degree trajectory
        const currX = tr.fromX + (tr.toX - tr.fromX) * tr.progress;
        const currY = tr.fromY + (tr.toY - tr.fromY) * tr.progress;

        // Connector path
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(tr.fromX, tr.fromY);
        ctx.lineTo(tr.toX, tr.toY);
        ctx.stroke();

        // Glowing packet bullet
        ctx.fillStyle = tr.color;
        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '9px monospace';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        ctx.fillText(tr.bits, currX + 4, currY - 2);

        if (tr.progress >= 1) {
          transfers.splice(i, 1);
        }
      });

      // 4. Render Cascading Binary Streams (010101 Matrix Flows)
      binaryStreams.forEach((stream) => {
        stream.y += stream.speedY + velocity * 2.5;
        if (stream.y - stream.length * stream.fontSize > height) {
          stream.y = -20;
          stream.xOffset = isMobile ? Math.random() * 20 + 8 : Math.random() * 75 + 16;
        }

        // Random bit flipping for authentic active transmission look
        if (time > stream.nextFlipTime) {
          const randIdx = Math.floor(Math.random() * stream.length);
          stream.chars[randIdx] = stream.chars[randIdx] === '1' ? '0' : '1';
          stream.nextFlipTime = time + Math.random() * 0.4 + 0.2;
        }

        const sx = width - stream.xOffset;
        ctx.font = `${stream.fontSize}px monospace`;
        ctx.textAlign = 'center';

        stream.chars.forEach((char, cIdx) => {
          const cy = stream.y - cIdx * (stream.fontSize + 2);
          if (cy < -20 || cy > height + 20) return;

          // Head character is brilliant glowing white; trailing characters fade to cyan
          if (cIdx === 0) {
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#22d3ee';
            ctx.shadowBlur = 6;
          } else if (cIdx < 3) {
            ctx.fillStyle = '#67e8f9';
            ctx.shadowBlur = 2;
          } else {
            const alpha = Math.max(0.12, 0.85 - (cIdx / stream.length) * 0.75);
            ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.shadowBlur = 0;
          }

          ctx.fillText(char, sx, cy);
        });

        // Reset shadow
        ctx.shadowBlur = 0;
      });

      ctx.restore();
    };

    // ── MAIN ANIMATION LOOP ─────────────────────────────────────────────────
    let startTime = performance.now();
    let lastTransferSpawn = 0;

    const render = (now: number) => {
      animId = requestAnimationFrame(render);
      const time = (now - startTime) * 0.001;

      // Damp scroll velocity back to base
      scrollVelocity *= 0.93;
      const effectiveVelocity = scrollVelocity;

      // Periodically trigger active data transfers between logic nodes
      if (time - lastTransferSpawn > (isMobile ? 1.4 : 0.8) - Math.min(effectiveVelocity * 0.15, 0.5)) {
        spawnTransfer();
        lastTransferSpawn = time;
      }

      ctx.clearRect(0, 0, width, height);

      // ── LEFT SIDE: Vedic Atmosphere (Marigolds, Lotus, Brass Diyas) ──────
      // On mobile: snugly anchored at 9px from left edge so it never touches the central card
      const leftMarginX = isMobile ? 9 : 50;

      // 1. Draw Brass Diyas
      diyas.forEach((diya) => {
        const dy = diya.yFrac * height;
        drawDiya(leftMarginX, dy, diya.size * (isMobile ? 0.55 : 1), time, diya.flickerOffset);
      });

      // 2. Draw and update drifting petals
      petals.forEach((p) => {
        p.y += p.speedY + effectiveVelocity * 1.8;
        p.x += p.speedX;
        p.angle += p.rotSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = isMobile ? Math.random() * 12 + 5 : Math.random() * 80 + 14;
        }

        if (p.type === 'marigold') {
          drawMarigold(p);
        } else {
          drawLotusPetal(p);
        }
      });

      // ── RIGHT SIDE: Cybernetic Atmosphere (Binary Streams, Bus, Transfers) ─
      drawCyberHighway(time, effectiveVelocity);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40 w-full h-full select-none"
      aria-hidden="true"
    />
  );
};
