import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';
import flow from 'rollup-plugin-flow';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.js',
  output: [
    {
      format: 'cjs',
      file: pkg.main,
    },
    {
      format: 'es',
      file: pkg.module,
    },
  ],
  plugins: [resolve({ extensions }), babel({ exclude: './node_modules/**', extensions }), flow(), peerDepsExternal()],
};
