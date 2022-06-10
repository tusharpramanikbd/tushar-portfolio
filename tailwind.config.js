module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'auto 1fr',
      },
    },
  },
  plugins: [require('daisyui')],
}
