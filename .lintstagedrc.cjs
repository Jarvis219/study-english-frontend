module.exports = {
  '*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}': [
    'prettier --write',
    'eslint --fix',
  ],
}
