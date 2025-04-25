import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const isProd = process.env.NODE_ENV === 'production';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-console': isProd ? 'warn' : 'off', // 開発時 off、本番前 warn
      '@next/next/no-css-tags': 'off',
    },
  },
];
// Prettierとの競合を防ぐ
eslintConfig.push(
  ...compat.extends('prettier') // これで eslint の不要な競合を回避
);
export default eslintConfig;
