'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec2 uResolution;

// ── Hash & noise ───────────────────────────────────────────────
float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1,0)), u.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
    u.y
  );
}

// Smooth radial blob — soft gaussian-like falloff
float blob(vec2 uv, vec2 center, float radius) {
  float d = length(uv - center);
  return smoothstep(radius, 0.0, d);
}

// Film grain
float grain(vec2 uv, float t) {
  vec2 p = floor(uv * uResolution * 0.5);
  return hash(p + fract(t * 13.7));
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  vec2 st = vec2(uv.x * aspect, uv.y);

  float t = uTime * 0.018; // very slow drift

  // ── Base: deep black-brown ─────────────────────────────────
  vec3 base = vec3(0.055, 0.020, 0.010); // ~#0E0503

  // ── Blob 1: large terracota, top-left drifting ─────────────
  vec2 c1 = vec2(
    0.25 * aspect + sin(t * 0.7) * 0.12 * aspect,
    0.72 + cos(t * 0.5) * 0.10
  );
  float b1 = blob(st, c1, 0.65 * aspect);
  vec3 col1 = vec3(0.600, 0.180, 0.060); // #99300F deep terracota

  // ── Blob 2: sienna, center-right ───────────────────────────
  vec2 c2 = vec2(
    0.65 * aspect + cos(t * 0.6 + 1.2) * 0.15 * aspect,
    0.35 + sin(t * 0.8 + 0.5) * 0.12
  );
  float b2 = blob(st, c2, 0.50 * aspect);
  vec3 col2 = vec3(0.500, 0.130, 0.040); // #801F0A

  // ── Blob 3: warm highlight, bottom-right ───────────────────
  vec2 c3 = vec2(
    0.78 * aspect + sin(t * 0.4 + 2.3) * 0.10 * aspect,
    0.18 + cos(t * 0.6 + 1.8) * 0.08
  );
  float b3 = blob(st, c3, 0.35 * aspect);
  vec3 col3 = vec3(0.720, 0.280, 0.090); // #B7481700

  // ── Blend blobs onto base ──────────────────────────────────
  vec3 color = base;
  color = mix(color, col1, b1 * 0.85);
  color = mix(color, col2, b2 * 0.70);
  color = mix(color, col3, b3 * 0.60);

  // ── Soft noise texture — breaks up perfect gradients ───────
  float n = noise(st * 1.8 + t * 0.3);
  color += n * 0.04 - 0.02;

  // ── Film grain ─────────────────────────────────────────────
  float g = grain(uv, uTime);
  color += (g - 0.5) * 0.055;

  // ── Vignette — heavy, like the reference ───────────────────
  vec2 vig = uv * 2.0 - 1.0;
  vig.x *= aspect / (uResolution.x / uResolution.y); // correct aspect
  float vignette = 1.0 - dot(vig * vec2(0.75, 0.9), vig * vec2(0.75, 0.9));
  vignette = clamp(vignette, 0.0, 1.0);
  vignette = pow(vignette, 1.4);
  color *= vignette;

  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export default function AnimatedBackgroundStory({ style, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Scene — single full-screen quad
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geo = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(canvas.clientWidth, canvas.clientHeight) },
    };

    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
    });

    scene.add(new THREE.Mesh(geo, mat));

    // Resize
    const onResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    // Animate
    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      mat.dispose();
      geo.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        ...style,
      }}
    />
  );
}
