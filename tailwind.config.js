module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: '500px 1fr',
      },
    },
  },
  plugins: [require('daisyui')],
}
