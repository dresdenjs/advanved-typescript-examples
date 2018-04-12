import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
    // only use serve + livereload for dev
    process.env.NODE_ENV !== 'production' ? serve() : () => true,
    process.env.NODE_ENV !== 'production' ? livereload('dist') : () => true,
    // uglify for production
    process.env.NODE_ENV === 'production' ? uglify({}, minify) : () => true
  ]
};
