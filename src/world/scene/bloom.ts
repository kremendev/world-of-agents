/*
 * The bloom as three.js r160 made it, so the Forge Keep keeps the glow of the town Dima approved (v4.0.0, 4a). The render
 * comparison against the town showed a different halo around every glowing thing (the furnace mouth, the lanterns), and
 * three 0.187's UnrealBloomPass differs from r160's in exactly four ways (its setSize, render, factors and tints are
 * unchanged; r160's source diffed against 0.187's, comments aside):
 *   1. the blur: 0.187 uses a true Gaussian (kernels of 6 to 22 taps, sigma a third of each, taps paired into bilinear
 *      fetches); r160 used kernels of 3 to 11 taps with sigma equal to the kernel, normalised: nearly a box.
 *   2. the bright pass: 0.187 weighs brightness with luminance() (Rec. 709); r160 with 0.299, 0.587, 0.114.
 *   3. the composite: 0.187 writes 3 times the weighted mips, its alpha their brightest channel; r160 wrote the weighted
 *      mips with an alpha of its strength times the five factors (1.26 here), the blur's alpha being 1.
 *   4. the blend: 0.187 adds the glow with premultiplied alpha (ONE, ONE); r160 with (SRC_ALPHA, ONE), so its glow is
 *      the composite times that alpha. 3 and 4 go together: r160's blend over 0.187's composite multiplies the glow by
 *      its own brightness, which keeps the cores and drops the faint wide halo (the tavern's lights, measured).
 * Each is put back here. Moving to 0.187's bloom is a look change, his to decide.
 *
 * The shaders and coefficients below are three.js r160's, examples/jsm/postprocessing/UnrealBloomPass.js
 * (getSeperableBlurMaterial) and examples/jsm/shaders/LuminosityHighPassShader.js. three.js is MIT licensed,
 * Copyright (c) 2010-2023 three.js authors, https://github.com/mrdoob/three.js/blob/r160/LICENSE
 */
import * as THREE from 'three';
import type { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

/** r160's kernel sizes, one per mip. */
const R160_KERNELS = [3, 5, 7, 9, 11] as const;

function r160BlurMaterial(kernelRadius: number): THREE.ShaderMaterial {
  const coefficients: number[] = [];
  for (let i = 0; i < kernelRadius; i++)
    coefficients.push((0.39894 * Math.exp((-0.5 * i * i) / (kernelRadius * kernelRadius))) / kernelRadius);
  return new THREE.ShaderMaterial({
    defines: { KERNEL_RADIUS: kernelRadius },
    uniforms: {
      colorTexture: { value: null },
      invSize: { value: new THREE.Vector2(0.5, 0.5) }, // inverse texture size
      direction: { value: new THREE.Vector2(0.5, 0.5) },
      gaussianCoefficients: { value: coefficients }, // precomputed Gaussian coefficients
    },
    vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
    fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`,
  });
}

/** r160's bright pass: the same uniforms as 0.187's, brightness weighed 0.299, 0.587, 0.114. */
const R160_HIGH_PASS = /* glsl */ `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`;

/** r160's composite: the same uniforms as 0.187's, the mips weighed into rgb and alpha alike. */
const R160_COMPOSITE = `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`;

/**
 * Makes a 0.187 bloom pass draw as r160's did: its blur materials, its bright pass, its composite and its blend. Call it
 * before the pass's setSize, which sets each blur material's invSize; the pass sets colorTexture and direction on
 * whichever blur material it holds, by those same names.
 */
export function applyTownBloom(bloom: UnrealBloomPass): void {
  bloom.separableBlurMaterials.forEach((m, i) => {
    m.dispose();
    bloom.separableBlurMaterials[i] = r160BlurMaterial(R160_KERNELS[i] ?? 3);
  });
  bloom.materialHighPassFilter.fragmentShader = R160_HIGH_PASS;
  bloom.materialHighPassFilter.needsUpdate = true;
  bloom.compositeMaterial.fragmentShader = R160_COMPOSITE;
  bloom.compositeMaterial.needsUpdate = true;
  bloom.blendMaterial.premultipliedAlpha = false;
  bloom.blendMaterial.needsUpdate = true;
}
