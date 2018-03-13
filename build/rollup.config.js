import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sizes from 'rollup-plugin-sizes';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/leaflet-routing-machine.js',
    format: 'iife',
    name: 'LRM',
    globals: {
      'leaflet': 'L'
    }
  },
  plugins: [
    json({ preferConst: true }),
    resolve({ browser: true }),
    commonjs(),
    sizes()
  ],
  external: ['leaflet']
}
