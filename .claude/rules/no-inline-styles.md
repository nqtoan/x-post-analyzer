---
paths:
  - "**/*.tsx"
  - "**/*.jsx"
  - "components/**/*"
  - "app/**/*"
---

# インラインスタイル禁止

## ルール

- `style={{ }}` 形式のインラインスタイルを使用しない
- 全てのスタイルは CSS Modules (`*.module.css`) で定義する
- コンポーネントには `className={styles.xxx}` を使用する

## 理由

- 型安全性の向上
- スタイルの再利用性
- CSS の整理と保守性
- ビルド時の最適化

## 正しい例

```tsx
// Component.tsx
import styles from "./Component.module.css";

<Text className={styles.scoreText}>{score}</Text>
```

```css
/* Component.module.css */
.scoreText {
  font-variant-numeric: tabular-nums;
  min-width: 60px;
  text-align: right;
}
```

## 禁止例

```tsx
// NG: インラインスタイル
<Text style={{ fontVariantNumeric: "tabular-nums" }}>{score}</Text>

// NG: style prop
<Button style={{ backgroundColor: "#1DA1F2" }}>Tweet</Button>
```
