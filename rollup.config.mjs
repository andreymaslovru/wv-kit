import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' assert { type: 'json' };
import preserveDirectives from 'rollup-preserve-directives'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
        preserveDirectives(),
    ]
  },
];