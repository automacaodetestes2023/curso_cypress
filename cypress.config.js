const { defineConfig } = require("cypress")

module.exports = defineConfig({

  env: {
    urlBase: "https://buger-eats.vercel.app/"
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportTitle: 'Relatório de testes automatizados - Buger Eats',
    reportDir: './logs/',
    embeddedScreenshots: true,
    autoOpen: true,
  },

  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
