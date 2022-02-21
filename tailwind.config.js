module.exports = {
  content: ["./src/pages/*.tsx", "./src/components/*.tsx"],
  safelist: [
    {
      pattern: /to-(blue|gray|red)-(500|700)/,
    },
    {
      pattern: /from-(blue|gray|red)-(500|700)/,
    },

    {
      pattern: /bg-gradient-to-r/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
