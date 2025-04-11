module.exports = {
  darkMode: 'class', // 必须保持这个配置
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /grid-cols-[3-8]/ }
  ],
  corePlugins: {
    // 启用背景透明度
    backgroundOpacity: true,
  }
}