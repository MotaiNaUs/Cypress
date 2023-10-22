	const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    embeddedScreenshots:true,
  },
  e2e: {
    video:false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
		// on('before:browser:launch', (browser, launchOptions) => {
    //   console.log(launchOptions.preferences);
    //   launchOptions.preferences.browser.isHeadless = false;
    //   console.log(launchOptions.preferences);})
  }},
});
