### React, Vite, Typescript, Eslint, Prettier, Tailwind Css

### 1. Cài đặt Prettier và Plugin ESLint

Cài đặt các gói cần thiết:

npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev

### 2. Cập nhật eslint.config.js

Cấu hình eslint.config.js để tích hợp Prettier và các quy tắc liên quan:

```js
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.FlatConfig[]} \*/
export default [
  {
    files: ['**/\*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Tích hợp Prettier
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // Tắt cảnh báo không cần thiết cho React (Vite tự động import React)
    },
  },
];
```

### 3. Tạo tệp cấu hình Prettier

Tạo tệp .prettierrc trong thư mục gốc và thêm nội dung:

```js
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "jsxSingleQuote": false
}
```

Ngoài ra, tạo tệp .prettierignore để loại trừ các tệp không cần định dạng:

```js
node_modules;
dist;
```

### 4. Cập nhật Scripts trong package.json

Thêm các lệnh để chạy ESLint và Prettier:

```js
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write ."
}
```

### 5. Chạy Kiểm Tra

• Kiểm tra lỗi ESLint:

```bash
npm run lint
npm run lint:fix
npm run format
```

### 6. Cài đặt hỗ trợ từ VS Code

• Cài Extension:
• ESLint
• Prettier - Code formatter
• Cấu hình Format on Save:
Thêm vào cài đặt VS Code:

"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"

Dự án của bạn bây giờ đã tích hợp thành công ESLint (với cấu hình flat), Prettier, và TypeScript. 🚀

### 7. Tailwind CSS

https://tailwindcss.com/docs/guides/vite
