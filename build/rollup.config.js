import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

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
    commonjs()
  ],
  external: ['leaflet']
}
