precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D uTex;  // The entire canvas texture
uniform vec2 uResolution;
uniform vec2 noise;
uniform float frame;
uniform float IT;
uniform float effectTime;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123) - 0.5;
}

void main() {
  
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  
  // Offset for RGB shift
  
  vec2 offsetSeed = vec2(frame, 0.0);
  
  float offset = random(offsetSeed) * 0.01 * IT;
  
  vec2 offsetR = vec2(noise.x * 0.1 * IT + offset, 0.0);
  vec2 offsetB = vec2(noise.y * 0.1 * IT + offset, 0.0);
  
  uv.x +=(
    random(floor(uv * 9.58832029) + frame) / 50.0 * IT 
    - random(floor(uv * 23.23947528) + frame) / 80.0 * IT 
    + random(floor(uv * 294.3851046) + frame) / 400.0 * IT
    - random(floor(uv * 689.2109734 * IT) + frame / 2.0) / 500.0 * IT
    );

  // Sample the texture for RGB channels
  
  vec3 color;
  
  color.r = texture2D(uTex, uv + offset + offsetR).r;  // Red shift
  color.g = texture2D(uTex, uv).g;           // Green remains
  color.b = texture2D(uTex, uv + offset - offsetB).b;  // Blue shift

  // Combine shifted channels
  
  if (effectTime > 0.0) {
    color *= max(1.0, 3.0 - effectTime / 1000.0);
  }
  
  gl_FragColor = vec4(color, 1.0);
}
