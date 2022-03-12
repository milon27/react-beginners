## instruction for vite react

```
npm create vite@latest .

npm install
npm run dev

```

## todo app

1. setup tailwind.

```

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

any css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```