module.exports = {
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'off',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error'
  }
}
