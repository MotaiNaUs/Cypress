	const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
		// on('before:browser:launch', (browser, launchOptions) => {
    //   console.log(launchOptions.preferences);
    //   launchOptions.preferences.browser.isHeadless = false;
    //   console.log(launchOptions.preferences);})
  }},
});
