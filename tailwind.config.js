module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'gold': '#EDB50F',
      'mobile': '#24292f',
      'other': '#2596be',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui','Roboto', 'Arial','Helvetica neue','Noto sans','Segoe UI'],
        'serif': ['ui-serif', 'Georgia', 'robot'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
        'Rampart': ["Rampart One", "cursive"],
        'Robotto': ["Robotto"],
        'Nunito': ['Nunito'],
        'Poppins':['Poppins'],
      }
    },
  },
  plugins: [require("daisyui")],
}
