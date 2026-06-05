# AGENTS.md

このファイルは、本プロジェクトで作業するエージェント向けの実装ガイドです。

## プロジェクト初期設定

- `npx create-next-app@latest . --typescript` でプロジェクト作成
- create-next-app 実行時は `App Router = Yes` を選択
- Next.js（App Router / `app/` ルーティング）を使用
- `next.config.ts` に `output: 'export'` を設定して運用

### 開発依存（devDependencies）

```bash
npm install --save-dev prettier
npm install --save-dev stylelint stylelint-config-standard-scss stylelint-scss
npm install --save-dev rimraf
npm install --save-dev cross-env
```

### SCSSビルドに必要な依存

- `sass` は実行時ビルドで必要になるため、`dependencies` に入れることを推奨
- もし常に devDependencies も含めてインストールされる運用なら `devDependencies` でも可

```bash
npm install sass
```

## コーディング規約

- SCSSファイルは SCSSコード専用
- SCSS側のクラス名・変数・ミックスインはケバブケースで記述
- TSXファイルは JSX / TSXコード専用
- TS / TSX側の識別子はキャメルケース / パスカルケースで記述

## Next.js App Router 開発ルール

- ページpropsの `params` は、使用中の Next.js バージョンの公式型定義に合わせる
- `params` はルートやバージョンにより通常オブジェクトまたは Promise になり得るため、どちらかを一律禁止しない
- `generateMetadata` は同期・非同期どちらでも可
- `generateStaticParams` は同期・非同期どちらでも可
- ただし、外部取得が不要な場合は同期関数を優先して実装する

## 依存バージョン管理

- Next.js のバージョンは固定する（`^` を付けない）
- `eslint-config-next` など Next.js と密結合な依存も同じメジャー・マイナーに揃える
- 公式型定義とのズレを避けるため、関連依存の更新はまとめて行う
