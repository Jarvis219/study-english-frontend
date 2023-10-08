module.exports = {
  '*.{astro,html,js,jsx,mdx,svelte,ts,tsx,vue}': [
    'prettier --write',
    'eslint --fix',
  ],
}
