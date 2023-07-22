	const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
		on('before:browser:launch', (browser, launchOptions) => {launchOptions.preferences.isHeadless = false})
  }},
});
