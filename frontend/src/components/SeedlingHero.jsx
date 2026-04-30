import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

function smoothClamp(x, edge0, edge1) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function SeedlingCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const green = new THREE.Color('#3fa978');
    const greenSoft = new THREE.Color('#8fd4a8');
    const greenDeep = new THREE.Color('#1f6b48');
    const root = new THREE.Group();
    scene.add(root);

    const seedGeo = new THREE.SphereGeometry(0.18, 48, 48);
    const seedMat = new THREE.MeshBasicMaterial({ color: green, transparent: true, opacity: 1 });
    const seed = new THREE.Mesh(seedGeo, seedMat);
    root.add(seed);

    const haloGeo = new THREE.PlaneGeometry(2.4, 2.4);
    const haloMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uColor: { value: greenSoft }, uOpacity: { value: 1 } },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform vec3 uColor;
        uniform float uOpacity;
        void main() {
          float d = distance(vUv, vec2(0.5));
          float a = pow(smoothstep(0.5, 0.0, d), 2.2);
          gl_FragColor = vec4(uColor, a * uOpacity);
        }
      `,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    root.add(halo);

    const rings = [];
    for (let i = 0; i < 3; i += 1) {
      const geometry = new THREE.RingGeometry(0.2, 0.22, 96);
      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { uColor: { value: greenSoft }, uProgress: { value: 0 }, uOpacity: { value: 1 } },
        vertexShader: `
          uniform float uProgress;
          void main() {
            vec3 p = position * (1.0 + uProgress * 14.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uProgress;
          uniform float uOpacity;
          void main() {
            gl_FragColor = vec4(uColor, (1.0 - uProgress) * 0.55 * uOpacity);
          }
        `,
      });
      const mesh = new THREE.Mesh(geometry, material);
      root.add(mesh);
      rings.push({ mesh, material, offset: i / 3 });
    }

    const particleCount = 220;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSeeds = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 1.5 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      particlePositions[i * 3] = Math.cos(theta) * radius;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      particlePositions[i * 3 + 2] = Math.sin(theta) * radius * 0.6;
      particleSeeds[i] = Math.random();
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('aSeed', new THREE.BufferAttribute(particleSeeds, 1));
    const particleMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uColor: { value: greenSoft }, uOpacity: { value: 1 } },
      vertexShader: `
        attribute float aSeed;
        uniform float uTime;
        varying float vSeed;
        void main() {
          vSeed = aSeed;
          vec3 p = position;
          p.y += sin(uTime * 0.4 + aSeed * 6.28) * 0.25;
          p.x += cos(uTime * 0.3 + aSeed * 6.28) * 0.15;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (2.0 + aSeed * 3.0) * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vSeed;
        void main() {
          float a = pow(smoothstep(0.5, 0.0, distance(gl_PointCoord, vec2(0.5))), 2.0);
          gl_FragColor = vec4(uColor, a * (0.35 + vSeed * 0.5) * uOpacity);
        }
      `,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    root.add(particles);

    const nodeCount = 26;
    const nodes = [];
    for (let i = 0; i < nodeCount; i += 1) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.6 + Math.random() * 2.2;
      nodes.push(new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * radius,
        Math.cos(phi) * radius * 0.55,
        Math.sin(phi) * Math.sin(theta) * radius * 0.7,
      ));
    }
    nodes.push(new THREE.Vector3(3.6, -0.4, 0.4));

    const linePositions = [];
    const lineSeeds = [];
    const seedPos = new THREE.Vector3(0, 0, 0);
    for (let i = 0; i < nodes.length; i += 1) {
      linePositions.push(seedPos.x, seedPos.y, seedPos.z, nodes[i].x, nodes[i].y, nodes[i].z);
      lineSeeds.push(i / nodes.length, i / nodes.length);
      const neighbors = nodes
        .map((node, idx) => ({ idx, distance: node.distanceTo(nodes[i]) }))
        .filter((node) => node.idx !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2);
      neighbors.forEach((neighbor) => {
        if (neighbor.idx < i) return;
        linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[neighbor.idx].x, nodes[neighbor.idx].y, nodes[neighbor.idx].z);
        const seedValue = (i + neighbor.idx) / (nodes.length * 2);
        lineSeeds.push(seedValue, seedValue);
      });
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('aSeed', new THREE.Float32BufferAttribute(lineSeeds, 1));
    const lineMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uReveal: { value: 0 }, uColor: { value: green } },
      vertexShader: `
        attribute float aSeed;
        uniform float uReveal;
        varying float vSeed;
        varying float vReveal;
        void main() {
          vSeed = aSeed;
          vReveal = uReveal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uTime;
        varying float vSeed;
        varying float vReveal;
        void main() {
          float local = smoothstep(vSeed - 0.15, vSeed + 0.05, vReveal);
          float pulse = 0.55 + 0.45 * sin(uTime * 0.8 + vSeed * 12.0);
          gl_FragColor = vec4(uColor, local * pulse * 0.55);
        }
      `,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    root.add(lines);

    const nodePositions = new Float32Array(nodes.length * 3);
    const nodeSeeds = new Float32Array(nodes.length);
    nodes.forEach((node, i) => {
      nodePositions[i * 3] = node.x;
      nodePositions[i * 3 + 1] = node.y;
      nodePositions[i * 3 + 2] = node.z;
      nodeSeeds[i] = Math.random();
    });
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute('aSeed', new THREE.BufferAttribute(nodeSeeds, 1));
    const nodeMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uReveal: { value: 0 }, uColor: { value: greenDeep } },
      vertexShader: `
        attribute float aSeed;
        uniform float uTime;
        uniform float uReveal;
        varying float vSeed;
        varying float vReveal;
        void main() {
          vSeed = aSeed;
          vReveal = uReveal;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (4.0 + aSeed * 4.0) * uReveal * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uTime;
        varying float vSeed;
        varying float vReveal;
        void main() {
          float a = pow(smoothstep(0.5, 0.0, distance(gl_PointCoord, vec2(0.5))), 2.0);
          float pulse = 0.7 + 0.3 * sin(uTime * 1.2 + vSeed * 10.0);
          gl_FragColor = vec4(uColor, a * pulse * vReveal * 0.85);
        }
      `,
    });
    const nodeMesh = new THREE.Points(nodeGeo, nodeMat);
    root.add(nodeMesh);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouse.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    container.addEventListener('pointermove', onPointerMove);

    const onResize = () => {
      const nextWidth = container.clientWidth;
      const nextHeight = container.clientHeight;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    const stageDuration = 6.5;
    const total = stageDuration * 3;
    const tick = () => {
      const t = clock.getElapsedTime();
      const stageT = (t % total) / stageDuration;
      const origin = 1 - smoothClamp(stageT, 0.6, 1.4);
      const emerge = smoothClamp(stageT, 0.7, 1.4) * (1 - smoothClamp(stageT, 1.9, 2.6));
      const growth = smoothClamp(stageT, 1.9, 2.6);

      seed.scale.setScalar(1 + Math.sin(t * 1.4) * 0.06);
      seedMat.opacity = 0.85 + 0.15 * Math.sin(t * 1.4);
      haloMat.uniforms.uOpacity.value = 0.55 + origin * 0.45;
      halo.scale.setScalar(1 + Math.sin(t * 0.6) * 0.04);
      rings.forEach((ring) => {
        ring.material.uniforms.uProgress.value = (t * 0.25 + ring.offset) % 1;
        ring.material.uniforms.uOpacity.value = origin * 0.9 + 0.1;
      });
      particleMat.uniforms.uTime.value = t;
      particleMat.uniforms.uOpacity.value = 0.6 + origin * 0.4;
      lineMat.uniforms.uTime.value = t;
      lineMat.uniforms.uReveal.value = Math.min(1, emerge * 1.4 + growth);
      nodeMat.uniforms.uTime.value = t;
      nodeMat.uniforms.uReveal.value = growth;

      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      root.rotation.y = mouse.x * 0.18 + Math.sin(t * 0.1) * 0.05;
      root.rotation.x = -mouse.y * 0.12;
      camera.position.x = mouse.x * 0.3;
      camera.position.y = -mouse.y * 0.2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('pointermove', onPointerMove);
      renderer.dispose();
      seedGeo.dispose();
      seedMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      rings.forEach((ring) => {
        ring.mesh.geometry.dispose();
        ring.material.dispose();
      });
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="ss-hero-canvas" aria-hidden="true" />;
}

function StaticBackdrop() {
  const nodes = [[560, 280], [700, 200], [240, 540], [100, 620], [540, 500], [720, 560], [260, 320], [100, 280], [480, 320], [320, 480], [460, 460], [340, 340]];

  return (
    <div className="ss-static-backdrop" aria-hidden="true">
      <div className="ss-static-glow" />
      <svg className="ss-static-network" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="ssSeedGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.18 150)" stopOpacity="0.9" />
            <stop offset="60%" stopColor="oklch(0.65 0.15 150)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="oklch(0.65 0.15 150)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ssLineFade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.12 150)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.55 0.12 150)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="url(#ssLineFade)" fill="none" strokeWidth="0.6">
          <circle cx="400" cy="400" r="120" />
          <circle cx="400" cy="400" r="200" />
          <circle cx="400" cy="400" r="290" />
          <circle cx="400" cy="400" r="380" />
        </g>
        <g stroke="oklch(0.55 0.12 150 / 0.35)" fill="none" strokeWidth="0.7" strokeLinecap="round">
          <path d="M400 400 Q 480 320 560 280 T 700 200" />
          <path d="M400 400 Q 320 480 240 540 T 100 620" />
          <path d="M400 400 Q 460 460 540 500 T 720 560" />
          <path d="M400 400 Q 340 340 260 320 T 100 280" />
        </g>
        <g fill="oklch(0.55 0.14 150 / 0.7)">
          {nodes.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />)}
        </g>
        <circle cx="400" cy="400" r="80" fill="url(#ssSeedGlow)" />
        <circle cx="400" cy="400" r="3" fill="oklch(0.95 0.10 150)" />
      </svg>
    </div>
  );
}

export default function SeedlingHero() {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();
  const useCanvas = !isMobile && !reducedMotion;

  return (
    <section className="ss-hero">
      <div className="ss-dawn-wash" aria-hidden="true" />
      <div className="ss-aura" aria-hidden="true" />
      {useCanvas ? <SeedlingCanvas /> : <StaticBackdrop />}
      <div className="ss-vignette" aria-hidden="true" />

      <div className="ss-hero-foreground">
        <div className="ss-hero-copy">
          <p className="ss-kicker" style={{ animationDelay: '0.1s' }}>
            <span />
            Organic Intelligence
            <span />
          </p>
          <h1 className="ss-hero-title" style={{ animationDelay: '0.25s' }}>
            Grow Intelligence.
            <br />
            <em>Sustain Life.</em>
          </h1>
          <p className="ss-hero-lede" style={{ animationDelay: '0.5s' }}>
            Where knowledge, nature, and technology evolve together.
          </p>
          <div className="ss-hero-actions" style={{ animationDelay: '0.75s' }}>
            <a href="#story" className="ss-primary-action">
              <span>Begin the Journey</span>
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="ss-scroll-hint" aria-hidden="true">
        <div className="ss-scroll-hint-inner" style={{ animationDelay: '1.1s' }}>
          <span>Scroll</span>
          <span><span /></span>
        </div>
      </div>
    </section>
  );
}
