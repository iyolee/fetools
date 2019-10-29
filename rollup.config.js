// 为了让rollup识别commonjs类型的包,默认只支持导入ES6
import commonjs from 'rollup-plugin-commonjs';
// 为了支持import xx from 'xxx'
import resolve from 'rollup-plugin-node-resolve';
// ts转js的编译器
import typescript from 'rollup-plugin-typescript';
// 支持加载json文件
import json from 'rollup-plugin-json';
// 支持字符串替换, 比如动态读取package.json的version到代码
import replace from 'rollup-plugin-replace';
// 读取package.json
import pkg from './package.json';
// 代码生成sourcemaps
// import sourceMaps from 'rollup-plugin-sourcemaps'
import { uglify } from 'rollup-plugin-uglify';

process.env.NODE_ENV = 'production';

// 代码头
const banner =`
  /*!
  * fetools v${pkg.version}
  * (c) 2019-${new Date().getFullYear()}
  * https://github.com/iyolee/fetools
  * Released under the MIT License.
  */
`

export default {
  input: ['./src/index.ts'],
  coverageDirectory: "./dist/ ./@types/fetools/",
  plugins: [
    replace({
      __VERSION__: pkg.version
    }),

    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript'),
    }),
    json(),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      exclude: 'node_modules/**'
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
    // sourceMaps()
  ],
  output:[
    {
      format: 'cjs',
      file: pkg.main,
      banner,
    },
    // {
    //   dir: 'dist/es',
    //   format: 'es',
    //   // file: pkg.module,
    //   banner,
    // },
    // {
    //   dir: resolve('dist/umd'),
    //   format: 'umd',
    //   // file: pkg.browser,
    //   banner,
    // }
  ]
};
