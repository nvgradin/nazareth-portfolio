'use client';

import { useRef, useEffect } from 'react';

interface Props {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  evolutionSpeed?: number;
  glowIntensity?: number;
  maxIterations?: number;
  tunnelSize?: number;
  stepSize?: number;
  fractalScale?: number;
  fogDensity?: number;
  pixelRatio?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VERTEX_SHADER = `
attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform float uEvolutionSpeed;
uniform float uGlowIntensity;
uniform float uMaxIterations;
uniform vec3 uPrimaryColor;
uniform vec3 uSecondaryColor;
uniform vec3 uTertiaryColor;
uniform float uTunnelSize;
uniform float uStepSize;
uniform float uFractalScale;
uniform float uFogDensity;

void main() {
    vec2 I = gl_FragCoord.xy;
    vec4 O = vec4(0.0);
    float z = 0.0;
    float d = 0.0;
    float time = iTime * uEvolutionSpeed;

    for (float i = 0.0; i < 200.0; i++) {
        if (i >= uMaxIterations) break;

        vec3 p = z * normalize(
            vec3(I * 2.0, 0.0) - vec3(iResolution.x, iResolution.y, iResolution.y)
        );

        d = 1.0;
        for (int j = 0; j < 6; j++) {
            p += cos(p.yzx * d * uFractalScale + z * 0.2 + time) / d;
            d *= 1.43;
            if (d >= 9.0) break;
        }

        d = uStepSize + 0.1 * abs(uTunnelSize - length(p.xy));
        z += d;

        if (z > 50.0) break;

        float fog = uFogDensity / d;

        float t1 = sin(z * 0.5 + time) * 0.5 + 0.5;
        float t2 = cos(z * 0.3 + time * 0.7) * 0.5 + 0.5;
        vec3 color = mix(uPrimaryColor, uSecondaryColor, t1);
        color = mix(color, uTertiaryColor, t2);

        O += vec4(color * fog / uGlowIntensity, fog / uGlowIntensity);

        if (O.a > 0.95) break;
    }

    gl_FragColor = O;
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
    : [1, 1, 1];
}

export function NebulaShaderBg({
  // Paleta Silvia — tonos tierra dorada / ámbar oscuro
  primary = '#895900',
  secondary = '#C9A96E',
  tertiary = '#5C3A10',
  evolutionSpeed = 0.25,
  glowIntensity = 2800,
  maxIterations = 35,
  tunnelSize = 2.1,
  stepSize = 0.045,
  fractalScale = 0.7,
  fogDensity = 2,
  pixelRatio = 0.5,
  className,
  style,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const internalsRef = useRef<{
    gl: WebGLRenderingContext;
    uniforms: Record<string, WebGLUniformLocation | null>;
    startTime: number;
    rafId: number;
    isVisible: boolean;
  } | null>(null);

  // Init WebGL once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: false });
    if (!gl) return;

    function compileShader(source: string, type: number) {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(VERTEX_SHADER, gl.VERTEX_SHADER);
    const fs = compileShader(FRAGMENT_SHADER, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      iTime: gl.getUniformLocation(program, 'iTime'),
      iResolution: gl.getUniformLocation(program, 'iResolution'),
      uEvolutionSpeed: gl.getUniformLocation(program, 'uEvolutionSpeed'),
      uGlowIntensity: gl.getUniformLocation(program, 'uGlowIntensity'),
      uMaxIterations: gl.getUniformLocation(program, 'uMaxIterations'),
      uPrimaryColor: gl.getUniformLocation(program, 'uPrimaryColor'),
      uSecondaryColor: gl.getUniformLocation(program, 'uSecondaryColor'),
      uTertiaryColor: gl.getUniformLocation(program, 'uTertiaryColor'),
      uTunnelSize: gl.getUniformLocation(program, 'uTunnelSize'),
      uStepSize: gl.getUniformLocation(program, 'uStepSize'),
      uFractalScale: gl.getUniformLocation(program, 'uFractalScale'),
      uFogDensity: gl.getUniformLocation(program, 'uFogDensity'),
    };

    const startTime = performance.now() / 1000;
    internalsRef.current = { gl, uniforms, startTime, rafId: 0, isVisible: true };

    function render() {
      const int = internalsRef.current;
      if (!int || !int.isVisible) return;
      const t = performance.now() / 1000 - int.startTime;
      int.gl.uniform1f(int.uniforms.iTime, t);
      int.gl.drawArrays(int.gl.TRIANGLE_STRIP, 0, 4);
      int.rafId = requestAnimationFrame(render);
    }

    render();

    return () => {
      const int = internalsRef.current;
      if (int) {
        cancelAnimationFrame(int.rafId);
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.deleteBuffer(buffer);
        internalsRef.current = null;
      }
    };
  }, []);

  // Update uniforms when props change
  useEffect(() => {
    const int = internalsRef.current;
    if (!int) return;
    const { gl, uniforms } = int;
    gl.uniform1f(uniforms.uEvolutionSpeed, evolutionSpeed);
    gl.uniform1f(uniforms.uGlowIntensity, glowIntensity);
    gl.uniform1f(uniforms.uMaxIterations, maxIterations);
    gl.uniform1f(uniforms.uTunnelSize, tunnelSize);
    gl.uniform1f(uniforms.uStepSize, stepSize);
    gl.uniform1f(uniforms.uFractalScale, fractalScale);
    gl.uniform1f(uniforms.uFogDensity, fogDensity);
    const [r1, g1, b1] = hexToRgb(primary);
    const [r2, g2, b2] = hexToRgb(secondary);
    const [r3, g3, b3] = hexToRgb(tertiary);
    gl.uniform3f(uniforms.uPrimaryColor, r1, g1, b1);
    gl.uniform3f(uniforms.uSecondaryColor, r2, g2, b2);
    gl.uniform3f(uniforms.uTertiaryColor, r3, g3, b3);
  }, [primary, secondary, tertiary, evolutionSpeed, glowIntensity, maxIterations, tunnelSize, stepSize, fractalScale, fogDensity]);

  // Resize observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let rafId = 0;

    function updateSize() {
      const int = internalsRef.current;
      const canvas = canvasRef.current;
      if (!int || !canvas || !container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = w * pixelRatio;
      canvas.height = h * pixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      int.gl.viewport(0, 0, w * pixelRatio, h * pixelRatio);
      int.gl.uniform3f(int.uniforms.iResolution, w * pixelRatio, h * pixelRatio, 1);
    }

    updateSize();
    const observer = new ResizeObserver(() => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => { updateSize(); rafId = 0; });
    });
    observer.observe(container);
    return () => { observer.disconnect(); if (rafId) cancelAnimationFrame(rafId); };
  }, [pixelRatio]);

  // Pause when offscreen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(([entry]) => {
      const int = internalsRef.current;
      if (!int) return;
      int.isVisible = entry.isIntersecting;

      if (int.isVisible && !int.rafId) {
        function render() {
          const i = internalsRef.current;
          if (!i || !i.isVisible) return;
          const t = performance.now() / 1000 - i.startTime;
          i.gl.uniform1f(i.uniforms.iTime, t);
          i.gl.drawArrays(i.gl.TRIANGLE_STRIP, 0, 4);
          i.rafId = requestAnimationFrame(render);
        }
        render();
      } else if (!int.isVisible && int.rafId) {
        cancelAnimationFrame(int.rafId);
        int.rafId = 0;
      }
    }, { threshold: 0 });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#1a0e00', ...style }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
